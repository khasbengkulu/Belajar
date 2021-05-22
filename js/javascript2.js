function cek() {
var a=document.forms["Z"]["pass"].value;
var b=document.forms["Z"]["pass1"].value;
if (a!=b) {
	alert("password harus sama");
}
else{
	alert("Berhasil mendaftar, Silakan Login ");
	window.open("login.html");
}


}