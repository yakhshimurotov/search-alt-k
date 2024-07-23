const focusInput = document.getElementById("focusInput");

document.body.addEventListener("keyup", (ev) => {
    if (ev.altKey && ev.key === "k") {
        focusInput.focus();
    };
});