var sign = document.getElementById("signup-form");
var log = document.getElementById("LOG-IN");
var customeradmin = document.getElementById('name')
var list = [];
if (localStorage.userinfo != null) {
    list = JSON.parse(localStorage.getItem("userinform"))
}
sign.addEventListener('click', function (e) {
    var error = false;
    e.preventDefault();
    var inputs = document.querySelectorAll('input');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.length == 0) {
            inputs[i].nextElementSibling.innerHTML = `${inputs[i].name} is empty`
            error = tr;
        }
        else {
            inputs[i].nextElementSibling.innerHTML = ``
        }
    }

    var username = document.getElementById('name1')
    var user_pattern = /^[a-zA-Z0-9.\-_$@*!]{3,30}$/;
    if (username.value.length = !0) {
        if (!user_pattern.test(username.value)) {
            username.nextElementSibling.innerHTML = `${username.name} is invalid`
            error = true;

        }
    }


    var gmail = document.getElementById('email')
    var gmail_pattern = /^\w{5,13}@(gmail|yahoo)\.com$/;
    if (gmail.value.length = !0) {
        if (!gmail_pattern.test(gmail.value)) {
            gmail.nextElementSibling.innerHTML = `${gmail.name} is invalid`
            error = true;
        }
    }


    var password = document.getElementById('password')
    var password_pattern = /^\d{4,10}$/;
    if (password.value.length = !0) {
        if (!password_pattern.test(password.value)) {
            password.nextElementSibling.innerHTML = `${password.name} is invalid`
            error = true;
        }
    }



    if (!error) {
        var userinfo = {
            customeroradmin: customeradmin.value,
            name: username.value,
            email: gmail.value,
            pass: password.value,
        }
        list.push(userinfo);
        localStorage.setItem('userinform', JSON.stringify(list));
        window.location.href = `http://127.0.0.1:5500/index.html?#`;
        console.log(list);
    }
})

log.addEventListener('click', function () {
    window.location.href = `http://127.0.0.1:5500/index.html?#`
})
