function sendBookroom() {
	var Name =	document.getElementById('name').value;
	if (Name =="") {
		alert("Request to enter a name");
	}
	var Phone = document.getElementById('phone').value;
	if (Phone == "") {
		alert("Request to enter phone number");
	}
	var DayIn = document.getElementById('dayin').value;
	var toDay = new Date();
	if (toDay.getTime(DayIn) <= toDay.getTime()){
		alert("Ngay phai lon hon ngay hien tai");
	}
	var DayOut = document.getElementById('dayout').value;
	if (toDay.getTime(DayOut) >= toDay.getTime(DayIn))  {
		alert("Phai lon hon hoac bang ngay hien tai");
	}
	var aDult = document.getElementById('adult').value;
	if (aDult ==""){
		alert("Enter the number of people");
	}
	var children = document.getElementById('children').value;
	if (children > aDult){
		alert("Tre em phai nho hon hoac bang so nguoi lon");
	}
}
