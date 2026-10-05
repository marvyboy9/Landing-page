const email = document.getElementById("email");

document.getElementById("get-started-button").addEventListener("click", () => {
    email.scrollIntoView({ behavior: "smooth", block: "center" });
    email.focus({ preventScroll: true });
});

document.getElementById("signup-button").addEventListener("click", () => {
    email.reportValidity();
});