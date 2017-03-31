package com.llf.action;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Vector;

import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionContext;


public class Login implements Action{
		
	
	
	public static final String USER_NAME="llf"; 
	public static final String USER_PSW="123456"; 
	
	
	
	public static final java.lang.String LOGINSUCCEED="LOGINSUCCEED";
	public static final String LOGINFAILED="LOGINFAILED";
	private String name; //用户名
	private String pwd;//密码
	private Map<String, String> studentMap=new HashMap<>();
	
	public Login(){
		System.out.println("Login is init!!!");
		studentMap.put("小赵", "666666");
		studentMap.put("小明", "777777");
		studentMap.put("小红", "888888");
		studentMap.put("llf","123456");
		
		
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public Map<String, String> getStudentMap() {
		return studentMap;
	}
	public void setStudentMap(Map<String, String> studentMap) {
		this.studentMap = studentMap;
	}
	@Override
	public String execute(){//判断是否登陆成功，如果成功返回SUCCEED,否则返回failed
		System.out.println("LogAction is working");
		boolean loged=false;
		Iterator<Map.Entry<String, String>> entries1 = studentMap.entrySet().iterator();
		while(entries1.hasNext()){
			Entry<String, String> entry=entries1.next();
			if(entry.getValue().equals(pwd) && entry.getKey().equals(name)){
				ActionContext.getContext().getSession().put("name", entry.getKey());
				ActionContext.getContext().getSession().put("pwd", entry.getKey());
				loged=true; 
				break;	
			}
		}	

		if(loged){
//		
//			
//			Iterator<Map.Entry<String, Object>> entries = ActionContext.getContext().getSession().entrySet().iterator();
//			while(entries.hasNext()){
//				Entry<String, Object> entry=entries.next();
//				studentMap.put(entry.getKey(),(String) entry.getValue());
//			}	
			return LOGINSUCCEED;
		}else {
			return LOGINFAILED;
		}

	}

}
