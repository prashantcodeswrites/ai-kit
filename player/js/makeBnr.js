var mvtoshow=5,posPan=op(".posPan");

var html="";
for(let i=0; i<mvtoshow; i++){
	var mid=lastMid-i,val=movies[mid];
	html+=`<div class="pos" mid="${mid}">
		  		<img src="${val.img}" alt="${val.name}">
		  	 </div>`;
}
posPan.innerHTML=html;
var fistImgxx=op(".posPan img");
var tosub=(posPan.offsetWidth%fistImgxx.offsetWidth)/2-8;

var psLeft=[];
opp(".posPan .pos").forEach(val=>{
	psLeft.push(val.offsetLeft);
})

var scrNum=0;
posPan.addEventListener('scroll',userScroll);
autoscroll();
var scrInt=setInterval(autoscroll,3000);
function autoscroll(){
	posPan.removeEventListener('scroll',userScroll);
	posPan.scrollTo(psLeft[scrNum] - tosub,0);
	scrNum++;
	if(scrNum==mvtoshow){scrNum=0}
	setTimeout(()=>{
		posPan.addEventListener('scroll',userScroll);
	},1000)
}

function userScroll(){
	log('scroll of')
	clearInterval(scrInt);
}