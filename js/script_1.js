/** Variable initialisation/ Definition ***/

var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    check_num = [],
    check_alpha = [],
    email_list = [],
    active,
    pass_type = document.querySelector('.pass_type'),
    pass_text = document.querySelector('.pass_text'),
    pass_cor = document.querySelector('.pas_cor'),
    wrong_pass = document.querySelector('.wrong'),
    first_name = document.getElementById('first_name'),
    username = document.getElementById('username'),
    pass_word = document.getElementById('password'),
    pass_confirm = document.getElementById('password_1'),
    email = document.getElementById('email'),
    button_create = document.querySelector('.button_create'),
    checkbox = document.getElementById('checkbox'),
    confirm_text = document.querySelector('.confirm_text'),
    name_text = document.querySelector('.name_text'),
    email_text = document.querySelector('.email_text'),
    user_text = document.querySelector('.user_text'),
    email_confirm = document.querySelector('.email_check'),
    personal_profile,
    a = '',
    b, flag1 = '',
    flag2 = '',
    flag3 = '',
    flag4 = '';

pass_type.style.display = "none";
pass_text.style.display = "none";
pass_cor.style.display = "none";
wrong_pass.style.display = "none";
confirm_text.style.display = "none";
name_text.style.display = "none";
email_text.style.display = "none";
user_text.style.display = "none";
email_confirm.style.display = "none";


function initialising_flags(){

flag1='';
flag2 = '';
flag3 = '';
flag4 = '';

}





/******* PASSWORD CLICKING EVENT LISTENER *****/


/****** PASSWORD CHECK EVENT LISTENER *****/

first_name.addEventListener('click', function () {
    check_field();
    initialising_flags();
    active = 'false1';
    
});
username.addEventListener('click', function () {
    check_field();
    initialising_flags();
    active = 'false2';
});
pass_word.addEventListener('click', function () {
    check_field();
    initialising_flags();
    active = 'false3';
});
pass_confirm.addEventListener('click', function () {
    check_field();
    initialising_flags();
    active = 'false4';

});
email.addEventListener('click', function () {
    check_field();
    initialising_flags();
    active = 'false5';
});


first_name.addEventListener('keyup', function () {
    first_name.classList.remove('active');
    first_name.placeholder = 'First name';
    if (first_name.value == parseInt(first_name.value)) {
        name_text.style.display = 'block';
    } else {
        if (first_name.value.indexOf('1') !== -1 || first_name.value.indexOf('2') !== -1 || first_name.value.indexOf('3') !== -1 || first_name.value.indexOf('4') !== -1 || first_name.value.indexOf('5') !== -1 || first_name.value.indexOf('6') !== -1 || first_name.value.indexOf('7') !== -1 || first_name.value.indexOf('8') !== -1 || first_name.value.indexOf('9') !== -1) {
            name_text.style.display = 'block';
        } else {
            name_text.style.display = 'none';
        }

    }
});

username.addEventListener('keyup', function () {
    username.classList.remove('active');
    username.placeholder = 'Username';
    user_text.style.display = "none";
});

pass_word.addEventListener('keyup', function () {

    if (pass_word.value !== '') {
        pass_type.style.display = "block";
        pass_text.style.display = "none";
        pass_word.placeholder = 'Password';
        pass_word.classList.remove('active');


    } else {

        pass_confirm.value = "";
    }



    pass_text.style.display = "none";

    var password = pass_word.value;
    if (password.length > 5) {
        pass_text.style.display = "none";


    } else {
        pass_text.style.display = "block";

    }
    if (pass_confirm.value === pass_word.value) {
        if (pass_word.value === '') {
            pass_cor.style.display = "none";

        } else {
            pass_cor.style.display = "block";
        }

    } else {
        pass_cor.style.display = "none";
    }
    search_pass(password);

});

/****** PASSWORD CONFIRM EVENT LISTENER *****/

pass_confirm.addEventListener('keyup', pass_check);

/****** EMAIL EVENT LISTENER *****/

email.addEventListener('keyup', email_check);


/****** CREATING ACCOUNT EVENT LISTENER *****/



/* creating click_handlers for different events */
button_create.addEventListener('mouseup', create_handler);
button_create.addEventListener('mouseover', Ajax_handler);




/****** FUNCTION TO SCAN PASSWORD *******/

function search_pass(array) {
    var counter = 0,
        count = 0;
    while (counter < arr.length) {
        if (array.search(arr[counter]) !== -1) {
            check_num.push(array.search(arr[counter]));
        }
        counter += 1;
    }
    while (count < alpha.length) {
        array.search(alpha[count]);
        if (array.search(alpha[count]) !== -1) {
            check_alpha.push(array.search(alpha[count]));
        }
        count += 1;
    }

    if (check_num.length >= 1 && check_alpha.length >= 1 && array.length > 5) {
        pass_type.classList.remove('col-weak');
        pass_type.style.display = "block";
        pass_type.classList.add('col-strong');
        pass_type.textContent = 'strong';
        setTimeout(function () {
            pass_type.style.display = "none";
        }, 5000);

    } else {
        pass_type.classList.remove('col-strong');
        pass_type.style.display = "block";
        pass_type.classList.add('col-weak');
        pass_type.textContent = 'weak';

        if (pass_word.value === '') {
            pass_type.style.display = "none";

        }
    }
}

/****** FUNCTION TO CHECK PASSWORD *******/

function pass_check() {
    if (pass_confirm.value !== '') {

        pass_confirm.placeholder = 'Confirm password';
        pass_confirm.classList.remove('active');
    }
    if (pass_word.value === '') {
        pass_confirm.value = '';
        confirm_text.style.display = "block";
    } else {
        confirm_text.style.display = "none";
    }

    if (pass_confirm.value === pass_word.value) {
        if (pass_word.value === '') {
            pass_cor.style.display = "none";

        } else {
            pass_cor.style.display = "block";
            pass_cor.classList.remove('fa-times-circle');
            pass_cor.classList.add('fa-check-circle');
            pass_cor.classList.remove('text-danger');
            pass_cor.classList.add('text-success');

        }

    } else {
        if (pass_confirm.value === '') {
            pass_cor.style.display = "none";
        } else {
            pass_cor.style.display = "block";
            pass_cor.classList.remove('fa-check-circle');
            pass_cor.classList.add('fa-times-circle');
            pass_cor.classList.remove('text-success');
            pass_cor.classList.add('text-danger');

        }


    }
}

/****** FUNCTION TO CHECK EMAIL *******/

function email_check() {
    active = "true";
    email_confirm.style.display = "none";
    var emailDOM = email.value;
    if (email.value === '') {
        wrong_pass.style.display = "none";
    } else {
        email.placeholder = 'Email';
        email.classList.remove('active');
        if (emailDOM.indexOf('$') !== -1 || emailDOM.indexOf('`') !== -1 || emailDOM.indexOf('¬') !== -1 || emailDOM.indexOf('/') !== -1 || emailDOM.indexOf('(') !== -1 || emailDOM.indexOf(')') !== -1 || emailDOM.indexOf(']') !== -1 || emailDOM.indexOf('[') !== -1 || emailDOM.indexOf(':') !== -1 || emailDOM.indexOf(';') !== -1 || emailDOM.indexOf(',') !== -1 || emailDOM.indexOf('?') !== -1 || emailDOM.indexOf('&') !== -1 || emailDOM.indexOf('%') !== -1 || emailDOM.indexOf('£') !== -1 || emailDOM.indexOf('"') !== -1 || emailDOM.indexOf('*') !== -1 || emailDOM.indexOf('%') !== -1 || emailDOM.indexOf('!') !== -1 || emailDOM.indexOf(' ') !== -1 || emailDOM.indexOf('#') !== -1 || emailDOM.indexOf('^') !== -1 || emailDOM.indexOf("'") !== -1 || emailDOM.indexOf('+') !== -1 || emailDOM.indexOf('-') !== -1 || emailDOM.indexOf('=') !== -1 || emailDOM.indexOf('@') === -1) {
            incorrect_email();

        } else {

            var i;
            for (i = 0; i < email.value.length; i++) {
                if (email.value[i] === '@') {
                    email_list.push('a');
                }
            }
            if (email_list.length > 1) {
                incorrect_email();
                email_list = [];
            } else {
                if (email.value.length >= 3) {
                    wrong_pass.classList.remove('fa-times-circle');
                    wrong_pass.classList.add('fa-check-circle');
                    wrong_pass.classList.remove('text-danger');
                    wrong_pass.classList.add('text-success');
                    wrong_pass.style.display = "block";
                    email_list = [];

                } else {
                    incorrect_email();
                }

            }

        }
    }

}


/* CHECKING FINAL DETAILS */

function create_handler() {
    button_create.removeAttribute('data-target');
    button_create.removeAttribute('data-toggle');

    if (first_name.value === "") {
        first_name.placeholder = 'First name required!';
        first_name.classList.add('active');
        button_create.href = '#';
    }
    if (name_text === 'block') {
        button_create.href = '#';
    }
    if (username.value === "") {
        username.placeholder = 'Username required!';
        username.classList.add('active');
        button_create.href = '#';
    }
    if (pass_word.value === "") {
        pass_word.placeholder = 'Password required!';
        pass_word.classList.add('active');
        button_create.href = '#';
    }
    if (pass_confirm.value === "") {
        pass_confirm.placeholder = 'Confirmation required!';
        pass_confirm.classList.add('active');
        button_create.href = '#';
    }
    if (email.value === "") {
        email.placeholder = 'Email required!';
        email.classList.add('active');
        button_create.href = '#';
    }
    if (active === "false") {
        button_create.href = '#';
        email_text.style.display = "block";
        setTimeout(function () {
            email_text.style.display = "none";
        }, 4000);
    }
    if (pass_word.value !== pass_confirm.value) {
        button_create.href = '#';
    }
    if (checkbox.checked === false) {
        button_create.setAttribute("data-target", "#modal");
        button_create.setAttribute("data-toggle", "modal");
        button_create.href = '#';
    }
    if (flag1 === "True1") {
        user_text.style.display = "block";
        button_create.href = '#';
    }
    if (flag2 === "True2") {
        email_confirm.style.display = "block";
        button_create.href = '#';
    }

    if (flag3 === 'True3') {
        button_create.setAttribute("data-target", "#exist");
        button_create.setAttribute("data-toggle", "modal");
        button_create.href = '#';
    }
    if (first_name.value !== "" && name_text !== 'block' && username.value !== "" && pass_word.value !== "" && pass_confirm.value !== "" && email.value !== "" && checkbox.checked === true && active !== "false" && pass_word.value === pass_confirm.value && flag1 !== 'True1' && flag2 !== 'True2' && flag3 !== 'True3') {
        button_create.href = 'loading.html';

    } else {
        button_create.href = '#';
    }

}

/* AJAX HANDLING */ 

function Ajax_handler() {
   
    
    if (first_name.value !== "" && name_text !== 'block' && username.value !== "" && pass_word.value !== "" && pass_confirm.value !== "" && email.value !== "" && checkbox.checked === true && active !== "false" && pass_word.value === pass_confirm.value) {
        personal_profile = new profile(first_name.value, username.value, pass_word.value, email.value);
        localStorage.setItem("personal", JSON.stringify(personal_profile));
        if(flag1 ==='' && flag2 ==='' && flag3 ==='' && flag4 ===''){
         personal_profile.save_details();
        } 
        button_create.href = '#';
    }
    }


/*CHECKING IF THERE ARE ANY ERRORS IN INPUTS */

function check_field() {
    if (active === 'false1' && first_name.value === '') {
        first_name.classList.add('active');
        first_name.placeholder = 'First name required!';
    } else if (active === 'false2' && username.value === '') {
        username.classList.add('active');
        username.placeholder = 'Username required!';
    } else if (active === 'false3' && pass_word.value === '') {
        pass_word.classList.add('active');
        pass_word.placeholder = 'Password required!';
    } else if (active === 'false4' && pass_confirm.value === '') {
        pass_confirm.classList.add('active');
        pass_confirm.placeholder = 'Confirmation required!';
    } else if (active === 'false5' && email.value === '') {
        email.classList.add('active');
        email.placeholder = 'Email required!';
    }
}

/* INCORRECT EMAIL ENTRY */

function incorrect_email() {
    wrong_pass.classList.remove('fa-check-circle');
    wrong_pass.classList.add('fa-times-circle');
    wrong_pass.classList.remove('text-success');
    wrong_pass.classList.add('text-danger');
    wrong_pass.style.display = "block";
    active = "false";

}

/*** CREATING A FUNCTION CONSTRUCTOR FOR ALL INPUT VALUES ****/
function profile(name, user_name, pass, email_address) {
    this.name = name;
    this.user_name = user_name;
    this.password = pass;
    this.email_address = email_address;
    /* AJAX call to send variables to PHP */
    this.save_details = function () {
        var name = this.name;
        var username = this.user_name;
        var pass = this.password;
        var email = this.email_address;

        var ajax = new XMLHttpRequest();
        var method = "GET";
        var url = "details.php?nm=" + name + "&us=" + username + "&ps=" + pass + "&em=" + email;
        var asynchronous = true;

        ajax.open(method, url, asynchronous);

        //sending ajax request
        ajax.send();



        ajax.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
                a = this.responseText;
                console.log(a);
                b = a.split('"');
                if (b.indexOf("username exists") !== -1) {
                    flag1 = "True1";
                } else {
                    flag1 = "false";
                }
                if (b.indexOf("email exists") !== -1) {
                    flag2 = "True2";
                } else {
                    flag2 = "false";
                }
                if (b.indexOf("customer exists") !== -1) {
                    flag3 = "True3";
                } else {
                    flag3 = "false";
                
                }
                if (b.indexOf("New records created successfully")!==-1){
                    flag4 = "True4";
                    
                }
        
            }

        };
    };
}
