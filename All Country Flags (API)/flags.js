console.log("-----------------------------------------------");
console.log("Country Flag Display Page Reached Successfully... ");
console.log("-----------------------------------------------");

const URL = "https://restcountries.com/v3.1/all";

xhr = new XMLHttpRequest();

xhr.open("GET", URL);

xhr.send();

xhr.onload = () => {
    // console.log(xhr.response);
    for (let val of JSON.parse(xhr.response)) {
        let flag_img = val.flags.png;
        console.log(flag_img);
    }
    xhr.abort();
}
