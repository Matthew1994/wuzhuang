##项目启动
1. 先安装依赖:
<code> node install </code>

2. 启动gulp：
<code> gulp </code>

3. 启动服务器：
<code> node server.js </code>

4. 在浏览器打开localhost:8000/login.html

注意：使用的是获取资源的restful风格的请求url，资源路径在server.js中设置

##文件结构
+ src文件夹中的是前端源文件，其中template文件夹中的单页面的分片代码。page文件夹中为主页面，由template的分片组成。同时也有js和less文件

+ build文件夹为生成代码，主要的html页面在page文件夹。（在这里拿页面）

+ bower_components文件夹里面的是有bower管理的框架和插件。

##进度
目前完成

+ 管理员登陆
+ 管理人员
+ 添加成员
+ 修改管理员密码

共四个页面