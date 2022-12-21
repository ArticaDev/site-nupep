const sortArrWithNaN = (a, b) => {
  if (!isFinite(a) && !isFinite(b)) {
    return 0;
  }
  if (!isFinite(a)) {
    return 1;
  }
  if (!isFinite(b)) {
    return -1;
  }
  return a - b;
};

export default sortArrWithNaN;
