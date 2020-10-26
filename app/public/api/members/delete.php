<?php
// DELETE PHP FROM https://makitweb.com/insert-update-delete-records-from-mysql-with-vue-js/
$db = DbConnection::getConnection();

// Update record
if($request == 3){
  $Member_ID = $data->Member_ID;
  $First_Name = $data->First_Name;
  $Last_Name = $data->Last_Name;
  $Title = $data->Title;
  $Gender = $data->Gender;
  $MemberStreet = $data->MemberStreet;
  $MemberCity = $data->MemberCity;
  $MemberState = $data->MemberState;
  $MemberZipCode = $data->MemberZipCode;
  $MemberPhone = $data->MemberPhone;
  $Secondary_Phone = $data->Secondary_Phone;
  $Radio = $data->Radio;
  $Station = $data->Station;
  $IsActive = $data->IsActive;

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
    IsActive='".$IsActive."'
    ""WHERE Member_ID=".$Member_ID);

  echo "Update successfully";
  exit;
}

// Delete record
if($request == 4){
  $Member_ID = $data->Member_ID;

  mysqli_query($con,"DELETE FROM Members WHERE Member_ID=".$Member_ID);

  echo "Delete successfully";
  exit;
}
