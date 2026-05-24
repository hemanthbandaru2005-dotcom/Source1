function goToPage(page){

    window.location.href = page;
}

function addRow(){

    let table = document
        .getElementById("assetTable")
        .getElementsByTagName('tbody')[0];

    let rowCount = table.rows.length + 1;

    let row = table.insertRow();

    row.innerHTML = `

        <td>${rowCount}</td>

        <td contenteditable="true"></td>

        <td contenteditable="true"></td>

        <td contenteditable="true"></td>

        <td><input type="date"></td>

        <td contenteditable="true"></td>

        <td><input type="date"></td>
    `;
}
