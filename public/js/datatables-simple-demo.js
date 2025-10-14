window.addEventListener('DOMContentLoaded', event => {
    const datatablesSimple = document.getElementById('datatablesSimple');
    let data = document.querySelector('tbody');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);        
        data.innerHTML = `<tr>
        <td>Teste</td>
        <td>Teste</td>
        <td>Teste</td>
        <td>Teste</td>
        <td>Teste</td>
        <td>Teste</td>
        </tr>`;
    }
});
