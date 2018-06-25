Promise.all([
    fetch("../data/cohorts/lim-2018-03-pre-core-pw/users.json"),
    fetch("../data/cohorts/lim-2018-03-pre-core-pw/progress.json"),
    fetch("../data/cohorts.json")
]).then((Responses) => { // responde a todas las promesas
    return Promise.all(Responses.map((response) => {
        return response.json();
    }));

}
).then((responseJsons) => {// arreglo de respuestas json
    console.log(responseJsons);

    let users = response[0];
    let progress = response[1];
    let courses = response[2];
    let computeUsersStats = window.loadData.computeUsersStats(users, progress, Object.keys(cohorts[0].coursesIndex));

}).catch((error) => {
    alert("Error de carga" + error);
    //console.log(error)
}
);