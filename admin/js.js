var autoPaste=opp(".autoPaste");

autoPaste.forEach(val=>{
	val.addEventListener("focus",()=>{
		if(val.value==""){
			navigator.clipboard.readText().then(ret=>{
				val.value=ret || " ";
			});
		}
	})
})