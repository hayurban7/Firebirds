<?php
// DELETE PHP FROM https://makitweb.com/insert-update-delete-records-from-mysql-with-vue-js/
require 'common.php';
$db = DbConnection::getConnection();

// Update record
// if($request == 3){
  $Certification_ID = $cert->Certification_ID;
  $Certificate_Name = $cert->Certificate_Name;
  $Exp_period = $cert->Exp_period;
//
//   mysqli_query($con,"UPDATE Certifications SET
//     Certification_ID='".$Certification_ID."',
//     Certificate_Name='".$Certificate_Name."',
//     Exp_period='".$Exp_period."'
//     "WHERE Certification_ID=".$Certification_ID);
//
//   echo "Updated successfully";
//   exit;
// }
$stmt = $db->prepare(
  "DELETE FROM Certifications WHERE Certification_ID=".$Certification_ID);
// Delete record
// if($request == 4){
//   $Certification_ID = $data->Certification_ID;

  // mysqli_query($con,"DELETE FROM Certifications WHERE Certification_ID=".$Certification_ID);

  echo "Deleted successfully";
  exit;
