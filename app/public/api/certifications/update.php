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

  echo "Update successfully";
  exit;