// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    a:"hello weixin",
    b:[1,2,3,4,5],
    flag:false,
    hidden:true,
    obj:{
      a:"你最近累吗?"
    },
    id:"007",
    count:100,
    num:[1,2,3,4,5,6,7,8,9],
    he:{
      name:"zuozuomu",
      salary:10000
    },
    signinData:{
      modalHidden:true,
      username:"zzz",
      password:""
    },
    actionsheetData:{
      hidden:true,
      items:["移除","催办","紧急"]
    }
  },
  action(){
    this.setData({
      "actionsheetData.hidden":false
    })
  },
  actionsheetchange(){
    console.log("asssssa11")
    this.setData({
      "actionsheetData.hidden": true
    })

    wx.showToast({
      title: '取消操作',
    })
  },
  actionitem(e){
    console.log(e)
    this.setData({
      "actionsheetData.hidden": true
    })

    wx.showToast({
      title: '操作成功!',
    })
  },
  showAction(){
    wx.showActionSheet({
      itemList: ['充值', '消卡', '忽视'],
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  getUsername(e){
     this.setData({
        "signinData.username":e.detail.value
     })
  },

  getPassword(e){
      this.setData({
        "signinData.password":e.detail.value
      })
  },

  cancel(){
      this.setData({
        "signinData.modalHidden":true
      })
  },

  confirm(){
    wx.setStorageSync("username", this.data.signinData.username);
    wx.setStorageSync("password", this.data.signinData.password);
    
    this.setData({
      "signinData.modalHidden": true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
       console.log(options)
      //  "获取从其他页面传进来的参数" 
      console.log("页面加载 001")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("页面初次渲染完成 002")
    // wx.request  数据请求 

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    if(!wx.getStorageSync("username")&&!wx.getStorageSync("password")){
        this.setData({
          "signinData.modalHidden": false
        })
    }
    console.log("页面显示 003")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("页面隐藏 004")
      
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("页面卸载 005")
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
  
  },

  viewTap(e){
      console.log(e);
      var txt = e.target.dataset.text;
      console.log(txt)

        // key-value 
        // this.obj.a = txt
      this.setData({
         'obj.a':txt
      })
  },

  add(){
    this.setData({
       count:++this.data.count
    })
  }
})