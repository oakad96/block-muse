const setIdsToIndex = (arr) => {
  return arr.map((item, index) => {
    return { ...item, id: index + 1 };
  });
};

export { setIdsToIndex };
