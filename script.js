const form = document.querySelector('form');
const resultDiv = document.querySelector('.result');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    getWordInfo(from.elements[0].value);
});

const getWordInfo = async (word) => {
    const response = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    const data = await response.json();

    resultDiv.innerHTML = `<h2>${data[0].meanings[0].definitions[0].definition}</h2>`;
    console.log(data);
}