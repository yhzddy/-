//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list:{},
    movieList:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //调用豆瓣top250的api数据
  getMovieList(){
    wx.request({
      url: 'https://douban-api.uieee.com/v2/movie/top250',
      header: {
        "Content-Type": "json"
        // "Content-Type": 'application/json',
      },
      success:res=>{
        console.log(res.data)
        this.setData({
          movieList: res.data.subjects
        })
      }
    })
  },

  onLoad: function () {

    this.getMovieList()

  },

})
