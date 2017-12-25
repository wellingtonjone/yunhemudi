// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0,
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    hidden:true,
    videoSrc:"http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
    flag:false,
    danmuList: [
    {
      text: '第 1s 出现的弹幕',
      color: '#ff0000',
      time: 1
    },
    {
      text: '成都 你好',
      color: 'yellow',
      time: 5
    },
    {
      text: '第 3s 出现的弹幕',
      color: '#ff00ff',
      time: 3
    }],
    inp:"",

  },
  bindInputBlur(e){
      this.setData({
          inp:e.detail.value
      })
  },
  showNetWorkType(){
    wx.getNetworkType({
      success:(res)=>{
        var networkType = res.networkType
      }
    })
  },
  show(){
   
    wx.showModal({
      title: '警告',
      content: '当前网络环境为4G,是否继续',
      confirmText:"继续观看",
      confirmColor:"#123456",
      showCancel:true,
      cancelText:"取消观看",
      cancelColor:"#ccc",
      success:  (res)=> {
        if (res.confirm) {
          console.log('用户点击确定')
          this.videoContext.play();
          wx.setStorageSync("play", true)
          // this.videoPlay = function(){}
        } else if (res.cancel) {
          console.log('用户点击取消')
          this.videoContext.pause()
          // wx.setStorageSync("play", false)
        }
      }
    })
 
  },
  videoPlay(){
      console.log("play")
      
       if(!wx.getStorageSync("play")){
         this.videoContext.pause()
          wx.getNetworkType({
            success: (res) => {
              var networkType = res.networkType
              console.log(networkType)
              if(res.networkType!="wifi"){
                    // 来提示框  
                    this.show()
              }
            }
          })
       }
  },
  getRandom(){
       return Math.floor(Math.random()*255);
  },

  getColor(){
    return "rgb(" + this.getRandom() + "," + this.getRandom() + ","+this.getRandom()+")"
  },

  bindSendDanmu(){
    this.videoContext.sendDanmu({
       text:this.data.inp,
       color:this.getColor()
    })

    this.setData({
      inp:""
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      
      var timer = setInterval(()=>{
        if (this.data.num>100){
             clearInterval(timer);
             wx.showToast({
               title:"加载成功",
               icon:"success",
               duration:1000
             })
             this.setData({
               hidden:false
             })
             return false;
          }
         
          this.setData({
            num:++this.data.num
          })

      },20)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContext = wx.createVideoContext('myVideo')
    this.audioCtx = wx.createAudioContext('myAudio')

    wx.setStorageSync("play", false)
  },

  play(){
    this.audioCtx.play()
  },  

  pause(){
    this.audioCtx.pause()
  },

  bindButtonTap(){
    var that = this;
    // 获取视频地址
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success: function (res) {
        that.setData({
          videoSrc: res.tempFilePath
        })
      }
    })
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