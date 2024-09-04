const fetchDogBtn = document.getElementById("fetch-dog")
const fetchCatBtn = document.getElementById("fetch-cat")
const picContainer = document.getElementById("pic-container")

fetchDogBtn.addEventListener("click", (event) => {
    clearDiv()
    event.preventDefault() // https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
    getData(1)
})

fetchCatBtn.addEventListener("click", (event) => {
    clearDiv()
    event.preventDefault() // https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
    getData(0)
})


async function getData(num) {
    const img = document.createElement("img")
    console.log(num)
    if (num==1) {
        const url = "https://dog.ceo/api/breeds/image/random"
        const dataPromise = await fetch(url)
        const dataJSON = await dataPromise.json()

        img.src = dataJSON.message
    } else {
        const url = "https://api.thecatapi.com/v1/images/search"
        const dataPromise = await fetch(url)
        const dataJSON = await dataPromise.json()
        img.src = dataJSON[0].url
    }
    
    picContainer.appendChild(img)

}

function clearDiv() {
    picContainer.innerHTML = "" // https://stackoverflow.com/questions/3450593/how-do-i-clear-the-content-of-a-div-using-javascript
}