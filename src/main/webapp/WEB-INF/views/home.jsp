<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>

     <!-- google fonts -->
     <link rel="preconnect" href="https://fonts.googleapis.com">
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
     <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@1,9..40,300&family=Noto+Sans:ital,wght@1,600&display=swap" rel="stylesheet">

      <!-- remix icon -->
     <link href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css" rel="stylesheet"/>

    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous">
      <link rel="stylesheet" href="/public/home.css">
    <title>Registration</title>
  </head>

  <body>

    <!-- sidebar -->
    <div id="sidebar">
      <ul>
        <li><a href="/Emp/dashboard"><i class="ri-dashboard-3-line"> DASHBOARD</i></a></li>
        <li><a href="/Emp/login"><i class="ri-home-line"> HOME</i></a></li>
      </ul>

    </div>

    <div id="content">
      <div id="toggle-btn">&#9776;</div>

    <div class="container mt-5">
      <h4>REGISTRATION FORM</h4>
      <hr>
      <div class="form-row mt-4" style="display: flex; row-gap: 30px;">
        <div class="form-group col-md-6">
          <label for="fname">First name</label>
          <div id="alertfname"></div>
          <input type="text" class="form-control" id="fname" placeholder="Your first name" name="first_name"/>
        </div>
        <div class="form-group col-md-6">
          <label for="lname">Last name</label>
          <div id="alertlname"></div>
          <input type="text" class="form-control" id="lname" placeholder="Your last name" name="last_name"/>
        </div>
        <div class="form-group col-md-6">
          <label for="email">Email</label>
          <div id="alertemail"></div>
          <input type="email" class="form-control" id="email" placeholder="Your email"/>
        </div>
        <div class="form-group col-md-6">
          <label for="adhar">Aadhar No.</label>
          <div id="alertadhar"></div>
          <input type="text" class="form-control" id="adhar" placeholder="Your Adhar No."/>
        </div>
        <div class="form-group col-md-6">
          <label for="dept">Phone No.</label>
          <div id="phonecheck"></div>
          <input id="phoneno" type="text" class="form-control" placeholder="Your Phone No"/>
        </div>
        <div class="form-group col-md-4">
          <label for="dept">Department</label>
          <select class="form-control" id="dept" name="dept">
            <option value="1">Development</option>
            <option value="2">Testing</option>
            <option value="3">Accounting</option>
            <option value="4">HR</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <label for="role">Role</label>
          <select class="form-control" id="role" name="role">
            <option value="1">Manager</option>
            <option value="2">Team Lead</option>
            <option value="3">Employee</option>
            <option value="4">HR</option>
          </select>
        </div>
        <div class="form-group col-md-6">
          <label for="pwd">Password</label>
          <div id="alertpwd"></div>
          <input id="pwd" type="password" class="form-control" placeholder="Enter password"/>
        </div>
      </div>
      <button id="clickbutt" type="submit" class="btn btn-primary">Submit</button>
      <button type="reset" class="btn btn-danger">Reset</button>
    </div>
  </div>
  </body>
  <script src="/public/home.js"></script>
</html>
