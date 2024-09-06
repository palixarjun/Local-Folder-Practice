const resultEl = document.getElementById('result');
const birthdayEl = document.getElementById('birthday');
const btnEl = document.getElementById('btn');

function calculateAge() {
    let age;
    const dateEl = new Date();
    const btdstring = birthdayEl.value;
    const birthdayVal = new Date(btdstring);

    if (btdstring === "") {
        alert("Enter a valid input");
    } else {
        age = dateEl.getFullYear() - birthdayVal.getFullYear();
        let monthsCount = dateEl.getMonth() - birthdayVal.getMonth();

        if (age < 0 || 
            (age === 0 && monthsCount < 0) || 
            (age === 0 && monthsCount === 0 && dateEl.getDate() < birthdayVal.getDate())) {
            alert("Future?");
        } 
        
        else if (age === 0 && monthsCount === 0) {
            const dateVal = dateEl.getDate() - birthdayVal.getDate();
            resultEl.innerHTML = `You're ${dateVal} ${dateVal <= 1 ? 'day' : 'days'} old.`;
        } 
        
        else if (monthsCount < 0 || (monthsCount === 0 && dateEl.getDate() < birthdayVal.getDate())) {
            age--;
            resultEl.innerHTML = `You're ${age} ${age <= 1 ? 'year' : 'years'} old.`;
        } 
        
        else if (age === 0) {
            resultEl.innerHTML = `You're ${monthsCount} ${monthsCount <= 1 ? 'month' : 'months'} old.`;
        } 
        
        else {
            resultEl.innerHTML = `You're ${age} ${age <= 1 ? 'year' : 'years'} old.`;
        }
    }
}

btnEl.addEventListener("click", calculateAge);
