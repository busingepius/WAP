async function postStudent(id, name, program) {
    let obj = { id, name, program }
    let setting = {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: { 'Content-Type': 'application/json' }
    };
    const response = await fetch("http://localhost:5000/students", setting);
    // const jsonData = await response.json();
    // return jsonData;
    if (response.ok) alert("added successfully")
    else alert(response.statusText);
}

document.getElementById('btnRegister').addEventListener('click', (event) => {
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const program = document.getElementById('program').value;
    data = postStudent(id, name, program);

    // document.getElementById('title').innerHTML = data;
    document.getElementById('myform').reset();


});

