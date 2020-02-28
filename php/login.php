<?php



$servername = "127.0.0.1";
$username = "root";
$password = "tntdynamite123456789000";
$dbname = "profile";


//Initialising variables 

$user = "";
$pass = "";
$passcheck = "";

//Setting up Mysql connection 
$conn = mysqli_connect($servername, $username, $password, $dbname); // Create connection

if(!$conn){
    echo json_encode("connection is not running");
} else{
    echo json_encode("Database running successfully");
}
    
//Getting username and password from javascript file via Ajax 

 if (isset($_GET["user"]) && isset($_GET["pass"])) {

   $user =  $_GET["user"];
   $pass = $_GET['pass'];
    session_start(); //$_SESSION global variable becomes available
$_SESSION['user'] = $user;
$_SESSION['password'] = $pass;
//     echo $user.$pass;
} else{
    echo json_encode("no data stored");
}

$sql = "SELECT pass_word from login where login_name = '".$user."'";


$result = mysqli_query($conn,$sql);
if($result){
    $row = mysqli_fetch_array($result);
        $passcheck = ($row['pass_word']);
      echo json_encode($passcheck);


//      echo $love;
} else{
    echo json_encode("not successful");
}

//
$conn = null;

//or mysqli_close();
?>

 
