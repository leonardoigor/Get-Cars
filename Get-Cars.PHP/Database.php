<?php


if(mysqli_connect('localhost','root','','cars'))
{
    $conn = mysqli_connect('localhost','root','','cars');
    
}else
{
    echo "erro connection";
}

?>