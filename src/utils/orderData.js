export const orderData = (data, type, field) => {
  switch (type) {
    case Date:
      return data.sort(function (a, b) {
        return new Date(a[field]) - new Date(b[field]);
      });
    default:
      return data.sort(function (a, b) {
        return a[field] - b[field];
      });
  }
};
