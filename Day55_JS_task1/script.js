
const list = document.querySelector('ul');
const listItems = document.querySelectorAll('li');

let input = document.querySelector('#input');
let addBtn = document.querySelector('.button');
addBtn.addEventListener("click",addNewElement);

function addNewElement(){
  if(input.value == ""){
    alert('Please enter a valid!')
  }
  else{
    let newLi = document.createElement('li');
    newLi.innerText = input.value;
  
    let closeSpan = createClose();
    newLi.appendChild(closeSpan);
    list.appendChild(newLi);
  
    closeSpan.onclick = e=>close(e.target);
  
    newLi.onclick = e=>checkedToggle(e.target);
  }
}

function addClose(){
  listItems.forEach(x=>{
    let closeSpan = createClose();
    x.appendChild(closeSpan);
  })
}


function createClose(){
  let closeElement = document.createElement('span');
  closeElement.classList.add("close");
  closeElement.innerText = "x";

  return closeElement;
}


function checkedToggle(element){
  element.classList.toggle("checked");
}

listItems.forEach(elem=>{
  elem.addEventListener("click",function(e){
    checkedToggle(elem);
  })
})

document.querySelectorAll(".close").forEach(elem=>{
  elem.addEventListener("click",function(e){
    close(elem);
  })
})


function close(element){
  element.parentElement.remove();
}


listItems.forEach(elem=>{
  let closeElement = document.createElement('span');
  closeElement.classList.add("close");
  closeElement.innerText = "x";

  elem.appendChild(closeElement);

  closeElement.onclick = e=>close(e.target);
})