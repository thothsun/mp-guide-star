const app = getApp()

Page({
  data: {
    showGuide: false
  },
  onLoad: function () {
    let context = this;
    wx.getStorage({
      key: 'enterTimes',
      success(res) {
        let times = res.data;
        console.log('times:', times)
        if (times < 3) {
          // 第2次-第3次要显示
          context.setData({
            showGuide: true
          })
        }
        wx.setStorage({
          key: 'enterTimes',
          data: times + 1,
        })
      },
      fail(err) {
        // 第1次要显示
        context.setData({
          showGuide: true
        })
        wx.setStorage({
          key: 'enterTimes',
          data: 1,
        })
      },
      complete(e) {

      }
    })
  },

  hideGuide: function () {
    this.setData({
      showGuide: false
    })
  },



  onImgClick: function(){
    wx.navigateToMiniProgram({
      appId: 'wxb38f8aca4f3e64df',
      path: 'pages/index/main',
      envVersion: 'release',
      success(res) {
      }
    })
  }


})
