<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>

  <meta charset="UTF-8">

  <title>电商小实验</title>

    <link rel="stylesheet" href="style/style.css" media="screen" type="text/css" />
</head>

<body>
  <div class="container">  
  <form id="contact" action="Login.action" method="post">
    <h3>登陆失败，请重新输入</h3>
    <h4>     </h4>
    <fieldset>
      <input placeholder="用户名" name="name" type="text" tabindex="1" required autofocus />
    </fieldset>
    <fieldset>
      <input placeholder="密码" name="pwd" type="password" tabindex="1" required autofocus />
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