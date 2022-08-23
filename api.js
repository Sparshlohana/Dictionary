let output = document.getElementById('output');
let btn = document.getElementById('btn');
let details = document.getElementById('details');
// let word = prompt("Op");

function api() {
    output.innerHTML = '';
    let word = document.getElementById('input');
    let count = 1;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`).then((response) => {
        return response.json();
    }).then((data) => {
        data.forEach(element => {
            let item = element.meanings;
            item.forEach(ele => {
                let item2 = ele.definitions;
                item2.forEach(ele2 => {
                    details.style.display = 'block'
                    output.innerHTML += `${count++})<li>=>${ele2.definition}</li><br>`
                })
            })
        });
    })
    word.value = '';
}

btn.addEventListener('click', (e) => {
    api();
    e.preventDefault();
})
window.onload = function () {
    let form = document.getElementById("form");;
    setTimeout(() => {
        form.classList.add('active');

    }, 400);
};