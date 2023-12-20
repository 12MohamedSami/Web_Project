<?php 

    $name=$_REQUEST['name']
	$address=$_REQUEST['address']
	$gender=$_REQUEST['gender']
	$message=$_REQUEST['message']

    if(isset($_POST['btsend']))
    {
        $host="localhost";
        $user="root";
        $pass="2526";
        $db="data";
    
    @$conn=mysqli_connect($host,$user,$pass,$db);
    
    $insert="insert into dataanalysis_info values('$name','$address','$gender','$message')";
    
    
    mysql_query($conn,$insert);
    
    
    if($conn){
        echo("<h1 style='color:green;'>Your Registration is Done</h1>");
    }
    else{
        echo("<h1 style= 'color:red;'>Your Registration is Failed</h1>");
    
    }
    
    
    }




?>