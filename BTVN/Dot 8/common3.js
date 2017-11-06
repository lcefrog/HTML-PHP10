var day;
switch (new Date().getDay()) {
    case 0:
        day = " là Chủ nhật";
        break;
    case 6:
        day = "Thứ 7";
        break;
    default : {
        day = "khong phai cuoi tuan"
    }
document.getElementById("demo").innerHTML = "Hom nay " + day;
}
//Bai 2
var myDay = "2017-01-31";
var myDayForMay = new Date(myDay);
console.log(myDayForMay.getFullYear());
console.log(myDayForMay.getMonth()+1);
console.log(myDayForMay.getDate());

if (myDayForMay.getFullYear() > 0) {
}
else{
	document.write('Sai dinh dang')
}
if (myDayForMay.getMonth()+1 > 12){
	document.write('Sai dinh dang')
}

for(var n = 0; n <= 10; n++){
	document.write("so can in la "  + n);
	document.write("<br>");
}

var count = 0;
    document.write("Starting Loop ");
 
    while (count < 10){
       document.write("Current Count : " + count + "<br />");
       count++;
    }
 
    document.write("Loop stopped!");
}
//Thuoc tinh ngoai .value cung co the de la .src (thay hinh anh) hoac .href (thay link)
document.getElementById('').src=""

