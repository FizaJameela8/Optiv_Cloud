document.addEventListener("DOMContentLoaded", () => {

    // ------------------ SERVICE SCROLLER ------------------
    const serviceScroller = document.querySelector('.service-cards');
    const serviceLeft = document.querySelector('.service-scroller .left');
    const serviceRight = document.querySelector('.service-scroller .right');

    if (serviceLeft && serviceRight && serviceScroller) {
        serviceLeft.addEventListener('click', () => {
            serviceScroller.scrollBy({ left: -300, behavior: 'smooth' });
        });

        serviceRight.addEventListener('click', () => {
            serviceScroller.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }


    //page 7 team flips

    const teamScroller = document.querySelector('.team-cards');
    const leftBtn = document.querySelector('.team-scroller .left');
    const rightBtn = document.querySelector('.team-scroller .right');

    if (teamScroller && leftBtn && rightBtn) {
        const card = teamScroller.querySelector('.team-card');
        const gap = 20;
        const scrollAmount = card.offsetWidth + gap;

        leftBtn.addEventListener('click', () => {
            teamScroller.scrollBy({ left: -scrollAmount * 2, behavior: 'smooth' });
        });

        rightBtn.addEventListener('click', () => {
            teamScroller.scrollBy({ left: scrollAmount * 2, behavior: 'smooth' });
        });
    }

    // ------------------ READ MORE BUTTON ------------------
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            const card = this.closest(".service-card");
            card.classList.toggle("expanded");

            // update text
            this.textContent = card.classList.contains("expanded")
                ? "Read Less"
                : "Read More";
        });
    });

    // ------------------ AUTO CLOSE ON MOUSE LEAVE ------------------
    document.querySelectorAll(".service-card").forEach(card => {
        card.addEventListener("mouseleave", function () {
            if (card.classList.contains("expanded")) {
                card.classList.remove("expanded");
                card.querySelector(".toggle-btn").textContent = "Read More";
            }
        });
    });

    // ------------------ MOBILE MENU ------------------
    window.toggleMenu = function () {
        document.getElementById("mobileNav").classList.toggle("open");
    };

});
