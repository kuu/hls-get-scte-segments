import HLS from 'hls-parser';

function extractSegments(segments, start, end, cueOut, hollow, adjacentSegments) {
  if (!cueOut) {
    if (end === segments.length) {
      // No ad markers found
      if (hollow) {
        return [];
      }

      return segments.slice(start, end);
    }

    // Only CUE-IN found
    if (hollow) {
      start = end;
    }
  } else if (end === segments.length) {
    // Only CUE-OUT found
    if (hollow) {
      end = start;
    } else {
      end--;
    }
  }

  // console.log(`hollow = ${hollow}, adjacentSegments = ${adjacentSegments}`);
  // console.log(`start = ${start}, end = ${end}, cueOut = ${cueOut}`);
  const outerStart = Math.max(start - adjacentSegments, 0);
  const outerEnd = Math.min(end + adjacentSegments + 1, segments.length);
  if (!hollow) {
    // console.log(`outerStart=${outerStart}, outerEnd = ${outerEnd}`);
    return segments.slice(outerStart, outerEnd);
  }

  const innerEnd = Math.min(start + adjacentSegments + 1, end + 1, segments.length);
  const innerStart = Math.max(end - adjacentSegments, start, innerEnd);
  // console.log(`outerStart=${outerStart} innerEnd=${innerEnd}, innerStart=${innerStart}, outerEnd = ${outerEnd}`);
  return segments.slice(outerStart, innerEnd).concat(segments.slice(innerStart, outerEnd));
}

export function getScteSegments(playlistText, options) {
  // console.log('---');
  // console.log(playlistText);
  // console.log('---');
  const {hollow, adjacentSegments} = {hollow: true, adjacentSegments: 0, ...options};
  const {segments} = HLS.parse(playlistText);
  let start = 0;
  let list = [];
  let cueOut = false;
  for (const [i, {dateRange, markers}] of segments.entries()) {
    if (dateRange) {
      if (dateRange.end) {
        // CUE-IN
        list = [...list, ...extractSegments(segments, start, i, cueOut, hollow, adjacentSegments)];
        cueOut = false;
        start = i + 1;
      } else {
        // CUE-OUT
        cueOut = true;
        start = i;
      }
    }

    for (const marker of markers) {
      if (marker.type === 'IN') {
        // CUE-IN
        list = [...list, ...extractSegments(segments, start, i, cueOut, hollow, adjacentSegments)];
        cueOut = false;
        start = i + 1;
        break;
      }

      if (marker.type === 'OUT') {
        // CUE-OUT
        cueOut = true;
        start = i;
        break;
      }
    }
  }

  if (cueOut || list.length === 0) {
    list = [...list, ...extractSegments(segments, start, segments.length, cueOut, hollow, adjacentSegments)];
  }

  return list;
}
