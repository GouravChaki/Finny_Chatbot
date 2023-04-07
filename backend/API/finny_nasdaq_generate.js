let csvToJson = require('convert-csv-to-json');

let json = csvToJson.getJsonFromCsv("./API/nasdaq.csv")
const finny_nasdaq_api=()=>{
    console.log(json)
}
module.exports=finny_nasdaq_api