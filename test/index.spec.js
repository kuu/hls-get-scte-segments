import test from 'ava';
import {getScteSegments as getSegments} from '../index.js';
import {
  patternDateRangeA1, patternDateRangeA2, patternDateRangeA3,
  patternDateRangeB1, patternDateRangeB2, patternDateRangeB3,
  patternDateRangeC1, patternDateRangeC2, patternDateRangeC3,
  patternDateRangeD1, patternDateRangeD2, patternDateRangeD3,
  patternDateRangeE,
  patternDateRangeF1, patternDateRangeF2, patternDateRangeF3,
  patternEnhancedA1, patternEnhancedA2, patternEnhancedA3,
  patternEnhancedB1, patternEnhancedB2, patternEnhancedB3,
  patternEnhancedC1, patternEnhancedC2, patternEnhancedC3,
  patternEnhancedD1, patternEnhancedD2, patternEnhancedD3,
  patternEnhancedE,
  patternEnhancedF1, patternEnhancedF2, patternEnhancedF3,
} from './helpers/fixture.js';

test('dateRangeA1-0', t => {
  const entries = getSegments(patternDateRangeA1);
  t.is(entries.length, 2);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].dateRange.duration, 194.995);
  t.truthy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeA1-1', t => {
  const entries = getSegments(patternDateRangeA1, {adjacentSegments: 1});
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
  const entries = getSegments(patternDateRangeA1, {adjacentSegments: 2});
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
  const entries = getSegments(patternDateRangeA1, {hollow: false, adjacentSegments: 0});
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
  const entries = getSegments(patternDateRangeA1, {hollow: false, adjacentSegments: 1});
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
  const entries = getSegments(patternDateRangeA1, {hollow: false, adjacentSegments: 2});
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
  const entries = getSegments(patternDateRangeA2);
  t.is(entries.length, 2);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].dateRange.duration, 194.995);
  t.truthy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeA2-1', t => {
  const entries = getSegments(patternDateRangeA2, {adjacentSegments: 1});
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
  const entries = getSegments(patternDateRangeA2, {adjacentSegments: 2});
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
  const entries = getSegments(patternDateRangeA2, {hollow: false, adjacentSegments: 0});
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
  const entries = getSegments(patternDateRangeA2, {hollow: false, adjacentSegments: 1});
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
  const entries = getSegments(patternDateRangeA2, {hollow: false, adjacentSegments: 2});
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
  const entries = getSegments(patternDateRangeA3);
  t.is(entries.length, 2);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].dateRange.duration, 194.995);
  t.truthy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeA3-1', t => {
  const entries = getSegments(patternDateRangeA3, {adjacentSegments: 1});
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
  const entries = getSegments(patternDateRangeA3, {adjacentSegments: 2});
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
  const entries = getSegments(patternDateRangeA3, {hollow: false, adjacentSegments: 0});
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
  const entries = getSegments(patternDateRangeA3, {hollow: false, adjacentSegments: 1});
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
  const entries = getSegments(patternDateRangeA3, {hollow: false, adjacentSegments: 2});
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
  const entries = getSegments(patternDateRangeB1);
  t.is(entries.length, 1);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
});

test('dateRangeB1-1', t => {
  const entries = getSegments(patternDateRangeB1, {adjacentSegments: 1});
  t.is(entries.length, 3);
  t.is(entries[0].uri, 'manifest_1_103090.ts?m=1674535952');
  t.is(entries[1].dateRange.id, '198');
  t.falsy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103092.ts?m=1674535952');
});

test('dateRangeB1-2', t => {
  const entries = getSegments(patternDateRangeB1, {adjacentSegments: 2});
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
  const entries = getSegments(patternDateRangeB1, {hollow: false, adjacentSegments: 0});
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
  const entries = getSegments(patternDateRangeB1, {hollow: false, adjacentSegments: 1});
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
  const entries = getSegments(patternDateRangeB1, {hollow: false, adjacentSegments: 2});
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
  const entries = getSegments(patternDateRangeB2);
  t.is(entries.length, 1);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
});

test('dateRangeB2-1', t => {
  const entries = getSegments(patternDateRangeB2, {adjacentSegments: 1});
  t.is(entries.length, 3);
  t.is(entries[0].uri, 'manifest_1_103090.ts?m=1674535952');
  t.is(entries[1].dateRange.id, '198');
  t.falsy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103092.ts?m=1674535952');
});

test('dateRangeB2-2', t => {
  const entries = getSegments(patternDateRangeB2, {adjacentSegments: 2});
  t.is(entries.length, 4);
  t.is(entries[0].uri, 'manifest_1_103090.ts?m=1674535952');
  t.is(entries[1].dateRange.id, '198');
  t.falsy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103121.ts?m=1674535952');
});

test('dateRangeB2-full-0', t => {
  const entries = getSegments(patternDateRangeB2, {hollow: false, adjacentSegments: 0});
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
  const entries = getSegments(patternDateRangeB2, {hollow: false, adjacentSegments: 1});
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
  const entries = getSegments(patternDateRangeB2, {hollow: false, adjacentSegments: 2});
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
  const entries = getSegments(patternDateRangeB3);
  t.is(entries.length, 1);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
});

test('dateRangeB3-1', t => {
  const entries = getSegments(patternDateRangeB3, {adjacentSegments: 1});
  t.is(entries.length, 2);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103092.ts?m=1674535952');
});

test('dateRangeB3-2', t => {
  const entries = getSegments(patternDateRangeB3, {adjacentSegments: 2});
  t.is(entries.length, 3);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103092.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103121.ts?m=1674535952');
});

test('dateRangeB3-full-0', t => {
  const entries = getSegments(patternDateRangeB3, {hollow: false, adjacentSegments: 0});
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
  const entries = getSegments(patternDateRangeB3, {hollow: false, adjacentSegments: 1});
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
  const entries = getSegments(patternDateRangeB3, {hollow: false, adjacentSegments: 2});
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
  const entries = getSegments(patternDateRangeC1);
  t.is(entries.length, 1);
  t.is(entries[0].dateRange.duration, 194.995);
  t.truthy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeC1-1', t => {
  const entries = getSegments(patternDateRangeC1, {adjacentSegments: 1});
  t.is(entries.length, 3);
  t.is(entries[0].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[1].dateRange.duration, 194.995);
  t.truthy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103125.ts?m=1674535952');
});

test('dateRangeC1-2', t => {
  const entries = getSegments(patternDateRangeC1, {adjacentSegments: 2});
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
  const entries = getSegments(patternDateRangeC1, {hollow: false, adjacentSegments: 0});
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
  const entries = getSegments(patternDateRangeC1, {hollow: false, adjacentSegments: 1});
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
  const entries = getSegments(patternDateRangeC1, {hollow: false, adjacentSegments: 2});
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
  const entries = getSegments(patternDateRangeC2);
  t.is(entries.length, 1);
  t.is(entries[0].dateRange.duration, 194.995);
  t.truthy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeC2-1', t => {
  const entries = getSegments(patternDateRangeC2, {adjacentSegments: 1});
  t.is(entries.length, 3);
  t.is(entries[0].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[1].dateRange.duration, 194.995);
  t.truthy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[2].uri, 'manifest_1_103125.ts?m=1674535952');
});

test('dateRangeC2-2', t => {
  const entries = getSegments(patternDateRangeC2, {adjacentSegments: 2});
  t.is(entries.length, 4);
  t.is(entries[0].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[2].dateRange.duration, 194.995);
  t.truthy(entries[2].dateRange.end);
  t.is(entries[2].uri, 'manifest_1_103124.ts?m=1674535952');
  t.is(entries[3].uri, 'manifest_1_103125.ts?m=1674535952');
});

test('dateRangeC2-full-0', t => {
  const entries = getSegments(patternDateRangeC2, {hollow: false, adjacentSegments: 0});
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
  const entries = getSegments(patternDateRangeC2, {hollow: false, adjacentSegments: 1});
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
  const entries = getSegments(patternDateRangeC2, {hollow: false, adjacentSegments: 2});
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
  const entries = getSegments(patternDateRangeC3);
  t.is(entries.length, 1);
  t.is(entries[0].dateRange.duration, 194.995);
  t.truthy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeC3-1', t => {
  const entries = getSegments(patternDateRangeC3, {adjacentSegments: 1});
  t.is(entries.length, 2);
  t.is(entries[0].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[1].dateRange.duration, 194.995);
  t.truthy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeC3-2', t => {
  const entries = getSegments(patternDateRangeC3, {adjacentSegments: 2});
  t.is(entries.length, 3);
  t.is(entries[0].uri, 'manifest_1_103122.ts?m=1674535952');
  t.is(entries[1].uri, 'manifest_1_103123.ts?m=1674535952');
  t.is(entries[2].dateRange.duration, 194.995);
  t.truthy(entries[2].dateRange.end);
  t.is(entries[2].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeC3-full-0', t => {
  const entries = getSegments(patternDateRangeC3, {hollow: false, adjacentSegments: 0});
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
  const entries = getSegments(patternDateRangeC3, {hollow: false, adjacentSegments: 1});
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
  const entries = getSegments(patternDateRangeC3, {hollow: false, adjacentSegments: 2});
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
  const entries = getSegments(patternDateRangeD1);
  t.is(entries.length, 2);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].dateRange.duration, 194.995);
  t.truthy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeD1-1', t => {
  const entries = getSegments(patternDateRangeD1, {adjacentSegments: 1});
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
  const entries = getSegments(patternDateRangeD1, {adjacentSegments: 2});
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
  const entries = getSegments(patternDateRangeD1, {hollow: false, adjacentSegments: 0});
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
  const entries = getSegments(patternDateRangeD1, {hollow: false, adjacentSegments: 1});
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
  const entries = getSegments(patternDateRangeD1, {hollow: false, adjacentSegments: 2});
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
  const entries = getSegments(patternDateRangeD2);
  t.is(entries.length, 2);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].dateRange.duration, 194.995);
  t.truthy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeD2-1', t => {
  const entries = getSegments(patternDateRangeD2, {adjacentSegments: 1});
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
  const entries = getSegments(patternDateRangeD2, {adjacentSegments: 2});
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
  const entries = getSegments(patternDateRangeD2, {hollow: false, adjacentSegments: 0});
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
  const entries = getSegments(patternDateRangeD2, {hollow: false, adjacentSegments: 1});
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
  const entries = getSegments(patternDateRangeD2, {hollow: false, adjacentSegments: 2});
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
  const entries = getSegments(patternDateRangeD3);
  t.is(entries.length, 2);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].dateRange.duration, 194.995);
  t.truthy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeD3-1', t => {
  const entries = getSegments(patternDateRangeD3, {adjacentSegments: 1});
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
  const entries = getSegments(patternDateRangeD3, {adjacentSegments: 2});
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
  const entries = getSegments(patternDateRangeD3, {hollow: false, adjacentSegments: 0});
  t.is(entries.length, 2);
  t.is(entries[0].dateRange.id, '198');
  t.falsy(entries[0].dateRange.end);
  t.is(entries[0].uri, 'manifest_1_103091.ts?m=1674535952');
  t.is(entries[1].dateRange.duration, 194.995);
  t.truthy(entries[1].dateRange.end);
  t.is(entries[1].uri, 'manifest_1_103124.ts?m=1674535952');
});

test('dateRangeD3-full-1', t => {
  const entries = getSegments(patternDateRangeD3, {hollow: false, adjacentSegments: 1});
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
  const entries = getSegments(patternDateRangeD3, {hollow: false, adjacentSegments: 2});
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
  const entries = getSegments(patternDateRangeE);
  t.is(entries.length, 0);
});

test('dateRangeE-full', t => {
  const entries = getSegments(patternDateRangeE, {hollow: false});
  t.is(entries.length, 0);
});

test('dateRangeF1-0', t => {
  const entries = getSegments(patternDateRangeF1);
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
  const entries = getSegments(patternDateRangeF1, {adjacentSegments: 1});
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
  const entries = getSegments(patternDateRangeF1, {adjacentSegments: 2});
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
  const entries = getSegments(patternDateRangeF1, {hollow: false, adjacentSegments: 0});
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
  const entries = getSegments(patternDateRangeF1, {hollow: false, adjacentSegments: 1});
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
  const entries = getSegments(patternDateRangeF1, {hollow: false, adjacentSegments: 2});
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
  const entries = getSegments(patternDateRangeF2);
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
  const entries = getSegments(patternDateRangeF2, {hollow: false, adjacentSegments: 0});
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
  const entries = getSegments(patternDateRangeF3);
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
  const entries = getSegments(patternDateRangeF3, {hollow: false, adjacentSegments: 0});
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

test('enhancedA1-0', t => {
  const entries = getSegments(patternEnhancedA1);
  t.is(entries.length, 2);
  t.is(entries[0].markers[1].type, 'OUT');
  t.is(entries[0].markers[1].duration, 29.997);
  t.is(entries[0].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[1].markers[0].type, 'IN');
  t.is(entries[1].uri, 'index_1_3663403.ts?m=1646201666');
});

test('enhancedA1-1', t => {
  const entries = getSegments(patternEnhancedA1, {adjacentSegments: 1});
  t.is(entries.length, 6);
  t.is(entries[0].uri, 'index_1_3663394.ts?m=1646201666');
  t.is(entries[1].markers[1].type, 'OUT');
  t.is(entries[1].markers[1].duration, 29.997);
  t.is(entries[1].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[4].markers[0].type, 'IN');
  t.is(entries[4].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[5].uri, 'index_1_3663404.ts?m=1646201666');
});

test('enhancedA1-2', t => {
  const entries = getSegments(patternEnhancedA1, {adjacentSegments: 2});
  t.is(entries.length, 10);
  t.is(entries[0].uri, 'index_1_3663393.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663394.ts?m=1646201666');
  t.is(entries[2].markers[1].type, 'OUT');
  t.is(entries[2].markers[1].duration, 29.997);
  t.is(entries[2].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[4].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[5].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[6].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[7].markers[0].type, 'IN');
  t.is(entries[7].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[8].uri, 'index_1_3663404.ts?m=1646201666');
  t.is(entries[9].uri, 'index_1_3663405.ts?m=1646201666');
});

test('enhancedA1-full-0', t => {
  const entries = getSegments(patternEnhancedA1, {hollow: false});
  t.is(entries.length, 6);
  t.is(entries[0].markers[1].type, 'OUT');
  t.is(entries[0].markers[1].duration, 29.997);
  t.is(entries[0].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[4].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[5].markers[0].type, 'IN');
  t.is(entries[5].uri, 'index_1_3663403.ts?m=1646201666');
});

test('enhancedA1-full-1', t => {
  const entries = getSegments(patternEnhancedA1, {hollow: false, adjacentSegments: 1});
  t.is(entries.length, 8);
  t.is(entries[0].uri, 'index_1_3663394.ts?m=1646201666');
  t.is(entries[1].markers[1].type, 'OUT');
  t.is(entries[1].markers[1].duration, 29.997);
  t.is(entries[1].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[4].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[5].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[6].markers[0].type, 'IN');
  t.is(entries[6].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[7].uri, 'index_1_3663404.ts?m=1646201666');
});

test('enhancedA1-full-2', t => {
  const entries = getSegments(patternEnhancedA1, {hollow: false, adjacentSegments: 2});
  t.is(entries.length, 10);
  t.is(entries[0].uri, 'index_1_3663393.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663394.ts?m=1646201666');
  t.is(entries[2].markers[1].type, 'OUT');
  t.is(entries[2].markers[1].duration, 29.997);
  t.is(entries[2].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[4].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[5].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[6].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[7].markers[0].type, 'IN');
  t.is(entries[7].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[8].uri, 'index_1_3663404.ts?m=1646201666');
  t.is(entries[9].uri, 'index_1_3663405.ts?m=1646201666');
});

test('enhancedA2-0', t => {
  const entries = getSegments(patternEnhancedA2);
  t.is(entries.length, 2);
  t.is(entries[0].markers[1].type, 'OUT');
  t.is(entries[0].markers[1].duration, 29.997);
  t.is(entries[0].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[1].markers[0].type, 'IN');
  t.is(entries[1].uri, 'index_1_3663403.ts?m=1646201666');
});

test('enhancedA2-1', t => {
  const entries = getSegments(patternEnhancedA2, {adjacentSegments: 1});
  t.is(entries.length, 6);
  t.is(entries[0].uri, 'index_1_3663394.ts?m=1646201666');
  t.is(entries[1].markers[1].type, 'OUT');
  t.is(entries[1].markers[1].duration, 29.997);
  t.is(entries[1].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[4].markers[0].type, 'IN');
  t.is(entries[4].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[5].uri, 'index_1_3663404.ts?m=1646201666');
});

test('enhancedA2-2', t => {
  const entries = getSegments(patternEnhancedA2, {adjacentSegments: 2});
  t.is(entries.length, 8);
  t.is(entries[0].uri, 'index_1_3663394.ts?m=1646201666');
  t.is(entries[1].markers[1].type, 'OUT');
  t.is(entries[1].markers[1].duration, 29.997);
  t.is(entries[1].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[4].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[5].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[6].markers[0].type, 'IN');
  t.is(entries[6].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[7].uri, 'index_1_3663404.ts?m=1646201666');
});

test('enhancedA2-full-0', t => {
  const entries = getSegments(patternEnhancedA2, {hollow: false});
  t.is(entries.length, 6);
  t.is(entries[0].markers[1].type, 'OUT');
  t.is(entries[0].markers[1].duration, 29.997);
  t.is(entries[0].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[4].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[5].markers[0].type, 'IN');
  t.is(entries[5].uri, 'index_1_3663403.ts?m=1646201666');
});

test('enhancedA2-full-1', t => {
  const entries = getSegments(patternEnhancedA2, {hollow: false, adjacentSegments: 1});
  t.is(entries.length, 8);
  t.is(entries[0].uri, 'index_1_3663394.ts?m=1646201666');
  t.is(entries[1].markers[1].type, 'OUT');
  t.is(entries[1].markers[1].duration, 29.997);
  t.is(entries[1].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[4].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[5].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[6].markers[0].type, 'IN');
  t.is(entries[6].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[7].uri, 'index_1_3663404.ts?m=1646201666');
});

test('enhancedA2-full-2', t => {
  const entries = getSegments(patternEnhancedA2, {hollow: false, adjacentSegments: 2});
  t.is(entries.length, 8);
  t.is(entries[0].uri, 'index_1_3663394.ts?m=1646201666');
  t.is(entries[1].markers[1].type, 'OUT');
  t.is(entries[1].markers[1].duration, 29.997);
  t.is(entries[1].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[4].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[5].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[6].markers[0].type, 'IN');
  t.is(entries[6].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[7].uri, 'index_1_3663404.ts?m=1646201666');
});

test('enhancedA3-0', t => {
  const entries = getSegments(patternEnhancedA3);
  t.is(entries.length, 2);
  t.is(entries[0].markers[1].type, 'OUT');
  t.is(entries[0].markers[1].duration, 29.997);
  t.is(entries[0].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[1].markers[0].type, 'IN');
  t.is(entries[1].uri, 'index_1_3663403.ts?m=1646201666');
});

test('enhancedA3-1', t => {
  const entries = getSegments(patternEnhancedA3, {adjacentSegments: 1});
  t.is(entries.length, 4);
  t.is(entries[0].markers[1].type, 'OUT');
  t.is(entries[0].markers[1].duration, 29.997);
  t.is(entries[0].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[3].markers[0].type, 'IN');
  t.is(entries[3].uri, 'index_1_3663403.ts?m=1646201666');
});

test('enhancedA3-2', t => {
  const entries = getSegments(patternEnhancedA3, {adjacentSegments: 2});
  t.is(entries.length, 6);
  t.is(entries[0].markers[1].type, 'OUT');
  t.is(entries[0].markers[1].duration, 29.997);
  t.is(entries[0].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[4].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[5].markers[0].type, 'IN');
  t.is(entries[5].uri, 'index_1_3663403.ts?m=1646201666');
});

test('enhancedA3-full-0', t => {
  const entries = getSegments(patternEnhancedA3, {hollow: false});
  t.is(entries.length, 6);
  t.is(entries[0].markers[1].type, 'OUT');
  t.is(entries[0].markers[1].duration, 29.997);
  t.is(entries[0].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[4].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[5].markers[0].type, 'IN');
  t.is(entries[5].uri, 'index_1_3663403.ts?m=1646201666');
});

test('enhancedA3-full-1', t => {
  const entries = getSegments(patternEnhancedA3, {hollow: false, adjacentSegments: 1});
  t.is(entries.length, 6);
  t.is(entries[0].markers[1].type, 'OUT');
  t.is(entries[0].markers[1].duration, 29.997);
  t.is(entries[0].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[4].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[5].markers[0].type, 'IN');
  t.is(entries[5].uri, 'index_1_3663403.ts?m=1646201666');
});

test('enhancedA3-full-2', t => {
  const entries = getSegments(patternEnhancedA3, {hollow: false, adjacentSegments: 2});
  t.is(entries.length, 6);
  t.is(entries[0].markers[1].type, 'OUT');
  t.is(entries[0].markers[1].duration, 29.997);
  t.is(entries[0].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[4].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[5].markers[0].type, 'IN');
  t.is(entries[5].uri, 'index_1_3663403.ts?m=1646201666');
});

test('enhancedB1-0', t => {
  const entries = getSegments(patternEnhancedB1);
  t.is(entries.length, 1);
  t.is(entries[0].markers[1].type, 'OUT');
  t.is(entries[0].markers[1].duration, 29.997);
  t.is(entries[0].uri, 'index_1_3663395.ts?m=1646201666');
});

test('enhancedB1-1', t => {
  const entries = getSegments(patternEnhancedB1, {adjacentSegments: 1});
  t.is(entries.length, 3);
  t.is(entries[0].uri, 'index_1_3663394.ts?m=1646201666');
  t.is(entries[1].markers[1].type, 'OUT');
  t.is(entries[1].markers[1].duration, 29.997);
  t.is(entries[1].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663396.ts?m=1646201666');
});

test('enhancedB1-2', t => {
  const entries = getSegments(patternEnhancedB1, {adjacentSegments: 2});
  t.is(entries.length, 5);
  t.is(entries[0].uri, 'index_1_3663393.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663394.ts?m=1646201666');
  t.is(entries[2].markers[1].type, 'OUT');
  t.is(entries[2].markers[1].duration, 29.997);
  t.is(entries[2].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[4].uri, 'index_1_3663397.ts?m=1646201666');
});

test('enhancedB1-full-0', t => {
  const entries = getSegments(patternEnhancedB1, {hollow: false});
  t.is(entries.length, 5);
  t.is(entries[0].markers[1].type, 'OUT');
  t.is(entries[0].markers[1].duration, 29.997);
  t.is(entries[0].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[4].uri, 'index_1_3663402.ts?m=1646201666');
});

test('enhancedB1-full-1', t => {
  const entries = getSegments(patternEnhancedB1, {hollow: false, adjacentSegments: 1});
  t.is(entries.length, 6);
  t.is(entries[0].uri, 'index_1_3663394.ts?m=1646201666');
  t.is(entries[1].markers[1].type, 'OUT');
  t.is(entries[1].markers[1].duration, 29.997);
  t.is(entries[1].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[4].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[5].uri, 'index_1_3663402.ts?m=1646201666');
});

test('enhancedB1-full-2', t => {
  const entries = getSegments(patternEnhancedB1, {hollow: false, adjacentSegments: 2});
  t.is(entries.length, 7);
  t.is(entries[0].uri, 'index_1_3663393.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663394.ts?m=1646201666');
  t.is(entries[2].markers[1].type, 'OUT');
  t.is(entries[2].markers[1].duration, 29.997);
  t.is(entries[2].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[4].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[5].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[6].uri, 'index_1_3663402.ts?m=1646201666');
});

test('enhancedB2-0', t => {
  const entries = getSegments(patternEnhancedB2);
  t.is(entries.length, 1);
  t.is(entries[0].markers[1].type, 'OUT');
  t.is(entries[0].markers[1].duration, 29.997);
  t.is(entries[0].uri, 'index_1_3663395.ts?m=1646201666');
});

test('enhancedB2-1', t => {
  const entries = getSegments(patternEnhancedB2, {adjacentSegments: 1});
  t.is(entries.length, 3);
  t.is(entries[0].uri, 'index_1_3663394.ts?m=1646201666');
  t.is(entries[1].markers[1].type, 'OUT');
  t.is(entries[1].markers[1].duration, 29.997);
  t.is(entries[1].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663396.ts?m=1646201666');
});

test('enhancedB2-2', t => {
  const entries = getSegments(patternEnhancedB2, {adjacentSegments: 2});
  t.is(entries.length, 4);
  t.is(entries[0].uri, 'index_1_3663394.ts?m=1646201666');
  t.is(entries[1].markers[1].type, 'OUT');
  t.is(entries[1].markers[1].duration, 29.997);
  t.is(entries[1].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663397.ts?m=1646201666');
});

test('enhancedB2-full-0', t => {
  const entries = getSegments(patternEnhancedB2, {hollow: false});
  t.is(entries.length, 5);
  t.is(entries[0].markers[1].type, 'OUT');
  t.is(entries[0].markers[1].duration, 29.997);
  t.is(entries[0].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[4].uri, 'index_1_3663402.ts?m=1646201666');
});

test('enhancedB2-full-1', t => {
  const entries = getSegments(patternEnhancedB2, {hollow: false, adjacentSegments: 1});
  t.is(entries.length, 6);
  t.is(entries[0].uri, 'index_1_3663394.ts?m=1646201666');
  t.is(entries[1].markers[1].type, 'OUT');
  t.is(entries[1].markers[1].duration, 29.997);
  t.is(entries[1].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[4].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[5].uri, 'index_1_3663402.ts?m=1646201666');
});

test('enhancedB2-full-2', t => {
  const entries = getSegments(patternEnhancedB2, {hollow: false, adjacentSegments: 2});
  t.is(entries.length, 6);
  t.is(entries[0].uri, 'index_1_3663394.ts?m=1646201666');
  t.is(entries[1].markers[1].type, 'OUT');
  t.is(entries[1].markers[1].duration, 29.997);
  t.is(entries[1].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[4].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[5].uri, 'index_1_3663402.ts?m=1646201666');
});

test('enhancedB3-0', t => {
  const entries = getSegments(patternEnhancedB3);
  t.is(entries.length, 1);
  t.is(entries[0].markers[1].type, 'OUT');
  t.is(entries[0].markers[1].duration, 29.997);
  t.is(entries[0].uri, 'index_1_3663395.ts?m=1646201666');
});

test('enhancedB3-1', t => {
  const entries = getSegments(patternEnhancedB3, {adjacentSegments: 1});
  t.is(entries.length, 2);
  t.is(entries[0].markers[1].type, 'OUT');
  t.is(entries[0].markers[1].duration, 29.997);
  t.is(entries[0].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663396.ts?m=1646201666');
});

test('enhancedB3-2', t => {
  const entries = getSegments(patternEnhancedB3, {adjacentSegments: 2});
  t.is(entries.length, 3);
  t.is(entries[0].markers[1].type, 'OUT');
  t.is(entries[0].markers[1].duration, 29.997);
  t.is(entries[0].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663397.ts?m=1646201666');
});

test('enhancedB3-full-0', t => {
  const entries = getSegments(patternEnhancedB3, {hollow: false});
  t.is(entries.length, 5);
  t.is(entries[0].markers[1].type, 'OUT');
  t.is(entries[0].markers[1].duration, 29.997);
  t.is(entries[0].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[4].uri, 'index_1_3663402.ts?m=1646201666');
});

test('enhancedB3-full-1', t => {
  const entries = getSegments(patternEnhancedB3, {hollow: false, adjacentSegments: 1});
  t.is(entries.length, 5);
  t.is(entries[0].markers[1].type, 'OUT');
  t.is(entries[0].markers[1].duration, 29.997);
  t.is(entries[0].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[4].uri, 'index_1_3663402.ts?m=1646201666');
});

test('enhancedB3-full-2', t => {
  const entries = getSegments(patternEnhancedB3, {hollow: false, adjacentSegments: 2});
  t.is(entries.length, 5);
  t.is(entries[0].markers[1].type, 'OUT');
  t.is(entries[0].markers[1].duration, 29.997);
  t.is(entries[0].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[4].uri, 'index_1_3663402.ts?m=1646201666');
});

test('enhancedC1-0', t => {
  const entries = getSegments(patternEnhancedC1);
  t.is(entries.length, 1);
  t.is(entries[0].markers[0].type, 'IN');
  t.is(entries[0].uri, 'index_1_3663403.ts?m=1646201666');
});

test('enhancedC1-1', t => {
  const entries = getSegments(patternEnhancedC1, {adjacentSegments: 1});
  t.is(entries.length, 3);
  t.is(entries[0].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[1].markers[0].type, 'IN');
  t.is(entries[1].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663404.ts?m=1646201666');
});

test('enhancedC1-2', t => {
  const entries = getSegments(patternEnhancedC1, {adjacentSegments: 2});
  t.is(entries.length, 5);
  t.is(entries[0].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[2].markers[0].type, 'IN');
  t.is(entries[2].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663404.ts?m=1646201666');
  t.is(entries[4].uri, 'index_1_3663405.ts?m=1646201666');
});

test('enhancedC1-full-0', t => {
  const entries = getSegments(patternEnhancedC1, {hollow: false});
  t.is(entries.length, 5);
  t.is(entries[0].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[4].markers[0].type, 'IN');
  t.is(entries[4].uri, 'index_1_3663403.ts?m=1646201666');
});

test('enhancedC1-full-1', t => {
  const entries = getSegments(patternEnhancedC1, {hollow: false, adjacentSegments: 1});
  t.is(entries.length, 6);
  t.is(entries[0].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[4].markers[0].type, 'IN');
  t.is(entries[4].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[5].uri, 'index_1_3663404.ts?m=1646201666');
});

test('enhancedC1-full-2', t => {
  const entries = getSegments(patternEnhancedC1, {hollow: false, adjacentSegments: 2});
  t.is(entries.length, 7);
  t.is(entries[0].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[4].markers[0].type, 'IN');
  t.is(entries[4].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[5].uri, 'index_1_3663404.ts?m=1646201666');
  t.is(entries[6].uri, 'index_1_3663405.ts?m=1646201666');
});

test('enhancedC2-0', t => {
  const entries = getSegments(patternEnhancedC2);
  t.is(entries.length, 1);
  t.is(entries[0].markers[0].type, 'IN');
  t.is(entries[0].uri, 'index_1_3663403.ts?m=1646201666');
});

test('enhancedC2-1', t => {
  const entries = getSegments(patternEnhancedC2, {adjacentSegments: 1});
  t.is(entries.length, 3);
  t.is(entries[0].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[1].markers[0].type, 'IN');
  t.is(entries[1].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663404.ts?m=1646201666');
});

test('enhancedC2-2', t => {
  const entries = getSegments(patternEnhancedC2, {adjacentSegments: 2});
  t.is(entries.length, 4);
  t.is(entries[0].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[2].markers[0].type, 'IN');
  t.is(entries[2].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663404.ts?m=1646201666');
});

test('enhancedC2-full-0', t => {
  const entries = getSegments(patternEnhancedC2, {hollow: false});
  t.is(entries.length, 5);
  t.is(entries[0].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[4].markers[0].type, 'IN');
  t.is(entries[4].uri, 'index_1_3663403.ts?m=1646201666');
});

test('enhancedC2-full-1', t => {
  const entries = getSegments(patternEnhancedC2, {hollow: false, adjacentSegments: 1});
  t.is(entries.length, 6);
  t.is(entries[0].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[4].markers[0].type, 'IN');
  t.is(entries[4].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[5].uri, 'index_1_3663404.ts?m=1646201666');
});

test('enhancedC2-full-2', t => {
  const entries = getSegments(patternEnhancedC2, {hollow: false, adjacentSegments: 2});
  t.is(entries.length, 6);
  t.is(entries[0].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[4].markers[0].type, 'IN');
  t.is(entries[4].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[5].uri, 'index_1_3663404.ts?m=1646201666');
});

test('enhancedC3-0', t => {
  const entries = getSegments(patternEnhancedC3);
  t.is(entries.length, 1);
  t.is(entries[0].markers[0].type, 'IN');
  t.is(entries[0
  ].uri, 'index_1_3663403.ts?m=1646201666');
});

test('enhancedC3-1', t => {
  const entries = getSegments(patternEnhancedC3, {adjacentSegments: 1});
  t.is(entries.length, 2);
  t.is(entries[0].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[1].markers[0].type, 'IN');
  t.is(entries[1].uri, 'index_1_3663403.ts?m=1646201666');
});

test('enhancedC3-2', t => {
  const entries = getSegments(patternEnhancedC3, {adjacentSegments: 2});
  t.is(entries.length, 3);
  t.is(entries[0].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[2].markers[0].type, 'IN');
  t.is(entries[2].uri, 'index_1_3663403.ts?m=1646201666');
});

test('enhancedC3-full-0', t => {
  const entries = getSegments(patternEnhancedC3, {hollow: false});
  t.is(entries.length, 5);
  t.is(entries[0].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[4].markers[0].type, 'IN');
  t.is(entries[4].uri, 'index_1_3663403.ts?m=1646201666');
});

test('enhancedC3-full-1', t => {
  const entries = getSegments(patternEnhancedC3, {hollow: false, adjacentSegments: 1});
  t.is(entries.length, 5);
  t.is(entries[0].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[4].markers[0].type, 'IN');
  t.is(entries[4].uri, 'index_1_3663403.ts?m=1646201666');
});

test('enhancedC3-full-2', t => {
  const entries = getSegments(patternEnhancedC3, {hollow: false, adjacentSegments: 2});
  t.is(entries.length, 5);
  t.is(entries[0].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[4].markers[0].type, 'IN');
  t.is(entries[4].uri, 'index_1_3663403.ts?m=1646201666');
});

test('enhancedD1-0', t => {
  const entries = getSegments(patternEnhancedD1);
  t.is(entries.length, 2);
  t.is(entries[0].markers[1].type, 'OUT');
  t.is(entries[0].markers[1].duration, 29.997);
  t.is(entries[0].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[1].markers[0].type, 'IN');
  t.is(entries[1].uri, 'index_1_3663403.ts?m=1646201666');
});

test('enhancedD1-1', t => {
  const entries = getSegments(patternEnhancedD1, {adjacentSegments: 1});
  t.is(entries.length, 6);
  t.is(entries[0].uri, 'index_1_3663394.ts?m=1646201666');
  t.is(entries[1].markers[1].type, 'OUT');
  t.is(entries[1].markers[1].duration, 29.997);
  t.is(entries[1].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[4].markers[0].type, 'IN');
  t.is(entries[4].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[5].uri, 'index_1_3663404.ts?m=1646201666');
});

test('enhancedD1-2', t => {
  const entries = getSegments(patternEnhancedD1, {adjacentSegments: 2});
  t.is(entries.length, 8);
  t.is(entries[0].uri, 'index_1_3663393.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663394.ts?m=1646201666');
  t.is(entries[2].markers[1].type, 'OUT');
  t.is(entries[2].markers[1].duration, 29.997);
  t.is(entries[2].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[4].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[5].markers[0].type, 'IN');
  t.is(entries[5].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[6].uri, 'index_1_3663404.ts?m=1646201666');
  t.is(entries[7].uri, 'index_1_3663405.ts?m=1646201666');
});

test('enhancedD1-full-0', t => {
  const entries = getSegments(patternEnhancedD1, {hollow: false});
  t.is(entries.length, 4);
  t.is(entries[0].markers[1].type, 'OUT');
  t.is(entries[0].markers[1].duration, 29.997);
  t.is(entries[0].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[3].markers[0].type, 'IN');
  t.is(entries[3].uri, 'index_1_3663403.ts?m=1646201666');
});

test('enhancedD1-full-1', t => {
  const entries = getSegments(patternEnhancedD1, {hollow: false, adjacentSegments: 1});
  t.is(entries.length, 6);
  t.is(entries[0].uri, 'index_1_3663394.ts?m=1646201666');
  t.is(entries[1].markers[1].type, 'OUT');
  t.is(entries[1].markers[1].duration, 29.997);
  t.is(entries[1].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[4].markers[0].type, 'IN');
  t.is(entries[4].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[5].uri, 'index_1_3663404.ts?m=1646201666');
});

test('enhancedD1-full-2', t => {
  const entries = getSegments(patternEnhancedD1, {hollow: false, adjacentSegments: 2});
  t.is(entries.length, 8);
  t.is(entries[0].uri, 'index_1_3663393.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663394.ts?m=1646201666');
  t.is(entries[2].markers[1].type, 'OUT');
  t.is(entries[2].markers[1].duration, 29.997);
  t.is(entries[2].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[4].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[5].markers[0].type, 'IN');
  t.is(entries[5].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[6].uri, 'index_1_3663404.ts?m=1646201666');
  t.is(entries[7].uri, 'index_1_3663405.ts?m=1646201666');
});

test('enhancedD2-0', t => {
  const entries = getSegments(patternEnhancedD2);
  t.is(entries.length, 2);
  t.is(entries[0].markers[1].type, 'OUT');
  t.is(entries[0].markers[1].duration, 29.997);
  t.is(entries[0].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[1].markers[0].type, 'IN');
  t.is(entries[1].uri, 'index_1_3663403.ts?m=1646201666');
});

test('enhancedD2-1', t => {
  const entries = getSegments(patternEnhancedD2, {adjacentSegments: 1});
  t.is(entries.length, 5);
  t.is(entries[0].uri, 'index_1_3663394.ts?m=1646201666');
  t.is(entries[1].markers[1].type, 'OUT');
  t.is(entries[1].markers[1].duration, 29.997);
  t.is(entries[1].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[3].markers[0].type, 'IN');
  t.is(entries[3].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[4].uri, 'index_1_3663404.ts?m=1646201666');
});

test('enhancedD2-2', t => {
  const entries = getSegments(patternEnhancedD2, {adjacentSegments: 2});
  t.is(entries.length, 7);
  t.is(entries[0].uri, 'index_1_3663393.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663394.ts?m=1646201666');
  t.is(entries[2].markers[1].type, 'OUT');
  t.is(entries[2].markers[1].duration, 29.997);
  t.is(entries[2].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[4].markers[0].type, 'IN');
  t.is(entries[4].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[5].uri, 'index_1_3663404.ts?m=1646201666');
  t.is(entries[6].uri, 'index_1_3663405.ts?m=1646201666');
});

test('enhancedD2-full-0', t => {
  const entries = getSegments(patternEnhancedD2, {hollow: false});
  t.is(entries.length, 3);
  t.is(entries[0].markers[1].type, 'OUT');
  t.is(entries[0].markers[1].duration, 29.997);
  t.is(entries[0].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[2].markers[0].type, 'IN');
  t.is(entries[2].uri, 'index_1_3663403.ts?m=1646201666');
});

test('enhancedD2-full-1', t => {
  const entries = getSegments(patternEnhancedD2, {hollow: false, adjacentSegments: 1});
  t.is(entries.length, 5);
  t.is(entries[0].uri, 'index_1_3663394.ts?m=1646201666');
  t.is(entries[1].markers[1].type, 'OUT');
  t.is(entries[1].markers[1].duration, 29.997);
  t.is(entries[1].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[3].markers[0].type, 'IN');
  t.is(entries[3].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[4].uri, 'index_1_3663404.ts?m=1646201666');
});

test('enhancedD2-full-2', t => {
  const entries = getSegments(patternEnhancedD2, {hollow: false, adjacentSegments: 2});
  t.is(entries.length, 7);
  t.is(entries[0].uri, 'index_1_3663393.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663394.ts?m=1646201666');
  t.is(entries[2].markers[1].type, 'OUT');
  t.is(entries[2].markers[1].duration, 29.997);
  t.is(entries[2].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[4].markers[0].type, 'IN');
  t.is(entries[4].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[5].uri, 'index_1_3663404.ts?m=1646201666');
  t.is(entries[6].uri, 'index_1_3663405.ts?m=1646201666');
});

test('enhancedD3-0', t => {
  const entries = getSegments(patternEnhancedD3);
  t.is(entries.length, 2);
  t.is(entries[0].markers[1].type, 'OUT');
  t.is(entries[0].markers[1].duration, 29.997);
  t.is(entries[0].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[1].markers[0].type, 'IN');
  t.is(entries[1].uri, 'index_1_3663403.ts?m=1646201666');
});

test('enhancedD3-1', t => {
  const entries = getSegments(patternEnhancedD3, {adjacentSegments: 1});
  t.is(entries.length, 4);
  t.is(entries[0].uri, 'index_1_3663394.ts?m=1646201666');
  t.is(entries[1].markers[1].type, 'OUT');
  t.is(entries[1].markers[1].duration, 29.997);
  t.is(entries[1].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[2].markers[0].type, 'IN');
  t.is(entries[2].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663404.ts?m=1646201666');
});

test('enhancedD3-2', t => {
  const entries = getSegments(patternEnhancedD3, {adjacentSegments: 2});
  t.is(entries.length, 6);
  t.is(entries[0].uri, 'index_1_3663393.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663394.ts?m=1646201666');
  t.is(entries[2].markers[1].type, 'OUT');
  t.is(entries[2].markers[1].duration, 29.997);
  t.is(entries[2].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[3].markers[0].type, 'IN');
  t.is(entries[3].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[4].uri, 'index_1_3663404.ts?m=1646201666');
  t.is(entries[5].uri, 'index_1_3663405.ts?m=1646201666');
});

test('enhancedD3-full-0', t => {
  const entries = getSegments(patternEnhancedD3, {hollow: false});
  t.is(entries.length, 2);
  t.is(entries[0].markers[1].type, 'OUT');
  t.is(entries[0].markers[1].duration, 29.997);
  t.is(entries[0].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[1].markers[0].type, 'IN');
  t.is(entries[1].uri, 'index_1_3663403.ts?m=1646201666');
});

test('enhancedD3-full-1', t => {
  const entries = getSegments(patternEnhancedD3, {hollow: false, adjacentSegments: 1});
  t.is(entries.length, 4);
  t.is(entries[0].uri, 'index_1_3663394.ts?m=1646201666');
  t.is(entries[1].markers[1].type, 'OUT');
  t.is(entries[1].markers[1].duration, 29.997);
  t.is(entries[1].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[2].markers[0].type, 'IN');
  t.is(entries[2].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663404.ts?m=1646201666');
});

test('enhancedD3-full-2', t => {
  const entries = getSegments(patternEnhancedD3, {hollow: false, adjacentSegments: 2});
  t.is(entries.length, 6);
  t.is(entries[0].uri, 'index_1_3663393.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663394.ts?m=1646201666');
  t.is(entries[2].markers[1].type, 'OUT');
  t.is(entries[2].markers[1].duration, 29.997);
  t.is(entries[2].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[3].markers[0].type, 'IN');
  t.is(entries[3].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[4].uri, 'index_1_3663404.ts?m=1646201666');
  t.is(entries[5].uri, 'index_1_3663405.ts?m=1646201666');
});

test('enhancedE', t => {
  const entries = getSegments(patternEnhancedE);
  t.is(entries.length, 0);
});

test('enhancedE-full', t => {
  const entries = getSegments(patternEnhancedE, {hollow: false});
  t.is(entries.length, 3);
  t.is(entries[0].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663398.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663399.ts?m=1646201666');
});

test('enhancedF1-0', t => {
  const entries = getSegments(patternEnhancedF1);
  t.is(entries.length, 4);
  t.is(entries[0].markers[1].type, 'OUT');
  t.is(entries[0].markers[1].duration, 29.997);
  t.is(entries[0].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[1].markers[0].type, 'IN');
  t.is(entries[1].uri, 'index_1_3663400.ts?m=1646201666');
  t.is(entries[2].markers[1].type, 'OUT');
  t.is(entries[2].markers[1].duration, 29.997);
  t.is(entries[2].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[3].markers[0].type, 'IN');
  t.is(entries[3].uri, 'index_1_3663408.ts?m=1646201666');
});

test('enhancedF1-1', t => {
  const entries = getSegments(patternEnhancedF1, {adjacentSegments: 1});
  t.is(entries.length, 12);
  t.is(entries[0].uri, 'index_1_3663394.ts?m=1646201666');
  t.is(entries[1].markers[1].type, 'OUT');
  t.is(entries[1].markers[1].duration, 29.997);
  t.is(entries[1].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663399.ts?m=1646201666');
  t.is(entries[4].markers[0].type, 'IN');
  t.is(entries[4].uri, 'index_1_3663400.ts?m=1646201666');
  t.is(entries[5].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[6].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[7].markers[1].type, 'OUT');
  t.is(entries[7].markers[1].duration, 29.997);
  t.is(entries[7].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[8].uri, 'index_1_3663404.ts?m=1646201666');
  t.is(entries[9].uri, 'index_1_3663407.ts?m=1646201666');
  t.is(entries[10].markers[0].type, 'IN');
  t.is(entries[10].uri, 'index_1_3663408.ts?m=1646201666');
  t.is(entries[11].uri, 'index_1_3663409.ts?m=1646201666');
});

test('enhancedF1-2', t => {
  const entries = getSegments(patternEnhancedF1, {adjacentSegments: 2});
  t.is(entries.length, 20);
  t.is(entries[0].uri, 'index_1_3663393.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663394.ts?m=1646201666');
  t.is(entries[2].markers[1].type, 'OUT');
  t.is(entries[2].markers[1].duration, 29.997);
  t.is(entries[2].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[4].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[5].uri, 'index_1_3663398.ts?m=1646201666');
  t.is(entries[6].uri, 'index_1_3663399.ts?m=1646201666');
  t.is(entries[7].markers[0].type, 'IN');
  t.is(entries[7].uri, 'index_1_3663400.ts?m=1646201666');
  t.is(entries[8].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[9].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[10].uri, 'index_1_3663401.ts?m=1646201666'); // ==> redundant
  t.is(entries[11].uri, 'index_1_3663402.ts?m=1646201666'); // ==> redundant
  t.is(entries[12].markers[1].type, 'OUT');
  t.is(entries[12].markers[1].duration, 29.997);
  t.is(entries[12].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[13].uri, 'index_1_3663404.ts?m=1646201666');
  t.is(entries[14].uri, 'index_1_3663405.ts?m=1646201666');
  t.is(entries[15].uri, 'index_1_3663406.ts?m=1646201666');
  t.is(entries[16].uri, 'index_1_3663407.ts?m=1646201666');
  t.is(entries[17].markers[0].type, 'IN');
  t.is(entries[17].uri, 'index_1_3663408.ts?m=1646201666');
  t.is(entries[18].uri, 'index_1_3663409.ts?m=1646201666');
  t.is(entries[19].uri, 'index_1_3663410.ts?m=1646201666');
});

test('enhancedF1-full-0', t => {
  const entries = getSegments(patternEnhancedF1, {hollow: false});
  t.is(entries.length, 12);
  t.is(entries[0].markers[1].type, 'OUT');
  t.is(entries[0].markers[1].duration, 29.997);
  t.is(entries[0].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663398.ts?m=1646201666');
  t.is(entries[4].uri, 'index_1_3663399.ts?m=1646201666');
  t.is(entries[5].markers[0].type, 'IN');
  t.is(entries[5].uri, 'index_1_3663400.ts?m=1646201666');
  t.is(entries[6].markers[1].type, 'OUT');
  t.is(entries[6].markers[1].duration, 29.997);
  t.is(entries[6].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[7].uri, 'index_1_3663404.ts?m=1646201666');
  t.is(entries[8].uri, 'index_1_3663405.ts?m=1646201666');
  t.is(entries[9].uri, 'index_1_3663406.ts?m=1646201666');
  t.is(entries[10].uri, 'index_1_3663407.ts?m=1646201666');
  t.is(entries[11].markers[0].type, 'IN');
  t.is(entries[11].uri, 'index_1_3663408.ts?m=1646201666');
});

test('enhancedF1-full-1', t => {
  const entries = getSegments(patternEnhancedF1, {hollow: false, adjacentSegments: 1});
  t.is(entries.length, 16);
  t.is(entries[0].uri, 'index_1_3663394.ts?m=1646201666');
  t.is(entries[1].markers[1].type, 'OUT');
  t.is(entries[1].markers[1].duration, 29.997);
  t.is(entries[1].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[4].uri, 'index_1_3663398.ts?m=1646201666');
  t.is(entries[5].uri, 'index_1_3663399.ts?m=1646201666');
  t.is(entries[6].markers[0].type, 'IN');
  t.is(entries[6].uri, 'index_1_3663400.ts?m=1646201666');
  t.is(entries[7].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[8].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[9].markers[1].type, 'OUT');
  t.is(entries[9].markers[1].duration, 29.997);
  t.is(entries[9].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[10].uri, 'index_1_3663404.ts?m=1646201666');
  t.is(entries[11].uri, 'index_1_3663405.ts?m=1646201666');
  t.is(entries[12].uri, 'index_1_3663406.ts?m=1646201666');
  t.is(entries[13].uri, 'index_1_3663407.ts?m=1646201666');
  t.is(entries[14].markers[0].type, 'IN');
  t.is(entries[14].uri, 'index_1_3663408.ts?m=1646201666');
  t.is(entries[15].uri, 'index_1_3663409.ts?m=1646201666');
});

test('enhancedF1-full-2', t => {
  const entries = getSegments(patternEnhancedF1, {hollow: false, adjacentSegments: 2});
  t.is(entries.length, 20);
  t.is(entries[0].uri, 'index_1_3663393.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663394.ts?m=1646201666');
  t.is(entries[2].markers[1].type, 'OUT');
  t.is(entries[2].markers[1].duration, 29.997);
  t.is(entries[2].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[4].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[5].uri, 'index_1_3663398.ts?m=1646201666');
  t.is(entries[6].uri, 'index_1_3663399.ts?m=1646201666');
  t.is(entries[7].markers[0].type, 'IN');
  t.is(entries[7].uri, 'index_1_3663400.ts?m=1646201666');
  t.is(entries[8].uri, 'index_1_3663401.ts?m=1646201666');
  t.is(entries[9].uri, 'index_1_3663402.ts?m=1646201666');
  t.is(entries[10].uri, 'index_1_3663401.ts?m=1646201666'); // ==> redundant
  t.is(entries[11].uri, 'index_1_3663402.ts?m=1646201666'); // ==> redundant
  t.is(entries[12].markers[1].type, 'OUT');
  t.is(entries[12].markers[1].duration, 29.997);
  t.is(entries[12].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[13].uri, 'index_1_3663404.ts?m=1646201666');
  t.is(entries[14].uri, 'index_1_3663405.ts?m=1646201666');
  t.is(entries[15].uri, 'index_1_3663406.ts?m=1646201666');
  t.is(entries[16].uri, 'index_1_3663407.ts?m=1646201666');
  t.is(entries[17].markers[0].type, 'IN');
  t.is(entries[17].uri, 'index_1_3663408.ts?m=1646201666');
  t.is(entries[18].uri, 'index_1_3663409.ts?m=1646201666');
  t.is(entries[19].uri, 'index_1_3663410.ts?m=1646201666');
});

test('enhancedF2-0', t => {
  const entries = getSegments(patternEnhancedF2);
  t.is(entries.length, 3);
  t.is(entries[0].markers[1].type, 'OUT');
  t.is(entries[0].markers[1].duration, 29.997);
  t.is(entries[0].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[1].markers[0].type, 'IN');
  t.is(entries[1].uri, 'index_1_3663400.ts?m=1646201666');
  t.is(entries[2].markers[1].type, 'OUT');
  t.is(entries[2].markers[1].duration, 29.997);
  t.is(entries[2].uri, 'index_1_3663403.ts?m=1646201666');
});

test('enhancedF2-full-0', t => {
  const entries = getSegments(patternEnhancedF2, {hollow: false});
  t.is(entries.length, 11);
  t.is(entries[0].markers[1].type, 'OUT');
  t.is(entries[0].markers[1].duration, 29.997);
  t.is(entries[0].uri, 'index_1_3663395.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663398.ts?m=1646201666');
  t.is(entries[4].uri, 'index_1_3663399.ts?m=1646201666');
  t.is(entries[5].markers[0].type, 'IN');
  t.is(entries[5].uri, 'index_1_3663400.ts?m=1646201666');
  t.is(entries[6].markers[1].type, 'OUT');
  t.is(entries[6].markers[1].duration, 29.997);
  t.is(entries[6].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[7].uri, 'index_1_3663404.ts?m=1646201666');
  t.is(entries[8].uri, 'index_1_3663405.ts?m=1646201666');
  t.is(entries[9].uri, 'index_1_3663406.ts?m=1646201666');
  t.is(entries[10].uri, 'index_1_3663407.ts?m=1646201666');
});

test('enhancedF3-0', t => {
  const entries = getSegments(patternEnhancedF3);
  t.is(entries.length, 3);
  t.is(entries[0].markers[0].type, 'IN');
  t.is(entries[0].uri, 'index_1_3663400.ts?m=1646201666');
  t.is(entries[1].markers[1].type, 'OUT');
  t.is(entries[1].markers[1].duration, 29.997);
  t.is(entries[1].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[2].markers[0].type, 'IN');
  t.is(entries[2].uri, 'index_1_3663408.ts?m=1646201666');
});

test('enhancedF3-full-0', t => {
  const entries = getSegments(patternEnhancedF3, {hollow: false});
  t.is(entries.length, 11);
  t.is(entries[0].uri, 'index_1_3663396.ts?m=1646201666');
  t.is(entries[1].uri, 'index_1_3663397.ts?m=1646201666');
  t.is(entries[2].uri, 'index_1_3663398.ts?m=1646201666');
  t.is(entries[3].uri, 'index_1_3663399.ts?m=1646201666');
  t.is(entries[4].markers[0].type, 'IN');
  t.is(entries[4].uri, 'index_1_3663400.ts?m=1646201666');
  t.is(entries[5].markers[1].type, 'OUT');
  t.is(entries[5].markers[1].duration, 29.997);
  t.is(entries[5].uri, 'index_1_3663403.ts?m=1646201666');
  t.is(entries[6].uri, 'index_1_3663404.ts?m=1646201666');
  t.is(entries[7].uri, 'index_1_3663405.ts?m=1646201666');
  t.is(entries[8].uri, 'index_1_3663406.ts?m=1646201666');
  t.is(entries[9].uri, 'index_1_3663407.ts?m=1646201666');
  t.is(entries[10].markers[0].type, 'IN');
  t.is(entries[10].uri, 'index_1_3663408.ts?m=1646201666');
});
