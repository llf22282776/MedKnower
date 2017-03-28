package com.llf.action;

import com.opensymphony.xwork2.Action;

public class Index implements Action{
	public static final String LOGIN="LOGIN";
	
	 
	public String execute(){//无条件返回LOGIN
		
		
		return LOGIN;
		
		
	}
}
