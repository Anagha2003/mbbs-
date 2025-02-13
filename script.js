document.getElementById("leadForm").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Form Submitted Successfully!");
});


    // Smooth scrolling for the Free Consultation button
  document.getElementById("freeConsultationBtn").addEventListener("click", function () {
        document.getElementById("contact").scrollIntoView({
            behavior: "smooth"
        });
    });

