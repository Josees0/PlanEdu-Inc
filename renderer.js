console.log("App iniciado com sucesso.");

const secondBlock = document.querySelector("#second-block");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

observer.observe(secondBlock);

function animateAndRedirect() {
  document.body.classList.add('fade-out');
  setTimeout(() => {
    window.location.href = "criar-plano.html";}, 150);
}

function animateAndRedirect2() {
  document.body.classList.add('fade-out');
  setTimeout(() => {
    window.location.href = "plano.html";}, 150);
}

