document.getElementById("leadForm").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Form Submitted Successfully!");
});


  
  document.getElementById("freeConsultationBtn").addEventListener("click", function () {
        document.getElementById("contact").scrollIntoView({
            behavior: "smooth"
        });
    });

