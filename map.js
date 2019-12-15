<script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
<script type="text/javascript">
	
	$(document).ready(function(){
		$('a').mouseover(function(){
            //alert("i am click");
            var selected= $(this);
            $('a').removeClass('active');
            $(selected).addClass('active');
		});

        var $a = $('.a'),
        $b = $('.b'),
        $c = $('.c'),
        $d = $('.d'),
        $home = $('.home'),
        $aboutus = $('.aboutus'),
        $gallary = $('.gallary'),
        $contactus= $('.contactus');

        $a.mouseover(function(){
        	$home.fadeIn();
        	$aboutus.fadeOut();
        	$gallary.fadeOut();
        	$contactus.fadeOut();
        });
        $b.mouseover(function(){
        	$aboutus.fadeIn();
        	$home.fadeOut();
        	$gallary.fadeOut();
        	$contactus.fadeOut();
        });
        $c.mouseover(function(){
        	$gallary.fadeIn();
            $home.fadeOut();
            $aboutus.fadeOut();
        	$contactus.fadeOut();
        });
        $d.mouseover(function(){
        	$contactus.fadeIn();
        	$home.fadeOut();
        	$aboutus.fadeOut();
        	$gallary.fadeOut();
        });

	});
</script>