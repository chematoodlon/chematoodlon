//Autoplaying audio:
var ba = document.getElementById("bgAudio");
var st = document.getElementById("soundTrigger");
ba.style.display="none";
ba.style.visibility="hidden";

st.addEventListener('click',function(){
	st.style.display="none";
	st.style.visibility="hidden";
	ba.play();})