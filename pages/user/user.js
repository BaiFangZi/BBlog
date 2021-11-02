// pages/user/user.js
import { loginIn } from "../../api/index";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isShowPopup: false,
    isShowOverlay: false,
    isLogin: false,
  },
  handleShowPopup() {
    // console.log()
    this.setData({
      isShowPopup: true,
    });
  },
  handleLogin() {
    wx.login().then((res) => {
      // console.log(res);
      const { code } = res;
      loginIn({ code }).then((res) => {
        wx.setStorageSync("user", res);
        this.setData({
          isLogin: true,
        });
      });
    });
  },
  handleClosePopup() {
    this.setData({
      isShowPopup: false,
    });
  },
  handleLogOut() {
    console.log("注销登录");
    this.setData({
      isShowOverlay: true,
    });
    setTimeout(() => {
      wx.removeStorageSync("user");

      this.setData({
        isLogin: false,
        isShowPopup: false,
        isShowOverlay: false,
      });
    }, 1000);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.login({}).then((res) => {
      console.log(res);
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
