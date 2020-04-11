$ = clue => document.querySelector(clue);

const userInput = $('input[type=text]');
const addBtn = $('.addBtn');
const table = $('table');
const dltAllBtn = $('.deleteAll')
let myList = [];
const todoCard = $('.todo-card')

dltAllBtn.classList.add('invisible')

addBtn.addEventListener('click', () => {
    // if (userInput.value) {
        // alert("Write SomeThing");
        myList.push(userInput.value);
        build();
        // console.log(myList)
        // console.log(userInput.value);
        userInput.value = "";
    // } 
});



function build() {
    const tbody = document.createElement('tbody');
    const deldiv = document.createElement('div');
    for (let i = 0; i < myList.length; i++) {
        console.log(i)
        // var row, cell1, cell2;
        var row = document.createElement('tr');
        // row.ind = i;
        var cell1 = document.createElement('td');
        var div = document.createElement('div');
        div.setAttribute('class', 'form-check');
        var chkBox = document.createElement('input');
        chkBox.setAttribute('type', 'checkbox');
        chkBox.setAttribute('class', 'form-check-input');
        var label = document.createElement('label');
        label.setAttribute('class', 'form-check-label');
        label.innerHTML = myList[i];
        div.appendChild(chkBox);
        div.appendChild(label);
        cell1.appendChild(div);
        row.appendChild(cell1);
        var cell2 = document.createElement('td');
        var dltBtn = document.createElement('i');
        dltBtn.setAttribute('class', 'fas fa-trash invisible');
        dltBtn.addEventListener('click', () => {
            myList.splice(i, 1);
            tbody.deleteRow(i);
        })
        var count = 1;
        div.addEventListener('click', () => {
            count++;
            if (count % 2 === 0) {
                chkBox.checked = true;
                dltBtn.classList.add('show');
                dltBtn.classList.remove('invisible');
            } else {
                chkBox.checked = false;
                dltBtn.classList.remove('show');
                dltBtn.classList.add('invisible');
            }
        });
        cell2.appendChild(dltBtn);
        row.appendChild(cell2);
        tbody.appendChild(row);
        deldiv.setAttribute('class', 'text-right');
        var span1 = document.createElement('span');
        span1.setAttribute('class', 'deleteAll invisible');
        span1.innerText = "Delete All";
        var delAllBtn = document.createElement('i');
        delAllBtn.setAttribute('class', 'fas fa-trash');
        span1.appendChild(delAllBtn);
        deldiv.appendChild(span1);
    }
    todoCard.appendChild(deldiv);
    
    table.appendChild(tbody);
}
function validate(field, regex) {
    if (regex.test(field.value)) {
        console.log("pass");
        addBtn.disabled = false;

    } else {
        console.log("fail");
        addBtn.disabled = true;
    }


}
addBtn.disabled = true;

const pattern = {
    todo: /^[\w\s-\.]{2,50}$/
}

userInput.addEventListener('keyup', (e) => {
    switch (e.keyCode) {
        case 13:
            myList.push(userInput.value);
            console.log(myList)
            build();
            console.log(userInput.value);
            userInput.value = "";
            break;

        default:
            break;
    }
    validate(e.target, pattern[e.target.attributes.name.value]);
});

