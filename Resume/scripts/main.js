
let myButton = document.querySelector('button#b1');
let myHeading = document.querySelector('#register');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } 
	else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome: ' + myName;
  }
}

if(!localStorage.getItem('name')) {	
  setUserName(); 
}
	else {	
		let storedName = localStorage.getItem('name'); 
		myHeading.textContent = 'Welcome: ' + storedName; 
}

myButton.onclick = function() {
  setUserName();
}

let mb = document.querySelector('button#b2');

function h_s() {
    let z = document.getElementById('Resume');
    if (z.style.display === "none") {
        z.style.display = "block";
    } else {
        z.style.display = "none";
    }
}

mb.onclick = function() {
  h_s();
}




