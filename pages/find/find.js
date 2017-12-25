// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      navList:["电影","音乐","书籍"],
      navIndex:0,
      hidden:true,
      mv:[],
      scroll:true
  },

  changeNavIndex(e){
    var id = e.target.dataset.id;
    this.setData({
      navIndex:id,
    })
  },

  swiperChange(e){
      this.setData({
        navIndex:e.detail.current
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

        wx.showLoading({
          title: '数据加载中...',
        })
        var that = this;
        wx.request({
          url: 'http://47.94.208.182:3000/movie', //仅为示例，并非真实的接口地址
          data: {
            x: '',
            y: ''
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success:(res)=>{
              console.log(res.data)
              setTimeout(()=>{
                  wx.hideLoading()
                  this.setData({
                    hidden:false,
                    mv:res.data
                  })
              },1500)
          }
        })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
      return {
         title:" 最美成都欢迎你.",
         desc:"自信最美丽",
         path:"/page/find/find"
      }
  }
})