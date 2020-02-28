 <?php

checking_rows();

function checking_rows(){
    
//connection variables
$servername = "127.0.0.1";
$username = "root";
$password = "tntdynamite123456789000";
$dbname = "profile";

// creating connection 
$conn = mysqli_connect($servername, $username, $password, $dbname);
if(!$conn){
    die("connection failed:".
        mysqli_connect_error());
    
} echo "connected successfully";

    
 $name = "";
$userr= "";
$pass ="";
 $email="";   
  
    
 if (isset($_GET["nm"]) && isset($_GET["us"]) && isset($_GET["ps"]) && isset($_GET["em"])) {

   $name =  $_GET["nm"];
   $userr = $_GET['us'];
   $pass = $_GET['ps'];
   $email = $_GET['em'];
 
    
} else{
    echo "no data stored";
}
   
  $sql = "SELECT * FROM login where first_name = '$name' and login_name = '$userr' and pass_word = '$pass' and email_addy = '$email'";  
 $sql1 = "SELECT login_name FROM login where login_name = '$userr'";
 $sql2 = "SELECT email_addy FROM login where  email_addy = '$email'";
$check = mysqli_query($conn, $sql) or die(mysqli_error($conn));
$check1 = mysqli_query($conn, $sql1) or die(mysqli_error($conn));
$check2 = mysqli_query($conn, $sql2) or die(mysqli_error($conn));
$checkrows=mysqli_num_rows($check);
$checkuser =mysqli_num_rows($check1);
$checkemail =mysqli_num_rows($check2); 

    
if($checkrows>0){
    echo json_encode("customer exists");
}

else if($name == "" || $userr == ""|| $pass == ""|| $email ==""){
        echo "no records enteries made";
    }

   
    else if ($checkuser>0 && $checkemail>0){
        echo json_encode("username exists");
        echo json_encode("email exists");
        
         
        } else {
        if($checkuser>0 ){
            echo json_encode("username exists"); 
        } 
      if($checkemail>0){
            echo json_encode("email exists");
      }
    }
    
    if($checkuser == 0 && $checkemail == 0){


     $sql1 = "INSERT INTO login (first_name, login_name, pass_word, email_addy) VALUES ('$name', '$userr', '$pass', '$email')";
    if (mysqli_query($conn, $sql1)){
       echo json_encode ("New records created successfully");
    }else{
        echo "no records added";
    }
        }
}
    


$conn = null;

?> 

   