document.querySelectorAll(".sidebar nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Typed.js init
new Typed("#typed", {
  strings: [
    "a Full Stack Developer",
    "an Automation Engineer",
    "a Problem Solver",
    "a Lifelong Learner",
  ],
  typeSpeed: 60,
  backSpeed: 30,
  loop: true,
});
