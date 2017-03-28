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
		studentMap.put("小赵", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
		studentMap.put("小明", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
		studentMap.put("小红", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
		
		
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
	 
	public String execute(){//判断是否登陆成功，如果成功返回SUCCEED,否则返回failed
		if(getName().equals(USER_NAME) && getPwd().equals(USER_PSW)){
			ActionContext.getContext().getSession().put(USER_NAME, USER_PSW);
			Iterator<Map.Entry<String, Object>> entries = ActionContext.getContext().getSession().entrySet().iterator();
			while(entries.hasNext()){
				Entry<String, Object> entry=entries.next();
				studentMap.put(entry.getKey(),(String) entry.getValue());
			}
			
			
			return LOGINSUCCEED;
		}else {
			return LOGINFAILED;
		}

	}

}
