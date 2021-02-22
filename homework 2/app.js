function getTheInfos() {
    let fname = document.getElementById(`fname`);
    let lname = document.getElementById(`lname`);
    let age = document.getElementById(`age`);
    let city = document.getElementById(`city`);
    let country = document.getElementById(`country`);
    let spouse = document.getElementById(`spouse`);
    let submitButton = document.getElementById(`submitButton`);

    submitButton.addEventListener(`click`, () => {
        let listOfInfos = document.getElementById(`list`);

        listOfInfos.innerHTML =
        `
        <li> ${fname.value} </li>
        <li> ${lname.value} </li>
        <li> ${age.value} </li>
        <li> ${city.value} </li>
        <li> ${country.value} </li>
        <li> ${spouse.value} </li>
        `
    });
}
getTheInfos();

