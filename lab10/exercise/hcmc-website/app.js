let firstName = document.querySelector("#firstName")
let patientIdNumber = document.querySelector("#patientIdNumber")
let middleInitials = document.querySelector("#middleInitials")
let lastName = document.querySelector("#lastName")
let dateOfBirth = document.querySelector("#dateOfBirth")
let ddlDepartment = document.querySelector("#ddlDepartment")
let radioIsOutPatientYes = document.querySelector("#radioIsOutPatientYes")
let radioIsOutPatientNo = document.querySelector("#radioIsOutPatientNo")
let btnRegisterPatient = document.querySelector("#btnRegisterPatient")
let btnReset = document.querySelector("#btnReset")
let chkShowOutPatients = document.querySelector("#chkShowOutPatients")
let chkElderlyPatients = document.querySelector("#chkElderlyPatients")
let tbodyPatientsList = document.querySelector("#tbodyPatientsList")
let patients = [];
btnRegisterPatient.addEventListener("click", function (event) {
    event.preventDefault();
    if (patientIdNumber.value && firstName.value && lastName.value && dateOfBirth.value && ddlDepartment.value) {
        patients.push({
            patientIdNumber: patientIdNumber.value,
            firstName: firstName.value,
            middleInitials: middleInitials.value,
            lastName: lastName.value,
            dateOfBirth: dateOfBirth.value,
            ddlDepartment: ddlDepartment.value,
            radioIsOutPatientYes: radioIsOutPatientYes.checked ? "Yes" : "No"
        });
        patientIdNumber.value = "";
    }
})
btnReset.addEventListener("click", function (event) {
})
window.addEventListener("click", function () {
    if (chkElderlyPatients.checked && chkShowOutPatients.checked) {
        tbodyPatientsList.innerHTML = ``;
        for (let patient of patients) {
            if (patient.radioIsOutPatientYes === "No" && (new Date().getFullYear() - new Date(patient.dateOfBirth).getFullYear()) >= 65) {
                createAndAppendRowElements(patient);
            }
        }
    } else if (!chkElderlyPatients.checked && chkShowOutPatients.checked) {
        tbodyPatientsList.innerHTML = ``;
        for (let patient of patients) {
            if (patient.radioIsOutPatientYes === "No") {
                createAndAppendRowElements(patient);
            }
        }
    } else if (chkElderlyPatients.checked && !chkShowOutPatients.checked) {
        tbodyPatientsList.innerHTML = ``;
        for (let patient of patients) {
            if ((new Date().getFullYear() - new Date(patient.dateOfBirth).getFullYear()) >= 65) {
                createAndAppendRowElements(patient);
            }
        }
    } else {
        tbodyPatientsList.innerHTML = ``;
        for (let patient of patients) {
            createAndAppendRowElements(patient);
        }
    }
})

function createAndAppendRowElements(patient) {
    let tr = document.createElement("tr")
    tr.innerHTML = `<td>${patient.patientIdNumber}</td>
                    <td>${patient.firstName}</td>
                    <td>${patient.middleInitials}</td>
                    <td>${patient.lastName}</td>
                    <td>${patient.dateOfBirth}</td>
                    <td>${patient.ddlDepartment}</td>
                    <td>${patient.radioIsOutPatientYes}</td>`;

    tbodyPatientsList.appendChild(tr);
}