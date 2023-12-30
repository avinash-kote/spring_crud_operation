<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log in</title>

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

       <link rel="stylesheet" href="/public/login.css">
</head>
<body>
  <section class="container">
    <div class="login-container">
        <div class="circle circle-one"></div>
        <div class="form-container">
            <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" class="illustration" />
            <h1 class="opacity">LOGIN</h1>
            <form>
                <div id="alertemail"></div>
                <input type="text" id="email" required placeholder="EMAIL" />
                <div id="password-container">
                <div style="display:flex;">
                <input class="ri-eye-line" type="password" id="pwd" required placeholder="PASSWORD" /><i style="position:relative;top:40px;left:10px;" class="ri-eye-line" id="pwdicon"></i></div>
                 </div>
                <button class="opacity" id="btn">SUBMIT</button>
            </form>
            <div class="register-forget opacity">
                <a href="#">REGISTER</a>
                <a href="#">FORGOT PASSWORD</a>
            </div>
        </div>
        <div class="circle circle-two"></div>
    </div>
    <div class="theme-btn-container"></div>
</section>
</body>
<script src="/public/login.js"></script>

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