import HLS from 'hls-parser';

function extractSegments(segments, start, end, hollow, adjacentSegments) {
  // console.log(`start = ${start}, end = ${end}, hollow = ${hollow}, adjacentSegments = ${adjacentSegments}`);
  if (start === -1 && end === segments.length) {
    // console.log('CUE-OUT: no, CUE-IN: no');
    if (hollow) {
      return [];
    }

    return segments.slice(0, segments.length);
  }

  if (end === segments.length) {
    // console.log('CUE-OUT: yes, CUE-IN: no');
    end = hollow ? start : segments.length - 1;
  } else if (start === -1) {
    // console.log('CUE-OUT: no, CUE-IN: yes');
    start = hollow ? end : 0;
  }

  const outerStart = Math.max(start - adjacentSegments, 0);
  const outerEnd = Math.min(end + adjacentSegments + 1, segments.length);
  if (!hollow) {
    // console.log(`outerStart=${outerStart}, outerEnd = ${outerEnd}`);
    return segments.slice(outerStart, outerEnd);
  }

  const innerEnd = Math.min(start + adjacentSegments + 1, end, segments.length);
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
  let start = -1;
  for (const [i, {dateRange, markers}] of segments.entries()) {
    if (dateRange) {
      if (dateRange.end) {
        // CUE-IN
        return extractSegments(segments, start, i, hollow, adjacentSegments);
      }

      // CUE-OUT
      start = i;
    }

    for (const marker of markers) {
      if (marker.type === 'IN') {
        // CUE-IN
        return extractSegments(segments, start, i, hollow, adjacentSegments);
      }

      if (marker.type === 'OUT') {
        // CUE-OUT
        start = i;
        break;
      }
    }
  }

  return extractSegments(segments, start, segments.length, hollow, adjacentSegments);
}
