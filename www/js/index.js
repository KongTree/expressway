
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
    	/*
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
		*/
        console.log('Received Event: ' + id);
    }
};

app.initialize();



function fun1(code){

	acc="http://data.ex.co.kr/exopenapi/emrgWkPrcd/ctsrQcrp?serviceKey=mvuSIY2E%2BVY4OD0KGyrojpZhHqvElxiBqStfA3k7vUnIAbAuATHycNsmBKSU7WgUUBBG%2BYsrpdVzQIbcA0%2BNwA%3D%3D&type=xml&routeCode=" + code;
	count = 0;
	
	$.ajax({
		type : "GET",
		url : acc,
		cache : false,
		dataType : "xml",
		success : Accident
		});
}

function Accident(data){
		 $("#accident").text("");
		 $(data).find("realUnitTrtmVO").each(function(){
			 if(count == 0)
			{
					$("#accident").append($(this).find("acdtTmmp").text() + "<br>");
					$("#accident").append($(this).find("cntpCntn").text() + "<br>");
					$("#accident").append($(this).find("enptPosi").text() + "<br>");
					$("#accident").append($(this).find("harmCntn").text() + "<br>");
					$("#accident").append($(this).find("hdngPosi").text() + "<br>");
					$("#accident").append($(this).find("stpnPosi").text() + "<br>");
					count=1;
			}
		});
}


function fun2() {
	scount = 0;
	snow="http://data.ex.co.kr/exopenapi/ctsrRiskMap/snowLeakSect?serviceKey=mvuSIY2E%2BVY4OD0KGyrojpZhHqvElxiBqStfA3k7vUnIAbAuATHycNsmBKSU7WgUUBBG%2BYsrpdVzQIbcA0%2BNwA%3D%3D&type=xml";
			
	$.ajax({
		type : "GET",
		url : snow,
		cache : false,
		dataType : "xml",
		success : Snow
		});
}
function Snow(data){
	$("#snow").text("");
	
	$(data).find("snowLeakSecLists").each(function(){
		if(scount == 0)
			{
			$("#snow").append($(this).find("brof").text() + "<br>");
			$("#snow").append($(this).find("lnctCrvn").text() + "<br>");
			$("#snow").append($(this).find("mnof").text() + "<br>");
			$("#snow").append($(this).find("planeCrvn").text() + "<br>");
			$("#snow").append($(this).find("slcnReason").text() + "<br>");
				scount = 1;
			}
	});

}
  $(document).ready(function(){
    $(".nsCode").click(function(){
    	var code = $(this).attr("value"); 
    	
		fun1(code);
		fun2();
    });
  });