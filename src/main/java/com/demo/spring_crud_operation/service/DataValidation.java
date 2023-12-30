package com.demo.spring_crud_operation.service;

import org.springframework.stereotype.Component;

@Component
public class DataValidation {
    
    public boolean checkFirstAndLastName(String fname) {
        boolean flag = false;
        for(int i=0; i < fname.length(); i++) {
            int ascii = (int)fname.charAt(i);
            if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
              flag = true;
            } else {
                flag = false;
            }
        }
        return flag;
    }
    public boolean checkEmail(String email) {
        boolean flag = true;

        int atPosition = email.indexOf("@");
        int dotPosition = email.indexOf(".");

        int count = 0;

        for (int i = 0; i < email.length(); i++) {
            if (email.charAt(i) == '@') {
                count++;
            }
        }
        if (atPosition < 1 || email.endsWith(".") || atPosition == dotPosition-1) {
            flag = false;
        }else if(count > 1) {
            flag = false;
        }
        else if (atPosition < dotPosition && email.contains(".")) {
            flag = true;
        }else {
            flag = false;
        }
        return flag;
    }
    public boolean checkAadhar(long aadhar_no) {
        boolean flag = true;
        String aadharLength = Long.toString(aadhar_no);

        if (aadharLength.length() == 12) {
            for(int i=0; i < aadharLength.length(); i++) {
                if (i < 0 && i > 9) {
                    flag = false;
                }
            }      
        } else {
            return false;
        }
        return flag;
    }
     public boolean checkPhone(long phone) {
       String phne = Long.toString(phone);
        boolean flag = true;
        if (phne.length() == 10) {     
            for(int i=0; i < phne.length(); i++) {
                if (i < 0 && i > 9) {
                    flag = false;
                }
            }      
        } else {
            return false;
        }
        return flag;
    }
}
