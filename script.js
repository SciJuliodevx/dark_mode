const btn = document.getElementById("btn");
const body = document.querySelector("body");

const darkmode = () => {
    body.classList.toggle("dark_mode"); 
    if (body.classList.contains("dark_mode")) {
        btn.textContent = "Mudar para o modo claro";
    } else {
        btn.textContent = "Mudar para o modo escuro";
    }
}

btn.addEventListener("click", darkmode);
