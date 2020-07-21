function createMultiplyTable(start, end) {
  if (isValid(start, end)) {
    return generateAllLines(start, end);
  }

  return null;
}

function isValid(start, end) {
  if (start < end && start >= 1 && start <= 1000 && end >= 1 && end <= 1000) {
    return true;
  }
  return false;
}

function generateAllLines(start, end) {
  var str = "";
  for (let i = start; i <= end; i++) {
    str += generateLine(start, i)
    if (i != end)
      str += '\n';
  }
  return str;
}

function generateLine(lineStart, lineEnd) {
  var line = "";
  for (let i = lineStart; i <= lineEnd; i++) {
    if (line.length > 0) {
      line += '\t'
    }
    line += generateExpression(i, lineEnd)
  }
  return line
}

function generateExpression(multiplicand, multiplier) {
  return multiplicand + "*" + multiplier + "=" + (multiplicand * multiplier)
}

module.exports = {
  createMultiplyTable,
};
