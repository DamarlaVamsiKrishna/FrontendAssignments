let navbar_text=document.querySelector(".navbar-text");

let date=new Date();

let current_date=`Date :${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} Time : ${ date.toLocaleString('en-US', { hour: 'numeric', hour12: true })}`

navbar_text.innerHTML=current_date;

let year=document.getElementById("year");

year.textContent=date.getFullYear();