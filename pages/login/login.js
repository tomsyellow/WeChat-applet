//login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  formSubmit:function(e){
    let a=e.detail.value
    wx.request({
      //没有后台
      url: 'http://127.0.0.1:8000/',
      data:{
        //用户名输入的user和密码pwd
        username:e.detail.value.user,
        password:e.detail.value.pwd,
      },
      header:{
        //默认
        'content-type':'application/json'
      },
      success:function(res,req){
        if(res.statusCode==200){
          console.log('成功访问,返回的状态码为200,进行用户校验')
          // console.log(e.detail.value.user)
          // console.log(e.detail.value.pwd)
          if(res.data.username==a.user&& res.data.password==a.pwd){
            // console.log(res.data.username)
            // console.log(res.data.password)
            console.log('学生')
            var cl=null;
            //保存信息
            wx.setStorage({
              key: 'student',
              data: res.data.student,
            })
            wx.showToast({
              title: '登录成功',
              icon: 'success',
              duration: 20000,
              success: function () {
                var cl=setTimeout(function () {
                  console.log('成功')
                  console.log('进行跳转操作')
                  wx.switchTab({
                    url: '../index/index',
                    success:function(){
                      console.log('跳转成功')
                    }
                  })
                  clearTimeout(cl)
                  console.log('定时器关闭')
                },1000)
                
              }
            })
          }else{
            console.log('存在异常')
            throw ('用户名密码错误')
            //错误提醒
            wx.showToast({
              title: 'res.data.msg',
              icon: 'none',
              duration: 2000,
            })
          }

        }else{
          console.log(请求失败)
          throw(res)
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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