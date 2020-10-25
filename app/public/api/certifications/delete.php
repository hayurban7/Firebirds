<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$db = DbConnection::getConnection();

$id = $_GET['Certification_ID']; // get id through query string

$del = mysqli_query($db,"delete from Certifications where Certification_ID = '$id'"); // delete query

if($del)
{
    mysqli_close($db); // Close connection
    header("location:all_records.php"); // redirects to all records page
    exit;	
}
else
{
    echo "Error deleting record"; // display error message if not delete
}