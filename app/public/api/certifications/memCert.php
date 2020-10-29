<?php

require 'common.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT  M.First_Name, M.Last_Name, C.Certificate_Name, CD.Exp_Date FROM Members M, Certifications C, Certification_Details CD WHERE M.Member_ID = CD.Member_ID and C.Certification_ID =CD.Certification_ID AND CD.Exp_Date < DATE(NOW())
';
$vars = [];

// if (isset($_GET['guid'])) {
//   // This is an example of a parameterized query
//   $sql = 'SELECT * FROM Patient WHERE patientGuid = ?';
//   $vars = [ $_GET['guid'] ];
// }

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$Certifications = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($Certifications, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;