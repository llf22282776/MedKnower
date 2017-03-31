package com.llf.interCeptor;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

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

		
		System.out.println("incterceptor3 request checked!!!,I will do nothing");
		
	   //``````````````以上是request拦截过程,顺序1 2 3
		
		String s=arg0.invoke();
		
		//`````````````一下是respones拦截过程,顺序3 2 1
		System.out.println("incterceptor3 reponse checked!!!");
		System.out.println("last incterceptor return:"+s);
		return s;
		/* 《-----------拦截器内部代码顺序-----------------》
		 * 1. 请求未到待action 之前的拦截代码（处理字符编码，大小写，权限）
		 * 
		 * 2. 调用actionInvecation的invoke(),在invoke内部，
		 * 会让栈指针下降，如果有的话，获得下一个interceptor，然后调用其这个拦截器的
		 * interceptor函数，又进入到 1							
		 * 3. action获得invoke（）的返回值，根据返回值和条件进行响应拦截
		 * 
		 * 4.返回到 3，（最终返回到 调用actionInvecation.invoke()处）
		 * 
		 * 《-----------拦截器内部代码顺序-----------------》
		 * */
		
	}
	
}
