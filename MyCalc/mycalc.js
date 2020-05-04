//Create calculate function
//Make sure values input from html is reffered back to javascript
//link HTML 

function calculate() {
            let billAmount = document.getElementById("billAmount").value;
            let rating = document.getElementById("rating").value;
            let tipTotal = document.getElementById("tipTotal").value;
            let billTotal = document.getElementById("billTotal").value;


            //Calculate the tip and total cost of bill 
            let total = billAmount * rating;                           
            let Total = parseFloat(billAmount) + parseFloat(total);    
            
            //Display the total Tip
            document.getElementById("tipTotal").innerHTML = total;
            
            //Display the Total Amount 
            document.getElementById("billTotal").innerHTML = Total;
    
    }
     
//Click Button to calculate function 
    
document.getElementById("calculate").addEventListener('click', calculate);