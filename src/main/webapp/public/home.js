//sidebar
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');

document.getElementById('toggle-btn').addEventListener('click', () => {
    const sidebarWidth = sidebar.offsetWidth;

    if(sidebar.style.left === '-250px') {
        sidebar.style.left = '0px';
        content.style.marginLeft = `${sidebarWidth}px`;
     } else {
        sidebar.style.left = '-250px';
        content.style.marginLeft = '0px'
     }
});
// button
document.getElementById('clickbutt').addEventListener('click', function () {

    if (customEmailValidation('email') && customFnameValidation('fname') &&
      customeAadharValidation('adhar') && customLnameValidation('lname') &&
       customPhoneValidation('phoneno') && customPasswordValidation('pwd')) {

        let fname = document.getElementById('fname').value;
        let lname = document.getElementById('lname').value;
        let emailid = document.getElementById('email').value;
        let adharno = document.getElementById('adhar').value;
        let phoneinput = document.getElementById('phoneno').value;
        let pwd = document.getElementById('pwd').value;
        let dept = document.getElementById('dept').value;
        let role_no = document.getElementById('role').value;

         var obj = {
        first_name: fname,
        last_name: lname,
        email: emailid,
        phone: phoneinput,
        aadhar_no: adharno,
        dept: dept,
        role: role_no,
        password: pwd,
      };
     senddata('/registerdata', 'POST', obj).then((responsedata) => {
        alert('Record submitted!')
      });    
    }  
  });

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
    } else if(! checkLastName(lnameval)) {
      lname.setCustomValidity('Invalid last name');
      val = false;
    } else{
      lname.setCustomValidity('');
    }

    lname.reportValidity();
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
function customPasswordValidation(pwdId) {
  let pwd = document.getElementById(pwdId);
  let pwdval = document.getElementById(pwdId).value;
  let val = true;

  if (pwdval === '') {
    pwd.setCustomValidity('Required');
    val = false;
  } else if (pwdval.length < 8) {
    pwd.setCustomValidity('Password must contain minimum 8 characters.');
    val = false;
  } else {
    pwd.setCustomValidity('');
  }
  pwd.reportValidity();
  return val;
}
  function senddata(url, method, obj) {
   
    return new Promise((resolve, reject) => {
      const a = {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
      };
      fetch(url, a)
        .then((response) => {
          if (!response.ok) {
            objData = response;
          console.log(response);
            throw new Error('Error occured');
          }
          objData = response
          const status = response.json();
        console.log(status);
          return status;
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  function phonenumber(phoneinput) {
    let val = false;
    if (phoneinput.length == 10) {
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

  function checkLastName(lname) {
    let value;
    for (let i = 0; i < lname.length; i++) {
      let asciivalue = lname.charCodeAt(i);
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