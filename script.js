/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

});


/* CLOSE MOBILE MENU */

const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});


/* =========================
   HEADER SCROLL
========================= */

const header = document.getElementById("main-header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================
   COLLECTION FILTER
========================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        /* Remove active class */

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        /* Add active class */

        button.classList.add("active");

        const filter = button.getAttribute("data-filter");


        productCards.forEach(card => {

            const category = card.getAttribute("data-category");

            if (filter === "all" || category === filter) {

                card.classList.remove("hide");

            } else {

                card.classList.add("hide");

            }

        });

    });

});


/* =========================
   SCROLL ANIMATION
========================= */

const animatedElements = document.querySelectorAll(
    ".product-card, .contact-card, .instagram-card"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


animatedElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "0.6s ease";

    observer.observe(element);

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll(
    "section[id]"
);

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================
   CURRENT YEAR
========================= */

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


/* =========================
   WHATSAPP
========================= */

const whatsappLinks = document.querySelectorAll(
    'a[href*="wa.me"]'
);

whatsappLinks.forEach(link => {

    link.addEventListener("click", () => {

        console.log(
            "Opening WhatsApp for Dulhan Saree Collection"
        );

    });

});


/* =========================
   INSTAGRAM
========================= */

const instagramLinks = document.querySelectorAll(
    'a[href*="instagram.com"]'
);

instagramLinks.forEach(link => {

    link.addEventListener("click", () => {

        console.log(
            "Opening Dulhan Saree Collection Instagram"
        );

    });

});