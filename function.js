

function changeColor(){
	var borderR = document.getElementById('borderR').value;
	var borderG = document.getElementById('borderG').value;
	var borderB = document.getElementById('borderB').value;
	var backgroundR = document.getElementById('backgroundR').value;
	var backgroundG = document.getElementById('backgroundG').value;
	var backgroundB = document.getElementById('backgroundB').value;
	var borderWidth = document.getElementById('borderWidth').value;

	var tag = document.getElementById('paragraph');
	tag.style.borderColor = `rgb(${borderR},${borderG},${borderB})`;
	tag.style.borderWidth = `${borderWidth}px`;
	tag.style.backgroundColor = `rgb(${backgroundR},${backgroundG},${backgroundB})`;
}

function checkPasswords(){
	var p1 = document.getElementById('p1').value;
	var p2 = document.getElementById('p2').value;

	if (p1.length < 8){
		alert('first password is less than 8 characters')
	} else if (p2.length < 8){
		alert('second password is less than 8 characters')
	} else if (p1 != p2) {
		alert('passwords dont match')
	} else{
		alert('everything is good')
	}
}
