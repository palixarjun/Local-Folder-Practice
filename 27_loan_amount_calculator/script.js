function calcloan() {
    let amount_element = document.getElementById("p-amount").value;
    let interest_element = document.getElementById("interest").value;
    let months_count = document.getElementById("month-length").value;
    // console.log(amount_element, interest_element, months_count);

    let interest_value = amount_element * (interest_element/100) * (months_count/12);
    let totalVal = parseInt(amount_element, 10) + parseInt(interest_value, 10);
    let month_val = totalVal/months_count;

    let totalEL = document.querySelector("#total");
    let spanEl = document.querySelector("#val");

    totalEL.innerHTML = `$${totalVal.toFixed(2)}`;
    spanEl.innerHTML = `$${month_val.toFixed(2)}`;


    
}