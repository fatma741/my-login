var loginn = document.getElementById("login-form");
var emaill = document.getElementById("email");
var password = document.getElementById("password");
var signup = document.getElementById("sign-up");

loginn.addEventListener('click', function (e) {
    e.preventDefault();
    var inputs = document.querySelectorAll('.p');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.length == 0) {
            inputs[i].nextElementSibling.innerHTML = `${inputs[i].name} is empty`
        }
        else {
            inputs[i].nextElementSibling.innerHTML = ``
        }
    }


    var logformm = JSON.parse(localStorage.getItem('userinform'));
    console.log(logformm);
    for (var i = 0; i < logformm.length; i++) {
        if (emaill.value == logformm[i].email && password.value == logformm[i].pass) {
            localStorage.setItem('loginn', JSON.stringify(logformm[i]));
            window.location.href = `http://127.0.0.1:5500/New%20folder/index.html`
        }
        // else if(!(emaill.value==logform.email && password.value==logform.pass)&& emaill.value.length!=0 && password.value.length!=0)
        // {l
        //     password.nextElementSibling.innerHTML=`incorrect email or password`;
        // }
    }
})

signup.addEventListener('click', function () {
    window.location.href = 'http://127.0.0.1:5500/signup.html'


})
