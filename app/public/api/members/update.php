

<?php

require 'common.php';
$db = DbConnection::getConnection();

// Update record
if($request == 3){
  $name = $data->name;
  $email = $data->email;

  mysqli_query($con,"UPDATE Members SET
    Member_ID='".$Member_ID."',
    First_Name='".$First_Name."',
    Last_Name='".$Last_Name."',
    Title='".$Title."',
    Gender='".$Gender."',
    MemberStreet='".$MemberStreet."',
    MemberCity='".$MemberCity."',
    MemberState='".$MemberState."',
    MemberZipCode='".$MemberZipCode."',
    MemberPhone='".$MemberPhone."',
    Secondary_Phone='".$Secondary_Phone."',
    Radio='".$Radio."',
    Station='".$Station."',
    IsActive='".$IsActive."
    WHERE Member_ID='.$id'");

    $stmt->execute([
      $_POST['Member_ID'],
      $_POST['First_Name'],
      $_POST['Last_Name'],
      $_POST['Title'],
      $_POST['Gender'],
      $_POST['MemberStreet'],
      $_POST['MemberCity'],
      $_POST['MemberState'],
      $_POST['MemberZipCode'],
      $_POST['MemberPhone'],
      $_POST['Secondary_Phone'],
      $_POST['Radio'],
      $_POST['Station'],
      $_POST['IsActive'],
      ]);

   $Member_ID = $_POST['Member_ID']
    header('HTTP/1.1 303 See Other');
    header('Location: ../api/members/?Member_ID=' .$Member_ID)


