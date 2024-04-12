const pricee = sessionStorage.getItem('price');
document.getElementById("amount").value = pricee * 445; //exchange rate
const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener("submit", payWithPaystack, false);


function payWithPaystack(e) {
    e.preventDefault();

    alert("Your total price is USD " + pricee + " x Current exchange rate (USD 1 = NGN 445). Total = NGN " + pricee * 445);

    let handler = PaystackPop.setup({

        key: 'pk_live_88840d60de4561dc3168b12e55b5676ddcb1f20d',
        email: document.getElementById("Eemail").value,
        amount: document.getElementById("amount").value * 100,
        ref: '' + Math.floor((Math.random() * 1000000000) + 1), //pseudo-unique reference.


        onClose: function() {
            alert('Window closed.');
        },

        callback: function(response) {
            let message = 'Booking complete! Reference: ' + response.reference;
            alert(message);
            next();
        }
    });

    handler.openIframe();
}

function next() {
    rabbi();
    window.location.href = "mail(2).html";
}

function rabbi() {
    var firstName = document.getElementById("Fname").value;
    var lastName = document.getElementById("Lname").value;
    var email = document.getElementById("Eemail").value;
    var phone = document.getElementById("Pphone").value;

    console.log(firstName, lastName, email, phone);

    sessionStorage.setItem('Fname', firstName);
    sessionStorage.setItem('Lname', lastName);
    sessionStorage.setItem('Eemail', email);
    sessionStorage.setItem('Pphone', phone);

    console.log("worked");
}