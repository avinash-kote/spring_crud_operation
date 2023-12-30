<%@ page import="java.util.ArrayList" %>
<%@ page import="java.util.Map" %>
<%@ page import="java.util.List" %>
<%@ page import="javax.servlet.http.HttpSession" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%> <%@ taglib prefix="c"
uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
  <head>

    <!-- google fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@1,9..40,300&family=Noto+Sans:ital,wght@1,600&display=swap" rel="stylesheet">
   
     <!-- remix icon -->
     <link href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css" rel="stylesheet"/>

    <!-- fontawesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous" />

    <title>Dashboard</title>
    <link rel="stylesheet" href="/public/styles.css">
  </head>
  <body> 
      <c:set var="list" value="${sessionScope.list}"></c:set> 

    <div id="sidebar">
      <div id="dashClock">
      <h5 id="time"></h5>
      &nbsp; &nbsp;<span id="greeting"></span>
    </div>

      <ul>
        <c:forEach var="emp" items="${list}">
            <li><a href="${emp.url}?empid=${sessionScope.empid}"><i class="${emp.icons}"> ${emp.module_name}</i></a></li>

            <c:set var="fname" value="${emp.first_name}"></c:set>
            <c:set var="lname" value="${emp.last_name}"></c:set>
            <c:set var="email" value="${emp.email}"></c:set>
            <c:set var="dept" value="${emp.dept_name}"></c:set>
            <c:set var="role" value="${emp.role_name}"></c:set>
            <c:set var="aadhar" value="${emp.aadhar_no}"></c:set>
            <c:set var="phone" value="${emp.phone}"></c:set>
        </c:forEach>
      </ul>
  </div>
  <div id="content" style="font-family: Arial, Helvetica, sans-serif;" class="content">
    <div id="toggle-btn">&#9776;</div>

      <div class="container">   
 
      <h3 style="margin-left: 30%;">WELCOME TO DASHBOARD</h3>

        <div class="dropdown" id="profile" style="display: flex;">
         <button class="btn btn-secondary dropdown-toggle" id="drop" data-toggle="dropdown" area-haspopup="true" aria-expanded="false">
          <img src="/images/man.png" alt="profile" style="width: 40px; height: 35px;"> Hii ${fname}</button>
          <div class="dropdown-menu" aria-labelledby="drop">
            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#mymodal">Profile</a>
           <a class="dropdown-item" href="/Emp/logout">Logout</a>
          </div>

          <label id="darklabel">
            <input  id="darkmode" type="checkbox" /> <i id="itag" class="fa fa-moon-o"></i>
          </label>
       </div>   
    </div>   
    <hr>
   <div>
</div>

  <div class="ul-box">
    <ul class="ul">
      <c:forEach var="module" items="${list}">
      <li class="li">
        <div style="display:flex;">
          <img src="${module.path}" alt="icon" class="box-icon">&ensp;
        <a href=${module.url}?empid=${sessionScope.empid} class="links">
          <span><h3 class="modulename" style="position:relative;top:20px;">${module.module_name}</h3></span>
        </a>  
      </div>
       </li>
     </c:forEach>
    </ul>
  </div>
 </div>

 <!-- modal -->
 <div class="modal fade" tabindex="-1" data-toggle="toggle" id="mymodal" aria-labelledby="mHeader" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
       <h4 id="mHeader" class="modal-title">Your Profile</h4>
       <button  data-dismiss="modal" type="button" class="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
       </button>
      </div>
      <div class="modal-body">    

          <div class="col-md-4 mt-5" style="margin-left: 30%;">
            <p><strong>Name:   </strong>${fname} ${lname}</p>
            <p><strong>Email:  </strong>${email}</p>
            <p><strong>Department:  </strong>${dept}</p>
            <p><strong>Role:  </strong>${role}</p>
            <p><strong>Aadhar No.  </strong>${aadhar}</p>
            <p><strong>Phone:   </strong>${phone}</p>
          </div>
      </div>
      <div class="modal-footer">
         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
 </div>
</body>

<script src="/public/script.js"></script>
<script
  src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
  integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
  crossorigin="anonymous"></script>
<script
  src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
  integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
  crossorigin="anonymous"></script>
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
  integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
  crossorigin="anonymous"></script> 
</html>
