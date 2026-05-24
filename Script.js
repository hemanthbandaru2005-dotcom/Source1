// SHOW SECTIONS

function showSection(sectionId){

    let sections = document.querySelectorAll('.section');

    sections.forEach(section=>{
        section.classList.remove('active');
    });

    document.getElementById(sectionId).classList.add('active');
}

// SWITCH BETWEEN FIXED & NON-FIXED

function showAssetTable(tableId){

    let tables = document.querySelectorAll('.asset-table');

    tables.forEach(table=>{
        table.classList.remove('active-table');
    });

    document.getElementById(tableId).classList.add('active-table');
}

// ADD NEW ROWS

function addRow(tableId){

    let table = document.getElementById(tableId).getElementsByTagName('tbody')[0];

    let rowCount = table.rows.length + 1;

    let row = table.insertRow();

    if(tableId === "fixedTable"){

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

    else if(tableId === "nonFixedTable"){

        row.innerHTML = `
            <td>${rowCount}</td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td><input type="date"></td>
        `;
    }

    else{

        row.innerHTML = `
            <td>${rowCount}</td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td contenteditable="true"></td>
            <td><input type="date"></td>
        `;
    }
}
