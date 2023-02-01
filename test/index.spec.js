import test from 'ava';
import {getScteSegments as getSegments} from '../index.js';
import {
  patternA1, patternA2, patternA3,
  patternB1, patternB2, patternB3,
  patternC1, patternC2, patternC3,
  patternD1, patternD2, patternD3,
  patternE,
  patternF1, patternF2, patternF3,
} from './helpers/fixture.js';

test('dateRangeA1-0', t => {
  const entries = getSegments(patternA1);
  t.is(entries.length, 2);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].dateRange.duration, 194.995);
  t.truthy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeA1-1', t => {
  const entries = getSegments(patternA1, {adjacentSegments: 1});
  t.is(entries.length, 6);
  t.is(entries[0].uri, 'manifest_1_103090.ts?m=1674535952');
  t.is(entries[1].dateRange.id, '198');
  t.falsy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[4].dateRange.duration, 194.995);
  t.truthy(entries[4].dateRange.end);
  t.is(entries[4].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[5].uri, 'manifest_1_103125.ts?m=1674535952');
});

test('dateRangeA1-2', t => {
  const entries = getSegments(patternA1, {adjacentSegments: 2});
  t.is(entries.length, 10);
  t.is(entries[0].uri, 'manifest_1_103089.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103090.ts?m=1674535952');
  t.is(entries[2].dateRange.id, '198');
  t.falsy(entries[2].dateRange.end);
  t.is(entries[2].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[4].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[5].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[6].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[7].dateRange.duration, 194.995);
  t.truthy(entries[7].dateRange.end);
  t.is(entries[7].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[8].uri, 'manifest_1_103125.ts?m=1674535952');
  t.is(entries[9].uri, 'manifest_1_103126.ts?m=1674535952');
});

test('dateRangeA1-full-0', t => {
  const entries = getSegments(patternA1, {hollow: false, adjacentSegments: 0});
  t.is(entries.length, 6);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[4].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[5].dateRange.duration, 194.995);
  t.truthy(entries[5].dateRange.end);
  t.is(entries[5].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeA1-full-1', t => {
  const entries = getSegments(patternA1, {hollow: false, adjacentSegments: 1});
  t.is(entries.length, 8);
  t.is(entries[0].uri, 'manifest_1_103090.ts?m=1674535952');
  t.is(entries[1].dateRange.id, '198');
  t.falsy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[4].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[5].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[6].dateRange.duration, 194.995);
  t.truthy(entries[6].dateRange.end);
  t.is(entries[6].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[7].uri, 'manifest_1_103125.ts?m=1674535952');
});

test('dateRangeA1-full-2', t => {
  const entries = getSegments(patternA1, {hollow: false, adjacentSegments: 2});
  t.is(entries.length, 10);
  t.is(entries[0].uri, 'manifest_1_103089.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103090.ts?m=1674535952');
  t.is(entries[2].dateRange.id, '198');
  t.falsy(entries[2].dateRange.end);
  t.is(entries[2].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[4].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[5].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[6].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[7].dateRange.duration, 194.995);
  t.truthy(entries[7].dateRange.end);
  t.is(entries[7].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[8].uri, 'manifest_1_103125.ts?m=1674535952');
  t.is(entries[9].uri, 'manifest_1_103126.ts?m=1674535952');
});

test('dateRangeA2-0', t => {
  const entries = getSegments(patternA2);
  t.is(entries.length, 2);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].dateRange.duration, 194.995);
  t.truthy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeA2-1', t => {
  const entries = getSegments(patternA2, {adjacentSegments: 1});
  t.is(entries.length, 6);
  t.is(entries[0].uri, 'manifest_1_103090.ts?m=1674535952');
  t.is(entries[1].dateRange.id, '198');
  t.falsy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[4].dateRange.duration, 194.995);
  t.truthy(entries[4].dateRange.end);
  t.is(entries[4].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[5].uri, 'manifest_1_103125.ts?m=1674535952');
});

test('dateRangeA2-2', t => {
  const entries = getSegments(patternA2, {adjacentSegments: 2});
  t.is(entries.length, 8);
  t.is(entries[0].uri, 'manifest_1_103090.ts?m=1674535952');
  t.is(entries[1].dateRange.id, '198');
  t.falsy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[4].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[5].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[6].dateRange.duration, 194.995);
  t.truthy(entries[6].dateRange.end);
  t.is(entries[6].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[7].uri, 'manifest_1_103125.ts?m=1674535952');
});

test('dateRangeA2-full-0', t => {
  const entries = getSegments(patternA2, {hollow: false, adjacentSegments: 0});
  t.is(entries.length, 6);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[4].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[5].dateRange.duration, 194.995);
  t.truthy(entries[5].dateRange.end);
  t.is(entries[5].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeA2-full-1', t => {
  const entries = getSegments(patternA2, {hollow: false, adjacentSegments: 1});
  t.is(entries.length, 8);
  t.is(entries[0].uri, 'manifest_1_103090.ts?m=1674535952');
  t.is(entries[1].dateRange.id, '198');
  t.falsy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[4].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[5].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[6].dateRange.duration, 194.995);
  t.truthy(entries[6].dateRange.end);
  t.is(entries[6].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[7].uri, 'manifest_1_103125.ts?m=1674535952');
});

test('dateRangeA2-full-2', t => {
  const entries = getSegments(patternA2, {hollow: false, adjacentSegments: 2});
  t.is(entries.length, 8);
  t.is(entries[0].uri, 'manifest_1_103090.ts?m=1674535952');
  t.is(entries[1].dateRange.id, '198');
  t.falsy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[4].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[5].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[6].dateRange.duration, 194.995);
  t.truthy(entries[6].dateRange.end);
  t.is(entries[6].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[7].uri, 'manifest_1_103125.ts?m=1674535952');
});

test('dateRangeA3-0', t => {
  const entries = getSegments(patternA3);
  t.is(entries.length, 2);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].dateRange.duration, 194.995);
  t.truthy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeA3-1', t => {
  const entries = getSegments(patternA3, {adjacentSegments: 1});
  t.is(entries.length, 4);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[3].dateRange.duration, 194.995);
  t.truthy(entries[3].dateRange.end);
  t.is(entries[3].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeA3-2', t => {
  const entries = getSegments(patternA3, {adjacentSegments: 2});
  t.is(entries.length, 6);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[4].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[5].dateRange.duration, 194.995);
  t.truthy(entries[5].dateRange.end);
  t.is(entries[5].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeA3-full-0', t => {
  const entries = getSegments(patternA3, {hollow: false, adjacentSegments: 0});
  t.is(entries.length, 6);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[4].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[5].dateRange.duration, 194.995);
  t.truthy(entries[5].dateRange.end);
  t.is(entries[5].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeA3-full-1', t => {
  const entries = getSegments(patternA3, {hollow: false, adjacentSegments: 1});
  t.is(entries.length, 6);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[4].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[5].dateRange.duration, 194.995);
  t.truthy(entries[5].dateRange.end);
  t.is(entries[5].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeA3-full-2', t => {
  const entries = getSegments(patternA3, {hollow: false, adjacentSegments: 2});
  t.is(entries.length, 6);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[4].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[5].dateRange.duration, 194.995);
  t.truthy(entries[5].dateRange.end);
  t.is(entries[5].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeB1-0', t => {
  const entries = getSegments(patternB1);
  t.is(entries.length, 1);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
});

test('dateRangeB1-1', t => {
  const entries = getSegments(patternB1, {adjacentSegments: 1});
  t.is(entries.length, 3);
  t.is(entries[0].uri, 'manifest_1_103090.ts?m=1674535952');
  t.is(entries[1].dateRange.id, '198');
  t.falsy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103092.ts?m=1674535952');
});

test('dateRangeB1-2', t => {
  const entries = getSegments(patternB1, {adjacentSegments: 2});
  t.is(entries.length, 5);
  t.is(entries[0].uri, 'manifest_1_103089.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103090.ts?m=1674535952');
  t.is(entries[2].dateRange.id, '198');
  t.falsy(entries[2].dateRange.end);
  t.is(entries[2].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[4].uri, 'manifest_1_103121.ts?m=1674535952');
});

test('dateRangeB1-full-0', t => {
  const entries = getSegments(patternB1, {hollow: false, adjacentSegments: 0});
  t.is(entries.length, 5);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[4].uri, 'manifest_1_103123.ts?m=1674535952');
});

test('dateRangeB1-full-1', t => {
  const entries = getSegments(patternB1, {hollow: false, adjacentSegments: 1});
  t.is(entries.length, 6);
  t.is(entries[0].uri, 'manifest_1_103090.ts?m=1674535952');
  t.is(entries[1].dateRange.id, '198');
  t.falsy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[4].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[5].uri, 'manifest_1_103123.ts?m=1674535952');
});

test('dateRangeB1-full-2', t => {
  const entries = getSegments(patternB1, {hollow: false, adjacentSegments: 2});
  t.is(entries.length, 7);
  t.is(entries[0].uri, 'manifest_1_103089.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103090.ts?m=1674535952');
  t.is(entries[2].dateRange.id, '198');
  t.falsy(entries[2].dateRange.end);
  t.is(entries[2].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[4].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[5].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[6].uri, 'manifest_1_103123.ts?m=1674535952');
});

test('dateRangeB2-0', t => {
  const entries = getSegments(patternB2);
  t.is(entries.length, 1);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
});

test('dateRangeB2-1', t => {
  const entries = getSegments(patternB2, {adjacentSegments: 1});
  t.is(entries.length, 3);
  t.is(entries[0].uri, 'manifest_1_103090.ts?m=1674535952');
  t.is(entries[1].dateRange.id, '198');
  t.falsy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103092.ts?m=1674535952');
});

test('dateRangeB2-2', t => {
  const entries = getSegments(patternB2, {adjacentSegments: 2});
  t.is(entries.length, 4);
  t.is(entries[0].uri, 'manifest_1_103090.ts?m=1674535952');
  t.is(entries[1].dateRange.id, '198');
  t.falsy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103121.ts?m=1674535952');
});

test('dateRangeB2-full-0', t => {
  const entries = getSegments(patternB2, {hollow: false, adjacentSegments: 0});
  t.is(entries.length, 5);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[4].uri, 'manifest_1_103123.ts?m=1674535952');
});

test('dateRangeB2-full-1', t => {
  const entries = getSegments(patternB2, {hollow: false, adjacentSegments: 1});
  t.is(entries.length, 6);
  t.is(entries[0].uri, 'manifest_1_103090.ts?m=1674535952');
  t.is(entries[1].dateRange.id, '198');
  t.falsy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[4].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[5].uri, 'manifest_1_103123.ts?m=1674535952');
});

test('dateRangeB2-full-2', t => {
  const entries = getSegments(patternB2, {hollow: false, adjacentSegments: 2});
  t.is(entries.length, 6);
  t.is(entries[0].uri, 'manifest_1_103090.ts?m=1674535952');
  t.is(entries[1].dateRange.id, '198');
  t.falsy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[4].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[5].uri, 'manifest_1_103123.ts?m=1674535952');
});

test('dateRangeB3-0', t => {
  const entries = getSegments(patternB3);
  t.is(entries.length, 1);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
});

test('dateRangeB3-1', t => {
  const entries = getSegments(patternB3, {adjacentSegments: 1});
  t.is(entries.length, 2);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103092.ts?m=1674535952');
});

test('dateRangeB3-2', t => {
  const entries = getSegments(patternB3, {adjacentSegments: 2});
  t.is(entries.length, 3);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103121.ts?m=1674535952');
});

test('dateRangeB3-full-0', t => {
  const entries = getSegments(patternB3, {hollow: false, adjacentSegments: 0});
  t.is(entries.length, 5);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[4].uri, 'manifest_1_103123.ts?m=1674535952');
});

test('dateRangeB3-full-1', t => {
  const entries = getSegments(patternB3, {hollow: false, adjacentSegments: 1});
  t.is(entries.length, 5);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[4].uri, 'manifest_1_103123.ts?m=1674535952');
});

test('dateRangeB3-full-2', t => {
  const entries = getSegments(patternB3, {hollow: false, adjacentSegments: 2});
  t.is(entries.length, 5);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[4].uri, 'manifest_1_103123.ts?m=1674535952');
});

test('dateRangeC1-0', t => {
  const entries = getSegments(patternC1);
  t.is(entries.length, 1);
  t.is(entries[0].dateRange.duration, 194.995);
  t.truthy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeC1-1', t => {
  const entries = getSegments(patternC1, {adjacentSegments: 1});
  t.is(entries.length, 3);
  t.is(entries[0].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[1].dateRange.duration, 194.995);
  t.truthy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103125.ts?m=1674535952');
});

test('dateRangeC1-2', t => {
  const entries = getSegments(patternC1, {adjacentSegments: 2});
  t.is(entries.length, 5);
  t.is(entries[0].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[2].dateRange.duration, 194.995);
  t.truthy(entries[2].dateRange.end);
  t.is(entries[2].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103125.ts?m=1674535952');
  t.is(entries[4].uri, 'manifest_1_103126.ts?m=1674535952');
});

test('dateRangeC1-full-0', t => {
  const entries = getSegments(patternC1, {hollow: false, adjacentSegments: 0});
  t.is(entries.length, 5);
  t.is(entries[0].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[4].dateRange.duration, 194.995);
  t.truthy(entries[4].dateRange.end);
  t.is(entries[4].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeC1-full-1', t => {
  const entries = getSegments(patternC1, {hollow: false, adjacentSegments: 1});
  t.is(entries.length, 6);
  t.is(entries[0].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[4].dateRange.duration, 194.995);
  t.truthy(entries[4].dateRange.end);
  t.is(entries[4].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[5].uri, 'manifest_1_103125.ts?m=1674535952');
});

test('dateRangeC1-full-2', t => {
  const entries = getSegments(patternC1, {hollow: false, adjacentSegments: 2});
  t.is(entries.length, 7);
  t.is(entries[0].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[4].dateRange.duration, 194.995);
  t.truthy(entries[4].dateRange.end);
  t.is(entries[4].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[5].uri, 'manifest_1_103125.ts?m=1674535952');
  t.is(entries[6].uri, 'manifest_1_103126.ts?m=1674535952');
});

test('dateRangeC2-0', t => {
  const entries = getSegments(patternC2);
  t.is(entries.length, 1);
  t.is(entries[0].dateRange.duration, 194.995);
  t.truthy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeC2-1', t => {
  const entries = getSegments(patternC2, {adjacentSegments: 1});
  t.is(entries.length, 3);
  t.is(entries[0].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[1].dateRange.duration, 194.995);
  t.truthy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103125.ts?m=1674535952');
});

test('dateRangeC2-2', t => {
  const entries = getSegments(patternC2, {adjacentSegments: 2});
  t.is(entries.length, 4);
  t.is(entries[0].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[2].dateRange.duration, 194.995);
  t.truthy(entries[2].dateRange.end);
  t.is(entries[2].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103125.ts?m=1674535952');
});

test('dateRangeC2-full-0', t => {
  const entries = getSegments(patternC2, {hollow: false, adjacentSegments: 0});
  t.is(entries.length, 5);
  t.is(entries[0].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[4].dateRange.duration, 194.995);
  t.truthy(entries[4].dateRange.end);
  t.is(entries[4].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeC2-full-1', t => {
  const entries = getSegments(patternC2, {hollow: false, adjacentSegments: 1});
  t.is(entries.length, 6);
  t.is(entries[0].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[4].dateRange.duration, 194.995);
  t.truthy(entries[4].dateRange.end);
  t.is(entries[4].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[5].uri, 'manifest_1_103125.ts?m=1674535952');
});

test('dateRangeC2-full-2', t => {
  const entries = getSegments(patternC2, {hollow: false, adjacentSegments: 2});
  t.is(entries.length, 6);
  t.is(entries[0].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[4].dateRange.duration, 194.995);
  t.truthy(entries[4].dateRange.end);
  t.is(entries[4].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[5].uri, 'manifest_1_103125.ts?m=1674535952');
});

test('dateRangeC3-0', t => {
  const entries = getSegments(patternC3);
  t.is(entries.length, 1);
  t.is(entries[0].dateRange.duration, 194.995);
  t.truthy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeC3-1', t => {
  const entries = getSegments(patternC3, {adjacentSegments: 1});
  t.is(entries.length, 2);
  t.is(entries[0].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[1].dateRange.duration, 194.995);
  t.truthy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeC3-2', t => {
  const entries = getSegments(patternC3, {adjacentSegments: 2});
  t.is(entries.length, 3);
  t.is(entries[0].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[2].dateRange.duration, 194.995);
  t.truthy(entries[2].dateRange.end);
  t.is(entries[2].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeC3-full-0', t => {
  const entries = getSegments(patternC3, {hollow: false, adjacentSegments: 0});
  t.is(entries.length, 5);
  t.is(entries[0].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[4].dateRange.duration, 194.995);
  t.truthy(entries[4].dateRange.end);
  t.is(entries[4].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeC3-full-1', t => {
  const entries = getSegments(patternC3, {hollow: false, adjacentSegments: 1});
  t.is(entries.length, 5);
  t.is(entries[0].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[4].dateRange.duration, 194.995);
  t.truthy(entries[4].dateRange.end);
  t.is(entries[4].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeC3-full-2', t => {
  const entries = getSegments(patternC3, {hollow: false, adjacentSegments: 2});
  t.is(entries.length, 5);
  t.is(entries[0].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[4].dateRange.duration, 194.995);
  t.truthy(entries[4].dateRange.end);
  t.is(entries[4].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeD1-0', t => {
  const entries = getSegments(patternD1);
  t.is(entries.length, 2);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].dateRange.duration, 194.995);
  t.truthy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeD1-1', t => {
  const entries = getSegments(patternD1, {adjacentSegments: 1});
  t.is(entries.length, 6);
  t.is(entries[0].uri, 'manifest_1_103090.ts?m=1674535952');
  t.is(entries[1].dateRange.id, '198');
  t.falsy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[4].dateRange.duration, 194.995);
  t.truthy(entries[4].dateRange.end);
  t.is(entries[4].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[5].uri, 'manifest_1_103125.ts?m=1674535952');
});

test('dateRangeD1-2', t => {
  const entries = getSegments(patternD1, {adjacentSegments: 2});
  t.is(entries.length, 8);
  t.is(entries[0].uri, 'manifest_1_103089.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103090.ts?m=1674535952');
  t.is(entries[2].dateRange.id, '198');
  t.falsy(entries[2].dateRange.end);
  t.is(entries[2].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[4].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[5].dateRange.duration, 194.995);
  t.truthy(entries[5].dateRange.end);
  t.is(entries[5].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[6].uri, 'manifest_1_103125.ts?m=1674535952');
  t.is(entries[7].uri, 'manifest_1_103126.ts?m=1674535952');
});

test('dateRangeD1-full-0', t => {
  const entries = getSegments(patternD1, {hollow: false, adjacentSegments: 0});
  t.is(entries.length, 4);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[3].dateRange.duration, 194.995);
  t.truthy(entries[3].dateRange.end);
  t.is(entries[3].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeD1-full-1', t => {
  const entries = getSegments(patternD1, {hollow: false, adjacentSegments: 1});
  t.is(entries.length, 6);
  t.is(entries[0].uri, 'manifest_1_103090.ts?m=1674535952');
  t.is(entries[1].dateRange.id, '198');
  t.falsy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[4].dateRange.duration, 194.995);
  t.truthy(entries[4].dateRange.end);
  t.is(entries[4].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[5].uri, 'manifest_1_103125.ts?m=1674535952');
});

test('dateRangeD1-full-2', t => {
  const entries = getSegments(patternD1, {hollow: false, adjacentSegments: 2});
  t.is(entries.length, 8);
  t.is(entries[0].uri, 'manifest_1_103089.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103090.ts?m=1674535952');
  t.is(entries[2].dateRange.id, '198');
  t.falsy(entries[2].dateRange.end);
  t.is(entries[2].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[4].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[5].dateRange.duration, 194.995);
  t.truthy(entries[5].dateRange.end);
  t.is(entries[5].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[6].uri, 'manifest_1_103125.ts?m=1674535952');
  t.is(entries[7].uri, 'manifest_1_103126.ts?m=1674535952');
});

test('dateRangeD2-0', t => {
  const entries = getSegments(patternD2);
  t.is(entries.length, 2);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].dateRange.duration, 194.995);
  t.truthy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeD2-1', t => {
  const entries = getSegments(patternD2, {adjacentSegments: 1});
  t.is(entries.length, 5);
  t.is(entries[0].uri, 'manifest_1_103090.ts?m=1674535952');
  t.is(entries[1].dateRange.id, '198');
  t.falsy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[3].dateRange.duration, 194.995);
  t.truthy(entries[3].dateRange.end);
  t.is(entries[3].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[4].uri, 'manifest_1_103125.ts?m=1674535952');
});

test('dateRangeD2-2', t => {
  const entries = getSegments(patternD2, {adjacentSegments: 2});
  t.is(entries.length, 7);
  t.is(entries[0].uri, 'manifest_1_103089.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103090.ts?m=1674535952');
  t.is(entries[2].dateRange.id, '198');
  t.falsy(entries[2].dateRange.end);
  t.is(entries[2].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[4].dateRange.duration, 194.995);
  t.truthy(entries[4].dateRange.end);
  t.is(entries[4].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[5].uri, 'manifest_1_103125.ts?m=1674535952');
  t.is(entries[6].uri, 'manifest_1_103126.ts?m=1674535952');
});

test('dateRangeD2-full-0', t => {
  const entries = getSegments(patternD2, {hollow: false, adjacentSegments: 0});
  t.is(entries.length, 3);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[2].dateRange.duration, 194.995);
  t.truthy(entries[2].dateRange.end);
  t.is(entries[2].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeD2-full-1', t => {
  const entries = getSegments(patternD2, {hollow: false, adjacentSegments: 1});
  t.is(entries.length, 5);
  t.is(entries[0].uri, 'manifest_1_103090.ts?m=1674535952');
  t.is(entries[1].dateRange.id, '198');
  t.falsy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[3].dateRange.duration, 194.995);
  t.truthy(entries[3].dateRange.end);
  t.is(entries[3].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[4].uri, 'manifest_1_103125.ts?m=1674535952');
});

test('dateRangeD2-full-2', t => {
  const entries = getSegments(patternD2, {hollow: false, adjacentSegments: 2});
  t.is(entries.length, 7);
  t.is(entries[0].uri, 'manifest_1_103089.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103090.ts?m=1674535952');
  t.is(entries[2].dateRange.id, '198');
  t.falsy(entries[2].dateRange.end);
  t.is(entries[2].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[4].dateRange.duration, 194.995);
  t.truthy(entries[4].dateRange.end);
  t.is(entries[4].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[5].uri, 'manifest_1_103125.ts?m=1674535952');
  t.is(entries[6].uri, 'manifest_1_103126.ts?m=1674535952');
});

test('dateRangeD3-0', t => {
  const entries = getSegments(patternD3);
  t.is(entries.length, 2);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].dateRange.duration, 194.995);
  t.truthy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeD3-1', t => {
  const entries = getSegments(patternD3, {adjacentSegments: 1});
  t.is(entries.length, 4);
  t.is(entries[0].uri, 'manifest_1_103090.ts?m=1674535952');
  t.is(entries[1].dateRange.id, '198');
  t.falsy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[2].dateRange.duration, 194.995);
  t.truthy(entries[2].dateRange.end);
  t.is(entries[2].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103125.ts?m=1674535952');
});

test('dateRangeD3-2', t => {
  const entries = getSegments(patternD3, {adjacentSegments: 2});
  t.is(entries.length, 6);
  t.is(entries[0].uri, 'manifest_1_103089.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103090.ts?m=1674535952');
  t.is(entries[2].dateRange.id, '198');
  t.falsy(entries[2].dateRange.end);
  t.is(entries[2].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[3].dateRange.duration, 194.995);
  t.truthy(entries[3].dateRange.end);
  t.is(entries[3].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[4].uri, 'manifest_1_103125.ts?m=1674535952');
  t.is(entries[5].uri, 'manifest_1_103126.ts?m=1674535952');
});

test('dateRangeD3-full-0', t => {
  const entries = getSegments(patternD3, {hollow: false, adjacentSegments: 0});
  t.is(entries.length, 2);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].dateRange.duration, 194.995);
  t.truthy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeD3-full-1', t => {
  const entries = getSegments(patternD3, {hollow: false, adjacentSegments: 1});
  t.is(entries.length, 4);
  t.is(entries[0].uri, 'manifest_1_103090.ts?m=1674535952');
  t.is(entries[1].dateRange.id, '198');
  t.falsy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[2].dateRange.duration, 194.995);
  t.truthy(entries[2].dateRange.end);
  t.is(entries[2].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103125.ts?m=1674535952');
});

test('dateRangeD3-full-2', t => {
  const entries = getSegments(patternD3, {hollow: false, adjacentSegments: 2});
  t.is(entries.length, 6);
  t.is(entries[0].uri, 'manifest_1_103089.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103090.ts?m=1674535952');
  t.is(entries[2].dateRange.id, '198');
  t.falsy(entries[2].dateRange.end);
  t.is(entries[2].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[3].dateRange.duration, 194.995);
  t.truthy(entries[3].dateRange.end);
  t.is(entries[3].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[4].uri, 'manifest_1_103125.ts?m=1674535952');
  t.is(entries[5].uri, 'manifest_1_103126.ts?m=1674535952');
});

test('dateRangeE', t => {
  const entries = getSegments(patternE);
  t.is(entries.length, 0);
});

test('dateRangeE-full', t => {
  const entries = getSegments(patternE, {hollow: false});
  t.is(entries.length, 3);
  t.is(entries[0].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103123.ts?m=1674535952');
});

test('dateRangeF1-0', t => {
  const entries = getSegments(patternF1);
  t.is(entries.length, 4);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].dateRange.duration, 194.995);
  t.truthy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[2].dateRange.id, '199');
  t.falsy(entries[2].dateRange.end);
  t.is(entries[2].uri, 'manifest_1_103127.ts?m=1674535952');
  t.is(entries[3].dateRange.duration, 194.995);
  t.truthy(entries[3].dateRange.end);
  t.is(entries[3].uri, 'manifest_1_103132.ts?m=1674535952');
});

test('dateRangeF1-1', t => {
  const entries = getSegments(patternF1, {adjacentSegments: 1});
  t.is(entries.length, 12);
  t.is(entries[0].uri, 'manifest_1_103090.ts?m=1674535952');
  t.is(entries[1].dateRange.id, '198');
  t.falsy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[4].dateRange.duration, 194.995);
  t.truthy(entries[4].dateRange.end);
  t.is(entries[4].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[5].uri, 'manifest_1_103125.ts?m=1674535952');
  t.is(entries[6].uri, 'manifest_1_103126.ts?m=1674535952');
  t.is(entries[7].dateRange.id, '199');
  t.falsy(entries[7].dateRange.end);
  t.is(entries[7].uri, 'manifest_1_103127.ts?m=1674535952');
  t.is(entries[8].uri, 'manifest_1_103128.ts?m=1674535952');
  t.is(entries[9].uri, 'manifest_1_103131.ts?m=1674535952');
  t.is(entries[10].dateRange.duration, 194.995);
  t.truthy(entries[10].dateRange.end);
  t.is(entries[10].uri, 'manifest_1_103132.ts?m=1674535952');
  t.is(entries[11].uri, 'manifest_1_103133.ts?m=1674535952');
});

test('dateRangeF1-2', t => {
  const entries = getSegments(patternF1, {adjacentSegments: 2});
  t.is(entries.length, 20);
  t.is(entries[0].uri, 'manifest_1_103089.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103090.ts?m=1674535952');
  t.is(entries[2].dateRange.id, '198');
  t.falsy(entries[2].dateRange.end);
  t.is(entries[2].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[4].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[5].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[6].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[7].dateRange.duration, 194.995);
  t.truthy(entries[7].dateRange.end);
  t.is(entries[7].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[8].uri, 'manifest_1_103125.ts?m=1674535952');
  t.is(entries[9].uri, 'manifest_1_103126.ts?m=1674535952');
  t.is(entries[10].uri, 'manifest_1_103125.ts?m=1674535952'); // ==> redundant
  t.is(entries[11].uri, 'manifest_1_103126.ts?m=1674535952'); // ==> redundant
  t.is(entries[12].dateRange.id, '199');
  t.falsy(entries[12].dateRange.end);
  t.is(entries[12].uri, 'manifest_1_103127.ts?m=1674535952');
  t.is(entries[13].uri, 'manifest_1_103128.ts?m=1674535952');
  t.is(entries[14].uri, 'manifest_1_103129.ts?m=1674535952');
  t.is(entries[15].uri, 'manifest_1_103130.ts?m=1674535952');
  t.is(entries[16].uri, 'manifest_1_103131.ts?m=1674535952');
  t.is(entries[17].dateRange.duration, 194.995);
  t.truthy(entries[17].dateRange.end);
  t.is(entries[17].uri, 'manifest_1_103132.ts?m=1674535952');
  t.is(entries[18].uri, 'manifest_1_103133.ts?m=1674535952');
  t.is(entries[19].uri, 'manifest_1_103134.ts?m=1674535952');
});

test('dateRangeF1-full-0', t => {
  const entries = getSegments(patternF1, {hollow: false, adjacentSegments: 0});
  t.is(entries.length, 12);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[4].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[5].dateRange.duration, 194.995);
  t.truthy(entries[5].dateRange.end);
  t.is(entries[5].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[6].dateRange.id, '199');
  t.falsy(entries[6].dateRange.end);
  t.is(entries[6].uri, 'manifest_1_103127.ts?m=1674535952');
  t.is(entries[7].uri, 'manifest_1_103128.ts?m=1674535952');
  t.is(entries[8].uri, 'manifest_1_103129.ts?m=1674535952');
  t.is(entries[9].uri, 'manifest_1_103130.ts?m=1674535952');
  t.is(entries[10].uri, 'manifest_1_103131.ts?m=1674535952');
  t.is(entries[11].dateRange.duration, 194.995);
  t.truthy(entries[11].dateRange.end);
  t.is(entries[11].uri, 'manifest_1_103132.ts?m=1674535952');
});

test('dateRangeF1-full-1', t => {
  const entries = getSegments(patternF1, {hollow: false, adjacentSegments: 1});
  t.is(entries.length, 16);
  t.is(entries[0].uri, 'manifest_1_103090.ts?m=1674535952');
  t.is(entries[1].dateRange.id, '198');
  t.falsy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[4].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[5].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[6].dateRange.duration, 194.995);
  t.truthy(entries[6].dateRange.end);
  t.is(entries[6].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[7].uri, 'manifest_1_103125.ts?m=1674535952');
  t.is(entries[8].uri, 'manifest_1_103126.ts?m=1674535952');
  t.is(entries[9].dateRange.id, '199');
  t.falsy(entries[9].dateRange.end);
  t.is(entries[9].uri, 'manifest_1_103127.ts?m=1674535952');
  t.is(entries[10].uri, 'manifest_1_103128.ts?m=1674535952');
  t.is(entries[11].uri, 'manifest_1_103129.ts?m=1674535952');
  t.is(entries[12].uri, 'manifest_1_103130.ts?m=1674535952');
  t.is(entries[13].uri, 'manifest_1_103131.ts?m=1674535952');
  t.is(entries[14].dateRange.duration, 194.995);
  t.truthy(entries[14].dateRange.end);
  t.is(entries[14].uri, 'manifest_1_103132.ts?m=1674535952');
  t.is(entries[15].uri, 'manifest_1_103133.ts?m=1674535952');
});

test('dateRangeF1-full-2', t => {
  const entries = getSegments(patternF1, {hollow: false, adjacentSegments: 2});
  t.is(entries.length, 20);
  t.is(entries[0].uri, 'manifest_1_103089.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103090.ts?m=1674535952');
  t.is(entries[2].dateRange.id, '198');
  t.falsy(entries[2].dateRange.end);
  t.is(entries[2].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[4].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[5].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[6].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[7].dateRange.duration, 194.995);
  t.truthy(entries[7].dateRange.end);
  t.is(entries[7].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[8].uri, 'manifest_1_103125.ts?m=1674535952');
  t.is(entries[9].uri, 'manifest_1_103126.ts?m=1674535952');
  t.is(entries[10].uri, 'manifest_1_103125.ts?m=1674535952'); // ==> redundant
  t.is(entries[11].uri, 'manifest_1_103126.ts?m=1674535952'); // ==> redundant
  t.is(entries[12].dateRange.id, '199');
  t.falsy(entries[12].dateRange.end);
  t.is(entries[12].uri, 'manifest_1_103127.ts?m=1674535952');
  t.is(entries[13].uri, 'manifest_1_103128.ts?m=1674535952');
  t.is(entries[14].uri, 'manifest_1_103129.ts?m=1674535952');
  t.is(entries[15].uri, 'manifest_1_103130.ts?m=1674535952');
  t.is(entries[16].uri, 'manifest_1_103131.ts?m=1674535952');
  t.is(entries[17].dateRange.duration, 194.995);
  t.truthy(entries[17].dateRange.end);
  t.is(entries[17].uri, 'manifest_1_103132.ts?m=1674535952');
  t.is(entries[18].uri, 'manifest_1_103133.ts?m=1674535952');
  t.is(entries[19].uri, 'manifest_1_103134.ts?m=1674535952');
});

test('dateRangeF2-0', t => {
  const entries = getSegments(patternF2);
  t.is(entries.length, 3);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].dateRange.duration, 194.995);
  t.truthy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[2].dateRange.id, '199');
  t.falsy(entries[2].dateRange.end);
  t.is(entries[2].uri, 'manifest_1_103127.ts?m=1674535952');
});

test('dateRangeF2-full-0', t => {
  const entries = getSegments(patternF2, {hollow: false, adjacentSegments: 0});
  t.is(entries.length, 11);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[4].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[5].dateRange.duration, 194.995);
  t.truthy(entries[5].dateRange.end);
  t.is(entries[5].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[6].dateRange.id, '199');
  t.falsy(entries[6].dateRange.end);
  t.is(entries[6].uri, 'manifest_1_103127.ts?m=1674535952');
  t.is(entries[7].uri, 'manifest_1_103128.ts?m=1674535952');
  t.is(entries[8].uri, 'manifest_1_103129.ts?m=1674535952');
  t.is(entries[9].uri, 'manifest_1_103130.ts?m=1674535952');
  t.is(entries[10].uri, 'manifest_1_103131.ts?m=1674535952');
});

test('dateRangeF3-0', t => {
  const entries = getSegments(patternF3);
  t.is(entries.length, 3);
  t.is(entries[0].dateRange.duration, 194.995);
  t.truthy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[1].dateRange.id, '199');
  t.falsy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103127.ts?m=1674535952');
  t.is(entries[2].dateRange.duration, 194.995);
  t.truthy(entries[2].dateRange.end);
  t.is(entries[2].uri, 'manifest_1_103132.ts?m=1674535952');
});

test('dateRangeF3-full-0', t => {
  const entries = getSegments(patternF3, {hollow: false, adjacentSegments: 0});
  t.is(entries.length, 11);
  t.is(entries[0].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103121.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[4].dateRange.duration, 194.995);
  t.truthy(entries[4].dateRange.end);
  t.is(entries[4].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[5].dateRange.id, '199');
  t.falsy(entries[5].dateRange.end);
  t.is(entries[5].uri, 'manifest_1_103127.ts?m=1674535952');
  t.is(entries[6].uri, 'manifest_1_103128.ts?m=1674535952');
  t.is(entries[7].uri, 'manifest_1_103129.ts?m=1674535952');
  t.is(entries[8].uri, 'manifest_1_103130.ts?m=1674535952');
  t.is(entries[9].uri, 'manifest_1_103131.ts?m=1674535952');
  t.is(entries[10].dateRange.duration, 194.995);
  t.truthy(entries[10].dateRange.end);
  t.is(entries[10].uri, 'manifest_1_103132.ts?m=1674535952');
});
