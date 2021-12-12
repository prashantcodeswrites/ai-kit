/*domelems*/
var srh=op("#link"),
srhBox=op(".srhPan"),
search=op("#search"),
downPan=op(".downPan"),
thumbnail=op("#thumbnail img"),
linkPan=op("#linkPan");

var videoFetched;

addIcons();

function showFetched(res){
  videoFetched=res
  thumbnail.src=res.data.thumbnail;
  thumbnail.onload=()=>{
    thumbnail.parentElement.classList.add("loaded");
  }

  let media={
    audio: [],video: []
  }
  let video_with_no_sound=[];

  for(let val of res.data.formats){
    if(val.ext=="m4a" && val.acodec!="none"){
      media.audio.push({"url":val.url});
    }
    if(val.ext=="mp4" && val.acodec!="none"){
      media.video.push({"height":val.height,"url":val.url});
    }
    if(val.ext=="mp4" && val.acodec=="none"){
      video_with_no_sound.push({"height":val.height,"url":val.url});
    }
  }
  removeLoadAnim();
  showVideo(media,video_with_no_sound);
}

function showVideo(obj,vidOnly){
  var htmlxx=`<h2 class="texCen vidName" col="#555">${videoFetched.data.title || ""}</h2>`,lnkList="";
  
  for(let val in obj){
      obj[val].map(res=>{
      lnkList=`<div class="lnk flex">
        <span ico="${val}"></span>
        <p class="flex"><span>${res.height?res.height+" HD":"Quality: unknown"}</span></p>
        <a ico="play" target="__blank" href="https://ai-player.netlify.app?mlnk='${res.url.replaceAll("&","~~")}'"></a>
        <a ico="download" target="__blank" download="file" href="${res.url}"></a>
      </div>`+lnkList;
    })
    htmlxx+=lnkList!=""?`<div class="type"><div class="head">${val.replace("_"," ")}</div>${lnkList}</div>`:"";
  }
  lnkList="";
  vidOnly.map(res=>{
    lnkList=`<div class="lnk"><a ico="download" target="__blank" download="${srh.value}" href="${res.url}">Size : ${res.height || "Unknown"}</a></div>`+lnkList;
  });
  htmlxx+=lnkList!=""?`<div class="type"><div class="head">video with no sound</div><div class="otherLink flex">${lnkList}</div></div>`:"";

  linkPan.innerHTML=htmlxx;
  resetFormat();
  addIcons();
}

function doSearch(){
  if(srh.value==""){srh.focus();return "";}
  loadUrl(srh.value);
}
function loadUrl(url){
    srhBox.classList.add("loading");
    downPan.classList.add("downloads");
    setTimeout(scrollToDownPan,3000);
    fetch(`https://www.download4.cc/media/parse?address=${url}`).then(ret=>{return ret.json()}).then(showFetched).catch(failed);
}

function failed(res){
  log(res);
  resetSearch();
  alert("Failed to get the video.")
}
function resetSearch(){
  downPan.classList.remove("downloads");
  linkPan.innerHTML="";
  srhBox.classList.remove("loading");
}
function scrollToDownPan(){
    location.assign("#thumbnail");
}

function addIcons(){
    opp("*[ico]").forEach(val=>{
        val.insertAdjacentHTML("beforeend",elems[val.getAttribute("ico")]);
        val.removeAttribute("ico");
    })
}
srh.oninput=()=>removeLoadAnim;
function removeLoadAnim(){
  if(srhBox.classList.contains("loading")){srhBox.classList.remove("loading");}
}