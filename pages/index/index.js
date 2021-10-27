Page({
  data: {
    post: [],
  },
  queryPost() {},

  onLoad(options) {
    // this.getTabBar()
    console.log(this.getTabBar());
  },
  onShow() {
    console.log("个人中心");
    this.getTabBar().init();
  },
});
