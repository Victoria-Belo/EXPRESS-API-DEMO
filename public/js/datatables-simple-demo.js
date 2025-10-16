window.addEventListener('DOMContentLoaded', async () => {
    const datatablesSimple = document.getElementById('datatablesSimple');     
    if (datatablesSimple) {              
        try {    
            const items = await getAPI(); 
            createTable(datatablesSimple, items);            
        } catch (error) {
            console.error(error);
        }      
    } 
});

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

async function getAPI() {
    const response = await fetch('http://localhost:3000');     
    return response.json();
}

