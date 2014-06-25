	$(function() { 
	
		$('#txt1').on('keyup',function() { 

			var num1 = parseInt($('#txt1').val());
			var drCooldown = parseInt($('#drcooldown').val());
			var drLength = parseInt($('#drlength').val());
			var resetTime = ( parseInt($('#resetseconds').val()) * 1000 );
			var starttime = 0;
			var endtime = 0;

			if(isNaN(num1) || num1 > 60 || num1 < 0) { 
				$('#output').text("Input is not a number or not a valid amount of seconds."); 
			}
			else { 
				if (num1 < drCooldown) { endtime = num1 + ( 60 - drCooldown ); }
				else { endtime = num1 - drCooldown; }

				if (num1 < drLength) { starttime = num1 + ( 60 - drLength ); }
				else { starttime = num1 - drLength; }

				$('#output').text("Start: " + starttime + " - Stop: " + endtime);
			}
			
		if ( $('#resetcheck').attr('checked')) { 
			clearTimeout(timer);
			var timer = setTimeout(function() {
				$('#txt1').val("");
			}, resetTime); 
		}
		
	});
	
 	$('#SETTINGSLINK').on('mouseup', function() {
		
		$('#SETTINGSBOX').toggle();
		
		if ( $('#SETTINGSBOX').css("display") == "none" ) {
			$('#SETTINGSLINK').text("Settings");
		}
		else {
			$('#SETTINGSLINK').text("Hide Settings");
		}
		
 	}); 
 	
	$('#HELPLINK').on('mouseup', function() {
		
		$('#HELP').toggle();
		
		if ( $('#HELP').css("display") == "none" ) {
			$('#HELPLINK').text("Help");
		}
		else {
			$('#HELPLINK').text("Hide Help");
		}
		
 	}); 
	
	$('#resetcheck').on('click', function() {
		 $('#txt1').val(""); 
	});
	
	$('#txt1').focus(function() {
		$('#header').hide("slow");
	})
 	$('#txt1').focusout(function() {
		$('#header').show("slow");
	}) 
});