console.log("-----------------------------------------------");
console.log("Country_list Page Reached Successfully... ");
console.log("-----------------------------------------------");

const URL2 = "https://restcountries.com/v3.1/all";

xhr2 = new XMLHttpRequest();

xhr2.open("GET", URL2);

xhr2.send();

xhr2.onload = () => {
    // console.log(xhr2.response);
    for (let val of JSON.parse(xhr2.response)) {
        console.log("Name: ", val.name.common, "|", "Region: ", val.region, "|", "Sub_Region: ", val.subregion, "|", "Population: ", val.population  );
    }
}