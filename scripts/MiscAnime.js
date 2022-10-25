//Header
const handleHeader = () => {
  const headerWhite = document.querySelector('.HeadBangHi');
  const page1 = document.querySelector(".FrontText");
  
  let page1Top;
  
  const update = () => {
    page1Top = page1.getBoundingClientRect().top
    if (page1Top < 153) {
            headerWhite.classList.toggle("HeadBangSh");
    }
    requestAnimationFrame(update)
  }
  console.log(page1.getBoundingClientRect().top)
  update()
}

handleHeader();

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
