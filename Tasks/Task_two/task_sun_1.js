var date = new Date();
document.write("<h1>Task One - Day</h1>");
document.write("<p> Today is : " + getDay() + " </p>");

function getDay() {
  switch (date.getDay()) {
    case 0:
      return "Sunday";
      break;
    case 1:
      return "Monday";
      break;
    case 2:
      return "TuesDay";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
      break;
    default:
      return "Error Happen!";
      break;
  }
}
