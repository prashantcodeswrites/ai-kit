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
	num:0,
	addPan: ()=>{
		var afterRowsPan=2,
		numrowmv=(Math.floor((op(".listPan").offsetWidth) / (op(".moviePan").offsetWidth+30)))*2,
		moviePan=opp(".moviePan.noAd");

		for(let i=0; i<moviePan.length; i++){
			moviePan[i].classList.remove("noAd");
			if(adsFun.num==0){
				log("ac")
				moviePan[i].insertAdjacentHTML("afterend",adsFun.brandHtml());
				adsFun.num++;
				resetFormat();
				continue;
			}
			if((i+1)%numrowmv==0){
				moviePan[i].insertAdjacentHTML("afterend",getAdPanHTML());
			}
		}
	},
/*BRAND ADS SYSTEM*/

	nextBrPan: (e)=>{
		if(fullScr){fullScrPan.click()}
		op(".brPan .p.active").classList.remove("active");
		var ns=e.getAttribute("toshow");
		e.children[ns].classList.add("active");
		e.setAttribute("toshow",Number(ns)+1);
	},
	brandHtml:()=>{
		var html=`<div class="moviePan flex c brPan" toshow='1'>
			<div class="p p1 flex c active" onclick="adsFun.nextBrPan(this.parentElement)">
				<h1>Your Brand Here</h1>
				<button class="noBtn">How ?</button>
				<p>Click to add</p>
			</div>
			<div class="p p2 flex c " onclick="adsFun.nextBrPan(this.parentElement)">
				<p>You can show ads of:</p>
				<ul>
					<li>Bussiness</li>
					<li>Youtube</li>
					<li>Social Media</li>
					<li>Your Store</li>
					<li>Other</li>
				</ul>
				<p fs=".9em">At very low prices</p>
				<button class="noBtn">Okey, Next</button>
			</div>
			<div class="p flex c p3" onclick="getBrData()">
				<div class="choice flex">
					<div class="prs flex c"><span>₹10</span><div></div><span class="flex c">
						<span>50</span>
						<span fs=".4em">ads</span>
					</span></div>
					<div class="prs flex c"><span>₹50</span><div></div><span class="flex c">
						<span>300</span>
						<span fs=".4em">ads</span>
					</span></div>
					<div class="prs flex c"><span>₹100</span><div></div><span class="flex c">
						<span>700</span>
						<span fs=".4em">ads</span>
					</span></div>
				</div>
				<button class="noBtn">Click Me</button>
			</div>
		</div>`;
		return html;
	},
}

/*BRAND ADS SYSTEM*/

var brData=[],nbx=0;
function getBrData(){
	nbx=0;brData=[];
	makeAdForm("Phone No.","+91 ");
	dialog.success=()=>{
		if(nbx==0){
			makeAdForm("Your Name");
		}else if(nbx==1){
			setTimeout(()=>{
				dialog.inside("Your request is submitted. You will soon get the call.");
				dialog.show();
				dialog.success=()=>{}
			},200)
		}
		nbx++;
	}
}

function sendBrandData(){
	log("to send data"+ brData.join(","));
	makeForm("https://docs.google.com/forms/d/e/1FAIpQLSf0gSOvUnUDiHwYCPk3q7X9OqzqaX7RHVHkY1AJL2UmlR8Kxg/formResponse",{
		"entry.1987061599":brData.join(","),
	})
}

function makeAdForm(toask,def=""){
	var html=`<span fs="1.2em">Thanks for your Interest</span>
		<input placeholder="${toask}" type="tel" id="dIn" class="noBtn" value="${def}">`;
	dialog.inside(html);
	dialog.buttons("Cancel","Next")
	dialog.show();

	op("#dIn").onchange=()=>{
		brData.push(op("#dIn").value);
		sendBrandData();
	}
}