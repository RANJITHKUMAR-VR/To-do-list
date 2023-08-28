
    let list=[];
    window.onload=()=>{
    let list=JSON.parse(localStorage.getItem("item"))||[];
    list.forEach(ele=>setlist(ele))
    }
    const unorderlist=document.getElementById("list-container");
    function getvalue(){
    const input=document.getElementById("input");
    if(input.value==''){
        alert("You Must Write Something!")
    }
    setlist(input.value);
    input.value='';        
    }
    function setlist(a){
    const ul=document.getElementById("list-container");
    const li=document.createElement("li");
    if(a!=''){
    li.innerText=a;
    const span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
    list.push(a);
    localStorage.setItem("item",JSON.stringify(list));
    ul.append(li);
    }
    li.addEventListener('click',()=>{
    li.classList.add("checked");
    li.style.textDecoration="line-through";
    let z=li.innerText;
    remove(z.substring(0,a.length));
    })
    }
    function remove(li){
    const index=list.indexOf(li);
    if(index>-1){
    list.splice(index,1);
    }
    localStorage.setItem("item",JSON.stringify(list));
    }
    unorderlist.addEventListener('click',(e)=>{
    if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    }
    },false)