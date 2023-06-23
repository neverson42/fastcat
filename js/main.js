$(document).ready(function() {
	$(".item-list li").mouseenter(function(){  
        $(this).find($('.item-list .hover')).stop(true, true).fadeIn(600);
        return false;
     });
      $('.item-list li').mouseleave(function(){  
        $(this).find($('.item-list .hover')).stop(true, true).fadeOut(400);
        return false;
     });
      jQuery(document).on('click', ".menu_trigger", function (e) {
        e.preventDefault()
        window.setTimeout(function() {
            if(jQuery('#nav').hasClass('clicked')){
                jQuery('#nav').stop(true,true).animate({height:'hide'},100);
                jQuery('#nav').removeClass('clicked');
            }else{
                jQuery('#nav').stop(true,true).animate({height:'show'},400);
                jQuery('#nav').addClass('clicked');
            }
        }, 400);
        return false;
    });
    jQuery("#nav").on('click', '.drops', function () {
        if (jQuery(this).hasClass("active")) {
            jQuery(this).removeClass("active").parent().next().slideUp();
        } else {
            jQuery(this).addClass("active").parent().next().slideDown();
        }
        return false;
    });
// begin add	
	var $container = $('#container');
	// init
	$container.isotope({
		// options
		itemSelector: '.item',
		layoutMode: 'cellsByRow',
		cellsByRow: {
			columnWidth: 295,
			rowHeight: 295
		}
		});
		
	$('#filters').on( 'click', 'li', function() {
		var filterValue = $(this).attr('data-filter');
		$container.isotope({ filter: filterValue });
		$( "#filters li" ).removeClass("active");
		$(this).addClass("active");
	});
	$('.fancybox').fancybox({
	  helpers: {
	    overlay: {
	      locked: false
	    }
	  }
	});
// end add	
}); 
$(window).resize(function() {
    if($(document).width() > 768){
      $( "#nav" ).addClass("active");
      $( "#nav ul" ).attr('style','');
      $( "#nav" ).attr('style','');
      $( "#nav" ).removeClass("clicked");
      $( "#nav .active" ).removeClass('active');
    }
    else {
        $( "#nav" ).removeClass("active");
    }
});

function insta_calc() {
	document.getElementById('points').innerHTML=precise_round(204.545/document.getElementById('time').value*document.getElementById('handicap').value,2);
	document.getElementById('speed').innerHTML=precise_round(204.545/document.getElementById('time').value,2);
	if(document.getElementById('handicap').value != 1) {
		document.getElementById("speed-div").style.display = 'inline';
		document.getElementById("mph-div").style.display = 'inline';
	}
	else {
		document.getElementById("speed-div").style.display = 'none';
		document.getElementById("mph-div").style.display = 'none';
	}

}
function calc_title() {
	document.getElementById("pointsreq").value = 1*document.getElementById('titles').value + document.getElementById('fcatnum').value*500 - document.getElementById('startpts').value*1;	
}
function precise_round(n, r) {
	let int = Math.floor(n).toString()
	if (typeof n !== 'number' || typeof r !== 'number') return 'Not a Number'
	if (int[0] == '-' || int[0] == '+') int = int.slice(int[1], int.length)
	return n.toPrecision(int.length + r)
}

function fcatvis(elem) {
	if (elem.value == "1000")
		document.getElementById("numfcat").style.display = 'inline';
	else {
		document.getElementById("numfcat").style.display = 'none';
		document.getElementById("fcatnum").value=0;
		calc_title();
	}
}
	function calculate() {
		document.getElementById("output").style.display = "block";
		const a = new Array();
		for(var i = 0; i < document.getElementsByClassName('time').length; i++) {
			a[i] = [1*document.getElementsByClassName('time')[i].innerHTML.split(',')[0],1*document.getElementsByClassName('time')[i].innerHTML.split(',')[1],1*document.getElementsByClassName('time')[i].innerHTML.split(',')[2]];
		}
		let avg = a[0].map((col, i) => a.map(row => row[i]).reduce((acc, c) => acc + c, 0) / a.length);
		document.getElementById('avgt').value=precise_round(avg[0],3);
		document.getElementById('ppr').value=precise_round(avg[1],2);
		document.getElementById('mph').value=precise_round(avg[2],2);
		document.getElementById('runs').value=Math.ceil(document.getElementById('pointsreq').value/avg[1]);
		document.getElementById('hiddencosts').innerHTML="At an average cost of $25 per run, this will cost you $"+parseInt(document.getElementById('runs').value)*25;
	}
	function showEst() {
		document.getElementById("estLink").remove();
		document.getElementById("estimator").style.display = "block";	
	}
	function addTime() {
		document.getElementById('prevtimes').style.display = "inline";
		const newTime = [document.getElementById('time').value,document.getElementById('points').innerHTML*1,precise_round(document.getElementById('points').innerHTML*1/document.getElementById('handicap').value,2),''];
		var newdiv="<div class='time'>"+newTime+" <a onclick='this.parentNode.remove();'>(delete)</a></div>"
		document.getElementById('prevtimes').innerHTML+=newdiv;
	}
	function noclickon() {
		document.getElementById('noclicklink').remove();
		document.getElementById('hiddencosts').style.display="block";
	}
	
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  }
  
  function tutorial() {
	  document.getElementById('tutorial').style.display='block';
	  document.getElementById('main').style.display='none';
  }
  
  function clstut() {
	  document.getElementById('tutorial').style.display='none';
	  document.getElementById('main').style.display='block';
  }