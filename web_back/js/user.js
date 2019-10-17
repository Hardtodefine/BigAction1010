//这个user.js用来管理用户进行的所有接口请求操作
var user = {
  //login方法用来管理用户登录接口的操作方式
  //区分一下,和接口有关的部分我们要留下和页面有关的就放回去,并通过传参方式传入
  login:function(options){
    //发送请求
    $.ajax({
      type:'post',
      url:userLoginPort,
      data:options.data,
      // success:function(res){
      //   options.callback(res);
      // }
      success:options.callback
      });
  },
  // logout方法用来管理用户退出接口的操作方式
  logout: function (options) {
    $.ajax({
      type: 'post',
      url:userLogoutPort,
      success: options.callback
    })
  },
  //getuser方法用来管理用户的简单信息获取接口的操作方式
  getInfo:function(options){
    $.ajax({
      url:userInfoPort,
      success:options.callback,
    })
  },
  getAllInfo:function(options){
    $.ajax({
      url:userInfoGetPort,
      // success:function(res){
      //     console.log(res);
      // }
      success:options.callback,
  })
  },
  edit:function(options){
    $.ajax({
      type:'post',
      url:userInfoEditPort,
      data:options.data,
      contentType:false,
      processData:false,
      success:options.callback,
  })
  }
};
