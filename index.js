import { propertyForSaleArr } from "./properties/propertyForSaleArr.js"
import { placeholderPropertyObj } from "./properties/placeholderPropertyObj.js"

function getPropertyHtml(propertyArr){
    if(!propertyArr)
    {
        return `
                    <section class="card">
                        <img src="${placeholderPropertyObj.image}">
                        <div class="card-right">
                            <h2>${placeholderPropertyObj.propertyLocation}</h2>
                            <h3>${placeholderPropertyObj.priceGBP}</h3>
                            <p>${placeholderPropertyObj.comment}</p>
                            <h3>${placeholderPropertyObj.roomsM2.reduce( (sum, currItem) => sum + currItem, 0)} m&sup2</h3>
                        </div>
                    </section>
        `
    }
    let htmlToRender = ""
    propertyArr.forEach( (obj) => {
        //console.log(obj.image)
        htmlToRender += `
                    <section class="card">
                        <img src="${obj.image}">
                        <div class="card-right">
                            <h2>${obj.propertyLocation}</h2>
                            <h3>${obj.priceGBP}</h3>
                            <p>${obj.comment}</p>
                            <h3>${obj.roomsM2.reduce( (sum, currItem) => sum + currItem, 0)} m&sup2</h3>
                        </div>
                    </section>
        `
    })

    return htmlToRender
}

//console.log( getPropertyHtml(propertyForSaleArr) )
document.getElementById("main-container").innerHTML = getPropertyHtml(propertyForSaleArr)