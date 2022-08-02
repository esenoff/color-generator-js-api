
let arr = [];

getColor().then(setColor)

function setColor(){
    let html = "";
    arr.map(color => {
        html += `<div>
                    <img src=${color.image.bare} alt="">
                    <h5>${color.hex.value}</h5>
                </div>`;
    })
    document.getElementById('main').innerHTML = html;
}

function getColor(){
    let color = document.getElementById('picker').value.substr(1,6)
    let scheme = document.getElementById('scheme').value
    return fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${scheme}&count=6`)
                    .then(response => response.json())
                    .then(data => {
                                 arr = data.colors
                                });
}

let change = () =>{
    getColor().then(setColor);
}


document.getElementById('btn').addEventListener('click', change);