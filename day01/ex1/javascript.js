function myFunction1 (){
    var a = document.getElementById('text1').value;
    a = parseFloat(a);
    var b = document.getElementById('text2').value;
    b = parseFloat(b);
    var c = document.getElementById('select');
    var value = c.options[c.selectedIndex].value;
    value = parseInt(value);
    var k;
    
    switch  (value){
        case 1: {
            k = (a +(b*2))/3;
            k = parseFloat(k);
            document.getElementById('result').value = k;
            break;
        }
        case 2: {
            k = ((a*2) +(b*3))/5;
            k = parseFloat(k);
            document.getElementById('result').value = k;
            break;
        }
        case 3: {
            k = ((a*3) +(b*4))/7;
            k = parseFloat(k);
            document.getElementById('result').value = k;
            break;
        }
    }
    if (k>= 9){
        document.getElementById('display').innerHTML = "Hoc sinh gioi";
        document.getElementById('display').style.color = "red";
    }
    else if (k>=7 && k<9){
        document.getElementById('display').innerHTML = "Hoc sinh kha";
        document.getElementById('display').style.color = "blue";
    }
    else if (k>=5 && k<7){
        document.getElementById('display').innerHTML = "Hoc sinh TB";
        document.getElementById('display').style.color = "yellow";
    } else {
        document.getElementById('display').innerHTML = "Hoc sinh yeu";
        document.getElementById('display').style.color = "black";
    }
}

function myFunction2 (){
    document.getElementById('text1').value = "";
    document.getElementById('text2').value = "";
    document.getElementById("result").value = "";
    document.getElementById("display").innerHTML = "";
}