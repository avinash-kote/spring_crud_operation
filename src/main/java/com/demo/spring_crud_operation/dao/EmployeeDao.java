package com.demo.spring_crud_operation.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.demo.spring_crud_operation.dto.Employee;

@Repository
public class EmployeeDao {

	@Autowired
	private JdbcTemplate template;

	public void insertEmployee(Employee employee) {

		String query = "INSERT INTO employees(first_name, last_name, dept_id, email, aadhar_no, phone, role_id, password)"
				+ "VALUES(?, ?, ?, ?, ?, ?, ?, ?)";

		template.update(query, employee.getFirst_name(), employee.getLast_name(), employee.getDept_no(),
				employee.getEmail(), employee.getAadhar_no(), employee.getPhone(), employee.getRole(),
				 employee.getPassword());

		System.out.println("Data inserted successfully");
	}
	public void deleteEmployee(Integer empid) {
		String query = "DELETE FROM employees WHERE empid=?";
		template.update(query, empid);

		System.out.println("Employee deleted successfully!!");
	}
	public void employeeUpdate(Employee employee) {
		String query = "UPDATE employees SET first_name=?, last_name=?, dept_id=?, role_id=?, email=?, phone=?, aadhar_no=? WHERE empid=?";

		template.update(query, employee.getFirst_name(), employee.getLast_name(), employee.getDept_no(),
				employee.getRole(), employee.getEmail(), employee.getPhone(), employee.getAadhar_no(),
				employee.getEmpid());

		System.out.println("Records updated successfully!!");
	}
	public List<Map<String, Object>> getEmployeeByDeptAndRole(Integer deptid, Integer roleid) {

		List<Map<String, Object>> db_list = new ArrayList<>();

		if(deptid == 0 && roleid != 0){
			String query = "select * from employees emp INNER JOIN employee_dept ON employee_dept.dept_id = emp.dept_id\r\n"+
			 "INNER JOIN employee_role ON employee_role.role_id = emp.role_id\r\n"+
			  "WHERE emp.role_id=?";

				db_list = template.queryForList(query, roleid);
		}else if(deptid != 0 && roleid == 0){
			String query = "select * from employees emp INNER JOIN employee_role ON employee_role.role_id = emp.role_id\r\n"+
			 "INNER JOIN employee_dept ON employee_dept.dept_id = emp.dept_id\r\n" + //
				"WHERE emp.dept_id=?";

				db_list = template.queryForList(query, deptid);
		}else{
		String query = "select * from employees emp INNER JOIN employee_dept ON employee_dept.dept_id = emp.dept_id\r\n" + //
				"\tINNER JOIN employee_role ON employee_role.role_id = emp.role_id WHERE emp.dept_id=? AND emp.role_id=?";

				db_list = template.queryForList(query, deptid, roleid);
		}
				return db_list;
	}
    public List<Map<String,Object>> getDashBoardData(String email) {

		String query = "SELECT * from modules mod INNER JOIN module_mapping\r\n" + //
				"ON module_mapping.module_id = mod.id\r\n" + //
				"INNER JOIN employees ON employees.role_id = module_mapping.role_id\r\n" + //
				"INNER JOIN employee_dept ON employee_dept.dept_id = employees.dept_id\r\n" + //
				"INNER JOIN employee_role ON employee_role.role_id = employees.role_id\r\n" + //
				" where employees.email=?";

		return template.queryForList(query, email);
 }

 public List<Map<String, Object>> authentication(String email) {
	String query = "select * from employees where email=?";
	return template.queryForList(query, email);
 }

 public List<Map<String, Object>> getEmployeeData(String emp) {
	
	int empid = Integer.parseInt(emp);
	String query = "select * from employees emp INNER JOIN employee_dept ON employee_dept.dept_id = emp.dept_id"+
	               " INNER JOIN employee_role ON employee_role.role_id = emp.role_id WHERE emp.empid=?";

				   return template.queryForList(query, empid);
 }
 public List<Map<String, Object>> getAllEmployees() {
	String q = "select * from employees emp INNER JOIN employee_dept ON employee_dept.dept_id = emp.dept_id\r\n" + //
			"INNER JOIN employee_role ON employee_role.role_id = emp.role_id";
			
	     return template.queryForList(q);
	
	}
public List<Map<String, Object>> searchEmployee(String fname) {
	String query = "SELECT * from employees emp INNER JOIN employee_dept ON employee_dept.dept_id = emp.dept_id "+
	"INNER JOIN employee_role ON employee_role.role_id = emp.role_id where first_name like '%' || ? || '%'"+
	" or last_name like '%' || ? || '%'";

				return template.queryForList(query, fname, fname);
    }
}

