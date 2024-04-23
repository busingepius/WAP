
window.onload = loadDataToDropdown;

function loadDataToDropdown() {
    let data = getStudents();
    data.then((result) => {
        for (let e of result) {
            addItemToDropdown(e.id, e.name, e.program);
        }
    });
};

async function getStudents() {
    const response = await fetch("http://localhost:5000/students");
    if (response.ok) {
        const jsonData = await response.json();
        return jsonData;
    }
    else {
        return response.statusText;
    }
}

function addItemToDropdown(id, name, program) {

    const dropdown = document.getElementById('ddlStudent');
    let item = document.createElement('option');
    item.setAttribute("id", "student" + id)
    item.setAttribute("value", id)
    item.appendChild(document.createTextNode(id));
    dropdown.appendChild(item);
}



async function deleteStudent(id) {
    let setting = {
        method: 'DELETE'
    };
    const response = await fetch(`http://localhost:5000/students/${id}`, setting);
    // const jsonData = await response.json();
    if (response.ok) alert("deleted successfully")
    else alert(response.statusText);
}

document.getElementById('btnDelete').addEventListener('click', (event) => {
    let id = document.getElementById('ddlStudent').value;
    deleteStudent(id);
    document.getElementById('student' + id).remove();
    document.getElementById('myform').reset();
});


