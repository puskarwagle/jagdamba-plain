//SkyBlue
const jasta1 = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
				//console.log(entry)
				if (entry.isIntersecting) {
						entry.target.classList.add("SkyBlueSh");
				}
		});
});
const jastas1 = document.querySelectorAll(".SkyBlueHi");
jastas1.forEach((el) => jasta1.observe(el));
//Blue
const jasta2 = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
				//console.log(entry)
				if (entry.isIntersecting) {
						entry.target.classList.add("BlueSh");
				}
		});
});
const jastas2 = document.querySelectorAll(".BlueHi");
jastas2.forEach((el) => jasta2.observe(el));
//Green
const jasta3 = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
				//console.log(entry)
				if (entry.isIntersecting) {
						entry.target.classList.add("GreenSh");
				}
		});
});
const jastas3 = document.querySelectorAll(".GreenHi");
jastas3.forEach((el) => jasta3.observe(el));

//Grey
const jasta4 = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
				//console.log(entry)
				if (entry.isIntersecting) {
						entry.target.classList.add("GreySh");
				}
		});
});
const jastas4 = document.querySelectorAll(".GreyHi");
jastas4.forEach((el) => jasta4.observe(el));
//Silver
const jasta5 = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
				//console.log(entry)
				if (entry.isIntersecting) {
						entry.target.classList.add("SilverSh");
				}
		});
});
const jastas5 = document.querySelectorAll(".SilverHi");
jastas5.forEach((el) => jasta5.observe(el));
//Yellow
const jasta6 = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
				//console.log(entry)
				if (entry.isIntersecting) {
						entry.target.classList.add("YellowSh");
				}
		});
});
const jastas6 = document.querySelectorAll(".YellowHi");
jastas6.forEach((el) => jasta6.observe(el));
