package com.llf.interCeptor;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.Interceptor;

public class Interceptor2  implements Interceptor{

	 
	public void destroy() {
		// TODO Auto-generated method stub
		System.out.println("interceptor2 is destroied!!");
	}

	 
	public void init() {
		// TODO Auto-generated method stub
		System.out.println("interceptor2 is init!!");
	}

	
	public String intercept(ActionInvocation arg0) throws Exception {
		arg0.getInvocationContext().getSession().put("Intercept2", "check at :"+new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
		Map<String, Object> parMap=arg0.getInvocationContext().getParameters();
		String[] pwdStrings=(String[])parMap.get("pwd");
		System.out.println("incterceptor2 request checked!!!,i will check the pwd");
		if(pwdStrings==null || pwdStrings[0].equals(""))return "LOGINFAILED";//拦截住了请求
		String s=arg0.invoke();
		System.out.println("incterceptor2 respones checking!!!");//检查返回
		System.out.println("last incterceptor return:"+s);
		return s;
	}

}
