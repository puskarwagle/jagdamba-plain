
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



