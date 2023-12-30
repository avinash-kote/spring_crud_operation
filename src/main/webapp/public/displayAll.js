//sibebar
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');

document.getElementById('toggle-btn').addEventListener('click', () => {
    const sidebarWidth = sidebar.offsetWidth;

    if (sidebar.style.left === '-250px') {
        sidebar.style.left = '0px';
        content.style.marginLeft = '250px';
    }else {
        sidebar.style.left = '-250px';
        content.style.marginLeft = '0px';
    }
});

//table
 tabledata('/fetchalldata', 'POST')
.then(async responseData => {
   let data= await responseData;
     showalldata(data);
});

function tabledata(url, method, obj){
 return new Promise(async (resolve,reject) => {
 const a= {
   method: method,
   headers:{
     'Content-Type':'application/json'
   },
   body: JSON.stringify(obj)
 }
 await fetch(url,a)
 .then(response => {
   if(!response.ok){
     throw new Error('Error Occured');
   }
    return response.json();
 })
 .then(data => {
   resolve(data);
 })
 .catch(err => {
   reject(err);
 })
});
}
 async function showalldata(data){
  let srno = 1;
  let htmls = '';
  data.forEach((element) => {
    htmls += 
     `<tr>
     <td>`+ srno +`</td>
    <td>`+ element.first_name +`</td>
    <td>`+ element.last_name +`</td>
    <td>`+ element.email +`</td>
    <td>`+ element.role_name +`</td>
    <td>`+ element.dept_name +`</td>
    <td>`+ element.aadhar_no +`</td>
    <td>`+ element.phone +`</td>
    <td><i class="ri-delete-bin-line icons" data-toggle="modal" data-target="#deletemodal" id="deletebtn" data-id=`+element.empid+` style="color:red"></i>

        <i class="ri-edit-box-line icons" id="updatebtn" data-toggle="modal" data-target="#updatemodal" style="color:green"
       data-id=`+element.empid+` data-fname=`+element.first_name+` data-lname=`+element.last_name+` data-email=`+element.email+` data-role=`+element.role_name+`
        data-dept=`+element.dept_name+` data-aadhar=`+element.aadhar_no+` data-phone=`+element.phone+`></i>
    </td>
  </tr>`
  srno++;
  });
  document.querySelector('tbody').innerHTML = htmls;

  let dataforupdate = document.querySelectorAll('#updatebtn');
   dataforupdate.forEach(updatebtn => {
    updatebtn.addEventListener('click', ()=> {
     let empid = updatebtn.getAttribute('data-id');
     let fname = updatebtn.getAttribute('data-fname');
     let lname = updatebtn.getAttribute('data-lname');
     let email = updatebtn.getAttribute('data-email');
     let  aadhar = updatebtn.getAttribute('data-aadhar');
     let phone = updatebtn.getAttribute('data-phone');
    
      updateOps(empid, fname, lname, email, aadhar, phone);
     
   });
 })

 let dataForDelete = document.querySelectorAll('#deletebtn');
 dataForDelete.forEach(deletebtn => {
  deletebtn.addEventListener('click', () => {
    let empid = deletebtn.getAttribute('data-id')
    deleteOps(empid);
  });
 });
}
    function deleteOps(empid) {
   
   document.getElementById('fordelete').addEventListener('click', ()=> {
    console.log(empid);

     fetchDynamic('/deletedata?empid= '+ empid, 'GET')
      alert('Employee removed succesfully');  
   });
  }

   
   function updateOps(empid, fname, lname, email, aadhar, phone) {
    let html = `<div class="form-inline">
    <div class="form-group">
    <label for="fname">First Name : </label>
    <input type="text" id="fname" class="form-control" value=`+fname+`>
  </div>

  <div class="form-group ml-4">
    <label for="lname">Last Name : </label>
    <input type="text" id="lname" class="form-control" value=`+lname+`>
  </div>
  
  <div class="form-group mt-4 ">
  <label for="email">Email : </label>
  <input type="text" id="email" class="form-control" value=`+email+`>
</div>

<div class="form-group ml-4 mt-4">
  <label for="aadhar">Aadhar No. :</label>
  <input type="text" id="aadhar" class="form-control" value=`+aadhar+`>
</div>

<div class="form-group mt-4">
  <label for="phone">Phone :</label>
  <input type="text" id="phone" class="form-control" value=`+phone+`>
</div>  
  
<div class="form-group ml-3 mt-4" >
<label for="dept">Role: </label>
<select class="form-control" id="role">
  <option value="1">Manager</option>
  <option value="2">Team Lead</option>
  <option value="3" selected>Employee</option>
  <option value="4">HR</option>
</select>
</div>   

<div class="form-group ml-3 mt-4">
<label for="dept">Department :</label>
<select class="form-control" id="dept">
<option value="1" selected>Development</option>
<option value="2">Testing</option>
<option value="3">Accounting</option>
<option value="4">HR</option>
</select>
</div>  

</div>` 

document.getElementById('modalForm').innerHTML = html;

updateModalData(empid);
}
  
function updateModalData(empid) {
 document.getElementById('forupdate').addEventListener('click', ()=> {

  if (customFnameValidation('fname') && customLnameValidation('lname') && customEmailValidation('email') &&
      customPhoneValidation('phone') && customeAadharValidation('aadhar')) {

         let fname = document.getElementById('fname').value;
         let lname = document.getElementById('lname').value;
         let dept = document.getElementById('dept').value;
         let role = document.getElementById('role').value;
         let email = document.getElementById('email').value;
         let aadhar = document.getElementById('aadhar').value;
         let phone = document.getElementById('phone').value;

        let data = {
          empid: empid,
          first_name:fname,
          last_name: lname,
          dept_no: dept,
          role: role,
          email: email,
          aadhar_no: aadhar,
          phone: phone
        }

        fetchDynamic('/updatedata', 'POST', data).then(
          alert('Records updated'))
  }
 });
}
 
 document.getElementById('searching').addEventListener('input', showSearchData);

function showSearchData() {
  let searching = document.getElementById('searching').value;

  let obj = {
    first_name : searching
  }
    tabledata('/search', 'POST', obj).then(async data => {
    let responseData = await data;
    showalldata(responseData);
   });
}


function fetchDynamic(url, method, obj){
  try {
  return new Promise(async (resolve, reject)=> {

  let response = await fetch(url, {
    method : method,
    headers : {
      'Content-Type': 'application/json'
    },
    body : JSON.stringify(obj)
   });

   if (response.ok) {
   return response.json();
   } else {
    return reject(response)
   }
  });
} catch(error){
  reject(error);
}
}

function customFnameValidation(fnameId) {
  let fname = document.getElementById(fnameId);
  let fnameval = document.getElementById(fnameId).value;
  let val = true;

  if (fnameval === '') {
    fname.setCustomValidity('Required');
    val = false;
  } else if(! checkFirstName(fnameval)) {
    fname.setCustomValidity('Invalid first name');
    val = false;
  } else{
    fname.setCustomValidity('');
  }
  fname.reportValidity();
  return val;
}
function customLnameValidation(lnameId) {
  let lname = document.getElementById(lnameId);
  let lnameval = document.getElementById(lnameId).value;
  let val = true;

  if (lnameval === '') {
    lname.setCustomValidity('Required');
    val = false;
  } else if(! checkFirstName(lnameval)) {
    lname.setCustomValidity('Invalid last name');
    val = false;
  } else{
    lname.setCustomValidity('');
  }

  lname.reportValidity();
  return val;
}

function customEmailValidation(emailId) {
let email = document.getElementById(emailId);
let emailval = document.getElementById(emailId).value;
let val = true;

if (emailval === '') {
  email.setCustomValidity('Required');
  val = false;
} else if (!checkemail(emailval)) {
  email.setCustomValidity('Invalid email id');
  val = false;
} else {
  email.setCustomValidity('');
}
email.reportValidity();
return val;
}

function customPhoneValidation(phoneId) {
  let phone = document.getElementById(phoneId);
  let phoneval = document.getElementById(phoneId).value;
  let val = true;

  if(phoneval === '') {
    phone.setCustomValidity('Required');
    val = false;
  } else if (!phonenumber(phoneval)) {
    phone.setCustomValidity('Invalid phone number');
    val = false;
  } else {
    phone.setCustomValidity('');
}
phone.reportValidity();
return val;
}
function customeAadharValidation(adharId) {
let aadhar_no = document.getElementById(adharId);
let aadharval = document.getElementById(adharId).value;
let val = true;

if (aadharval === '') {
  aadhar_no.setCustomValidity('Required');
  val = false;
} else if (!adharvalue(aadharval)) {
  aadhar_no.setCustomValidity('Invalid aadhar number');
  val = false;
} else {
  aadhar_no.setCustomValidity('');
}
aadhar_no.reportValidity();
return val;
}

function checkFirstName(fname) {
  let value;
  for (let i = 0; i < fname.length; i++) {
    let asciivalue = fname.charCodeAt(i);
    if (
      (asciivalue >= 65 && asciivalue <= 90) ||
      (asciivalue >= 97 && asciivalue <= 122)
    ) {
      value = true;
    } else {
      value = false;
      return value;
    }
  }
  return value;
}
function checkemail(emailid) {
  let condition;
  let atpostion = emailid.indexOf('@');
  let dotpostion = emailid.lastIndexOf('.');

  if (atpostion < 1 || emailid.endsWith('.')) {
    condition = false;
    return condition;
  } else if (atpostion < dotpostion && emailid.includes('.')) {
    condition = true;
  } else {
    condition = false;
    return condition;
  }
  return condition;
}
function adharvalue(adharno) {
  let value;
  if (adharno.length == 12) {
    value = checkAdhar(adharno);
  } else {
    value = false;
    return value;
  }
  return value;
}
function checkAdhar(adharNo) {
  let value;
  for (let i = 0; i < adharNo.length; i++) {
    let asciicode = adharNo.charCodeAt(i);
    if (asciicode >= 48 && asciicode <= 57) {
      value = true;
    } else {
      value = false;
      return value;
    }
  }
  return value;
}
function phonenumber(phoneinput) {
  let val = false;
  if (phoneinput.length < 11) {
    var a = checkno(phoneinput);
    val = a;
  }
  return val;
}
function checkno(number) {
  let val;
  for (let i = 0; i < number.length; i++) {
    let asciivalue = number.charCodeAt(i);
    if (asciivalue >= 48 && asciivalue <= 57) {
      val = true;
    } else {
      val = false;
      return val;
    }
  }
  return val;
}

