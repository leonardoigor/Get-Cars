<?php
include_once './Database.php';
$nome=$_POST['name'];
$date1=$_POST['date1'];
$date2=$_POST['date2'];
$models=$_POST['models'];
$cost=$_POST['cost'];
// echo "$nome, $date1 , $date2";


$query= "INSERT INTO db_cars(name,model,date1,date2,cost) VALUES('$nome','$models','$date1','$date2','$cost')";
if(!empty($nome) ||!empty($models) )
{
    $result= mysqli_query($conn,$query);
    echo "date save";
    if($result)
    {
        echo 'Insert ok ';
    }else{echo " erro result ";}
}
else{echo "Inputs is empty";}
?>