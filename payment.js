"use strict";


function finalPrice() {
    var shoeCost = document.getElementById("model").value;
    var insuranceCost = document.getElementById("insurance").value;
    var shippingCost = document.querySelector('input[name="shipping"]:checked').value;
    
    var totalCost = parseInt(shoeCost) + parseInt(insuranceCost) + parseInt(shippingCost);

    document.getElementById("select").innerHTML = "$"+totalCost;
    console.log(totalCost);
}
finalPrice();