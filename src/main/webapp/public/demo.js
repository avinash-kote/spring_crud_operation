// function showalldata(data){
//  data.forEach(element => {
//    let tbody = document.getElementById('tbody');

//       let tr= document.createElement('tr');

//       let td= document.createElement('td');
//       let td1= document.createElement('td');
//       let td2= document.createElement('td');
//       let td3= document.createElement('td');
//       let td4= document.createElement('td');
//       let td5= document.createElement('td');
//       let td6= document.createElement('td');
//       let i1 = document.createElement('i');

//       i1.className = 'ri-delete-bin-line icons';
//       i1.id = 'deletebtn';

//       td.textContent= element.empid;
//       td1.textContent= element.first_name;
//       td2.textContent= element.last_name;
//       td3.textContent= element.email;
//       td4.textContent= element.aadhar_no;
//       td5.textContent= element.phone;

//       // td6.innerHTML = `<i class="ri-delete-bin-line icons" id="deletebtn" style="color:red"></i>
//       //                  <i class="ri-edit-box-line icons" id="updatebtn" style="color:green"></i>`;
      
//       td6.appendChild(i1);
//       tr.appendChild(td);
//       tr.appendChild(td1);
//       tr.appendChild(td2);
//       tr.appendChild(td3);
//       tr.appendChild(td4);
//       tr.appendChild(td5);
//       tr.appendChild(td6);
                        
//      tbody.appendChild(tr); 
          
//  });
// }

// let deletebtns = document.querySelectorAll('#deletebtn');
// console.log(deletebtns);
// deletebtns.forEach((deletebtn) => {
//   deletebtn.addEventListener('click', () => {
//   console.log('delete btn clicked');
// });
// });