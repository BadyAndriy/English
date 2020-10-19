$(document).ready(function(){
	$('.up').click(function(){
		$('.res__main-name').addClass('active')
		$('.res__main-name2').addClass('active')
	})
})


gsap.timeline({
	scrollTrigger: {
		trigger: "#s2",
		start: "center 100%",
		markers: false,
		scrub: false,
		pin: false
	}
})
.from('#s2 img', {opacity: "0"})
.from('#s2 p', {opacity: "0"})
gsap.timeline({
	scrollTrigger: {
		trigger: "#s3",
		start: "center 100%",
		markers: false,
		scrub: false,
		pin: false
	}
})
.from('#s3 img', {opacity: "0"})
.from('#s3 p', {opacity: "0"})
gsap.timeline({
	scrollTrigger: {
		trigger: "#s4",
		start: "center 100%",
		markers: false,
		scrub: false,
		pin: false
	}
})
.from('#s4 img', {opacity: "0"})
.from('#s4 p', {opacity: "0"})
gsap.timeline({
	scrollTrigger: {
		trigger: "#s5",
		start: "center 100%",
		markers: false,
		scrub: false,
		pin: false
	}
})
.from('#s5 img', {opacity: "0"})
.from('#s5 p', {opacity: "0"})
gsap.timeline({
	scrollTrigger: {
		trigger: "#s6",
		start: "center 100%",
		markers: false,
		scrub: false,
		pin: false
	}
})
.from('#s6 img', {opacity: "0"})
.from('#s6 p', {opacity: "0"})
gsap.timeline({
	scrollTrigger: {
		trigger: "#s7",
		start: "center 100%",
		markers: false,
		scrub: false,
		pin: false
	}
})
.from('#s7 img', {opacity: "0"})
.from('#s7 p', {opacity: "0"})
gsap.timeline({
	scrollTrigger: {
		trigger: "#s8",
		start: "center 100%",
		markers: false,
		scrub: false,
		pin: false
	}
})
.from('#s8 img', {opacity: "0"})
.from('#s8 p', {opacity: "0"})
gsap.timeline({
	scrollTrigger: {
		trigger: "#s9",
		start: "center 100%",
		markers: false,
		scrub: false,
		pin: false
	}
})
.from('#s9 img', {opacity: "0"})
.from('#s9 p', {opacity: "0"})

$(document).ready(function(){
    $(".res__nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1200);
    });
});