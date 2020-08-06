//Autoplaying audio:
var ba = document.getElementById("bgAudio");
var st = document.getElementById("soundTrigger");
ba.style.display="none";
ba.style.visibility="hidden";

st.addEventListener('click',function(){
	st.style.display="none";
	st.style.visibility="hidden";
	ba.play();})
	
//Placing background video:
var vh = window.innerHeight;
var vw = window.innerWidth;
var sr = vw/vh;
var bv = document.getElementById("bgVideo");

if(sr<1.78){
	bv.style.height="100vh";
	bv.style.left="-50%";
	}
else{
	bv.style.width="100vw";
	bv.style.left="0%";
	}