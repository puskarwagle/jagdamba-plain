//Super
const first = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
				//console.log(entry)
				if (entry.isIntersecting) {
						entry.target.classList.add("SuperSh");
				}
		});
});
const firstT = document.querySelectorAll(".SuperHi");
firstT.forEach((el) => first.observe(el));

//Gyalva
const second = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
				//console.log(entry)
				if (entry.isIntersecting) {
						entry.target.classList.add("GyalvaSh");
				}
		});
});
const secondT = document.querySelectorAll(".GyalvaHi");
secondT.forEach((el) => second.observe(el));

//Rajesh
const third = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
				//console.log(entry)
				if (entry.isIntersecting) {
						entry.target.classList.add("RajeshSh");
				}
		});
});
const thirdT = document.querySelectorAll(".RajeshHi");
thirdT.forEach((el) => third.observe(el));

//Madhu
const fourth = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
				//console.log(entry)
				if (entry.isIntersecting) {
						entry.target.classList.add("MadhuSh");
				}
		});
});
const fourthT = document.querySelectorAll(".MadhuHi");
fourthT.forEach((el) => fourth.observe(el));
