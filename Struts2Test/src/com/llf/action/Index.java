package com.llf.action;

import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionContext;

public class Index implements Action{
	public static final String LOGIN="LOGIN";
	
	 
	public String execute(){//无条件返回LOGIN
		if(ActionContext.getContext().getSession().get("name")!=null)return "LOGINSUCCEED";
		return LOGIN;

	}
}
