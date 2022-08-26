const getSchemeBtn = document.getElementById("schemeBtn")
let html = ''


getSchemeBtn.addEventListener('click',function(){
    hexValue = document.getElementById("colorPicker").value.substring(1)
    modeValue = document.getElementById("picklist").value.toLowerCase()
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=${modeValue}`)
    .then(res => res.json())
    .then(data =>{
        const colorsList = data.colors
        colorsList.map(function(color){
            html += ` 
            <div class="color-container" style="background:${color.hex.value}">
                <div class="color-code"><span>${color.hex.value}</span></div>
            </div>`
        })
        render()
        html=''
        const colorCodes = document.getElementsByClassName("color-code")

        for(let i = 0; i < colorCodes.length; i++){
            colorCodes[i].addEventListener('click',function(){
                const clipColor = colorCodes[i].innerText
                navigator.clipboard.writeText(clipColor)
                alert("Copied the text: " + clipColor)
            })
        }

    })
})


render()

function render(){
        document.getElementById("schemeContainer").innerHTML = html
    }


