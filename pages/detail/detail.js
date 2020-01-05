// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie:{},
    isF:true,
    grey_star:'',
  },
  //请求详情页数据
  getDetail(options){
    wx.request({
      url: `https://douban-api.uieee.com/v2/movie/subject/${options.movieid}`,
      header:{
        "Content-type":"json"
      },
      success:res=>{
          //动态设置导航标题
        wx.setNavigationBarTitle({
          title: res.data.title
        })
        this.setData({
          movie: res.data,
          grey_star: Math.floor((10 - res.data.rating.average)/2)  //星星评分
        })
      }
    })
  },
  //展开文本
  showText(){
    this.setData({
      isF:!this.data.isF
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDetail(options)
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