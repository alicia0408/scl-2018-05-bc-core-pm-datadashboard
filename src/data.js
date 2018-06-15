function handleSuccess(){
    console.log(this.responseText);

}
function handleError(){
    console.log('ah error');
}
const asyncRequestObject = new XMLHttpRequest();
asyncRequestObject.open('GET','https://milelym.github.io/scl-2018-05-bc-core-pm-datadashboard/data/cohorts/lim-2018-03-pre-core-pw/users.json'); //URL de usuarios de un cohort de lima
asyncRequestObject.onerror=handleError;
asyncRequestObject.send();