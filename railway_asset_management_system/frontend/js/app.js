
const assetForm = document.getElementById('assetForm');
const assetTable = document.getElementById('assetTable');

assetForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const assetName = document.getElementById('assetName').value;
    const serialNo = document.getElementById('serialNo').value;
    const status = document.getElementById('status').value;

    const row = `
        <tr>
            <td>${assetName}</td>
            <td>${serialNo}</td>
            <td>${status}</td>
        </tr>
    `;

    assetTable.innerHTML += row;

    assetForm.reset();
});
