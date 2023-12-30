package com.demo.spring_crud_operation.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.demo.spring_crud_operation.dto.Employee;
import com.demo.spring_crud_operation.service.EmployeeService;

import jakarta.servlet.http.HttpSession;

@RestController
public class EmpCtrl {

    @Autowired
    private EmployeeService service;

    @Autowired
    private HttpSession session;

    @PostMapping("/registerdata")
    public Map<String, String> registerdata(@RequestBody Employee employee) {

        Map<String, String> res = new HashMap<>();

        if (service.insertEmployee(employee)) {
            res.put("status", "200");
            res.put("message", "success");
        } else {
            res.put("status", "500");
            res.put("message", "Invalid Data");
        }
        return res;
    }

    @PostMapping("/updatedata")
    public Map<String, String> updateData(@RequestBody Employee employee) {

        Map<String, String> res = new HashMap<>();

        if (service.employeeUpdate(employee)) {
            res.put("status", "200");
            res.put("message", "success");
            return res;
        } else {
            res.put("status", "500");
            res.put("message", "Invalid Data");
        }
        return res;
    }

    @GetMapping("/deletedata")
    public Map<String, String> deleteData(@RequestParam("empid") Integer empid) {
        service.deleteEmployee(empid);
        Map<String, String> map = new HashMap<>();
        map.put("staus", "200");
        map.put("message", "success");

        return map;
    }

    @GetMapping("/getemployee")
    public List<Map<String, Object>> getEmployee(Integer roleid, Integer deptid) {

        List<Map<String, Object>> list = service.getEmployeeByDeptAndRole(deptid, roleid);
        return list;
    }

    @PostMapping("/authentication")
    @Deprecated
    public Map<String, String> authentication(@RequestBody Employee employee) {

        List<Map<String, Object>> list = service.getDashboardData(employee.getEmail());
        try {
            session.setAttribute("list", list);
            session.setAttribute("empid", list.get(0).get("empid"));

            return service.authentication(employee.getEmail(), employee.getPassword());
        } catch (Exception e) {
            System.out.println("Exceptin in ctrl" + e.getMessage());
            Map<String, String> map = new HashMap<>();
            map.put("status", "userError");
            return map;
        }
    }

    @PostMapping("/fetchalldata")
    public List<Map<String, Object>> fetchall() {

        List<Map<String, Object>> list = service.getAllEmployees();

        return list;
    }

    @PostMapping("/search")
    public List<Map<String, Object>> searchEmployee(@RequestBody Employee employee) {
        List<Map<String, Object>> li = service.searchEmployee(employee.getFirst_name());

        return li;
    }
}
