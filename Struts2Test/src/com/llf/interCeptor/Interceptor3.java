package com.llf.interCeptor;

import java.text.SimpleDateFormat;
import java.util.Date;

import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.Interceptor;

public class Interceptor3 implements Interceptor{

	 
	public void destroy() {
		//拦截器销毁
		// TODO Auto-generated method stub
		System.out.println("interceptor3 is destroied!!");
		
	}

	 
	public void init() {
		//拦截器初始化
		// TODO Auto-generated method stub
		System.out.println("interceptor3 is init!!");
		
	}

	 
	public String intercept(ActionInvocation arg0) throws Exception {
		// TODO Auto-generated method stub
		//拦截器拦截
		arg0.getInvocationContext().getSession().put("Intercept3", "check at :"+new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
		return null;
	}
	
}
