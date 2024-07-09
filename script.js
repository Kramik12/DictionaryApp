const form = document.querySelector('form');
const resultDiv = document.querySelector('.result');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    getWordInfo(from.elements[0].value);
});

const getWordInfo = async (word) => {
    const response = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    const data = await response.json();

    resultDiv.innerHTML = `
    <h2><strong>Word:</strong> ${data[0].word}</h2>
    <p>${data[0].meanings[0].partOfSpeech}</p>
    <p><strong>Meaning:</strong>${data[0].meanings[0].definitions[0].definition}</p>`;
    console.log(data);
}