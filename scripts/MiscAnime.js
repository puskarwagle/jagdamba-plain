  const helloElement = document.getElementById('frontText');	
	var rect = helloElement.getBoundingClientRect();
	console.log(rect.top);
	
//Header
const headbang = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
				//console.log(entry)
				if (entry.isIntersecting) {
						entry.target.classList.add("HeadBangSh");
				}
		});
});
const header = document.querySelectorAll(".HeadBangHi");
header.forEach((el) => headbang.observe(el));

//Fronttext 1 and 2 animations
const textanime = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
				//console.log(entry)
				if (entry.isIntersecting) {
						entry.target.classList.add("textSH");
				}
		});
});
const texts = document.querySelectorAll(".textHI");
texts.forEach((el) => textanime.observe(el));

//Form h1 animation
const formhead = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
				//console.log(entry)
				if (entry.isIntersecting) {
						entry.target.classList.add("FormHeadAnime");
				}
		});
});
const formheader = document.querySelectorAll(".FormHead");
formheader.forEach((el) => formhead.observe(el));

//Rectangle boxes animation
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
