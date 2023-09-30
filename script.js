const signin = document.getElementById('sign-in')
window.addEventListener('load', function () {
    setTimeout(function () {
        document.getElementById('splash').style.display = 'none';
        }, 5000);
    });

   

    // //Function to hide all pages
    //  function hideAllPages() {
    //      const pages = document.querySelectorAll('.page');
    //      pages.forEach(page => {
    //          page.style.display = 'none';
    //      });
    //  }
    
    // //Function to show a specific page
    //  function showPage(pages) {
    //      hideAllPages();
    //      document.getElementById(pages).style.display = 'block';
    //  }

    document.addEventListener("DOMContentLoaded", function () {
        const selectrole = document.getElementById("select-role");
        const signin = document.getElementById("sign-in.html");
        const passengerbtn = document.getElementById("passenger-btn");

        passengerbtn.addEventListener("click", function () {
            // Hide selectrole and show signin
            selectrole.style.display = "none";
            signin.style.display = "block";
        });
        goBackButton.addEventListener("click", function () {
            // Hide signin and show selectrole
            signin.style.display = "none";
            selectrole.style.display = "block";
        });
    });
    //Create Account Page - Step 1 - Next Button Click Handler
document.getElementById("next-btn").addEventListener("click", () => {
    // Redirect to step 2 of create account
    window.location.href = "create-account-step2.html";
});

// Create Account Page - Step 2 - Continue Button Click Handler
document.getElementById("continue-btn").addEventListener("click", () => {
    // Redirect to email verification page
    window.location.href = "email-verification.html";
});