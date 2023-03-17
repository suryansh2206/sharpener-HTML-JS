async function savetoCrudCrud(event) {

    try {
    event.preventDefault();

    const amount = event.target.amount.value;
    const description = event.target.description.value;
    const category = event.target.category.value;

    const ecomobj = {
        amount,
        description,
        category,
    }

    const response = await axios.post('https://crudcrud.com/api/21302333e2ea4def81782dc312d173fa/ProductDetails', ecomobj)
        displayOnScreen(response.data)
        console.log(response)
    }

    catch(error) {
        console.log(error)
    }
}

window.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await axios.get('https://crudcrud.com/api/21302333e2ea4def81782dc312d173fa/ProductDetails')
        for(let i = 0; i < response.data.length; i++)
        {
            displayOnScreen(response.data[i])
        }
    }
    catch(error) {
        console.log(error)
    }
})

function displayOnScreen(ecomobj) {
    // console.log(ecomobj)
    let parentelem = document.getElementById("listof" + ecomobj.category)

    if(!parentelem) {
        parentelem = document.createElement("li")
        parentelem.id = "listof" + ecomobj.category
        document.body.appendChild(parentelem)
    }

    let childelem = document.createElement('li')
    childelem.textContent = ecomobj.amount + ' - ' + ecomobj.description;

    let deleteButton = document.createElement("input");
    deleteButton.type = "button";
    deleteButton.value = "Delete";

    deleteButton.onclick = async function () {
        try {
            const response = await axios.delete(`https://crudcrud.com/api/21302333e2ea4def81782dc312d173fa/ProductDetails/${ecomobj._id}`)
            parentelem.removeChild(childelem);
        }
        catch(error) {
                console.log(error)
            }
    }
    childelem.appendChild(document.createTextNode(' '));
    childelem.appendChild(document.createTextNode(' '));
    childelem.appendChild(deleteButton)
    parentelem.appendChild(childelem)
    
}