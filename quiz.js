/**
 * hides intro and show question 1
 */
function startQuiz() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("question1").style.display = "inline-block";
}

/**
 * hides question1 shows question2
 */
function question2() {
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "inline-block";
}

/**
 * hides question2 shows question3
 */
function question3() {
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "inline-block";
}

/**
 * hides question3 shows question4
 */
function question4() {
    document.getElementById("question3").style.display = "none";
    document.getElementById("question4").style.display = "inline-block";
}

/**
 * hides question4 shows question5
 */
function question5() {
    document.getElementById("question4").style.display = "none";
    document.getElementById("question5").style.display = "inline-block";
}

/**
 * hides question 5 shows results
 */
function results() {
    calculateResults()
    document.getElementById("question5").style.display = "none";
    document.getElementById("results").style.display = "inline-block";
}

/**
 * calculates and displays the results
 */
function validateRadio() {
    //this function will validate whether the radio was clicked or not. 
    //if yes, the function will return true, and the calculateresults will be performed. 
    //if no, the function will return false, and change the DOM to say "oi select something" and refuse to move on. 
    return false;
}

function calculateResults() {
    const radios1 = document.querySelectorAll('input[name="quest1"]');
    let q1Value;
    for (const rb of radios1) {
        if (rb.checked) {
            q1Value = rb.value;
            break;
        }
    }

    const radios2 = document.querySelectorAll('input[name="quest2"]');
    let q2Value;
    for (const rb of radios2) {
        if (rb.checked) {
            q2Value = rb.value;
            break;
        }
    }
    const radios3 = document.querySelectorAll('input[name="quest3"]');
    let q3Value;
    for (const rb of radios3) {
        if (rb.checked) {
            q3Value = rb.value;
            break;
        }
    }
    const radios4 = document.querySelectorAll('input[name="quest4"]');
    let q4Value;
    for (const rb of radios4) {
        if (rb.checked) {
            q4Value = rb.value;
            break;
        }
    }
    const radios5 = document.querySelectorAll('input[name="quest5"]');
    let q5Value;
    for (const rb of radios5) {
        if (rb.checked) {
            q5Value = rb.value;
            break;
        }
    }
    let total = Number(q1Value) + Number(q2Value) + Number(q3Value) + Number(q4Value) + Number(q5Value);


if (total === 15) {
  msg = "Awesome! You got all!";
} else if (total >= 12) {
  msg = "Bravo, You got 4 out of 5";
} else {
  msg = "You can be better, Let's try again";
}



document.getElementById("result").innerHTML = msg

}