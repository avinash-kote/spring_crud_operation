package com.demo.spring_crud_operation.dto;

public class Employee {

	private int empid;
	private String first_name;
	private String last_name;
	private int dept_no;
	private String email;
	private long phone;
	private long aadhar_no;
	private int role;
	private String password;

	public int getEmpid() {
		return empid;
	}
	public void setEmpid(int empid) {
		this.empid = empid;
	}
	public String getFirst_name() {
		return first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	public int getDept_no() {
		return dept_no;
	}
	public void setDept(int dept_no) {
		this.dept_no = dept_no;
	}
	public int getRole() {
		return role;
	}
	public void setRole(int role) {
		this.role = role;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public long getPhone() {
		return phone;
	}
	public void setPhone(long phone) {
		this.phone = phone;
	}
	public long getAadhar_no() {
		return aadhar_no;
	}
	public void setAadhar_no(long aadhar_no) {
		this.aadhar_no = aadhar_no;
	}
	public void setDept_no(int dept_no) {
		this.dept_no = dept_no;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "Employee [empid=" + empid + ", first_name=" + first_name + ", last_name=" + last_name + ", dept_no="
				+ dept_no + ", email=" + email + ", phone=" + phone + ", aadhar_no=" + aadhar_no + ", role=" + role
				+ "]";
	}
}
