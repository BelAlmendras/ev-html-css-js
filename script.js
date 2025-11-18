

const text = document.getElementById("say");


setTimeout(() => {
    text.textContent = "GOODBYE";
    text.style.color = "orange";
    text.classList.add("fade-in");
}, 5000)


const headers = document.querySelectorAll("h1, h2, h3, h4, h5");
headers.forEach(header => {
    header.addEventListener("click", () => {
        header.style.color = "brown";
    });
});