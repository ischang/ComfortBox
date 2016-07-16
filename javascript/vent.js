count = 0;

function mainFunc () {
	var text = $('#ventText').val();
	var time = $('#timeOut').val();

	if (!text) {
		alert("You didn't submit a vent cloud yet.");
		//@@@@@@change to modal box later@@@@@@
		//that's the same vent!
	}

	if (time < 1 || time > 60 || !time) {
		alert ("Seconds isn't valid. Try again.")
	}

	else {
		addCloud(text);
		var imag = "#imgCloud"+(count-1);
		var txt = "#textCloud"+(count-1);
		$(imag).fadeOut(time*1000, "linear");
		$(txt).fadeOut(time*1000, "linear");
	}
}


function addCloud(textArea) {
	var newCloud = '<img id = "imgCloud' + count + '" src = "img/clouds.png" style = "width:350; height:310;">';

	$('#clouds').append($(newCloud).hide().fadeIn(2000));

	var offsets = $('#imgCloud'+count).offset();
	var textCloud = '<p id="textCloud' + count + '"> ' + textArea +'</p>';

	var styles = {
		position:"absolute",
		maxWidth: 180,
		maxHeight: 230,
		wordWrap: "break-word"
	};

	$('#imgCloud'+count).after($(textCloud).css(styles).offset({ top: offsets.top, left: offsets.left-60}));
	count++;
}

