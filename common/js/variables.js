/*This will be loaden in firs of page*/
iniatializevars();

opp("*[ico]").forEach(val=>{
	val.insertAdjacentHTML("beforeend",elems[val.getAttribute("ico")]);
})
function iniatializevars(){
	elems={
		search:`<svg viewBox="0 0 20 20"><path d="M8.5 3a5.5 5.5 0 014.23 9.02l4.12 4.13a.5.5 0 01-.63.76l-.07-.06-4.13-4.12A5.5 5.5 0 118.5 3zm0 1a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"></path></svg>`,
		cut:`<svg viewBox="0 0 512 512"><path stroke="#444" stroke-linecap="round" stroke-width="32" d="M368 368L144 144M368 144L144 368" /></svg>`,
		help: `
<svg viewBox="0 0 512 512"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"></path></svg>`,

		quality: `
<svg viewBox="0 0 24 24" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 3H3v18h18V3zM11 15H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm2-6h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4V9zm1.5 4.5h2v-3h-2v3z"/></svg>`,

		speed: `
<svg viewBox="0 0 24 24" fill="#fff"><path d="M0 0h24v24H0z" fill="none"/><path d="M19.46 10a1 1 0 0 0-.07 1 7.55 7.55 0 0 1 .52 1.81 8 8 0 0 1-.69 4.73 1 1 0 0 1-.89.53H5.68a1 1 0 0 1-.89-.54A8 8 0 0 1 13 6.06a7.69 7.69 0 0 1 2.11.56 1 1 0 0 0 1-.07 1 1 0 0 0-.17-1.76A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0 .55-8.89 1 1 0 0 0-1.75-.11z"/><path d="M10.59 12.59a2 2 0 0 0 2.83 2.83l5.66-8.49z"/></svg>`,

		play: `
<svg class="" viewBox="0 0 512 512"><path d="M96 448l320-192L96 64v384z"/></svg>`,
		pause: `
<svg viewBox="0 0 512 512"><path d="M224 432h-80V80h80zM368 432h-80V80h80z"/></svg>`,

		previous: `
<svg xmlns viewBox="0 0 512 512"><path d="M143.47 64v163.52L416 64v384L143.47 284.48V448H96V64h47.47z"/></svg>`,
		download: `
<svg width="20" height="20" viewBox="0 0 20 20"><path d="M15.5 17a.5.5 0 01.09 1H4.5a.5.5 0 01-.09-1H15.5zM10 2a.5.5 0 01.5.41V14.3l3.64-3.65a.5.5 0 01.64-.06l.07.06c.17.17.2.44.06.63l-.06.07-4.5 4.5a.5.5 0 01-.25.14L10 16a.5.5 0 01-.4-.2l-4.46-4.45a.5.5 0 01.64-.76l.07.06 3.65 3.64V2.5c0-.28.22-.5.5-.5z" fill-rule="nonzero"></path></svg>
`,

		sound: `
<svg viewBox="0 0 512 512"><path d="M157.65 176.1H64v159.8h93.65L288 440V72L157.65 176.1z"/><path d="M352 320c9.74-19.41 16-40.81 16-64 0-23.51-6-44.4-16-64M400 368c19.48-34 32-64 32-112s-12-77.7-32-112" fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="32"/></svg>`,

		brightness: `
<svg enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="#fff"><rect fill="none" height="24" width="24"/><path d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"/></svg>`,
		share: `
<svg viewBox="0 0 448 512"><path d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"></path></svg>`
	}
	elems.next=elems.previous.replace("xmlns","style='transform: rotateY(180deg)' xmlns")

}

elems.video=`<svg viewBox="0 0 512 512"><title>Videocam</title><path d="M464 384.39a32 32 0 01-13-2.77 15.77 15.77 0 01-2.71-1.54l-82.71-58.22A32 32 0 01352 295.7v-79.4a32 32 0 0113.58-26.16l82.71-58.22a15.77 15.77 0 012.71-1.54 32 32 0 0145 29.24v192.76a32 32 0 01-32 32zM268 400H84a68.07 68.07 0 01-68-68V180a68.07 68.07 0 0168-68h184.48A67.6 67.6 0 01336 179.52V332a68.07 68.07 0 01-68 68z"/></svg>`;
elems.audio=`<svg viewBox="0 0 512 512"><title>Musical Notes</title><path d="M421.84 37.37a25.86 25.86 0 00-22.6-4.46L199.92 86.49A32.3 32.3 0 00176 118v226c0 6.74-4.36 12.56-11.11 14.83l-.12.05-52 18C92.88 383.53 80 402 80 423.91a55.54 55.54 0 0023.23 45.63A54.78 54.78 0 00135.34 480a55.82 55.82 0 0017.75-2.93l.38-.13 21.84-7.94A47.84 47.84 0 00208 423.91v-212c0-7.29 4.77-13.21 12.16-15.07l.21-.06L395 150.14a4 4 0 015 3.86v141.93c0 6.75-4.25 12.38-11.11 14.68l-.25.09-50.89 18.11A49.09 49.09 0 00304 375.92a55.67 55.67 0 0023.23 45.8 54.63 54.63 0 0049.88 7.35l.36-.12 21.84-7.95A47.83 47.83 0 00432 375.92V58a25.74 25.74 0 00-10.16-20.63z"/></svg>`
