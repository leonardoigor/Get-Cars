<?php
   include_once './Database.php';
$search = $_POST['search'];
// echo $search;
   $query ="SELECT * FROM db_cars WHERE name LIKE'$search%'";
   
   if(mysqli_query($conn,$query))
   {
       $result=mysqli_query($conn,$query);
    //    echo "Query ok";
    while($row =mysqli_fetch_array($result))
    {
        $name=$row['name'];
        $model=$row['model'];
        $date1 =$row['date1'];
        $date2=$row['date2'];
        $id =$row['id'];
        echo"<tr>";
        echo "<td>".$row['id']."</td>";
        echo "<td id=nameDB".$id.">".$row['name']."</td>";
        echo "<td id=modelDB".$id.">".$row['model']."</td>";
        echo "<td id=date1DB".$id.">".$row['date1']."</td>";
        echo "<td id=date2DB".$id.">".$row['date2']."</td>";
        echo "<td><button class='btn btn-outline-primary' title='Choose ".$row['name']."' onclick='Destiny($id)'>Choose</button></td>";
        echo "</tr>";
    }
   }
   else
   {
    //    echo "query Error";
   }
?>