let lastClickedItem = 1; 
let numOfColors = 4;

function catalogItemClicked(id){
    var lastClickedDiv = $(`#${lastClickedItem}`);
    lastClickedDiv.removeClass("product-catalog-selected");
    lastClickedDiv.addClass("product-catalog-unselected");
    lastClickedItem = id;

    var clickedItem = $(`#${id}`);
    clickedItem.removeClass("product-catalog-unselected");
    clickedItem.addClass("product-catalog-selected");
}

function slideRight(){
    $(document).ready(function(){
        $(".slide-animation").animate({left: '0px'},1000);
    });
}

function drawColorChooser(strDivId){
    var parentDiv = document.getElementById(strDivId);
	for(var i = 0; i < numOfColors; i++){
		var div = document.createElement("div");
		div.id = strDivId + "-" + i;
		div.className = "product-catalog-color-square space-between-colors-squares";
		var r = Math.floor(Math.random() * 255);
		var g = Math.floor(Math.random() * 255);
		var b = Math.floor(Math.random() * 255);
		div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
		div.onclick = drawOutline;
		parentDiv.append(div);
	}
	document.getElementById(strDivId+"-0").click(); //click the first color square so that the outline is visible
}

function setNumColors(num){
	numOfColors = num; 
}

function drawOutline(event){
	var clickedDivId =  event.target.id;
	for(var i = 0; i < numOfColors; i++){
        var id = clickedDivId.split("-")[0] + "-" + i;
		if(id === clickedDivId){
            var element =  document.getElementById(id);
			element.className = "product-catalog-color-square space-between-colors-squares product-catalog-draw-outline";
		}else{
            var element =  document.getElementById(id);
			element.className = "product-catalog-color-square space-between-colors-squares product-catalog-remove-outline";
		}
	}
}
