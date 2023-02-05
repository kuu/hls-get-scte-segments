# hls-get-scte-segments
Utility for parsing .m3u8 and extract information about CUE-OUT/CUE-IN segments

## Usage
### For the manifests where a SCTE35 message is expressed as EXT-X-DATERANGE tags
```js
import {getScteSegments} from 'hls-get-scte-segments';


const playlistText = `
#EXTM3U
#EXT-X-VERSION:3
#EXT-X-TARGETDURATION:7
#EXT-X-MEDIA-SEQUENCE:103090
#EXT-X-PROGRAM-DATE-TIME:2023-01-31T06:28:47.759Z
#EXTINF:5.572,
manifest_1_103090.ts
#EXT-X-DATERANGE:ID="198",START-DATE="2023-01-31T06:28:53.331Z",PLANNED-DURATION=22.087,SCTE35-OUT=0xFC302500000003289800FFF01405000000C67FEFFECA4EF5BDFE010BC8DC0EAC000000002B9AD333
#EXT-X-PROGRAM-DATE-TIME:2023-01-31T06:28:53.331Z
#EXTINF:4.438,
manifest_1_103091.ts
#EXT-X-PROGRAM-DATE-TIME:2023-01-31T06:28:57.769Z
#EXTINF:6.006,
manifest_1_103092.ts
#EXT-X-PROGRAM-DATE-TIME:2023-01-31T06:29:03.775Z
#EXTINF:6.006,
manifest_1_103093.ts
#EXT-X-PROGRAM-DATE-TIME:2023-01-31T06:29:09.781Z
#EXTINF:5.639,
manifest_1_103094.ts
#EXT-X-DATERANGE:ID="198",START-DATE="2023-01-31T06:28:53.331Z",END-DATE="2023-01-31T06:29:08.146Z",DURATION=22.089
#EXT-X-PROGRAM-DATE-TIME:2023-01-31T06:29:15.420Z
#EXTINF:5.639,
manifest_1_103095.ts
#EXT-X-PROGRAM-DATE-TIME:2023-01-31T06:29:21.059Z
#EXTINF:6.006,
manifest_1_103096.ts
`;

const scteSegments = getScteSegments(playlistText);
// List the URLs of CUE-OUT/CUE-IN segments
for (const segment of scteSegments) {
  // segment is a Segment object parsed by hls-parser (See https://github.com/kuu/hls-parser)
  console.log(`${getSuffix(segment)}${segment.uri}`);
}
// manifest_1_103091.ts => CUE-OUT
// manifest_1_103095.ts => CUE-IN
  

// You can also get adjacent N segments
const scteSegments = getScteSegments(playlistText, {adjacentSegments: 1});

for (const segment of scteSegments) {
  console.log(`${getPrefix(segment)}${segment.uri}`);
}
// manifest_1_103090.ts 
// manifest_1_103091.ts => CUE-OUT
// manifest_1_103092.ts
// manifest_1_103094.ts
// manifest_1_103095.ts => CUE-IN duration=22.089
// manifest_1_103096.ts

// You can also get all the in-between segments
const scteSegments = getScteSegments(playlistText, {hollow: false});

for (const segment of scteSegments) {
  console.log(`${getPrefix(segment)}${segment.uri}`);
}
// manifest_1_103091.ts => CUE-OUT
// manifest_1_103092.ts
// manifest_1_103093.ts
// manifest_1_103094.ts
// manifest_1_103095.ts => CUE-IN duration=22.089

function getSuffix({dateRange}) {
  if (!dateRange) {
    return '';
  }
  return ` => ${dateRange.end ? 'CUE-IN duration=' + dateRange.duration : 'CUE-OUT'}`;
}

```

### For the manifests where a SCTE35 message is expressed as EXT-X-CUE-OUT/IN tags
```js
import {getScteSegments} from 'hls-get-scte-segments';


const playlistText = `
#EXTM3U
#EXT-X-VERSION:3
#EXT-X-TARGETDURATION:7
#EXT-X-MEDIA-SEQUENCE:103090
#EXT-X-PROGRAM-DATE-TIME:2023-01-31T06:28:47.759Z
#EXTINF:5.572,
manifest_1_103090.ts
#EXT-OATCLS-SCTE35:/DAlAAFuu/s2AP/wFAUAAAACf+/+LEknYf4AKTGxAAEBAQAASvVJ6w==
#EXT-X-CUE-OUT:22.087
#EXT-X-PROGRAM-DATE-TIME:2023-01-31T06:28:53.331Z
#EXTINF:4.438,
manifest_1_103091.ts
#EXT-X-CUE-OUT-CONT:ElapsedTime=4.438,Duration=22.087,SCTE35=/DAlAAFuu/s2AP/wFAUAAAACf+/+LEknYf4AKTGxAAEBAQAASvVJ6w==
#EXT-X-PROGRAM-DATE-TIME:2023-01-31T06:28:57.769Z
#EXTINF:6.006,
manifest_1_103092.ts
#EXT-X-CUE-OUT-CONT:ElapsedTime=10.444,Duration=22.087,SCTE35=/DAlAAFuu/s2AP/wFAUAAAACf+/+LEknYf4AKTGxAAEBAQAASvVJ6w==
#EXT-X-PROGRAM-DATE-TIME:2023-01-31T06:29:03.775Z
#EXTINF:6.006,
manifest_1_103093.ts
#EXT-X-CUE-OUT-CONT:ElapsedTime=16.450,Duration=22.087,SCTE35=/DAlAAFuu/s2AP/wFAUAAAACf+/+LEknYf4AKTGxAAEBAQAASvVJ6w==
#EXT-X-PROGRAM-DATE-TIME:2023-01-31T06:29:09.781Z
#EXTINF:5.639,
manifest_1_103094.ts
#EXT-X-CUE-IN
#EXT-X-PROGRAM-DATE-TIME:2023-01-31T06:29:15.420Z
#EXTINF:5.639,
manifest_1_103095.ts
#EXT-X-PROGRAM-DATE-TIME:2023-01-31T06:29:21.059Z
#EXTINF:6.006,
manifest_1_103096.ts
`;

const scteSegments = getScteSegments(playlistText);
// List the URLs of CUE-OUT/CUE-IN segments
for (const segment of scteSegments) {
  // segment is a Segment object parsed by hls-parser (See https://github.com/kuu/hls-parser)
  console.log(`${getSuffix(segment)}${segment.uri}`);
}
// manifest_1_103091.ts => CUE-OUT
// manifest_1_103095.ts => CUE-IN
  

// You can also get adjacent N segments
const scteSegments = getScteSegments(playlistText, {adjacentSegments: 1});

for (const segment of scteSegments) {
  console.log(`${getPrefix(segment)}${segment.uri}`);
}
// manifest_1_103090.ts 
// manifest_1_103091.ts => CUE-OUT duration=22.087
// manifest_1_103092.ts
// manifest_1_103094.ts
// manifest_1_103095.ts => CUE-IN
// manifest_1_103096.ts

// You can also get all the in-between segments
const scteSegments = getScteSegments(playlistText, {hollow: false});

for (const segment of scteSegments) {
  console.log(`${getPrefix(segment)}${segment.uri}`);
}
// manifest_1_103091.ts => CUE-OUT duration=22.087
// manifest_1_103092.ts
// manifest_1_103093.ts
// manifest_1_103094.ts
// manifest_1_103095.ts => CUE-IN

function getSuffix({markers}) {
  for (const marker of markers) {
    if (marker.type === 'OUT') {
      return `CUE-OUT duration=${marker.duration}`;
    } else if (marker.type === 'IN') {
      return 'CUE-IN';
    }
  }
  return '';
}

```

## API

### `getScteSegments(playlist[, options])`
Extracts CUE-OUT/CUE-IN segments from playlist

#### params
| Name     | Type   | Required | Default | Description   |
| -------- | ------ | -------- | ------- | ------------- |
| playlist | string | Yes      | N/A     | A text data of an [HLS media playlist](https://datatracker.ietf.org/doc/html/draft-pantos-hls-rfc8216bis#section-4.1) |

#### return value
An array of instances of `Segment` (See [hls-parser](https://github.com/kuu/hls-parser/blob/master/README.md#data-format))