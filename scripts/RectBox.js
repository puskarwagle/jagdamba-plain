//Rectangle boxes Intersection Observer animation
const rectboxes = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
				//console.log(entry)
				if (entry.isIntersecting) {
						entry.target.classList.add("grid-boxAnime");
				}
		});
});
const rectbox = document.querySelectorAll(".grid-box");
rectbox.forEach((el) => rectboxes.observe(el));

//Rectangle Grid boxes and pTexts
$(function() {
    $(".One").click(function() {
    		console.log("function run!")
        $(".pOne").slideDown(1000);
    });
    $(".Two").click(function() {
    		console.log("function run!")
        $(".pTwo").slideDown(1000);
    });
    $(".Three").click(function() {
    		console.log("function run!")
        $(".pThree").slideDown(1000);
    });
});

