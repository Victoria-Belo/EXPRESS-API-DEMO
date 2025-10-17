window.addEventListener('DOMContentLoaded', async () => {
    const datatablesSimple = document.getElementById('datatablesSimple');     
    if (datatablesSimple) {              
        try {    
            const items = await getAPI(); 
            createTable(datatablesSimple, items);      
            await createCards();      
        } catch (error) {
            console.error(error);
        }      
    } 
});


async function getAPI() {
    const response = await fetch('http://localhost:3000');     
    return response.json();
}


function createTable(tableElement, items){      
    const tbody = tableElement.querySelector('tbody');
    tbody.innerHTML = '';    

    const rowsHtml = items.map(item => `
        <tr>
            <td>${item.title ?? '-'}</td>
            <td>${item.price ?? '-'}</td>
            <td>${item.description ?? '-'}</td>
            <td>${item.category ?? '-'}</td>
            <td>${item.rating?.rate ?? '-'}</td>
        </tr>
    `).join('');

    tbody.innerHTML = rowsHtml;
    new simpleDatatables.DataTable(tableElement, { paging: true }); 
}

async function createCards(){
    const cardProduct = document.querySelector('.card-product') || null;
    const cardPrice = document.querySelector('.card-price') || null;
    const cardCategory = document.querySelector('.card-category') || null;
    const cardRating = document.querySelector('.card-rating') || null;
    
    const product = await fetch('http://localhost:3000/cards')
    .then((data) => data.json())
    .then((json) =>  {
        
        return json;
    });
    console.log(product.img);
    if(product){//se tiver dados       
        cardProduct.innerHTML = `<img src=${product.img} width=\"150px\" height=\"auto\">`;
        cardPrice.innerHTML = `<p>${product.price}</p>` ; 
        cardCategory.innerHTML = `<p>${product.category}</p>` ; 
        cardRating.innerHTML = `<p>${product.rating}</p>`;
    }
    
}