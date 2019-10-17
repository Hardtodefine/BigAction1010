// config中文含义为配置
// 我们可以将项目中使用的接口地址统一保存到这个文件中
var baseurl = 'http://localhost:8000'
var userLoginPort = baseurl+'/admin/login';
var userLogoutPort = baseurl+'/admin/logout';
var userInfoPort = baseurl+'/admin/getuser';
var userInfoGetPort = baseurl + '/admin/userinfo_get'; // 用户详细信息获取接口
var userInfoEditPort = baseurl + '/admin/userinfo_edit'; // 用户信息编辑接口