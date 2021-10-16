let val;

val = document;
val = document.doctype;
val = document.head;
val = document.body;
val = document.URL;

// Can call but not recommended
val = document.forms;
val = document.forms[0];
// val = document.getElementById('form');
val = document.forms[0].id;
val = document.forms[0].action;
val = document.forms[0].method;


val = document.links;
val = document.links[3];
val = document.links[3].id;
val = document.links[3].href;
val = document.links[3].className;

val = document.links[0];
val = document.links[0].className;
val = document.links[0].classList;
val = document.links[0].classList[0];
val = document.links[0].classList[1];


val = document.images;
val = document.images[0];
val = document.images[0].src;
val = document.images[0].className;
val = document.images[0].classList;
val = document.images[0].alt;
val	= document.images[0].getAttribute("src");
val	= document.images[0].getAttribute("abc");

// console.log(val);


// Change Styling
document.getElementById("task-title").style.background = "grey";
document.getElementById("task-title").style.color = "#fff";
document.getElementById("task-title").style.padding = "5px";


// Change Content
document.getElementById("task-title").textContent = "My List";
document.getElementById("task-title").innerText = "My Tasks";
document.getElementById("task-title").innerHTML = "<span style='color:yellow;'>My List</span>";



const items = document.getElementsByClassName("collection-item");
// console.log(items);
// console.log(items[3]);
items[3].style.color="violet";
// items[3].innerText="Have to Shop";


const lis = document.getElementsByTagName("li");
// console.log(lis);
// console.log(lis[0]);
lis[0].style.color="red";
// lis[0].textContent = "Have to Visit";


// document.querySelector();
// console.log(document.querySelector('h4'));
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector(".task-title"));


// document.querySelector('li').style.color = "blue";
// document.querySelector("ul li").style.color ="green";
// document.querySelector('ul li:last-of-type').style.color = "blue";
// document.querySelector('ul li:nth-of-type(3)').style.color	="red";
// document.querySelector('ul li:nth-of-type(3)').innerText = "Have to Cook";


const listitems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listitems);


document.querySelector('ul li:nth-of-type(odd)').style.background="silver";
document.querySelector('ul li:nth-of-type(even)').style.background="grey";




// Cover HTML Collection to array
const lists  = document.getElementsByTagName('li');
// console.log(lists);
// console.log(lists.length);
// console.log(lists[1]);

const arrlis = Array.from(lists);

arrlis.forEach(function(arrli,idx){
	// console.log(arrli);
	// console.log(arrli.className);
	// arrli.innerText = "Hello";
	// arrli.textContent = `${idx} : Hello Myanmar`;
});



// document.querySelectorAll();
let itsqs = document.querySelector('.collection .collection-item');
let itsqsas = document.querySelectorAll('.collection .collection-item');
// console.log(itsqsas);
// console.log(itsqsas.length);
// console.log(itsqsas[2]);

itsqsas.forEach(function(itsqsa,idx){
	// console.log(itsqsa);
	// console.log(itsqsa.className);
	// itsqsa.textContent = "Hello World";
	// itsqsa.innerText = `${idx} : Hello World`;
});





const liodds = document.querySelectorAll('li:nth-child(odd)');
// console.log(liodds);
const lievens = document.querySelectorAll('li:nth-child(even)');
// console.log(lievens);
liodds.forEach(function(liodd){
	// console.log(liodd);
	liodd.style.background="gold";
});

for(let i=0 ; i < lievens.length ; i++){
	lievens[i].style.background="orange";
}



// children
let chil;
const getul = document.querySelector('ul.collection');
const getli = document.querySelector('li.collection-item');
// console.log(getli);

// chil = document.getElementsByClassName('collection-item');
// chil = document.getElementsByTagName('li');
// chil = document.querySelector('ul').getElementsByClassName('collection-item');

// Get children element (html collection)
chil = getul.children;
chil = getul.children[1];


// Children of children
chil = getul.children[1].children[0];
chil = getul.children[1].children[0].children[0];
chil = getul.children[1].children[0].children[0].className;


// First Child
chil = getul.firstElementChild;

// Last Child
chil = getul.lastElementChild;


//Count child elements 
// chil = getul.children.length;
chil = getul.childElementCount;

// Get Parent Element
chil = getli.parentElement;


//Get Next Sibling
chil =getli.nextElementSibling;
chil =getli.nextElementSibling.nextElementSibling;

// Get Previous Sibling
chil =getli.nextElementSibling.nextElementSibling.previousElementSibling;

// console.log(chil);


// Create Element
const li = document.createElement('li');

// Add id
li.id = "new-item";

// Add Class
li.className = "collection-item";


// Add setAttribute(att name,value)
li.setAttribute('title','new-item');


// Create Text Node
// li.innerText = "abc";
// li.textContent = "efg";
// li.innerHTML = "hij";

li.appendChild(document.createTextNode("Hello Mandalay"));
// console.log(li);

// create element for new link
const link = document.createElement('a');
// add attribute
link.setAttribute('href','#');
// add id
link.id = "delete-item6";
// add class
link.className="delete-item active";



link.innerHTML=`<i class="far fa-trash-alt"></i>`;
// console.log(link);

// Append link into li
li.appendChild(link);
// console.log(li);


// Append li as child into ul
document.querySelector('ul.collection').appendChild(li);




// Replace Element

// create element
const newheading = document.createElement('h2');

// add id
newheading.id = "task-title";

// add class
newheading.className = "task-title";

// create text node
newheading.appendChild(document.createTextNode("Task List"));
// console.log(newheading);

// get old heading
const oldheading = document.getElementById("task-title");
// console.log(oldheading);

// get parent
const cardaction = document.querySelector(".card-action");
// console.log(cardaction);

// Replace replaceChild(new,old)
cardaction.replaceChild(newheading,oldheading);





// Remove Element
const lts = document.querySelectorAll('li');
// console.log(lts[3]);
// lts[5].remove();

// Remove child Element
const ullts = document.querySelector('ul');
// console.log(ullts.children[2]);
// ullts.removeChild(ullts.children[5]);
// ullts.removeChild(lts[1]);


// Class
const firstli = document.querySelector('li');
// console.log(firstli.children[0]);
const flink = firstli.children[0];

// let lk = flink.className;
// console.log(lk);
// lk = flink.classList;
// console.log(lk);

// Change Class Selector name
// flink.className ="delete-item disable";

// Replace class (old,new)
// flink.classList.replace("active","disable");

// Add class
// flink.className = "delete-item active";
// flink.classList.add("disable");

// Attribute
let lk = flink.getAttribute('href');
// console.log(lk);
lk = flink.setAttribute('href',"#");



// addEventListener(type,function);
let clearbtn = document.querySelector(".clear-tasks");
// console.log(clearbtn);

// Method 1
// clearbtn.addEventListener('click',function(e){

// 	console.log("Hello World");
// 	// console.log(e);

// 	e.preventDefault();
// });

clearbtn.addEventListener("click",myclick);

function myclick(e){

	// console.log("Hello Myanamr");

	// console.log(e);


	let val;

	// val = e;
	val = e.target;
	val = e.target.className;
	val = e.target.classList;

	val = e.target.id;
	

	// e.target.innerText = "Click Me";

	// Event type
	val = e.type;

	// Coordinates event relative to the window
	// val = e.clientY;
	// val = e.clientX;

	// Coordinates event relative to the element
	// val = e.offsetY;
	val = e.offsetX;


	// console.log(val);


	e.preventDefault();
}




// Mouse Event
clearbtn = document.querySelector(".clear-tasks");
const card = document.querySelector('.card');
const heading = document.querySelector('h2');


// click
// clearbtn.addEventListener("click",runevent);

// double click
// clearbtn.addEventListener('dblclick',runevent);

// mousedown
// clearbtn.addEventListener('mousedown',runevent);

// mouseup
// clearbtn.addEventListener('mouseup',runevent);

// mouseenter
// card.addEventListener('mouseenter',runevent);

// mouseleave
// card.addEventListener('mouseleave',runevent);

// mousemove
// card.addEventListener('mousemove',runevent);

function runevent(e){
	// console.log(`Event type = ${e.type}`);

	// heading.textContent = `MouseX : ${e.offsetX} MouseY : ${e.offsetY}`;

	// document.body.style.background = `rgba(${e.offsetX},${e.offsetY},1)`;
}




// Input
let taskinput = document.getElementById('task');
// console.log(taskinput);
const form = document.querySelector("form");
// console.log(form);


// Get value by submit
// form.addEventListener("submit",runevent2);


// Get value by typing
// keydown
// taskinput.addEventListener('keydown',runevent2);

// keyup
// taskinput.addEventListener('keyup',runevent2);

//input (any kind of input event)
// taskinput.addEventListener('input',runevent2);

// keypress
// taskinput.addEventListener('keypress',runevent2);

// blur
// taskinput.addEventListener('blur',runevent2);

// focus
// taskinput.addEventListener('focus',runevent2);

// cut
// taskinput.addEventListener('cut',runevent2);

// paste
// taskinput.addEventListener('paste',runevent2);



function runevent2(e){
	console.log(`Event Type = ${e.type}`);

	// Get input value
	console.log(taskinput.value);

	// e.preventDefault();
}



// Event Bubbling vs Event Delegation

// Event Bubbling
// document.querySelector('.card-title').addEventListener('click',function(){
// 	console.log('i am card-title');
// });

// document.querySelector('.card-content').addEventListener('click',function(){
// 	console.log('i am card-content');
// });

// document.querySelector('.card').addEventListener('click',function(){
// 	console.log('i am card');
// });



// Event Delegation
const delitem = document.querySelector('.delete-item');
// console.log(delitem);

document.body.addEventListener('click',deleteitem);

function deleteitem(e){
	// console.log("hay");

	// console.log(e.target);
	// console.log(e.target.className);

	// if(e.target.className === "far fa-trash-alt"){
	// 	console.log('hay');
	// }

	// if(e.target.parentElement.className === "delete-item"){
	// 	// console.log('delete item');
	// 	console.log(e.target.parentElement);
	// }

	// if(e.target.parentElement.className === "delete-item active"){
	// 	// console.log('delete item');
	// 	console.log(e.target.parentElement);
	// }

	if(e.target.parentElement.classList.contains('active')){
		// console.log('delete item');
		// console.log(e.target.parentElement);

			// i    a           remove
		// e.target.parentElement.remove();

		    // i        a            li            remove
		e.target.parentElement.parentElement.remove();
	}

}




// STORAGE
document.querySelector('.form').addEventListener('submit',function(e){
	// console.log('hay');

	e.preventDefault();

	// const gettask = document.getElementById('task');
	// console.log(gettask);
	// const newtask = gettask.value;
	// console.log(newtask);

	const newtask = document.getElementById('task').value;
	// console.log(newtask);
	// localStorage.setItem('task',newtask);

	let myworks;
	// console.log(tasks);

	if(localStorage.getItem('tasks') === null){
		myworks = [];
	}else{
		myworks = JSON.parse(localStorage.getItem('tasks'));
	}

	// console.log(typeof myworks); 


	myworks.push(newtask);
	// console.log(myworks);

	localStorage.setItem('tasks',JSON.stringify(myworks));

	window.alert("New Task Saved");
	
});


let mytasks = JSON.parse(localStorage.getItem('tasks'));
console.log(mytasks);
console.log(typeof mytasks);
console.log(mytasks.length);
console.log(mytasks[1]);


mytasks.forEach(function(mytask){
	console.log(mytask);
});