const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');

//sidebar
document.getElementById('toggle-btn').addEventListener('click', () => {
  const sidebarWidth = sidebar.offsetWidth;
  
  if(sidebar.style.left === '-250px') {
  sidebar.style.left = '0px';
  content.style.marginLeft = `${sidebarWidth}px`;
  } else {
    sidebar.style.left = '-250px';
    content.style.marginLeft = '0px';
  }
});

//drop-down
document.querySelector('#drop-down-div').addEventListener('change',function(){
      
    roleid = document.getElementById('get').value;
    deptid = document.getElementById('getdept').value;

    fetchDynamic('/getemployee?deptid='+deptid+'&roleid='+roleid+'', 'GET');
  })
  function fetchDynamic(url, method, data) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(url, {
          method: method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          const status = await response.json().then((data) => {
            populateTable(data);
          });
          return resolve(await response);
        } else {
          return reject(await response);
        }
      } catch (error) {
        reject(error);
      }
    });
  } 
  function populateTable(data) {
    let htmls = '';
    data.forEach((element) => {
      htmls +=
        `<tr>
          <td>`+element.empid +`</td>
          <td>` +element.first_name +`</td>
          <td>`+ element.last_name + `</td>
          <td>`+element.dept_name+`</td>
          <td>`+ element.role_name +`</td>
          <td>`+ element.email +`</td>
          <td>` +element.phone +`</td>
          <td>` + element.aadhar_no +`</td>
           <td>
            <button  id="forupdate" class="btn btn-primary" type="button" data-toggle="modal" data-id="`+element.empid+`"
              data-fname="`+element.first_name +`"
              data-lname="` +element.last_name + `"
              data-dept="` + element.dept_name + `"
              data-email="` + element.email + `"
              data-aadhar="` + element.aadhar_no +`"
              data-role="` +element.role_name + `"
              data-phone="` +element.phone +`"
              data-target=".mymodal" >Update </button><div
              class="modal fade mymodal" tabindex="-1" role="dialog"
              aria-labelledby="myLargeModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg">
                <div id="modaldata" class="modal-content">
                  <div id="form"></div>
                  <button type="button" class="btn btn-secondary mt-5" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary mt-2" id="updateButton">Update </button>
                </div>
              </div>
            </div>
            <button type="button" class="btn btn-danger" id="delete" delete-id="`+element.empid +`" data-toggle="modal"
              data-target="#deletemodal">Delete</button>
             <div class="modal fade" id="deletemodal" tabindex="-1" role="dialog"
              aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Delete record</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span></button>
                  </div>
                  <div class="modal-body">Are you sure!!!</div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" id="fordelete"> Confirm </button>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>`
    });
    document.querySelector('tbody').innerHTML = htmls;

      let deletebuttons = document.querySelectorAll('#delete');
      var empid;

      deletebuttons.forEach(function (button) {
        button.addEventListener('click', function () {
          empid = button.getAttribute('delete-id');
          console.log(empid);
        });
      });

     let fordelete = document.getElementById('fordelete');
     if(fordelete != null) {
        fordelete.addEventListener('click', function () {
          updateData('/deletedata?empid=' + empid + '', 'GET').then(
            function () {
              alert('Data deleted!');
            }
          );
        });
      }
    var buttons = document.querySelectorAll('#forupdate');
    var id;
    var fname;
    var lname;
    var dept;
    var email;
    var aadhar;
    var phone;
    var role;

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        id = button.getAttribute('data-id');
        fname = button.getAttribute('data-fname');
        lname = button.getAttribute('data-lname');
        dept = button.getAttribute('data-dept');
        role = button.getAttribute('data-role');
        email = button.getAttribute('data-email');
        phone = button.getAttribute('data-phone');
        aadhar = button.getAttribute('data-aadhar');

        var htmls =
          `<div class="form-inline">
    <div class="form-group mt-3 ml-3">
      <label for="fname">First name :</label>
      <div id="alertfname"></div>
      <input type="text" id="fname" class="form-control mx-sm-3"  value=` +fname +`>
      </div>
      <div class="form-group mt-3">
      <label for="fname">Last name :</label>
      <div id="alertlname"></div>
      <input type="text" id="lname" class="form-control mx-sm-3"  value=` +lname +`>
      </div>
    <div class="form-group ml-3 mt-4">
      <label for="dept">Department :</label>
      <select class="form-control" id="dept">
    <option value="1">Development</option>
    <option value="2">Testing</option>
    <option value="3">Accounting</option>
    <option value="4">HR</option>
  </select>
</div>

<div class="form-group ml-5 mt-4">
  <label for="dept">Role: </label>
  <select class="form-control" id="role">
    <option value="1">Manager</option>
    <option value="2">Team Lead</option>
    <option value="3">Employee</option>
    <option value="4">HR</option>
  </select>
  </div>
      <div class="form-group mt-4 ml-4">
      <label for="email">Email :</label>
      <div id="alertemail"></div>
      <input type="text" id="email" class="form-control mx-sm-3"  value=` +email +`>
      </div>
      <div class="form-group mt-4 ml-3">
      <label for="phone">Phone :</label>
      <div id="alertphone"></div>
      <input type="text" id="phone" class="form-control mx-sm-3"  value=` + phone + `>
      </div>
      <div class="form-group mt-4">
      <label for="aadhar">Aadhar no. :</label>
      <div id="alertaadhar"></div>
      <input type="text" id="aadhar" class="form-control mx-sm-3"  value=` +aadhar +`>
      </div>
    </div>
  </div>`;
         document.getElementById('form').innerHTML = htmls;
      });
    });

      let updateButtton = document.getElementById('updateButton')
      if(updateButtton != null) {
      updateButtton.addEventListener('click', async function () {

        if (customFnameValidation('fname') && customLnameValidation('lname') &&
            customPhoneValidation('phone') && customeAadharValidation('aadhar'))   {

               let fname = document.getElementById('fname').value;
              let lname = document.getElementById('lname').value;
              let dept = document.getElementById('dept').value;
              let role = document.getElementById('role').value;
              let email = document.getElementById('email').value;
              let phone = document.getElementById('phone').value;
              let aadhar = document.getElementById('aadhar').value;

              const obj = {
            empid: id,
            first_name: fname,
            last_name: lname,
            dept: dept,
            role: role,
            email: email,
            phone: phone,
            aadhar_no: aadhar,
          };
         let response =  await updateData('/updatedata', 'POST', obj).then( function () {
            alert('Records updated!');
          });
        }
      });
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
  function updateData(url, method, data) {
    try{
    return new Promise(async (resolve, reject) => {
      const response = await fetch(url, {
        method: method,
        headers:{'content-type': 'application/json'},
        body: JSON.stringify(data),
      }
      )
      if(response.ok){
        let res = response.json();
        console.log(res);
        return resolve(await response);
      } else{
        return reject(await response)
      }
    });
  } catch{
    reject(error);
  }
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


  // function sendUpdateData(url, method, obj) {
  //   return new Promise((resolve, reject) => {
  //     const type = {
  //       method: method,
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(obj),
  //     };

  //     fetch(url, type)
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error(`HTTP Error Status: + ${response.status}`);
  //         }
  //         return response;
  //       })
  //       .then((data) => {
  //         resolve(data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   });
  // }