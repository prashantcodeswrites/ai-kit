ads={
	adsList:adAry,
	timer:'',
	vidInPan: op(".vidInAds"),
	head: op(".vidInAds .head"),
	adBox: op(".vidInAds .ads"),
	adSkiper: op("#adSkiper"),

	start: ()=>{
		ads.close();
		setTimeout(()=>{ads.addAdsInVid();},8*60*1000)

		ads.timer=setTimeout(()=>{
			ads.showAdInVid();
		},(10+Math.ceil(Math.random()*5))*60*1000)
	},
	close: ()=>{
		clearTimeout(ads.timer);
	},
	showAdInVid: ()=>{
		ads.setSkipper();
		ads.vidInPan.classList.add("active");
		playing?playPause():'';
		send("Shown ad in video: "+opp(".ads iframe").length);
	},
	hideAdInVid: ()=>{
		ads.vidInPan.classList.remove("active");
		playing?'':playPause();
		ads.start();
	},
	addAdsInVid: ()=>{
		ads.adsList=adAry;
		ads.head.innerHTML=`<span col="#005aff" fs="1.2em">/...Some great <b>Deals</b> on Amazon.</span>`;
		ads.adBox.innerHTML=ads.getRandomBanner();
		resetFormat();
	},

	getRandomBanner:()=>{
		let html='<div class="flex">',
		space=Math.floor(video.offsetWidth * 90/100);
		for(let i=0; i< space; i+=250){
			let amalnk=ads.adsList.splice(Math.floor(Math.random()*(ads.adsList.length)),1)[0];
			html+=getProduct(amalnk);
		}
		html+="</div>";
		return html;
	},
	setSkipper:()=>{
		function funxx(){
			ads.adSkiper.innerHTML=`Skip in ${timerxx}s`;
			timerxx--;
			if(timerxx==0){
				clearInterval(intxx);
				ads.adSkiper.classList.add("active");
				ads.adSkiper.innerHTML=`Skip Ad`;
			}
		}
		ads.adSkiper.classList.remove("active");
		let timerxx=4+Math.ceil(Math.random()*4),
		intxx;
		funxx();
		intxx=setInterval(funxx,1000);
	}
};

function getProduct(lnk){
	return lnk? `<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=priyanshu002b-21&language=en_IN&marketplace=amazon&region=IN&placement=${lnk}&show_border=true&link_opens_in_new_window=true"></iframe>`: "";
}