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

+ 管理员登陆 login.html
+ 管理人员 manage.html
+ 添加成员 addMember.html
+ 修改管理员密码 password.html
+ 集合详情页面 details.html
+ 发布信息 issueMessage.html
+ 指挥页面 zhihui.html
+ 手机显示信息页面 showMessage.html(旧版本)
+ 消息通知页面 sendMessage.html 
+ 新闻编辑页面(PC) editNews.html
+ 新闻投稿查看页面(PC) viewContribution.html
+ 新闻编辑页面(Mobile) editNews-MB.html
+ 新闻内容详情页(Mobile) newsDetails.html
+ 主页 index.html
+ 查看集合信息(Mobile) message.html
+ 导航页(Mobile) map.html
+ 错误页面 error.html
+ 军旅风采（列表页） feicai_list.html
+ 军旅风采（编辑页） feicai_edit.html
+ 军旅风采（首页，MB） feicai-MB.html
+ 集合消息编辑页（Mobile） editJihe-MB.html
共21个页面