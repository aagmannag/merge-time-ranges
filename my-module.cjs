const mergeTimeRanges = (ranges, threshold) => {
  if (!ranges || ranges.length === 0) return [];
  ranges.sort((a, b) => a[0] - b[0]);
  const mergedRanges = [];
  let start = ranges[0][0];
  let end = ranges[0][1];
  for (let i = 1; i < ranges.length; i++) {
    const [nextStart, nextEnd] = ranges[i];
    if (nextStart <= end + threshold) {
      end = Math.max(end, nextEnd);
    } else {
      mergedRanges.push([start, end]);
      start = nextStart;
      end = nextEnd;
    }
  }
  mergedRanges.push([start, end]);
  return mergedRanges;
};

module.exports = { mergeTimeRanges };
