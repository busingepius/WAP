
window.onload = display;

async function getStudents() {
    const response = await fetch("http://localhost:5000/students");//get request
    if (response.ok) {
        const jsonData = await response.json();
        return jsonData;
    }
    else {
        throw new Error(response.statusText);
    }
}

function addNewStudentRowToTable(id, name, program) {
    const row = document.createElement('tr');
    row.setAttribute('id', id);
    for (let e of arguments) {
        let cell = document.createElement('td');
        cell.appendChild(document.createTextNode(e));
        row.appendChild(cell);
    }
    document.getElementById('tbodyStudentList').appendChild(row);
}



function display() {
    let data = getStudents();
    document.getElementById('tbodyStudentList').innerHTML = "";
    data.then(r => {
        for (let e of r) {
            addNewStudentRowToTable(e.id, e.name, e.program);
        }
    }).catch(err => {
        alert(err)
    });
}
