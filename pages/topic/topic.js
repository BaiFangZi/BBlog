// utils/topic.js
import { queryTopic, queryTopicContent } from "../../api/index";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    topic: [],
    topicList: [],
    activeId: 0,
  },

  handleChangeTopic(e) {
    // console.log(e);
    const { id } = e.currentTarget;
    this.setData({
      activeId: id,
    });
    queryTopicContent({ id }).then((res) => {
      this.setData({
        topicList: res,
      });
    });
  },
  handleGoDetail(e) {
    // console.log();
    const { id } = e.currentTarget.dataset;
    // queryPostDetails({ postId: id }).then((res) => {
    //   console.log(res);
    // });
    wx.navigateTo({
      url: "/pages/details/details?id=" + id,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    queryTopic().then((res) => {
      console.log(res);
      this.setData({
        topic: res,
      });
      queryTopicContent({ id: this.data.activeId }).then((res) => {
        this.setData({
          topicList: res,
        });
      });
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
