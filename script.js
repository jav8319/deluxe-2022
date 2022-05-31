
var date=$("#custom1");

var timecomp=moment().format('LTS');
var today="";

var time00=$("#time1");
var time01=$("#time2");
var time02=$("#time3");
var time03=$("#time4");
var time04=$("#time5");
var time05=$("#time6");
var time06=$("#time7");
var time07=$("#time8");
var time08=$("#time9");
var time09=$("#time10");
var time10=$("#time11");

var inputre7am=localStorage.getItem("0sevenam");
var inputre8am=localStorage.getItem("0eigtham");
var inputre9am=localStorage.getItem("0nineam");
var inputre10am=localStorage.getItem("0tenam");
var inputre11am=localStorage.getItem("0elevenam");
var inputre12pm=localStorage.getItem("0twelvepm");
var inputre1pm=localStorage.getItem("0onepm");
var inputre2pm=localStorage.getItem("0twopm");
var inputre3pm=localStorage.getItem("0threepm");
var inputre4pm=localStorage.getItem("0fourpm");
var inputre5pm=localStorage.getItem("0fivepm");


time00.attr('placeholder', inputre7am);
time01.attr('placeholder', inputre8am);
time02.attr('placeholder', inputre9am);
time03.attr('placeholder', inputre10am);
time04.attr('placeholder', inputre11am);
time05.attr('placeholder', inputre12pm);
time06.attr('placeholder', inputre1pm);
time07.attr('placeholder', inputre2pm);
time08.attr('placeholder', inputre3pm);
time09.attr('placeholder', inputre4pm);
time10.attr('placeholder', inputre5pm);

var butsevenam=$("#button7am");
var buteigtham=$("#button8am");
var butnineam=$("#button9am");
var buttenam=$("#button10am");
var butelevenam=$("#button11am");
var buttwelvepm=$("#button12pm");
var butonepm=$("#button1pm");
var buttwopm=$("#button2pm");
var butthreepm=$("#button3pm");
var butfourpm=$("#button4pm");
var butfivepm=$("#button5pm");



butsevenam.on("click",seven)
buteigtham.on("click",eigth)
butnineam.on("click",nine)
buttenam.on("click",ten)
butelevenam.on("click",eleven)
buttwelvepm.on("click",twelve)
butonepm.on("click",onep)
buttwopm.on("click",twop)
butthreepm.on("click",threep)
butfourpm.on("click",fourp)
butfivepm.on("click",fivep)






function seven(event) {

    event.preventDefault();
    var input7am= $('input[name="sevenam"]').val();

    localStorage.setItem("0sevenam",input7am);
  
}

function eigth(event) {

    event.preventDefault();
    var input8am= $('input[name="eigtham"]').val();

    localStorage.setItem("0eigtham",input8am);
  
}

function nine(event) {

    event.preventDefault();
    var input9am= $('input[name="nineam"]').val();

    localStorage.setItem("0nineam",input9am);
  
}

function ten(event) {

    event.preventDefault();
    var input10am= $('input[name="tenam"]').val();

    localStorage.setItem("0tenam",input10am);
  
}

function eleven(event) {

    event.preventDefault();
    var input11am= $('input[name="elevenam"]').val();

    localStorage.setItem("0elevenam",input11am);
  
}

function twelve(event) {

    event.preventDefault();
    var input12pm= $('input[name="twelvepm"]').val();

    localStorage.setItem("0twelvepm",input12pm);
  
}

function onep(event) {

    event.preventDefault();
    var input1pm= $('input[name="onepm"]').val();

    localStorage.setItem("0onepm",input1pm);
  
}

function twop(event) {

    event.preventDefault();
    var input2pm= $('input[name="twopm"]').val();

    localStorage.setItem("0twopm",input2pm);
  
}

function threep(event) {

    event.preventDefault();
    var input3pm= $('input[name="threepm"]').val();

    localStorage.setItem("0threepm",input3pm);
  
}

function fourp(event) {

    event.preventDefault();
    var input4pm= $('input[name="fourpm"]').val();

    localStorage.setItem("0fourpm",input4pm);
  
}

function fivep(event) {

    event.preventDefault();
    var input5pm= $('input[name="fivepm"]').val();

    localStorage.setItem("0fivepm",input5pm);
  
}

setInterval(colors,1000);




function colors() {
    today = moment().format("dddd, MMMM Do YYYY, hh:mm:ss a");
    date.text(today);
    timecomp;
    now=timecomp.split("");

    if (now.length===10) {
            var conc=now[0].concat(now[8]);
    } else {
        var conc0=now[0].concat(now[1]);
        var conc=conc0.concat(now[9]);
    }

 
    if (conc==="7A") {
        time00.addClass("form-control color2");
    }else{
        time00.addClass("form-control color1");
    }

    if (conc==="8A") {
        time01.addClass("form-control color2")
    } else if((conc=="7A")) {
        time01.addClass("form-control color3")
    } else {
        time01.addClass("form-control color1")
    }

    if (conc==="9A") {
        time02.addClass("form-control color2")
    } else if((conc==="7A")||(conc==="8A")) {
        time02.addClass("form-control color3")
    } else {
        time02.addClass("form-control color1")
    }

    if (conc==="10A") {
        time03.addClass("form-control color2")
    } else if((conc==="7A")||(conc==="8A")||(conc==="9A")){ 
        time03.addClass("form-control color3")
    } else {
        time03.addClass("form-control color1")
    } 
    
    if (conc==="11A") {
        time04.addClass("form-control color2")
    } else if((conc==="7A")||(conc==="8A")||(conc==="9A") 
    ||(conc=="10A")){ 
        time04.addClass("form-control color3")
    } else {
        time04.addClass("form-control color1")
    } 

    if (conc==="12P") {
        time05.addClass("form-control color2")
    } else if((now[9]==="A")||(now[8]==="A")){ 
        time05.addClass("form-control color3")
    } else {
        time05.addClass("form-control color1")
    } 

    if (conc==="1P") {
        time06.addClass("form-control color2")
    } else if((now[9]==="A")||(conc==="12P")||(now[8]==="A")){ 
        time06.addClass("form-control color3")
    } else {
        time06.addClass("form-control color1")
    }
    
    if (conc==="2P") {
        time07.addClass("form-control color2")
    } else if((now[9]==="A")||(conc==="12P")
     ||(conc==="1P")||(now[8]==="A")){ 
        time07.addClass("form-control color3")
    } else {
        time07.addClass("form-control color1")
    } 

    if (conc==="3P") {
        time08.addClass("form-control color2")
    } else if((now[9]==="A")||(conc==="12P")
    ||(conc==="1P")||(now[8]==="A")||(conc==="2P")){ 
        time08.addClass("form-control color3")
    } else {
        time08.addClass("form-control color1")
    } 

    if (conc==="4P") {
        time09.addClass("form-control color2")
    } else if((now[9]==="A")||(conc==="12P")
    ||(conc==="1P")||(now[8]==="A")||(conc==="2P")
    ||(conc==="3P")){ 
        time09.addClass("form-control color3")
    } else {
        time09.addClass("form-control color1")
    } 

    if (conc==="5P") {
        time10.addClass("form-control color2")
    } else if((now[9]==="A")||(conc==="12P")
    ||(conc==="1P")||(now[8]==="A")||(conc==="2P")
    ||(conc==="3P")||(conc==="4P")){ 
        time10.addClass("form-control color3")
    } else {
        time10.addClass("form-control color1")
    } 
};  