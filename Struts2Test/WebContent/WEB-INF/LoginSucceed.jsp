<%@page import="com.opensymphony.xwork2.ActionContext"%>
<%@page import="java.util.Map"%>
<%@page import="com.opensymphony.xwork2.util.ValueStack"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.Map.Entry"%>
<%@page import="java.util.Map.Entry"%>

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>登陆成功</title>
</head>
<body>
	<table border="1" width=360> 
	<%
		ValueStack vs= (ValueStack)request.getAttribute("struts.valueStack"); 
		Map studentMap=ActionContext.getContext().getSession();
		Iterator<Map.Entry<String, Object>> entries = studentMap.entrySet().iterator();
		while(entries.hasNext()){%>
		<tr>
		<%Entry<String, Object> entry=entries.next();%>
		<td ><%=entry.getKey()%></td>
		<td ><%=entry.getValue()%></td>
		</tr>
		<%
		}
		%>
	</table>
</body>
</html>