pwShowHide = document.querySelectorAll(".pw-hide");

pwShowHide.forEach((icon) => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelectorAll(".password");

        getPwInput.forEach(password => {
        if(password.type === "password") {
            password.type = "text";
            icon.classList.replace("fa-eye-slash", "fa-eye");
            return;
        }
        else{
            password.type = "password";
            icon.classList.replace("fa-eye", "fa-eye-slash");
        }
    })
 })
});