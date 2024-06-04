
var ul = document.getElementById('show')
var input = document.getElementById('text')
var button = document.getElementById('btn')

//Creat li

button.addEventListener('click', function(){
   var li = document.createElement('li')

   var userText = document.createTextNode(input.value)
   li.appendChild(userText)
//creat button
   let addbutton=document.createElement('button')
   var addtext=document.createTextNode('X')
   addbutton.appendChild(addtext)
   li.appendChild(addbutton)
//end button
   addbutton.setAttribute('id', 'abc')
//creat button
var edit=document.createElement('button')
var edittext=document.createTextNode('Edit')
edit.appendChild(edittext)
li.appendChild(edit)
//end button

edit.addEventListener('click' ,function(event){
   let userText = prompt("Enter a Text");
   let newText = document.createTextNode(userText);
   edit.parentElement.replaceChild(newText, edit.parentElement.childNodes[0]);
})

//remove and  show in console.log
addbutton.addEventListener('click' ,function(e){
console.log(e.target.id=li);
li.remove()
//end
})

ul.appendChild(li)
input.value =''
})

