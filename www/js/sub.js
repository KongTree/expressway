
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


 $(document).ready(function(){
	 	
	 	var a = location.href;
	 	var text = a.split("?");
	 	var location = decodeURI(text[1]);
	 
	 	url = "http://data.ex.co.kr/exopenapi/ctsrMngmEtctPrcd/prmpHelpOrg?serviceKey=mvuSIY2E%2BVY4OD0KGyrojpZhHqvElxiBqStfA3k7vUnIAbAuATHycNsmBKSU7WgUUBBG%2BYsrpdVzQIbcA0%2BNwA%3D%3D&type=xml&nsCode=0010";
	 	
		$.ajax({
			type : "GET",
			url : url,
			cache : false,
			dataType : "xml",
			success : onSuccess
		});
	
	 
	 function onSuccess(data){
		 $(data).find("prmpHelpOrgLists").each(function(){
			
					$("#result").append("<li>" + $(this).find("addr").text() +"</li>");
					$("#result").listview("refresh");
				
				
		 });
	 }
 });
 