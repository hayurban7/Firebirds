<?php

require 'common.php';
$db = DbConnection::getConnection();

// Update record
if($request == 3){
  $Certification_ID = $data->Certification_ID;
  $Certificate_Name = $data->Certificate_Name;
  $Exp_period = $data->Exp_period;

  mysqli_query($con,"UPDATE Certifications SET
    Certification_ID='".$Certification_ID."',
    Certificate_Name='".$Certificate_Name."',
    Exp_period='".$Exp_period."'
    ""WHERE Certification_ID=".$id);

  echo "Updated successfully";
  exit;
}