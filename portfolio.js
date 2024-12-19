var typed = new Typed(".text", {
    strings: ["Salesforce Developer"],
    typeSpeed: 10,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});


document.querySelectorAll('.btn-box').forEach((button, index) => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        if (index === 0) { // First button in Home section
            document.querySelector('#about').scrollIntoView({
                behavior: 'smooth',
            });
        } else if (index === 1) { // Second button in About section
            document.querySelector('#services').scrollIntoView({
                behavior: 'smooth',
            });
        }
    });
});
