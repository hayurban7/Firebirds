<?php

require 'common.php';

// Step 0: Validate the incoming data
// This code doesn't do that, but should ...
// For example, if the date is empty or bad, this insert fails.

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
// Note the use of parameterized statements to avoid injection
$stmt = $db->prepare(
    'SELECT  M.First_Name, M.Last_Name, C.Certificate_Name, CD.Exp_Date FROM Members M, Certifications C, Certification_Details CD WHERE  M.Member_ID = CD.Member_ID and CD.Certification_ID=?'
);
// might not end up needing all fields (this lists all from member table)
$stmt->execute([
  $_POST['Certification_ID']
]);

// If needed, get auto-generated PK from DB
//$pk = $db->lastInsertId();  // https://www.php.net/manual/en/pdo.lastinsertid.php

// Step 4: Output
// Here, instead of giving output, I'm redirecting to the SELECT API,
// just in case the data changed by entering it
header('HTTP/1.1 303 See Other');
header('Location: ../certifications/');

// // Step 1: Get a datase connection from our helper class
// $db = DbConnection::getConnection();

// // Step 2: Create & run the query
// $sql = 'SELECT  M.First_Name, M.Last_Name, C.Certificate_Name, CD.Exp_Date FROM Members M, Certifications C, Certification_Details CD WHERE  M.Member_ID = CD.Member_ID and CD.Certification_ID=?';
// $vars = ['Certification_ID'];

// // if (isset($_GET['guid'])) {
// //   // This is an example of a parameterized query
// //   $sql = 'SELECT * FROM Patient WHERE patientGuid = ?';
// //   $vars = [ $_GET['guid'] ];
// // }

// $stmt = $db->prepare($sql);
// $stmt->execute($vars);

// $Certifications = $stmt->fetchAll();

// // Step 3: Convert to JSON
// $json = json_encode($Certifications, JSON_PRETTY_PRINT);

// // Step 4: Output
// header('Content-Type: application/json');
// echo $json; 