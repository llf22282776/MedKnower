<%@ page language="java" contentType="text/html; charset=UTF-8"%> 
<%@taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html>
<html>

<head>

  <meta charset="UTF-8">

  <title>电商小实验</title>

    <link rel="stylesheet" href="/style.css" media="screen" type="text/css" />
</head>

<body>
  <div class="container">  
  <form id="contact" action="Login.action" method="post">
    <h3>Struts小应用-查询学生</h3>
    <h4>     </h4>
    <fieldset>
      <input placeholder="用户名" type="text" tabindex="1" required autofocus />
    </fieldset>
    <fieldset>
      <input placeholder="密码" type="password" tabindex="1" required autofocus />
    </fieldset>
  
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">登陆</button>
    </fieldset>
  </form>

</div>
<div style="text-align:center;clear:both">
</div>
</body>

</html>