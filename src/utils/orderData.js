export const orderData = (data, type) => {
  return data.sort(function (a, b) {
    return a[type] - b[type];
  });
};
