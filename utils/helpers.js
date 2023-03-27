const setIdsToIndex = (arr) => {
  return arr.map((item, index) => {
    return { ...item, id: index };
  });
};

export { setIdsToIndex };
