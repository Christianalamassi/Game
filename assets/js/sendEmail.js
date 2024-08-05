function sendMail(contactForm) {
    emailjs.send("service_xvgrfxc", "template_6oh4tnd", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return true;  // To block from loading a new page
}