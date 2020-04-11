// console.log("before function");

// greet = (name) => {
//     var greeting = " Hello"
//     console.log(greeting + " " + name);

//     setTimeout(()=>{
//         console.log(greeting + " again " + name);
//     },3000);
// }

// greet("ali");
// console.log("after function");
$ = clue => document.querySelector(clue);

var userInput = $('input[type=text]');
var addBtn = $('.addBtn');
var tblRow = document.querySelectorAll('tr')
var tbl = $('tbody');
var delBtn = document.querySelectorAll('.delBtn');
var chkBox = document.querySelectorAll('input[type=checkbox]');
var chkLabel = document.querySelectorAll(".form-check-label");

chkLabel.forEach((e,index)=>{
    var count = 1
    e.addEventListener('click',(e)=>{
        count++;
        if(count%2 === 0){
        chkBox[index].checked= true;
            
        }else{
        chkBox[index].checked= false;

        }
    })
});
delBtn.forEach((e,index)=>{
    e.addEventListener('click',()=>{
        tbl.deleteRow(index);
        console.log(index)
    })
})


addBtn.addEventListener('click',()=>{
    var newRow = document.createElement('tr');
    var rowData1 = document.createElement('td');
    var rowData2 = document.createElement('td');
    // var rowData3 =document.createElement('td');
    // rowData1 = chkBox[0];
    rowData1.innerHTML = ` <div class="form-check">
    <input type="checkbox" class="form-check-input">
    <label class="form-check-label">${userInput.value}</label>
  </div>`;
  rowData1.addEventListener('click',()=>{

  })
    // console.log(userInput.value)
    // rowData3 = delBtn[0];
    // newRow.appendChild(rowData1);
    newRow.appendChild(rowData2);
    // newRow.appendChild(rowData3);
    if (userInput.value === "") {
        alert('Type Something')
    }
})
