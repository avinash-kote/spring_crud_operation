<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%> <%@ taglib prefix="c"
uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>

     <!-- remix icon -->
     <link href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css" rel="stylesheet"/>

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

      <link rel="stylesheet" href="/public/update.css">
    <title>Home Page</title>
  </head>
  <body>

    <div id="sidebar">
      <ul id="ul">
        <li><a href="/Emp/dashboard"><i class="ri-dashboard-3-line"> DASHBOARD</i></a></li>
        <li><a href="/Emp/login"><i class="ri-home-line"> HOME</i></a></li>
      </ul>
    </div>

    <div id="content">

      <div id="toggle-btn">&#9776;</div>
    
  <div id="drop-down-div">
      <div>
        <label for="get">Select Role</label>
        <select class="form-control" id="get">
          <option value="0">Select...</option>
          <option value="1">Manager</option>
          <option value="2">Team Lead</option>
          <option value="3">Employee</option>
          <option value="4">HR</option>
        </select>
      </div>
      <div>
        <label for="get">Select Department</label>
        <select class="form-control" id="getdept">
          <option value="0">Select...</option>
          <option value="1">Development</option>
          <option value="2">Testing</option>
          <option value="3">Accounting</option>
          <option value="4">HR</option>
        </select>
      </div>
    </div>
  <table class="table table-bordered table-striped text-center table-responsive-lg" style="margin-top: 15px">
      <thead>
        <tr>
          <th scope="col">Emp id</th>
          <th scope="col">First name</th>
          <th scope="col">Last name</th>
          <th scope="col">Department</th>
          <th scope="col">Role</th>
          <th scope="col">Email</th>
          <th scope="col">Adhar No.</th>
          <th scope="col">Phone</th>
          <th scope="col" style="width: 200px">Action</th>
        </tr>
      </thead>
      <tbody id="tbody"></tbody>
    </table>


  </div>

  </body>

 <script src="/public/update.js"></script>

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
