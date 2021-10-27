export const request = (url, method = "GET", data = {}) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      method,
      data,
      success(res) {
        resolve(res);
      },
      fail(err) {
        console.log(err);
        reject(err);
      },
    });
  });
};
