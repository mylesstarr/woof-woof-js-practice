const dogBar = document.getElementById("dog-bar")
const dogInfo = document.getElementById("dog-summary-container")
document.addEventListener("DOMContentloaded", fetchAll())



function fetchAll() {
fetch("http://localhost:3000/pups")
  .then((r) => r.json())
  .then(pupsArr => {renderDogs(pupsArr)
  }
  )
}


function renderDogs(pupsArr){
    const dogBar = document.getElementById("dog-bar")
    pupsArr.forEach(pupsArr => {
        const span = document.createElement('span')
        span.innerHTML = pupsArr.name;
        dogBar.appendChild(span);
    }
        )
}

dogBar.addEventListener(click, event) => {

})
function seePupInfo()