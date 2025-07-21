import moment from "moment";

const now = moment();

const [currentDate1, currentDate2, currentDay] = [now.format("DD-MM-YYYY"), now.format("MMM Do YY"), now.format("dddd"),];

console.log(currentDate1, currentDate2, currentDay);

//////////////////////////////////////////