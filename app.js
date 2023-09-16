let Notate = {}
const add = document.querySelector(".add")
const title = document.querySelector(".title")
const text = document.querySelector(".text")
const notebook = document.querySelector(".notebook")
new_notate = null

add.addEventListener('click' ,() => {
    titleValue = title.value
    textValue = text.value
    Notate[titleValue] = [textValue];

    const newNotateHTML = `<h3>${titleValue}</h3><p>${textValue}</p>`;



    // Dodawanie nowej notatki do sekcji "notebook"
    notebook.innerHTML += newNotateHTML;

    notebook.classList.add('note_style')
    // Czyszczenie pól tytułu i treści notatki
    title.value = "";
    text.value = "";

})