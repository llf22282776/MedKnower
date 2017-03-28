package com.llf.interCeptor;

import java.text.SimpleDateFormat;
import java.util.Date;

import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.Interceptor;

public class InterCeptor2  implements Interceptor{

	 
	public void destroy() {
		// TODO Auto-generated method stub
		System.out.println("interceptor2 is destroied!!");
	}

	 
	public void init() {
		// TODO Auto-generated method stub
		System.out.println("interceptor2 is init!!");
	}

	 
	public String intercept(ActionInvocation arg0) throws Exception {
		// TODO Auto-generated method stub
		arg0.getInvocationContext().getSession().put("Intercept2", "check at :"+new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
		return null;
	}

}
