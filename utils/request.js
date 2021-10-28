const baseUrl = "http://localhost:3002";
export const request = ({ url, method = "GET", data = {} }) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + url,
      method,
      data,
      success(res) {
        resolve(res.data);
      },
      fail(err) {
        console.log(err);
        reject(err);
      },
    });
  });
};
