/* =====================================================
   MUNNA SAH PORTFOLIO
   Shared JavaScript
   ===================================================== */


/* =====================================================
   DARK / LIGHT MODE
   ===================================================== */

const themeToggle = document.getElementById("themeToggle");


if (themeToggle) {

    const icon = themeToggle.querySelector("i");


    /* ---------------------------------------------
       Load previously saved theme
       --------------------------------------------- */

    const savedTheme = localStorage.getItem("theme");


    if (savedTheme === "light") {

        document.body.classList.remove("dark-mode");

        if (icon) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        }

    } else {

        document.body.classList.add("dark-mode");

        if (icon) {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    }


    /* ---------------------------------------------
       Toggle theme
       --------------------------------------------- */

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");


        if (document.body.classList.contains("dark-mode")) {

            if (icon) {
                icon.classList.remove("fa-sun");
                icon.classList.add("fa-moon");
            }

            localStorage.setItem("theme", "dark");

        } else {

            if (icon) {
                icon.classList.remove("fa-moon");
                icon.classList.add("fa-sun");
            }

            localStorage.setItem("theme", "light");
        }

    });

}