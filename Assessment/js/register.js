
let confirm_pass_warning=document.getElementById("confirm-pass-warning");
let user_warning=document.getElementById("user-warning");
let pass_warning=document.getElementById("pass-warning");
let floatingInput =document.getElementById("floatingInput");
let floatingPassword=document.getElementById("floatingPassword");
let floatingconfirmPassword=document.getElementById("floatingconfirmPassword");

let form_register=document.getElementById("form_register");

function match(){
    let matched=floatingconfirmPassword.value==floatingPassword.value;
        if (matched){
            confirm_pass_warning.textContent="password matched";
            confirm_pass_warning.style.color="green";
        }else{
            confirm_pass_warning.textContent="password is not matched";
            confirm_pass_warning.style.color="red";
        }
}

let submitdetails =document.getElementById("submitdetails");

let firstname=document.getElementById("firstname");
let lastname=document.getElementById("lastname");
let address=document.getElementById("address");
let phnumber=document.getElementById("phnumber");

submitdetails.addEventListener("click",(event)=>{

    if(floatingInput.value=="" || floatingInput.value==null){
        user_warning.textContent="*Username field required";
        event.preventDefault();
    }
    if(floatingPassword.value=="" || floatingPassword==null){
        pass_warning.textContent="*password field required";
        event.preventDefault();
    }
    if (floatingPassword.value.length<4){
        pass_warning.textContent="password atleast requires 5 characters";
        event.preventDefault();
    }
    if(floatingconfirmPassword.value!=floatingPassword.value){
        alert("confirm password");
        event.preventDefault();
    }
    if(true){
 
        let obj={
            firstname:firstname.value,
            lastname:lastname.value,
            username:floatingInput.value,
            password:floatingPassword.value,
            address: address.value,
            phone:phnumber.value
        }

        function getemployee(){
            let stringified_obj= localStorage.getItem(`${firstname.value}`);
            let parsed_emp=JSON.parse(stringified_obj);
            if (parsed_emp===null){
                return [];
            }else{
                return parsed_emp;
            }
        }

        localStorage.setItem(`${firstname.value}`,JSON.stringify(obj));
         let emp_list=getemployee();
    }

    
})
let  keys = Object.keys(localStorage)

for (x of keys){
   let each= localStorage.getItem(x);
   let parse_obj=JSON.parse(each)
    console.log(parse_obj)
}

submitdetails.onclick=function () {
    location.href = "http://127.0.0.1:5500/Assessment/success_registration.html";
};
