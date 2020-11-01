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
  'INSERT INTO Certification_Details (Member_ID , Certification_ID, Exp_Date)
  VALUES (?,?,?);'
);

// might not end up needing all fields (this lists all from member table)
$stmt->execute([
  $_POST['Member_ID'],
  $_POST['Certification_ID'],
  $_POST['Exp_Date']
]);

// If needed, get auto-generated PK from DB
$pk = $db->lastInsertId();  // https://www.php.net/manual/en/pdo.lastinsertid.php

// Step 4: Output
// Here, instead of giving output, I'm redirecting to the SELECT API,
// just in case the data changed by entering it
header('HTTP/1.1 303 See Other');
header('Location: ../members/');
header('Location: ../certifications/');
