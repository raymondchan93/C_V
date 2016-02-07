
var PP = [
{"display":"NRIC:930730-08-5685"},
{"display":"Nationality:Malaysian"},
{"display":"Date of birth:30 July 1993"},
{"display":"Gender:Male"},
{"display":"Marital Status:Single"},
{"display":"Health:Excellent"},
{"display":"Height:170CM"},
{"display":"Weight:64KG"},
{"display":"Languages:Bahasa Malaysia/English/Mandarin"}
];

var EB = [
{"display":"2010 – 2015 : Semester 4, UMS, Computer Engineering Current CGPA: 3.72"},
{"display":"1998 – 2001 : Pre-University, STPM, Kolej Tunku Abdul Rahman CGPA: 3.25"},
{"display":"1996 – 1997 : SPM, SMK La Salle, Klang 7A3B"}

];
        
var WE= [
{"display":"March 2011: As a cashier in Popular book store, Aeon Bukit Tinggi"},
{"display":"June 2015:Promoter in Tesco, Shah Alam"},
{"display":"July 2015:As a real estate agent in Midvally property fair."},
{"display":"Mini Project: <tab1> 1).Making a binary count decimal using LED light</tab1>"},
{"display":" <tab2>             2).Creating an App in Android using Eclipse</tab2>"},
{"display":" <tab2>               3).Create an Compiler using BISON.</tab2> "}
];

var ECA = [
{"display":"January 2010-December2011:Active member of The Badminton Club (Form 5)"},
{"display":"January 2010-December2011:Active member of Leo Club (Form 5)"},
{"display":"July 2012-December 2013:Active member of the Red Cross (Form 6)"},
{"display":"September 2013-June 2015:Class representative for Computer Engineering "},
{"display":"September 2013-January2014:Class representative for Networking Club"},

];

var SK = [
{"display":"<b><p1>Computer Engineering</p1></b>"},
{"display":"-Computer engineering is a discipline that integrates several"}, 
{"display":"<tab3>fields of electrical engineering and computer science required to develop </tab3>"},
{"display":"<tab3>computer hardware and software.Computer Project Management</tab3>"},
{"display":"-C++ BUILDER, MATLAB, MICROELECTRONICS"},
{"display":"<tab3>DEVELOPMENT LANGUAGE MICROPROCESSOR (8085),</tab3>"},
{"display":"<tab3>BISON, ECLIPSE FOR ANDRIOD DEVELOPMENT.</tab3>"},

];

var PC = [
{"display":"Willing to work as individual or in a group and lead a group to achieve certain"},
{"display":"objective if necessary. Willing to learn from others as well as share what I"}, 
{"display":"learned to others generously. Inability to multitask but focus on a task to perform"},
{"display":"to ensure success and willing to take responsibility for any mistakes I made. "},


];
var RF = [

{"display":"<b>Dr.MAZLINA BINTI MAMAT</b>"},
{"display":"Senior Lecturer "}, 
{"display":"Faculty of Engineering,"},
{"display":"Jalan UMS, 88400 Kota Kinabalu,"},
{"display":"Sabah."},
{"display":"Tel.:+6088-320000 (3090)"},
{"display":"Email:mazlina.mamat77@gmail.com"},

{"display":"<b>Dr.RAZAK MOHD ALI LEE</b>"},
{"display":"Senior Lecturer "}, 
{"display":"Faculty of Engineering,"},
{"display":"Jalan UMS, 88400 Kota Kinabalu,"},
{"display":"Sabah."},
{"display":"Tel.:+6088-320000 (3090)"},
{"display":"Email: razak_mal@ums.edu.my"},

{"display":"<b>ASSOCIATE PROFESSOR DR. FARRAH WONG</b>"},
{"display":"Head of Computer Engineering Program "}, 
{"display":"Faculty of Engineering,"},
{"display":"Jalan UMS, 88400 Kota Kinabalu,"},
{"display":"Sabah."},
{"display":"Tel.:Tel: +6-088-320000 (3058)"},
{"display":"Email:farrah@ums.edu.my"},

];
myFunctionPP(PP);

function myFunctionPP(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<a>' + 
        arr[i].display + '</a><br>';
    }
    document.getElementById("PP").innerHTML = out;
}

myFunctionEB(EB);

function myFunctionEB(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<a>' + 
        arr[i].display + '</a><br>';
    }
    document.getElementById("EB").innerHTML = out;
}

myFunctionWE(WE);

function myFunctionWE(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<a>' + 
        arr[i].display + '</a><br>';
    }
    document.getElementById("WE").innerHTML = out;
}

myFunctionECA(ECA);

function myFunctionECA(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<a>' + 
        arr[i].display + '</a><br>';
    }
    document.getElementById("ECA").innerHTML = out;
}


myFunctionSK(SK);

function myFunctionSK(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<a>' + 
        arr[i].display + '</a><br>';
    }
    document.getElementById("SK").innerHTML = out;
}

myFunctionPC(PC);

function myFunctionPC(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<a>' + 
        arr[i].display + '</a><br>';
    }
    document.getElementById("PC").innerHTML = out;
}

myFunctionRF(RF);

function myFunctionRF(arr) {
    var out = "";
    var i=0;
    var y;
    var stop=7;
 for(y = 0; y < 3; y++) {
    out += '<td>';
    for(; i < stop; i++) {
        out += '<a>' + 
        arr[i].display + '</a><br>';
    }
    out += '</td>';
    stop=stop+7;
}
    document.getElementById("RF").innerHTML = out;
}

	    	   
	  	    	   
