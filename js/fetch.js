const fetchBtn = document.getElementById("fetch")
const dogContainer = document.getElementById("dog-container")

fetchBtn.addEventListener("click", (event) => {
    clearDiv()
    event.preventDefault() // https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
    getData()
})

async function getData() {
    
    const url = "https://dog.ceo/api/breeds/image/random"
    const dataPromise = await fetch(url)
    const dataJSON = await dataPromise.json()

    const img = document.createElement("img")
    img.src = dataJSON.message
    dogContainer.appendChild(img)

}

function clearDiv() {
    dogContainer.innerHTML = "" // https://stackoverflow.com/questions/3450593/how-do-i-clear-the-content-of-a-div-using-javascript
}