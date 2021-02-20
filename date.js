//code that are not strictly rekated to the rout
module.exports.getDate = getDate; //exporting a string from this module to app.js
//it can be written as module.exports = getDate
function getDate() {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    let day = today.toLocaleDateString("en-US", options);
    return day;
}