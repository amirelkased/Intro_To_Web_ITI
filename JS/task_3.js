document.write("<h1>Question Three</h1>")
var $username = prompt("Enter your name!")
var $times = prompt("Enter Number of times!")
document.write("<p>The Result is : "+$times+" Occurs </p>")
print(parseInt($times))

function print($times){
  for(var i=0; i<$times; ++i ){
    document.write("<p>No. "+(i+1)+" => Hello "+$username+"</p>")
  }
}