let numOfColors = 0;
let lastClickedSquare = 1;

function drawColorChooser(){
	var parentDiv = document.getElementById("colors");
	for(var i = 0; i < numOfColors; i++){
		var div = document.createElement("div");
		div.id = i;
		div.className = "product-color-circle space-between-colors";
		var r = Math.floor(Math.random() * 255);
		var g = Math.floor(Math.random() * 255);
		var b = Math.floor(Math.random() * 255);
		div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
		div.onclick = drawOutline;
		parentDiv.append(div);
	}
	document.getElementById("0").click();
}

function setNumColors(num){
	numOfColors = num; 
}

function drawOutline(event){
	var divId =  event.target.id;
	console.log(divId)
	for(var i = 0; i < numOfColors; i++){
		if(i == divId){
			var element =  document.getElementById(i);
			element.className = "product-color-circle space-between-colors draw-outline";
			changeColorBlock(element);
		}else{
			var element =  document.getElementById(i);
			element.className = "product-color-circle space-between-colors remove-outline";
		}
	}
}

function changeColorBlock(div){
	var element = document.getElementById("leftBlock");
	element.style.backgroundColor = div.style.backgroundColor;
}

function next(){
	$('.owl-next').triggerHandler('click');
}

function prev(){
	$('.owl-prev').triggerHandler('click');
}

function initCarousel(){
	$(document).ready(function() {
		$('.owl-carousel').owlCarousel({
			loop:true,
			margin:10,
			items:3,
			dots: false
		})
	})
}

function nextColorImage(){
	var noneClicked = true;
	for(var i = 0; i < numOfColors; i++){
		var outline = $(`#${i}`).css("outline");
		if(!outline.endsWith("0px")){
			i++;
			if(i >= numOfColors) i = 0;
			var nextElement = document.getElementById(i);
			nextElement.click();
			noneClicked = false;
			break;
		}
	}

	if(noneClicked){
		if(numOfColors === 1) document.getElementById(0).click();
		else document.getElementById(numOfColors - (numOfColors - 1)).click();
	}
}

function prevColorImage(){
	var noneClicked = true;
	for(var i = 0; i < numOfColors; i++){
		var outline = $(`#${i}`).css("outline");
		if(!outline.endsWith("0px")){
			i--;
			if(i < 0) i = numOfColors - 1;
			var nextElement = document.getElementById(i);
			nextElement.click();
			noneClicked = false;
			break;
		}
	}

	if(noneClicked){
		if(numOfColors === 1) document.getElementById(0).click();
		else document.getElementById(numOfColors - (numOfColors - 1)).click();
	}
}