var numShown=0; 
function getAds(){
	var numToShow=Math.floor(listPan.offsetWidth/130),
	htmlx="";
	for(let i=numShown; i<(numShown+numToShow); i++){
		htmlx+=`<div class="adBox">${adAry[i][0]}</div>`;
		if(i+1>=adAry.length){numShown=0}
	}
	numShown+=numToShow;
	return htmlx;
}

function getAdPanHTML(){
	return `<div class="adPan flex">${getAds()}</div>`;
}

var adsFun={
	addPan: ()=>{
		var afterRowsPan=2,
		numrowmv=(Math.floor((op(".listPan").offsetWidth) / (op(".moviePan").offsetWidth+30)))*2,
		moviePan=opp(".moviePan.noAd");

		for(let i=0; i<moviePan.length; i++){
			moviePan[i].classList.remove("noAd");
			if((i+1)%numrowmv==0){
				moviePan[i].insertAdjacentHTML("afterend",getAdPanHTML());
			}
		}
	},
}