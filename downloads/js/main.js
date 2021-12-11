addIcons();


function addIcons(){
	opp("*[ico]").forEach(val=>{
		val.insertAdjacentHTML("beforeend",elems[val.getAttribute("ico")]);
		val.removeAttribute("ico");
	})
}