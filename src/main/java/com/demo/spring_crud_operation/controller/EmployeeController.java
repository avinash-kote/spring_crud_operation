package com.demo.spring_crud_operation.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import com.demo.spring_crud_operation.service.EmployeeService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("/Emp")
public class EmployeeController {

	@Autowired
	private EmployeeService service;

	@Autowired
	private HttpServletRequest request;

	@Autowired
	private HttpServletResponse response;

	@GetMapping("/update")
	public String displayAllEmployees() {

		Cookie[] cookies = request.getCookies();

		if (cookies != null) {
			for (Cookie cookie : cookies) {
				if ("user".equals(cookie.getName())) {
					return "update";
				}
			}
		}
		return "login";
	}

	@GetMapping("/register")
	public String registerform() {
		Cookie[] cookies = request.getCookies();

		if (cookies != null) {
			for (Cookie cookie : cookies) {
				if ("user".equals(cookie.getName())) {
					return "home";
				}
			}
		}
		return "login";

	}

	@GetMapping("/login")
	public String login() {
		Cookie[] cookies = request.getCookies();

		if (cookies != null) {
			for (Cookie cookie : cookies) {
				if ("user".equals(cookie.getName())) {
					return "dashboard";
				}
			}
		}
		return "login";
	}

	@GetMapping("/updateuser")
	public String userUpdate(@RequestParam(required = false) String empid, Model model) {

		Cookie[] cookies = request.getCookies();

		if (cookies != null) {
			for (Cookie cookie : cookies) {
				if ("user".equals(cookie.getName())) {
					List<Map<String, Object>> list = service.getEmployeeData(empid);
					model.addAttribute("list", list);

					return "userUpdate";
				}
			}
		}
		return "login";
	}

	@GetMapping("/dashboard")
	public String dashboard() {

		Cookie[] cookies = request.getCookies();

		if (cookies != null) {
			for (Cookie cookie : cookies) {
				if ("user".equals(cookie.getName())) {
					return "dashboard";
				}
			}
		}
		return "redirect:/Emp/login";
	}

	@GetMapping("/viewinfo")
	public String viewInfo() {
		Cookie[] cookies = request.getCookies();

		if (cookies != null) {
			for (Cookie cookie : cookies) {
				if ("user".equals(cookie.getName())) {
					return "viewInfo";
				}
			}
		}
		return "login";
	}

	@GetMapping("logout")
	public String logOut() {
		Cookie[] cookies = request.getCookies();
		if (cookies != null) {
			for (Cookie cookie : cookies) {
				if ("user".equals(cookie.getName())) {
					cookie.setMaxAge(0);
					cookie.setPath("/");

					response.addCookie(cookie);
				}
			}
		}
		return "login";
	}
}
