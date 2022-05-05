window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
})

const createInnerHtml = () => {
    const headerHtml = "<th>Profile</th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
    for (const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
    <tr>
        <td><img class="profile" src="${empPayrollData._profilePic}"></td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>${getDeptHtml(empPayrollData._department)}</td>
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
        <td>
            <img name="${empPayrollData._id}" onclick="remove()" alt="delete" src="../assets/icons/delete-black-18dp.svg" alt="delete">
            <img name="${empPayrollData._id}" alt="edit" onclick="update()" src="../assets/icons/create-black-18dp.svg" alt="edit">
        </td>
    </tr>
    `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}
const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [{
            "id": 1,
            "_name": "Mark",
            "_gender": "male",
            "_department": [
                "Finance"
            ],
            "_salary": "500000",
            "_startDate": 1572287400000,
            "_note": "All In One",
            "_profilePic": "../assets/profile-images/Ellipse -3.png"
        },
        {
            "id": 2,
            "_name": "Bill",
            "_gender": "male",
            "_department": [
                "Engineering"
            ],
            "_salary": "500000",
            "_startDate": "29 Oct 2019",
            "_note": "Terrific Engineer",
            "_profilePic": "../assets/profile-images/Ellipse -1.png"
        },
        {
            "_name": "Keerthi",
            "_gender": "female",
            "_department": [
                "Sales"
            ],
            "_salary": "400000",
            "_startDate": "29 Oct 2019",
            "_note": "",
            "_profilePic": "../assets/profile-images/Ellipse -4.png",
            "id": 3
        },
        {
            "_name": "Kavya",
            "_profilePic": "../assets/profile-images/Ellipse -7.png",
            "_gender": "female",
            "_department": [
                "Finance",
                "Engineer"
            ],
            "_salary": "428100",
            "_note": "                ",
            "_startDate": 1621189800000,
            "id": 5
        }
    ];
    return empPayrollListLocal;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`;
    }
    return deptHtml;
}