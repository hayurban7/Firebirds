<?php
// DELETE PHP FROM https://makitweb.com/insert-update-delete-records-from-mysql-with-vue-js/

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

// Delete record
if($request == 4){
  $Certification_ID = $data->Certification_ID;

  mysqli_query($con,"DELETE FROM Certifications WHERE Certification_ID=".$Certification_ID);

  echo "Deleted successfully";
  exit;
}
