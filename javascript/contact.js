function validation() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    if (username == "") {
        swal("Opps!", "Username cannot be blank!", "error");
    } else if (username.length < 3) {
        swal("Opps!", "Please enter a valid Username", "error");
    } else if (!isNaN(username)) {
        swal("Opps!", "Numbers are not allowed in Username", "error");
    }
    else if (email == "") {
        swal("Opps!", "Please enter an Email", "error");
    } else if (email.length < 10) {
        swal("Opps!", "Please enter a valid E-mail", "error");
    }
    else if (phone == "") {
        swal("Opps!", "Please enter the Mobile-Number", "error");
    } else if (isNaN(phone)) {
        swal("Opps!", "Alphabets are not allowed in phone-number", "error");
    } else if (phone.length < 10) {
        swal("Opps!", "Please enter a valid 10 digit Mobile-Number", "error");
    }
    else {
        swal({
            title: "Great!",
            text: "Thankyou for your Response..Do you want to visit Adarsh's Profile for more information?",
            icon: "success",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("You will be Redirect to Adarsh's Profile", {
                        icon: "success",
                    });
                    window.location = "https://www.instagram.com/born2shine__/";
                } else {
                    swal("Okay! Have a Nice Day..");
                }
            });
        // swal("Great!", "Thankyou for your Response---You will be Redirect to Adarsh's Profile", "success");
    }
}