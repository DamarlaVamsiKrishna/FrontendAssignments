let year =document.getElementById("year");

let presentYear=new Date().getFullYear();
year.textContent=presentYear;

let user_warning=document.getElementById("user-warning");
let form=document.getElementById("form");
let pass_warning=document.getElementById("pass-warning");
let floatingInput =document.getElementById("floatingInput");
let floatingPassword=document.getElementById("floatingPassword");

let loginid=document.getElementById("loginid");

let  keys = Object.keys(localStorage);
console.log(keys)

loginid.addEventListener("click",(event)=>{
    if(floatingInput.value=="" || floatingInput.value==null){
        user_warning.textContent="*Username field is required";
       event.preventDefault();
    }
    if(floatingPassword.value=="" || floatingPassword==null){
        pass_warning.textContent="*Password field is required";
        event.preventDefault();
    }
    if (floatingPassword.value.length<4){
        pass_warning.textContent="password atleast requires 5 characters";
        event.preventDefault();
    }
    if(true){
        keys.map((employee)=>{
            let each= localStorage.getItem(employee);
            let parse_obj=JSON.parse(each);
            if (parse_obj.username==floatingInput.value && parse_obj.password==floatingPassword.value){
                location.href ="http://127.0.0.1:5500/Assessment/home.html";
            }
        })
    }
    
})