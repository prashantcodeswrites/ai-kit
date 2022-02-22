var shTime=10000,
lastShare=localStorage.getItem("lastShare") || 0;

var hrShare={
	time: 0,vidName: null,tim:0,
	adPan: op(".vidInAds"),

	start: (vidName)=>{
		log("sh started")
		hrShare.vidName= vidName;
		hrShare.tim=setInterval(()=>{
			if(video.currentTime > video.duration/2 && lastShare!=video.src){
				hrShare.showShare();
			}
		},60*1000);
	},
	showShare:()=>{
		playing?playPause():'';
		hrShare.adPan.classList.add("active");
		hrShare.adPan.innerHTML=shareHTML();
		resetFormat();
		send("/...Shown to share");
	},

	closeShare:()=>{
		if(Blur.time>10){
			playPause();
			hrShare.adPan.classList.remove("active");
			clearInterval(hrShare.tim);
			Blur.blurChecking=false;
			window.removeEventListener("focus",hrShare.closeShare);
			shared();
		}
	},

	updateData: ()=>{
		localStorage.setItem("lastShare",video.src);
	},

	end:()=>{
		hrShare.closeShare();
		hrShare.time=0;
		hrShare.vidName=null;
	}
}

function shared(){
	window.removeEventListener("blur",blured);
	window.removeEventListener("focus",focused);
	lastShare=video.src;
	hrShare.updateData();
	hrShare.closeShare();
	send("/...Shared");
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

function checkShare(){
	Blur.blurChecking=true;
	window.addEventListener("focus",hrShare.closeShare);
	send("/...clicked to share");
}