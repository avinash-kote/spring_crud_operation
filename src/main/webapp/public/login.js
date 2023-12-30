let password = document.getElementById('pwd');
let pwdIcon = document.getElementById('pwdicon');

pwdIcon.addEventListener('click', () => {

    if (password.type === 'password') {
        password.type = 'text'; 
        pwdIcon.className = 'ri-eye-off-line';
    } else {
        password.type = 'password';
        pwdIcon.className = 'ri-eye-line';
    }
});

document.getElementById('btn').addEventListener('click', async () => {

    let email = document.getElementById('email').value;
    let pwd = document.getElementById('pwd').value;     
    
     if (customvalid('email') && customvalid('pwd') && alertEmail('email')) {

      const obj = {
      email: email,
      password: pwd,
     };
        sendData('/authentication', 'POST', obj);
     }
 });

     function sendData(url, method, data) {
      let objData;
 try {
    return new Promise(async (resolve, reject) => {

    const res = await fetch(url, {
    method: method,
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(data),
    });
    if (res.ok) {  
        objData = res;
     await res.json().then((data) => {
        validation(data);
     });
    return resolve(await res);
    } else{
        objData = res;
        reject(await res);
    }
 });    
    } catch (error) {
    reject(error)
    }
 }
 function validation(data) {
    console.log('Inside validation: ',data.status);
    const res = data.status;

    if (res === 'success') {
      window.location.href='/Emp/dashboard'
    } else if(res === 'userError'){
    alert('User not found!');
    }else if(res === 'passwordError') {
    alert('Invalid Password!');
    }else {
        alert('Invalid Credentials!')
    }
}
function alertEmail(alertInput) {
  let emailInput = document.getElementById(alertInput);
  let emailValue = document.getElementById(alertInput).value;
  let val;

  if (! checkemail(emailValue)) {
    emailInput.setCustomValidity("Invalid email");
    value=false;
  } else {
    emailInput.setCustomValidity(" ");
    value = true;
  }

  emailInput.reportValidity();
  return value;
}

function customvalid(inputId){
let value;
const inputValue = document.getElementById(inputId).value;
 const input = document.getElementById(inputId);

 if (inputValue === '') {
  value = false;
  input.setCustomValidity("Required");
 } else {
  value = true;
  input.setCustomValidity('');
 }
 input.reportValidity();
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

    const themes = [
    {
        background: "#1A1A2E",
        color: "#FFFFFF",
        primaryColor: "#0F3460"
    },
    {
        background: "#461220",
        color: "#FFFFFF",
        primaryColor: "#E94560"
    },
    {
        background: "#192A51",
        color: "#FFFFFF",
        primaryColor: "#967AA1"
    },
    {
        background: "#F7B267",
        color: "#000000",
        primaryColor: "#F4845F"
    },
    {
        background: "#F25F5C",
        color: "#000000",
        primaryColor: "#642B36"
    },
    {
        background: "#231F20",
        color: "#FFF",
        primaryColor: "#BB4430"
    }
];

const setTheme = (theme) => {
    const root = document.querySelector(":root");
    root.style.setProperty("--background", theme.background);
    root.style.setProperty("--color", theme.color);
    root.style.setProperty("--primary-color", theme.primaryColor);
    root.style.setProperty("--glass-color", theme.glassColor);
};

const displayThemeButtons = () => {
    const btnContainer = document.querySelector(".theme-btn-container");
    themes.forEach((theme) => {
        const div = document.createElement("div");
        div.className = "theme-btn";
        div.style.cssText = `background: ${theme.background}; width: 25px; height: 25px`;
        btnContainer.appendChild(div);
        div.addEventListener("click", () => setTheme(theme));
    });
};

displayThemeButtons();