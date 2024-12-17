/***************************************************
==================== JS INDEX ======================
****************************************************
00. Preloader
01. Screen Width
02. Meanmenu
03. Mobile Side Menu
04. nice select
05. data background
06. magnificPopup
07. Cursor Animations
08. Active GSAP
09. Section Heading Animation
10. home 2 hero title
11. Image SlideUp
12. common Fade Animation 
13. slider active
14. service Slider 
15. team Slider 
16. Testimonial Slider
17. blog Slider 
18. Project Slider 
19. ticker slider
20. video Animation
21. about img animation 
22. image animation 
23. project animation
****************************************************/

(function ($) {
    "use strict";

////////////////////////////////////////////////////////////////////////
// 00. Preloader
let preloader = document.querySelector(".loader-wrap");
window.addEventListener('load', function(){
	preloader.style.opacity = "0";
	preloader.style.visibility = "hidden";
})
	
////////////////////////////////////////////////////////////////////////
// 01. Screen Width
var device_width = window.screen.width;

////////////////////////////////////////////////////////////////////////
// 02. Meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "991"
});

////////////////////////////////////////////////////////////////////////
// 03. Mobile Side Menu
$('.side-toggle').on('click', function () {
	$('.side-info').addClass('info-open');
	$('.offcanvas-overlay').addClass('overlay-open');
})

$('.side-info-close,.offcanvas-overlay').on('click', function () {
	$('.side-info').removeClass('info-open');
	$('.offcanvas-overlay').removeClass('overlay-open');
});


////////////////////////////////////////////////////////////////////////
// 04. nice select
$('.has-nice-select, .contact-form select').niceSelect();

////////////////////////////////////////////////////////////////////////
// 05. data background
$("[data-background]").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
});

////////////////////////////////////////////////////////////////////////
// 06. magnificPopup
//  img view 
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});
// video view
$('.popup-video').magnificPopup({
	type: 'iframe'
});


/////////////////////////////////////////////////////
// 07. Cursor Animations
  var client_cursor = document.getElementById("client_cursor");
  function mousemoveHandler(e) {
    try {
      const target = e.target;

      let tl = gsap.timeline({
        defaults: {
          x: e.clientX,
          y: e.clientY,
        }
      })
      let t2 = gsap.timeline({
        defaults: {
          x: e.clientX,
          y: e.clientY,
        }
      })

      // Main Cursor Moving 
      tl.to(".cursor1", {
        ease: "power2.out"
      })
        .to(".cursor2", {
          ease: "power2.out"
        }, "-=0.4")

    } catch (error) {
      console.log(error)
    }

  }
  document.addEventListener("mousemove", mousemoveHandler);

//////////////////////////////////////////////////////////////////////////////////
// 08. Active GSAP
  if (document.querySelector("#has_smooth").classList.contains("has-smooth")) {
    const smoother = ScrollSmoother.create({
      smooth: 1.35,
      effects: device_width < 1025 ? false : true,
      smoothTouch: 0.1,
      normalizeScroll: false,
      ignoreMobileResize: true,
    });
  }

////////////////////////////////////////////////////////////////////////////////
// 09. Section Heading Animation


// Subtitle Reveal Animation 
const anim_subtitle_reveal = document.querySelectorAll(".subtitle__reveal_anim");
anim_subtitle_reveal.forEach(subtitle_areveal => {

	var duration_value = 1
	var onscroll_value = 1
	var stagger_value = 0.03
	var data_delay = 0.08

	if (subtitle_areveal.getAttribute("data-duration")) {
		duration_value = subtitle_areveal.getAttribute("data-duration");
	}
	if (subtitle_areveal.getAttribute("data-on-scroll")) {
		onscroll_value = subtitle_areveal.getAttribute("data-on-scroll");
	}
	if (subtitle_areveal.getAttribute("data-stagger")) {
		stagger_value = subtitle_areveal.getAttribute("data-stagger");
	}
	if (subtitle_areveal.getAttribute("data-delay")) {
		data_delay = subtitle_areveal.getAttribute("data-delay");
	}

	subtitle_areveal.split = new SplitText(subtitle_areveal, {
		type: "lines,words,chars",
		linesClass: "anim-reveal-line"
	});

	if (onscroll_value == 1) {
		subtitle_areveal.anim = gsap.from(subtitle_areveal.split.words, {
			scrollTrigger: {
				trigger: subtitle_areveal,
				start: 'top 90%',
			},
			duration: duration_value,
			delay: data_delay,
			ease: "circ.out",
			y: 50,
			stagger: stagger_value,
			opacity: 0,
		});
	} else {
		subtitle_areveal.anim = gsap.from(subtitle_areveal.split.words, {
			duration: duration_value,
			delay: data_delay,
			ease: "circ.out",
			y: 50,
			stagger: stagger_value,
			opacity: 0,
		});
	}


});


// Title Reveal Animation 
const anim_reveal = document.querySelectorAll(".heading__reveal_anim");
anim_reveal.forEach(areveal => {

	var duration_value = 1
	var onscroll_value = 1
	var stagger_value = 0.04
	var data_delay = 0.1

	if (areveal.getAttribute("data-duration")) {
		duration_value = areveal.getAttribute("data-duration");
	}
	if (areveal.getAttribute("data-on-scroll")) {
		onscroll_value = areveal.getAttribute("data-on-scroll");
	}
	if (areveal.getAttribute("data-stagger")) {
		stagger_value = areveal.getAttribute("data-stagger");
	}
	if (areveal.getAttribute("data-delay")) {
		data_delay = areveal.getAttribute("data-delay");
	}

	areveal.split = new SplitText(areveal, {
		type: "lines,words,chars",
		linesClass: "anim-reveal-line"
	});

	if (onscroll_value == 1) {
		areveal.anim = gsap.from(areveal.split.words, {
			scrollTrigger: {
				trigger: areveal,
				start: 'top 90%',
			},
			duration: duration_value,
			delay: data_delay,
			ease: "circ.out",
			y: 50,
			stagger: stagger_value,
			opacity: 0,
		});
	} else {
		areveal.anim = gsap.from(areveal.split.words, {
			duration: duration_value,
			delay: data_delay,
			ease: "circ.out",
			y: 50,
			stagger: stagger_value,
			opacity: 0,
		});
	}


});


////////////////////////////////////////////////////////////////////////
// 10. home 2 hero title

let HomeDigital = gsap.timeline()

let mark = document.querySelector(".hero__area-3 .title-left")
let eting = document.querySelector(".hero__area-3 .title-right")


let split_creatives = new SplitText(mark, { type: "chars" })
let split_solutions = new SplitText(eting, { type: "chars" })

HomeDigital.from(split_creatives.chars, { duration: 0.5, x: 100, autoAlpha: 0, stagger: 0.1 });
HomeDigital.from(split_solutions.chars, { duration: 1, x: 100, autoAlpha: 0, stagger: 0.05 }, "-=1");

////////////////////////////////////////////////////////////////////////////////
// 11. Image SlideUp

gsap.set(".tp_image_slideUp", { y: 100, opacity: 0 });
gsap.to(".tp_image_slideUp", {
    scrollTrigger: {
    trigger: ".tp_image_slideUp",
    start: "top center+=300",
    markers: false
    },
    y: 0,
    opacity: 1,
    ease: "power2.out",
    duration: 1.5,
    delay: 0.3,
    stagger: {
    each: 0.2
    }
});


/////////////////////////////////////////////////////
// 12. common Fade Animation 

const fadeArray = gsap.utils.toArray(".tp_has_fade_anim")
// gsap.set(fadeArray, {opacity:0})
fadeArray.forEach((item, i) => {

    var fade_direction = "bottom"
    var onscroll_value = 1
    var duration_value = 1
    var fade_offset = 30
    var delay_value = 0.02
    var ease_value = "power2.out"

    if (item.getAttribute("data-fade-offset")) {
        fade_offset = item.getAttribute("data-fade-offset");
    }
    if (item.getAttribute("data-duration")) {
        duration_value = item.getAttribute("data-duration");
    }

    if (item.getAttribute("data-fade-from")) {
        fade_direction = item.getAttribute("data-fade-from");
    }
    if (item.getAttribute("data-on-scroll")) {
        onscroll_value = item.getAttribute("data-on-scroll");
    }
    if (item.getAttribute("data-delay")) {
        delay_value = item.getAttribute("data-delay");
    }
    if (item.getAttribute("data-ease")) {
        ease_value = item.getAttribute("data-ease");
    }

    if (onscroll_value == 1) {
        if (fade_direction == "top") {
            gsap.from(item, {
                y: -fade_offset,
                opacity: 0,
                ease: ease_value,
                duration: duration_value,
                delay: delay_value,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                }
            })
        }
        if (fade_direction == "left") {
            gsap.from(item, {
                x: -fade_offset,
                opacity: 0,
                ease: ease_value,
                duration: duration_value,
                delay: delay_value,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                }
            })
        }
        if (fade_direction == "bottom") {
            gsap.from(item, {
                y: fade_offset,
                opacity: 0,
                ease: ease_value,
                duration: duration_value,
                delay: delay_value,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                }
            })
        }
        if (fade_direction == "right") {
            gsap.from(item, {
                x: fade_offset,
                opacity: 0,
                ease: ease_value,
                duration: duration_value,
                delay: delay_value,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                }
            })
        }
        if (fade_direction == "in") {
            gsap.from(item, {
                opacity: 0,
                ease: ease_value,
                duration: duration_value,
                delay: delay_value,
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                }
            })
        }
    }
    else {
        if (fade_direction == "top") {
            gsap.from(item, {
                y: -fade_offset,
                opacity: 0,
                ease: ease_value,
                duration: duration_value,
                delay: delay_value,
            })
        }
        if (fade_direction == "left") {
            gsap.from(item, {
                x: -fade_offset,
                opacity: 0,
                ease: ease_value,
                duration: duration_value,
                delay: delay_value,
            })
        }
        if (fade_direction == "bottom") {
            gsap.from(item, {
                y: fade_offset,
                opacity: 0,
                ease: ease_value,
                duration: duration_value,
                delay: delay_value,
            })
        }
        if (fade_direction == "right") {
            gsap.from(item, {
                x: fade_offset,
                opacity: 0,
                ease: ease_value,
                duration: duration_value,
                delay: delay_value,
            })
        }
        if (fade_direction == "in") {
            gsap.from(item, {
                opacity: 0,
                ease: ease_value,
                duration: duration_value,
                delay: delay_value,
            })
        }
    }
})

////////////////////////////////////////////////////////////////////////
// 13. slider active
function sliderActive() {
	/*------------------------------------
	Slider
	--------------------------------------*/
	if (jQuery(".h3_hero-active").length > 0) {
		let sliderActive1 = '.h3_hero-active';
		let sliderInit1 = new Swiper(sliderActive1, {
			// Optional parameters
			slidesPerView: 1,
			rtl: false,
			slidesPerColumn: 1,
			paginationClickable: true,
			loop: true,
			speed: 1000,
			effect: 'fade',
			autoplay: {
				delay: 5000,
			},

			// If we need pagination
	        pagination: {
				el: ".h3_hero-pagination",
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: '.h2_hero-swiper-next',
				prevEl: '.h2_hero-swiper-prev',
			},

			a11y: false
		});

		function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + ' [data-animation]').each(function () {
					let anim = $(this).data('animation');
					let delay = $(this).data('delay');
					let duration = $(this).data('duration');

					$(this).removeClass('anim' + anim)
						.addClass(anim + ' animated')
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration
						})
						.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
							$(this).removeClass(anim + ' animated');
						});
				});
			};
			animated();
			// Make animated when slide change
			init.on('slideChange', function () {
				$(sliderActive1 + ' [data-animation]').removeClass('animated');
			});
			init.on('slideChange', animated);
		}

		animated_swiper(sliderActive1, sliderInit1);
	}
};

sliderActive();

////////////////////////////////////////////////////////////////////////
// 14. service Slider 
const serviceActiveTwo = new Swiper(".service-active-2", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	navigation: {
		nextEl: ".service-prev-2",
		prevEl: ".service-next-2",
		},
		breakpoints: {
		0: {
			slidesPerView: 1,
			},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3
		},
		1400: {
			slidesPerView: 3
		}
	}
});

////////////////////////////////////////////////////////////////////////
// 15. team Slider 

// team active 2
const teamActiveTwo = new Swiper(".team-active-2", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	navigation: {
		nextEl: ".team-prev-2",
		prevEl: ".team-next-2",
		},
		breakpoints: {
		0: {
			slidesPerView: 1,
			},
		576: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		992: {
			slidesPerView: 3,
		},
		1200: {
			slidesPerView: 4
		},
		1400: {
			slidesPerView: 4 
		}
	}
});

// team active 3
const teamActiveThree = new Swiper(".h3_team-active", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	navigation: {
		nextEl: ".team-prev-3",
		prevEl: ".team-next-3",
		},
		breakpoints: {
		0: {
			slidesPerView: 1,
		},
		481: {
			slidesPerView: 2,
		},
		576: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
		1200: {
			slidesPerView: 4
		},
		1400: {
			slidesPerView: 4 
		}
	}
});

////////////////////////////////////////////////////////////////////////
// 16. Testimonial Slider 

// testimonia active 2
const testimonialActiveTwo = new Swiper(".testimonial-active-2", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	navigation: {
		nextEl: ".testimonial-prev-2",
		prevEl: ".testimonial-next-2",
		},
		breakpoints: {
		0: {
			slidesPerView: 1,
			},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 1,
		},
		992: {
			slidesPerView: 1,
		},
		1200: {
			slidesPerView: 1
		},
		1400: {
			slidesPerView: 1
		}
	}
});

// testimonial active 3
const testimonialActiveThree = new Swiper(".h3_testimonial-active", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	navigation: {
		nextEl: ".testimonial-prev-3",
		prevEl: ".testimonial-next-3",
		},
		breakpoints: {
		0: {
			slidesPerView: 1,
			},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 1,
		},
		992: {
			slidesPerView: 1,
		},
		1200: {
			slidesPerView: 1
		},
		1400: {
			slidesPerView: 1
		}
	}
});

// testimonial active 4
const testimonialActiveFour = new Swiper(".h4_testimonial-active", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	navigation: {
		nextEl: ".testimonial-prev-4",
		prevEl: ".testimonial-next-4",
		},
		breakpoints: {
		0: {
			slidesPerView: 1,
			},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3
		},
		1400: {
			slidesPerView: 3
		}
	}
});

// testimonial active 5
const testimonialActiveFive = new Swiper(".testimonial-active-5", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	pagination: {
		el: ".testimonial-pagination-5",
		clickable: true,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
			},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 1,
		},
		992: {
			slidesPerView: 1,
		},
		1200: {
			slidesPerView: 1
		},
		1400: {
			slidesPerView: 1
		}
	}
});

////////////////////////////////////////////////////////////////////////
// 17. blog Slider 

// blog active 2
const blogActiveTwo = new Swiper(".blog-active-2", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	navigation: {
		nextEl: ".blog-prev-2",
		prevEl: ".blog-next-2",
		},
		breakpoints: {
		0: {
			slidesPerView: 1,
			},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3
		},
		1400: {
			slidesPerView: 3
		}
	}
});

// blog active 3
const blogActiveThree = new Swiper(".h3_blog-active", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	navigation: {
		nextEl: ".blog-prev-3",
		prevEl: ".blog-next-3",
		},
		breakpoints: {
		0: {
			slidesPerView: 1,
			},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3
		},
		1400: {
			slidesPerView: 3
		}
	}
});

// blog active 4
const blogActiveFour = new Swiper(".h4_blog-active", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	navigation: {
		nextEl: ".blog-prev-4",
		prevEl: ".blog-next-4",
		},
		breakpoints: {
		0: {
			slidesPerView: 1,
			},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3
		},
	}
});

////////////////////////////////////////////////////////////////////////
// 18. Project Slider 
const projectSlider = new Swiper(".h2_project-active", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	// centeredSlides: true,
	navigation: {
		nextEl: ".blog-prev-4",
		prevEl: ".blog-next-4",
		},
		breakpoints: {
		0: {
			slidesPerView: 1,
			},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 4
		},
	}
});

////////////////////////////////////////////////////////////////////////
// 19. ticker slider 
$("#program-text-ticker").bxSlider({
	minSlides: 1,
	maxSlides: 1,
	slideMargin: 0,
	ticker: true,
	speed: 25000,
	slideWidth: 'auto',
	slideMargin: 24,
});

/////////////////////////////////////////////////////
// 20. video Animation
if (device_width > 991) {
	gsap.set(".grow", { scale: .8, });
	let imageTl_8 = gsap.timeline({
		scrollTrigger: {
		trigger: ".grow",
		start: "top center",
		end: "+=900",
		scrub: 1,
		ease: "power1.out",
		markers: false,
		}
	});
	imageTl_8.to(".grow", {
		scale: 1,
		duration: 1.5
	});
}

////////////////////////////////////////////////////////////////////////
// 21. about img animation 
gsap.set(".about_revel_anim", { x: -100, opacity: 0 });
gsap.to(".about_revel_anim", {
    scrollTrigger: {
    trigger: ".eb_h3-about-img",
    start: "top center+=300",
    markers: false
    },
    x: 0,
    opacity: 1,
    ease: "power2.out",
    duration: 1.5,
    delay: 0.3,
    stagger: {
    	each: 0.2
    }
});
gsap.set(".about_revel_anim_two", { x: 100, opacity: 0 });
gsap.to(".about_revel_anim_two", {
    scrollTrigger: {
    trigger: ".eb_h3-about-img",
    start: "top center+=300",
    markers: false
    },
    x: 0,
    opacity: 1,
    ease: "power2.out",
    duration: 1.5,
    delay: 0.3,
    stagger: {
    	ease: Power2.out
    }
});

////////////////////////////////////////////////////////////////////////
// 22. image animation 
let imgRevealOne = gsap.utils.toArray(".tp_img_reveal");
imgRevealOne.forEach(imgRevealOne => {
    const titleLine = gsap.timeline({
    scrollTrigger: {
        trigger: imgRevealOne,
        start: 'top 95%',
        end: 'bottom 50%',
        scrub: false,
        markers: false,
        toggleActions: 'play none none none'
    }
    });
	// gsap.set(imgRevealOne, { x: "100%", });
    titleLine.to(imgRevealOne, { 
		x: 0,
		delay: 0.1,
		duration: 1.5,
		ease: Power2.out
	});
});

////////////////////////////////////////////////////////////////////////
// 23. project animation 
const serviceImgItem = document.querySelectorAll(".eb_h5-project-item");
function followImageCursor(event, serviceImgItem) {
	const contentBox = serviceImgItem.getBoundingClientRect();
	const dx = event.clientX - contentBox.x;
	const dy = event.clientY - contentBox.y;
	serviceImgItem.children[1].style.transform = `translate(${dx}px, ${dy}px)`;
	}
	serviceImgItem.forEach((item, i) => {
	item.addEventListener("mousemove", (event) => {
		setInterval(followImageCursor(event, item), 1000);
	});
});

})(jQuery);