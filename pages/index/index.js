import { queryPostList } from "../../api/index";
let currentIndex = 0;
Page({
  data: {
    post: [],
    isPullDown: false,
    isNoMore: false,
    isReachBottom: false,
  },
  handleQueryPostList(index) {
    // console.log(currentIndex);
    queryPostList({
      currentIndex: index,
    }).then((res) => {
      console.log(res);
      const { noMore } = res;
      if (noMore) {
        this.setData({
          isNoMore: true,
        });
      } else {
        this.setData({
          post: currentIndex ? this.data.post.concat(res.data) : res.data,
        });
        currentIndex = res.currentIndex;
      }
    });
  },
  // handleChangePullStatus(isPullDown) {
  //   this.setData({
  //     isPullDown,
  //   });
  // },

  onLoad(options) {
    queryPostList({ currentIndex }).then((res) => {
      this.setData({
        post: res.data,
      });
      currentIndex = res.currentIndex;
    });
  },
  onShow() {
    console.log("个人中心");
    this.getTabBar().init();
  },
  // 下拉刷新
  onPullDownRefresh() {
    // this.handleChangePullStatus(true);
    this.setData({
      isPullDown: true,
    });
    queryPostList({
      currentIndex: 0,
    }).then((res) => {
      this.setData({
        post: res.data,
        isPullDown: false,
      });
      currentIndex = res.currentIndex;
      // this.handleChangePullStatus(false);
    });
  },
  onReachBottom() {
    if (this.data.isNoMore) {
      return false;
    }
    this.setData({
      isReachBottom: true,
    });
    queryPostList({
      currentIndex,
    }).then((res) => {
      const { noMore } = res;
      if (!noMore) {
        this.setData({
          post: this.data.post.concat(res.data),
          isReachBottom: false,
        });
      } else {
        this.setData({
          isNoMore: true,
          isReachBottom: false,
        });
      }
      currentIndex = res.currentIndex;
    });
  },
});
