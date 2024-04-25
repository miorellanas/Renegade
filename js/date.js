var dateMonth = document.getElementById("date-month");
var dateDay = document.getElementById("date-day");
var dateYear = document.getElementById("date-year");
var modal = document.getElementById("modal");


var options_strD = "";
var options_strM = "";
var options_strY = "";

let currentDate = new Date();
let currentYear = currentDate.getFullYear();

for(var i = 1; i <= 12; i++){
    options_strM += '<option value="' + i + '">' + i + '</option>';
}

for(var i = 1; i <= 31; i++){
    options_strD += '<option value="' + i + '">' + i + '</option>';
}

for(var i = currentYear; i >= currentYear-100; i--){
  options_strY += '<option value="' + i + '">' + i + '</option>';
}

dateMonth.innerHTML = options_strM;
dateDay.innerHTML = options_strD;
dateYear.innerHTML = options_strY;


function verDate(){
    //var value = e.value;
    //var text = e.options[e.selectedIndex].text;
    let birthdate = new Date(dateYear.options[dateYear.selectedIndex].text +'-'+ dateMonth.options[dateMonth.selectedIndex].text +'-'+  dateDay.options[dateDay.selectedIndex].text);
    console.log(birthdate.toLocaleString());
    var d = new Date();
    d.setDate(d.getDate() - 6570);
    console.log(d.toLocaleString());

    if(birthdate <= d){
        console.log("mayor de 18 años");
        modal.style.display = "none"
    }
    else{
        console.log("menor de 18 años");
        window.close();
    }
    
}