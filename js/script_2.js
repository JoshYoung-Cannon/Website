/***INITIALISING VARIABLES */
// Make sure you fix the project and link the localhost before you execute php file 
//click project settings and the the URL is http://localhost/MyWEBAPP/...


var start = localStorage.getItem("start"),
  start = JSON.parse(start);
if (start === 'false') {
    document.write('<style type="text/undefined">');

}




var userDOM = document.getElementById('text'),
    passDOM = document.getElementById('password'),
    login_DOM = document.querySelector('.login_btn'),
    confirm_text = document.querySelector('.confirm_text'),
    a, b, active, flag, start;

confirm_text.style.display = 'none';

userDOM.addEventListener('keyup', function () {
    confirm_text.style.display = 'none';
    userDOM.classList.remove('active');
    userDOM.placeholder = 'Username';
});

passDOM.addEventListener('keyup', function () {
    confirm_text.style.display = 'none';
    passDOM.classList.remove('active');
    passDOM.placeholder = 'Password';
});

userDOM.addEventListener('click', function () {
    check_entry();
    active = 'false1';
});
passDOM.addEventListener('click', function () {
    check_entry();
    active = 'false2';
});


login_DOM.addEventListener('mouseover', click_handler);
//login_DOM.addEventListener('mouseup', mouse_check);

function click_handler() {
    if (userDOM.value !== '' && passDOM.value !== '') {

        var username = userDOM.value;
        var password = passDOM.value;

        var ajax = new XMLHttpRequest();
        var method = "GET";
        var url = "login.php?user=" + username + "&pass=" + password;
        var asynchronous = true;

        ajax.open(method, url, asynchronous);

        //sending ajax request
        ajax.send();


        //receiving response from details.php

        ajax.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                a = this.responseText;
                console.log(a);
                b = a.split('"');
                if (b.indexOf(passDOM.value) !== -1) {
                    flag = true;
                }
                //                    if(a.indexOf('"') !==-1){
                //                        for(var u = a.indexOf('""');u<a.length; u++){
                //                             console.log(a.split(''));
                //                        }
                //                        
                //                    } 
                //                console.log(a.split('succesfully'));
                //                if(a.indexOf('succesfully')  !==-1){
                //                    var b = new Array();
                //                    b = a.split('successfully');
                //                    console.log(b);
                //                }
                //                a = this.responseText
                //                var a = $.getJSON(JSON.stringify(a));       
                //                console.log(a);
                //            
                //                localStorage.setItem("b", JSON.stringify(a));

                //                  var x = JSON.parse(this.responseText);
                //                  console.log(x);

                //                var data = this.responseText;
                //                var jsonResponse = JSON.parse(data);
                //                console.log(jsonResponse["$passcheck"]);
                //                
                //                console.log('Hello');
                //                var pass_confirm = localStorage.getItem("pass");
                //                console.log(pass_confirm);
            }
        };




    }
}
function click_function(){
      if (flag) {
        // document.open('sub2/html');
     // document.open("file:///C:/xampp/htdocs/myWebapp/sub2.html", "_self"); // this is wrong have a look at the difference
         
        //  window.open("http://localhost/myWebapp/online.html", "_self"); this is also right
      window.location.assign("http://localhost/myWebapp/online.html"); //it doesn't work with local files because of chrome protection, you need to use the localhost to load them 

          
        start = 'true';
        localStorage.setItem("start", JSON.stringify(start));

    } else {
        if (userDOM.value === '') {
            userDOM.placeholder = 'Username required!';
            userDOM.classList.add('active');
        }
        if (passDOM.value === '') {
            passDOM.placeholder = 'Password required!';
            passDOM.classList.add('active');
        }
        if (userDOM.value !== '' && passDOM.value !== '') {
            confirm_text.style.display = 'block';
        }
        login_DOM.href = '#';
    }
}

login_DOM.onclick = function(){
  click_function();  
};

//function mouse_check() {
//    
//  
//}

function check_entry() {
    if (userDOM.value === '' && active === 'false1') {
        userDOM.placeholder = 'Username required!';
        userDOM.classList.add('active');
    }
    if (passDOM.value === '' && active === 'false2') {
        passDOM.placeholder = 'Password required!';
        passDOM.classList.add('active');
    }

}

//
// window.onbeforeunload = confirmExit;
//    function confirmExit() {
//        return "You have attempted to leave this page. Are you sure?";
////    } Prompting the user if they want to close the window. 