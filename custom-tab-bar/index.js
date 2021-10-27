// index.js文件
Component({
  data: {
    active: 0,
    list: [
      {
        pagePath: "/pages/index/index",
        text: "主页",
        icon: "wap-home-o",
      },
      {
        pagePath: "/pages/topic/topic",
        text: "主题",
        icon: "apps-o",
      },
      {
        pagePath: "/pages/user/user",
        text: "我的",
        icon: "user-o",
      },
    ],
  },
  methods: {
    onChange(e) {
      this.setData({ active: e.detail });
      wx.switchTab({
        url: this.data.list[e.detail].pagePath,
      });
    },
    init() {
      const page = getCurrentPages().pop();
      this.setData({
        active: this.data.list.findIndex(
          (item) => item.pagePath === `/${page.route}`
        ),
      });
    },
  },
});
