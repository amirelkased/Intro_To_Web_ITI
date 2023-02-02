document.write("<h1>Question Two</h1>");
var $first_number = prompt("Enter First Number!")
var $second_number = prompt("Enter Second Number!")
document.write("<p>The Lagerest Number is "+sum(parseInt( $first_number),parseInt($second_number)))

function sum($first, $second){
  if($first==$second){
    return ($first+$second)*3;
  }else{
    return $first+$second;
  }
}
