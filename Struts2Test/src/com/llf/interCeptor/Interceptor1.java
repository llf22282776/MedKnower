package com.llf.interCeptor;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.Interceptor;


public class Interceptor1 implements Interceptor{
	public void destroy() {
		// TODO Auto-generated method stub
		System.out.println("interceptor1 is destroied!!");
	}
	public void init() {
		// TODO Auto-generated method stub
		System.out.println("interceptor1 is init!!");
	}
	public String intercept(ActionInvocation arg0) throws Exception {
		// TODO Auto-generated method stub
		//拦截器用来检查身份
		arg0.getInvocationContext().getSession().put("Intercept1", "check at :"+new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
		if(ActionContext.getContext().getSession().get("name" )!=null){
			//没有登录
			return "LOGINSUCCEED"; //不必登录
		}
		Map<String, Object> parMap=arg0.getInvocationContext().getParameters();
		String[] nameStrings=(String[])parMap.get("name");
		System.out.println("incterceptor1 request checked!!! i will check the name");
		if(nameStrings==null || nameStrings[0].equals(""))return "LOGINFAILED";//拦截住了请求
		
		
		
		//`````````````````````````````
		String s=arg0.invoke();
		//`````````````````````````````
		
		
		System.out.println("incterceptor1 respones checking!!!");
		System.out.println("last incterceptor return:"+s);
		return s;
	}

}
