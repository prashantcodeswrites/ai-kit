var shTime=10000,
hrShareData=JSON.parse(localStorage.getItem("hrShareData")) || {video: "",time:0};

var hrShare={
	time: 0,vidName: null,int: false,
	adPan: op(".vidInAds"),

	start: (vidName)=>{
		hrShare.vidName= vidName;
		hrShare.int=setInterval(()=>{
			hrShare.increaseTime(vidName);
		},1000*60*5)
	},
	showShare:()=>{
		playing?playPause():'';
		hrShare.adPan.classList.add("active");
		hrShare.adPan.innerHTML=shareHTML();
		resetFormat();
	},

	closeShare:()=>{
		playPause();
		hrShare.adPan.classList.remove("active");
	},

	increaseTime: (vidName)=>{
		send("time increase "+hrShareData.time);
		if(hrShareData.video==vidName){
			hrShareData.time+=5;
		}else{
			hrShareData={
				video: vidName,time: 5
			}
		}
		if(hrShareData.time>=60){
			hrShare.showShare();
			hrShareData.time=0;
		}
		hrShare.updateData();
	},

	updateData: ()=>{
		localStorage.setItem("hrShareData",JSON.stringify(hrShareData));
	},

	end:()=>{
		clearInterval(hrShare.int);
		hrShare.time=0;
		hrShare.vidName=null;
	}
}

function shareHTML(txt="Share to continue..."){
	var msg=`Hey, I am watching ${vidSource.name || "this"} on Ai Player ${getLinkOrMid()}`;
	msg=encodeURI(msg);
	var html=`
	<div class="shareBx flex c" shared="false">
		<div class="head"><p col="#ff0055">${txt}</p></div>
		<div class="lined" fs=".8em">options</div>
		<div class="shBtn flex">
			<button class="noBtn flex" onclick="checkShare();shareCurent();" bg="linear-gradient(90deg,#ff6c00,#f40051)" ico="send"></button>
			<button class="noBtn flex" onclick="checkShare();this.children[0].click()" bg="linear-gradient(0deg,#06b900,#08f400)" ico="whatsapp"><a href="https://wa.me/?text=${msg}" hidden target="__blank"></a></button>
		</div>
	</div>
	`;
	return html;
}

var blurTime,tmxx;
function checkShare(){
	window.addEventListener("blur",blured);
	window.addEventListener("focus",focused);
}

function blured(e){
	log("blurd")
	blurTime=e.timeStamp;
	tmxx=setTimeout(shared,shTime);
}
function focused(e){
	log("focus")
	clearTimeout(tmxx);
	var diff=e.timeStamp - blurTime;
	if(diff>shTime){
		shared();
	}
}

function shared(){
	window.removeEventListener("blur",blured);
	window.removeEventListener("focus",focused);
	hrShareData.time=0;
	hrShare.updateData();
	hrShare.closeShare();
	send("/...Shared");
}