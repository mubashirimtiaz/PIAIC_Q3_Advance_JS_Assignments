$ = clue => document.querySelectorAll(clue);
const inputs = $('input');

const pattern = {
    stdname : /^[a-z]{3,30}((\s[a-z]{3,30})+)?$/i,
    stdemail : /^[\w\.-]{3,30}@[a-z]{2,10}\.[a-z]{2,10}(\.[a-z]{2,10})?$/i,
    stdfathername : /^[a-z]{3,30}((\s[a-z]{3,30})+)?$/i,
    stdcnic: /^[\d]{5}-[\d]{7}-[\d]{1}$/,
    stdaddress : /^[\w#\.:&-,\s]{20,200}$/i,
}

validate = (field,regex) => {
    if (regex.test(field.value)) {
        field.className = 'valid';
    }else{
        field.className = 'invalid';
    }
}

inputs.forEach((input)=>{
    input.addEventListener('keyup',(e)=>{
        validate(e.target,pattern[e.target.attributes.name.value]);
    })
})