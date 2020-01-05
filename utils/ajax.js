var API_URL = 'https://douban-api.uieee.com/v2'

function fetchApi(apiurl,params){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: `${API_URL}/${apiurl}`,
      data:params,
      header:{
        "Content-Type": "json"
      },
      success:resolve,
      fail:reject
    })
  })
}

// url: 'https://douban-api.uieee.com/v2/movie/top250',
modeule.exports={
  getTop:function (apiurl,params){
    return fetchApi(apiurl).then(res=>{res.data})
  }
}