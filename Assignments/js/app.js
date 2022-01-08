let employee_array=[

    {
        name:"ram",
        id:1,
        skill:"HTML",
        salary:10000,
        e_mail:"ram@gmail.com",
    },
    {
        name:"prabas",
        id:2,
        skill:"css",
        salary:1000000,
        e_mail:"prabas@gmail.com",
    },
    {
        name:"vijay",
        id:3,
        skill:"java",
        salary:15000,
        e_mail:"vijay@thoughtfocus.com",
    },
    {
        name:"charan",
        id:4,
        skill:"HTML",
        salary:10000,
        e_mail:"charan@thoughtfocus.com",
    },
    {
        name:"pavan",
        id:5,
        skill:"java",
        salary:1000000,
        e_mail:"pavan@thoughtfocus.com",
    }

]

employee_array.sort((a,b)=>{
    if (a.name>b.name){
        return 1;
    }else if(a.name<b.name){
        return -1;
    }else{
        return 0;
    }
});

console.log(employee_array)

let name_list=document.getElementById("employee_names");

employee_array.map((employee)=>{
    let li_item=document.createElement("li");
    name_list.appendChild(li_item);
    li_item.classList.add("li_item");
    li_item.textContent=`${employee.name}`; 
})


let skill_filter=document.getElementById("skill_filter");
let input_skill=document.getElementById("input_skill");

input_skill.addEventListener("keypress",()=>{
    if (event.key=='Enter'){
        let input_text=event.target.value
        console.log(input_text.toLowerCase());

        let filtered_employees=employee_array.filter((employee)=>employee.skill==input_text);

        console.log(filtered_employees);

        if (filtered_employees.length!=0){
            for (let each of filtered_employees){
                console.log(each.name);
                let li_item=document.createElement("li");
                skill_filter.appendChild(li_item);
                li_item.classList.add("li_item");
                li_item.textContent=`Name : ${each.name} skill : ${each.skill}`; 
            }
        }else{
            skill_filter.textContent="No employees with the given skill";
        }
    }
})

let salary_hike= document.getElementById("salary_hike");

employee_array.map((employee)=>{
    employee.salary=employee.salary*0.05+employee.salary;
    let li_item=document.createElement("li");
    li_item.classList.add("li_item");
    salary_hike.appendChild(li_item);
    li_item.textContent=`Name : ${employee.name} & Updated salary : ${employee.salary}`
})



let delete_employee =document.getElementById("delete_employee");
let delete_id=document.getElementById("delete_id");

delete_id.addEventListener("keypress",()=>{
    if (event.key=="Enter"){
        let counter=0;
        employee_array.map((employee)=>{
            counter=counter+1;
            if(employee.id==event.target.value){
                counter=counter-1;
                employee_array.splice(employee_array.indexOf(employee),1);
                console.log(employee_array);
                delete_employee.textContent=`Employee with name: ${employee.name} deleted`;
            }
        })
        if (employee_array.length==counter){
            delete_employee.textContent="No employee with the given id"
        }
    }
})

let netsalary_id=document.getElementById("netsalary_id");

let a=500;
let total_bill=employee_array.reduce((prevValue,currentValue)=>{
    return prevValue+currentValue.salary;
},a);

netsalary_id.textContent=`Total net salary of company is :${total_bill}`;


let status_check =document.getElementById("status_check");
let status_id=document.getElementById("status_id");

status_id.addEventListener("keypress",()=>{
    if (event.key=="Enter"){
        let counter=0;
        employee_array.map((employee)=>{
            counter=counter+1;
            if(employee.id==event.target.value){
                counter=counter-1;
                status_check.textContent=`Yes employee is in the list`;
                //let myTimeout=setTimeout(()=>{status_check.textContent="";},3000);
            }
        })
        if (employee_array.length==counter){
            status_check.textContent="";
            alert("Employee not exsisted")
        }
    }
})

let clear_button=document.getElementById("clear_button");

clear_button.onclick=function(){
    console.log("cleared....");
    status_check.textContent="";
    //clearTimeout(myTimeout);
}


let addbuttonid =document.getElementById("addbuttonid");

function addbutton(){
    let emp_name=document.getElementById("emp_name").value;
    let emp_id=document.getElementById("emp_id").value;
    let emp_skill=document.getElementById("emp_skill").value;
    let emp_salary=document.getElementById("emp_salary").value;
    let emp_mail=document.getElementById("emp_mail").value;
    console.log(emp_name)

    employee_array[5]={
        name : emp_name,
        id: parseInt(emp_id),
        skill : emp_skill,
        salary :parseInt(emp_salary),
        emp_mail : emp_mail
    }
    console.log(employee_array)
}

let checkmailid =document.getElementById("checkmailid");
let check=document.getElementById("check");
let checkcontent=document.getElementById("checkcontent");

check.onclick=function(){
    let res=employee_array.find((employee)=>employee.e_mail==checkmailid.value);
    console.log(res);
    if (res!=undefined){
        checkcontent.textContent="internal employee";
    }else{
        checkcontent.textContent="external employee";
        alert("External employee");
    }
}