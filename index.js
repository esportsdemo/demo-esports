var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);

var keys = [
  "Mercury",
   "Venus",
   "Earth",
   "Mars",
   "Jupiter",
   "Saturn",
   "Uranus",
   "Neptune"
];
var slider = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  spaceBetween: 150,
  centeredSlides: true,
  mousewheel: true,
  pagination: {
    el:".planet-links",
    clickable: true,
    renderBullet: function(index, className){
      return '<div class="'+ className + '">' + keys[index] + "</div>";
    }
  }
});
slider.on("slideChange", function() {
  console.log("SLIDE CHANGED");
  gsap.to(".slide-text span", 0.2, {
    x: "-100px"
  });
  gsap.to(".slide-number span", 0.2, {
    x: "-100px"
  });
  gsap.to(".slide-detail span", 0.5, {
    x: "-1000px"
  });
  gsap.to(".slide-detail-facts div", 0.5, {
    x: "-1000px"
  });
  gsap.to(".swiper-slide-active", 0.5, {
    scale: 0.85
  });
  gsap.to(".swiper-slide .slide-img", 1, {
    rotation: 20
  });
});

slider.on("slideChangeTransitionEnd", function() {
  gsap.to(".swiper-slide .slide-img", 1, {
    rotation: 10
  });
  gsap.to(".slide-text span", 0.2, {
    x: 0,
    delay: 0.1
  });
  gsap.to(".slide-text span", 0, {
    x: "100px"
  });

  gsap.to(".slide-number span", 0.2, {
    x: 0
  });
  gsap.to(".slide-number span", 0, {
    x: "100px"
  });

  gsap.to(".slide-detail span", 0.2, {
    x: 0
  });

  gsap.to(".slide-detail-facts div", 0.5, {
    x: 0
  });

  gsap.to(".swiper-slide-active", 0.5, {
    scale: 1,
    ease: Power4.easeOut
  });

  gsap.to(".swiper-slide-active .slide-text", 0, {
    autoAlpha: 1
  });
  gsap.to(".swiper-slide-active .slide-number", 0, {
    autoAlpha: 1
  });

  gsap.to(".swiper-slide-next .slide-text", 0, {
    autoAlpha: 0
  });
  gsap.to(".swiper-slide-prev .slide-text", 0, {
    autoAlpha: 0
  });

  gsap.to(".swiper-slide-next .slide-number", 0, {
    autoAlpha: 0
  });
  gsap.to(".swiper-slide-prev .slide-number", 0, {
    autoAlpha: 0
  });
});

gsap.to(".rockbg1", 2, {
  y: 12,
  repeat: -1,
  yoyo: true,
  delay: 0
});
gsap.to(".rock2", 2, {
  y: 12,
  repeat: -1,
  yoyo: true,
  delay: 0
});
gsap.to(".rock3", 2, {
  y: 12,
  repeat: -1,
  yoyo: true,
  delay: 0
});
gsap.to(".swiper-slide-next .slide-text", 0, {
  autoAlpha: 0
});
gsap.to(".swiper-slide-prev .slide-text", 0, {
  autoAlpha: 0
});

gsap.to(".swiper-slide-next .slide-number", 0, {
  autoAlpha: 0
});
gsap.to(".swiper-slide-prev .slide-number", 0, {
  autoAlpha: 0
});

gsap.to(".swiper-slide", 0, {
  scale: 0.85
});

gsap.to(".swiper-slide-active", 0, {
  scale: 1
});
<<<<<<< HEAD

/* Product slider js */

$(document).ready(function(){

$('#itemslider').carousel({ interval: 3000 });

$('.carousel-showmanymoveone .item').each(function(){
var itemToClone = $(this);

for (var i=1;i<6;i++) {
itemToClone = itemToClone.next();

if (!itemToClone.length) {
itemToClone = $(this).siblings(':first');
}

itemToClone.children(':first-child').clone()
.addClass("cloneditem-"+(i))
.appendTo($(this));
}
});
});
=======
var w, container, carousel, item, radius, itemLength, rY, ticker, fps;
		var mouseX = 0;
		var mouseY = 0;
		var mouseZ = 0;
		var addX = 0;


		// fps counter created by: https://gist.github.com/sharkbrainguy/1156092,
		// no need to create my own :)
		var fps_counter = {

			tick: function ()
			{
				// this has to clone the array every tick so that
				// separate instances won't share state
				this.times = this.times.concat(+new Date());
				var seconds, times = this.times;

				if (times.length > this.span + 1)
				{
					times.shift(); // ditch the oldest time
					seconds = (times[times.length - 1] - times[0]) / 1000;
					return Math.round(this.span / seconds);
				}
				else return null;
			},

			times: [],
			span: 20
		};
		var counter = Object.create(fps_counter);



		$(document).ready( init )

		function init()
		{
			w = $(window);
			container = $( '#contentContainer' );
			carousel = $( '#carouselContainer' );
			item = $( '.carouselItem' );
			itemLength = $( '.carouselItem' ).length;
			fps = $('#fps');
			rY = 360 / itemLength;
			radius = Math.round( (250) / Math.tan( Math.PI / itemLength ) );

			// set container 3d props
			TweenMax.set(container, {perspective:600})
			TweenMax.set(carousel, {z:-(radius)})

			// create carousel item props

			for ( var i = 0; i < itemLength; i++ )
			{
				var $item = item.eq(i);
				var $block = $item.find('.carouselItemInner');

        //thanks @chrisgannon!
        TweenMax.set($item, {rotationY:rY * i, z:radius, transformOrigin:"50% 50% " + -radius + "px"});

				animateIn( $item, $block )
			}

			// set mouse x and y props and looper ticker
			window.addEventListener( "mousemove", onMouseMove, false );
			ticker = setInterval( looper, 1000/60 );
		}

		function animateIn( $item, $block )
		{
			var $nrX = 360 * getRandomInt(2);
			var $nrY = 360 * getRandomInt(2);

			var $nx = -(2000) + getRandomInt( 4000 )
			var $ny = -(2000) + getRandomInt( 4000 )
			var $nz = -4000 +  getRandomInt( 4000 )

			var $s = 1.5 + (getRandomInt( 10 ) * .1)
			var $d = 1 - (getRandomInt( 8 ) * .1)

			TweenMax.set( $item, { autoAlpha:1, delay:$d } )
			TweenMax.set( $block, { z:$nz, rotationY:$nrY, rotationX:$nrX, x:$nx, y:$ny, autoAlpha:0} )
			TweenMax.to( $block, $s, { delay:$d, rotationY:0, rotationX:0, z:0,  ease:Expo.easeInOut} )
			TweenMax.to( $block, $s-.5, { delay:$d, x:0, y:0, autoAlpha:1, ease:Expo.easeInOut} )
		}

		function onMouseMove(event)
		{
			mouseX = -(-(window.innerWidth * .5) + event.pageX) * .0025;
			mouseY = -(-(window.innerHeight * .5) + event.pageY ) * .01;
			mouseZ = -(radius) - (Math.abs(-(window.innerHeight * .5) + event.pageY ) - 200);
		}

		// loops and sets the carousel 3d properties
		function looper()
		{
			addX += mouseX
			TweenMax.to( carousel, 1, { rotationY:addX, rotationX:mouseY, ease:Quint.easeOut } )
			TweenMax.set( carousel, {z:mouseZ } )
			fps.text( 'Framerate: ' + counter.tick() + '/60 FPS' )
		}

		function getRandomInt( $n )
		{
			return Math.floor((Math.random()*$n)+1);
		}
>>>>>>> 57432b1aa24778d0e52630ceec696340b15e301a
