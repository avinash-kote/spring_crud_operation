<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%> <%@ taglib prefix="c"
uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
  <head>

    <!-- remix icon -->
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css" rel="stylesheet"/>

    <!-- fontawesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

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

      <link rel="stylesheet" href="/public/displayAll.css">
    <title>View All</title>
  </head>
  <body> 

    <div id="sidebar">
      <ul>
        <li><a href="/Emp/dashboard"><i class="ri-dashboard-3-line"> DASHBOARD</i></a></li>
        <li><a href="/Emp/login"><i class="ri-home-line"> HOME</i></a></li>
      </ul>
    </div>
    <div id="content">

      <div id="navs" style="display: flex;">

        <div id="toggle-btn">&#9776</div>  

        <div class="navbar navbar-expand-lg" style="margin-left: 78%;">
          <form class="form-inline">
            <input type="search" placeholder="Search" id="searching" aria-label="Search" class="form-control">
            <button class="btn btn-outline-success" id="searchbtn" type="button">Search</button>
          </form>
        </div>
      </div>

    <table id="table" class="table table-striped table-bordered table-hover table-responsive-lg" style="text-align: center;">
      <thead class="thead-dark">
        <tr>
            <th>Sr. No</th>
            <th>First Name</th>
            <th>Last Name</th> 
            <th>Email</th>
            <th>Role</th>  
            <th>Department</th> 
            <th>aadhar_no</th>
            <th>phone</th>
            <th>Action</th>
        </tr>
      </thead>
      <tbody id="tbody"></tbody>
    </table>

    <!--delete modal -->
    <div class="modal fade" id="deletemodal" role="dialog" aria-labelledby="title" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="title">Delete Employee</h4>
            <button class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          </div>
          <div class="modal-body">
            <p>Are you sure!</p>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button class="btn btn-danger" id="fordelete" type="button">Delete</button>
          </div>
        </div>
      </div>
    </div>

    <!--update modal -->
    <div class="modal fade" id="updatemodal" tabindex="-1" role="dialog" aria-hidden="true" aria-labelledby="title">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="title" class="modal-title">Update Employee</h5>
            <button class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          </div>
          <div class="modal-body">
              <div id="modalForm"></div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary" id="forupdate">Update</button>
            <button class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>

</body>

<script src="/public/displayAll.js"></script>

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
