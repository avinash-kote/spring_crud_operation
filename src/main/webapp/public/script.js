const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');
const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', () => {
    const sidebarWidth = sidebar.offsetWidth;

    if (sidebar.style.left === '0px') {
        sidebar.style.left = `-${sidebarWidth}px`;
        content.style.marginLeft = '0';
    } else {
        sidebar.style.left = '0';
        content.style.marginLeft = `${sidebarWidth}px`;
    }
});

function updatetime() {
    let  a = new Date();
    let s = a.getSeconds();
    let m = a.getMinutes();
    let h = a.getHours();

   h = h < 10 ? '0' + h : h;
   m = m < 10? '0' + m : m;
   s = s < 10 ? '0' + s : s;

   let greeting = '';
   if ((h >= '0' && m <= '59') && (h <= '11' && m <= '59') ) {
       greeting = 'Good Morning!';
   } else if ((h >= '12' && m <= '59') && (h <= '16' && m <= '59')) {
       greeting = 'Good Afternoon!';      
   } else if((h >= '17' && m <= '59') && (h<= '20' && m <= '59')) {
       greeting = 'Good Evening!';
   }else if((h >= '21' && m <= '59') && (h <= '23'&& m <= '59')){
    greeting = 'Good Night!';
   }
   document.getElementById('time').innerHTML = h + ':' + m + ':' + s +'';
   document.getElementById('greeting').innerHTML = greeting;
}

updatetime();
setInterval(updatetime, 1000);

document.getElementById('darkmode').addEventListener('click',() => {
    let a = document.getElementById('darkmode');
    let tag = document.getElementById('itag');
    let modal = document.querySelector('.modal');
    if(a.checked){
        document.body.style.backgroundColor ="black";
        document.body.style.color = "white";
        tag.classList.remove("fa-moon-o");
        tag.classList.add("fa","fa-sun-o");
        modal.style.color = "black";
    
    }else{
        document.body.style.backgroundColor ="white";
        document.body.style.color = "black";
        tag.classList.remove("fa-sun-o");
        tag.classList.add("fa","fa-moon-o");
    }
})