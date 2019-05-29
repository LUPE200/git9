var audio;

//Hide Pause Initially
$('#pause').hide();

//initializer-Play first Song
initAudio($('#playlist li:first-child'));

   function initAudio(element){
	   var song = element.attr('song');
	var title = element.text();
	var cover = element.attr('cover');
	var artist = element.attr('artist');

//Create a New Audio Objct
audio = new Audio('media/'+song);

if(!audio.currentTime){
	$('#duration').html('0.00');
   }

$('#audio-player.title').text(title);
$('#audio-player.artist').text(artist);

//Insert Cover Image
$('img.cover').attr('src','imagenes/covers/'+cover);

$('#playlist li').removeClass('active');
element.addClass('active');
}


//Play Button
$('#play').click(function (){
	audio.play();
	$('#play').hide();
	$('#pause').show();
	$('#duration').fadeIn(400);
	showDuration();
});

//pause Button
$('#pause').click(function (){
	audio.pause();
	$('#pause').hide();
	$('#play').show();
});

//Stop Button
$('#stop').click(function (){
	audio.pause ();
	audio.currentTime =0; 
	$('#pause').hide();
	$('#play').show();
	$('#duration').fadeOut(400);
});

//Playlist Song Click	
$('#paylist li').click(function (){
	audio.pause ();
	 initAudio($(this)); 
	$('#play').hide();
	$('#pause').show();
	$('#duration').fadeIn(400);
	audio.play();
	showDuration();
});

//Volume Control
$('#volume').change(function (){
	audio.volume =parseFloat(this.value/10); 
});

//Time Duration
function showDuration(){
	$(audio).bind('timeupdate',function(){
		//Get hours and minutes
		var s = parseInt(audio.currentTime%60);
		var m = parseInt((audio.currentTime/60)%60);
		if(s<10){
			s ='0'+s;
		}
		$('#duration').html(m+','+s);
	var value = 0;
	if(audio.currentTime > 0){
		value = Math.floor((100/audio.duration)*audio.currentTime);
	}
		$('#progress').css('width',value+'%');
	});
}






	






































	