player1_name = localStorage.getItem("player1_name") ;
player2_name = localStorage.getItem("player2_name") ;
player1_score = 0 ;
player2_score = 0 ;

document.getElementById("player1_name").innerHTML = player1_name ;
document.getElementById("player2_name").innerHTML = player2_name ;

function send() {
    num1 = document.getElementById("number1").value ;
    num2 = document.getElementById("number2").value ;
    actual_answer = parseInt(number1) * parseInt(number2);

    var question_number = '<h4 id="display_number">' + num1 + "X" + num2 + '</h4>';
    var input_box = '<br> Answer : <input type="number" id="input_box" placeholder="Enter Your Answer" style="width:40%;">';
    var check_button = '<br><br> <button type="button" id="check_button" onclick="check()" class="btn btn-info">Check</button>';
    var row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}