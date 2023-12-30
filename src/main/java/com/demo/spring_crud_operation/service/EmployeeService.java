package com.demo.spring_crud_operation.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.demo.spring_crud_operation.dao.EmployeeDao;
import com.demo.spring_crud_operation.dto.Employee;
import com.demo.spring_crud_operation.utils.JwtConfig;

import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeDao dao;

    @Autowired
    private DataValidation validation;

    @Autowired
    private BCryptPasswordEncoder encode;

    @Autowired
    private HttpServletResponse response;

    @Autowired
    private JwtConfig jwtConfig;

    public boolean insertEmployee(Employee employee) {
        if (validation.checkFirstAndLastName(employee.getFirst_name()) &&
                validation.checkFirstAndLastName(employee.getLast_name()) &&
                validation.checkAadhar(employee.getAadhar_no()) &&
                validation.checkEmail(employee.getEmail()) &&
                validation.checkPhone(employee.getPhone()) == true) {

            String pwd = encode.encode(employee.getPassword());
            employee.setPassword(pwd);

            dao.insertEmployee(employee);
            return true;
        } else {
            return false;
        }
    }

    public boolean employeeUpdate(Employee employee) {
        if (validation.checkFirstAndLastName(employee.getFirst_name()) &&
                validation.checkFirstAndLastName(employee.getLast_name()) &&
                validation.checkEmail(employee.getEmail()) &&
                validation.checkPhone(employee.getPhone()) == true) {

            dao.employeeUpdate(employee);
            return true;
        } else {
            return false;
        }
    }

    public void deleteEmployee(Integer empid) {
        dao.deleteEmployee(empid);
    }

    public List<Map<String, Object>> getEmployeeByDeptAndRole(Integer deptid, Integer roleid) {
        return dao.getEmployeeByDeptAndRole(deptid, roleid);
    }

    @Deprecated
    public Map<String, String> authentication(String email, String password) {
        Map<String, String> map = new HashMap<>();

        List<Map<String, Object>> li = dao.authentication(email);

        if (!li.isEmpty()) {
            String pass = (String) li.get(0).get("password");

            boolean passencode = encode.matches(password, pass);

            if (passencode) {

                String token = jwtConfig.getJwtToken(email, Keys.secretKeyFor(SignatureAlgorithm.HS256));

                System.out.println("JWT token: " + token);

                Cookie cookie = new Cookie("user", token);
                cookie.setValue(token);
                response.addCookie(cookie);

                map.put("status", "success");
                return map;
            } else {
                map.put("status", "passwordError");
                return map;
            }
        } else {
            map.put("status", "userError");
            return map;
        }
    }

    public List<Map<String, Object>> getEmployeeData(String empid) {

        return dao.getEmployeeData(empid);
    }

    public List<Map<String, Object>> getDashboardData(String email) {
        return dao.getDashBoardData(email);
    }

    public List<Map<String, Object>> getAllEmployees() {
        return dao.getAllEmployees();
    }

    public List<Map<String, Object>> searchEmployee(String fname) {
        return dao.searchEmployee(fname);
    }
}
