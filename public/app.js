//For this app.js I based on the other challenges that had the script.js and the hints
//(and some investigation when error were shown) as I don't fully know JavaScript D:

//Look for the form in the HTML
const form = document.querySelector("form");
//check when the form is being submited by the submit button being pressed
form.addEventListener("submit", async function(event) {
    event.preventDefault();
    
    //hint 1 used :)
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
        //Hint 2 used :)
        const response = await fetch('/api/register-patient', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        //Hint 3 used :)
        const result = await response.json();
        alert(result.message);

        form.reset(); //investigated this so the forms can clear after the data is sent

    } catch (error) {
        alert("Something went wrong.");
        console.error(error);
    }

});