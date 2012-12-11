var shirtDisplayArea = $('div#shirt_display_area');

generateZoomImage(shirtDisplayArea);
generateAccordions();
generateTriggers();
addLoadingGif();

function generateAccordions(){
	var accordions = $("#accordion_box .popup-accordion");
	for(var index = 0; index < accordions.length; index++){
		$(accordions[index]).accordion();
	}
}

function generateTriggers(){

	$(".ui-accordion-header").click(function(){
		$.colorbox.resize();
	});

	$("#cuffs_trigger").colorbox({"inline" : true, "href" : "div[data-type=Cuff]", "innerWidth" : "540"});
	$("#collar_trigger").colorbox({"inline" : true, "href" : "div[data-type=Collar]", "innerWidth" : "540"});
	$("#buttons_trigger").colorbox({"inline" : true, "href" : "div[data-type=Buttons]", "innerWidth" : "540"});
	$("#placket_trigger").colorbox({"inline" : true, "href" : "div[data-type=Placket]", "innerWidth" : "540"});
	$("#pocket_trigger").colorbox({"inline" : true, "href" : "div[data-type=Pocket]", "innerWidth" : "540"});
	$("#pleat_trigger").colorbox({"inline" : true, "href" : "div[data-type=Pleat]", "innerWidth" : "540"});

}

var displayDetails = {
	"base" : "img/Base2.png",
	"cuff" : "img/Cuff2.png",
	"cuffInner" : "img/CuffInner2.png",
	"collar" : "img/Collar2.png",
	"innerCollarFront" : "img/InnerCollarFront2.png",
	"innerCollarBack" : "img/InnerCollarBack2.png",
	"sleeve" : "img/sleeve2.png",
	"tag" : "",
	"pocket" : ""
};

function getOptions(selectedOptions){
	//Fancy ajax request to wub wub
}

function applyOptions(options){
	$("#loadingGifOverlay").fadeIn();

	//apply fancy wub wub returned request to display model
	for(var displayObject in options){
		shirtDisplayArea.find("[data-type=" + displayObject +"]").attr("src", options[displayObject]);
	}

	shirtDisplayArea.imagesLoaded(removeLoadingGif);
}

function addLoadingGif(){
	$("#main-container").after("<div id='loadingGifOverlay'></div>");
	offset = shirtDisplayArea.offset();
	$("#loadingGifOverlay").css({"top" : offset.top , "left" : offset.left});
}

function removeLoadingGif(){
	$("#loadingGifOverlay").fadeOut();
}