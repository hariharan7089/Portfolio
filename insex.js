let input=document.getElementById("input");
let list=document.getElementById("list")
let button=document.getElementById("button")
function add(){
  if(input.value){
    const item=input.value ;
    input.value="";
     const li=document.createElement("li");
     li.innerHTML= `${item} <i></i>`;
     li.addEventListener("click",()=>{
    li.classList.toggle('done')
     })
     list.appendChild(li);
     li.querySelector("i").addEventListener("click",()=>{
      li.remove();
     });
  }
 
}
const btn=document.querySelector(".button");
btn.addEventListener("click", () => {
  const liItems = document.querySelectorAll("li");
  liItems.forEach((li) => {
    li.remove();
  });
});


