var input=document.querySelector('input');
var InputButton=document.querySelector('.addTask > button');
//DATE CODE
var date= new Date();
const dateElement = document.getElementById("date");
const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

InputButton.addEventListener('click', ToDoList);
function ToDoList(objectElement){
var compltedTask = document.querySelector('.Completed');
var NotCompltedTask=document.querySelector('.notCompleted');
var NewListAdd=document.createElement('li');
var compltedBtn=document.createElement('button');
var NotCompltedeBtn=document.createElement('button');

compltedBtn.innerHTML='<i class="fa fa-check"></i>';
NotCompltedeBtn.innerHTML='<i class="fa fa-trash"></i>';

if(input.value !==''){

	NewListAdd.textContent=input.value;
	input.value='';
	NotCompltedTask.appendChild(NewListAdd);
	NewListAdd.appendChild(compltedBtn);
	NewListAdd.appendChild(NotCompltedeBtn);

}
compltedBtn.addEventListener('click',function (){
  var parents = this.parentNode;
  parents.remove();
  compltedTask.appendChild(parents);
  compltedBtn.style.value='none';
})

NotCompltedeBtn.addEventListener('click', function(){
 var deleteParents = this.parentNode;
 deleteParents.remove();


});

};

