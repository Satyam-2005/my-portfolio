(function() {
    emailjs.init("8ZCbuq6N2-xf8UeSY"); // ✅ Replace with your actual public key
  })();

  function emailSend() {
    const params = {
      from_name: document.getElementById("name").value,
      email_id: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    emailjs.send("service_jtzdzhs", "template_mesmao2", params)
      .then(() => {
        alert("✅ Email sent successfully!");
      })
      .catch((error) => {
        alert("❌ Email sending failed:\n" + JSON.stringify(error));
      });
  }

// Responsive Navbar
function toggleNavbar() {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("open");
}

document.querySelector(".hamburger").addEventListener("click", toggleNavbar);

// Ensure navbar is sticky on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});