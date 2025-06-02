document.addEventListener("DOMContentLoaded", function () {
    const accountIcon = document.getElementById("account-icon");
    const accountMenu = document.querySelector(".account-menu");

    accountIcon.addEventListener("click", function () {
        accountMenu.classList.toggle("show"); // Agrega/quita la clase con animación
    });

    // Opcional: Cerrar el menú si el usuario hace clic fuera de él
    document.addEventListener("click", function (event) {
        if (!accountIcon.contains(event.target) && !accountMenu.contains(event.target)) {
            accountMenu.classList.remove("show");
        }
    });
});
