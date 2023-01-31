# hls-get-scte-segments
Utility for parsing .m3u8 and extract information about CUE-OUT/CUE-IN segments

## Usage
```js
import {getScteSegments} from 'hls-get-scte-segments';

const response = await fetch('https://{your-hls-server}/index.m3u8');
const scteSegments = getScteSegments(await response.text());
// List the URLs of CUE-OUT/CUE-IN segments
for (const segment of scteSegments) {
  console.log(segment.uri);
}
```

## API
