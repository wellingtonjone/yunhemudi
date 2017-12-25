// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      hidden:true,
      mv:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        var id = options.id;
        console.log(id);
 
        wx.showLoading({
          title:"数据加载中..."
        })
        wx.request({
          url: "http://47.94.208.182:3000/detail",
          data:{
            id:id
          },
          success:(res)=>{
                console.log(res.data);
                wx.hideLoading();
                this.setData({
                  mv:res.data,
                  hidden:false
                })

                // 设置当前页的标题
                wx.setNavigationBarTitle({
                  title: res.data.title
                })
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
  
  }
})