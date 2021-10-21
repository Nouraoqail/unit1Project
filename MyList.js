
/*GET THE ITEMS */
const body=document.querySelector('body')
const div=document.createElement("div")
div.id="tablediv";
const table=document.createElement("table")
body.append(div)
div.append(table)
let td=document.createElement('td'); 
td.innerHTML=JSON.parse(localStorage.getItem('array'));
table.append(td);

 //i'm gonna fix the page order here and fix the table.
