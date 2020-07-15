var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://quotes15.p.rapidapi.com/quotes/random/?language_code=en",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "quotes15.p.rapidapi.com",
		"x-rapidapi-key": "ea51dde956msh3e3aa09e434616ep19dc25jsn25784f048d5e"
	}
};
var changeColor=()=>{
    var red=Math.floor(Math.random()*256);
    var green=Math.floor(Math.random()*256);
    var blue=Math.floor(Math.random()*256);
    console.log(red,green,blue);
    $("body,button").css("background-color",`rgb(${red},${green},${blue})`);
    $("h2,h4").css("color",`rgb(${red},${green},${blue})`);
    $("i").css("color",`rgb(${red},${green},${blue})`);
}
$(document).ready(function(){
    changeColor();
    $("h2,h4").fadeOut(1000).fadeIn(1000);
    $.ajax(settings).done(function(result){
        $("h2").html(`<i class="fa fa-quote-left" style="font-size:36px"></i>${result.content}`);
        $("h4").text(`-${result.originator.name}`);
    });
    $(".new-quote-button").click(function(){
        changeColor();
        $("h2,h4").fadeOut(1000).fadeIn(1000);
        $.ajax(settings).done(function(result){
            $("h2").html(`<i class="fa fa-quote-left" style="font-size:36px"></i>${result.content}`);
            $("h4").text(`-${result.originator.name}`);
        });
    });
});