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
  "UPDATE Members SET
    First_Name=?,
    Last_Name=?,
    Title=?,
    Gender=?,
    MemberStreet=?,
    MemberCity=?,
    MemberState=?,
    MemberZipCode=?,
    MemberPhone=?,
    Radio=?,
    Station=?,
    IsActive=?,
    Secondary_Phone=?
    WHERE Member_ID=?"
);
// might not end up needing all fields (this lists all from member table)
$stmt->execute([
  $_POST['First_Name'],
  $_POST['Last_Name'],
  $_POST['Title'],
  $_POST['Gender'],
  $_POST['MemberStreet'],
  $_POST['MemberCity'],
  $_POST['MemberState'],
  $_POST['MemberZipCode'],
  $_POST['MemberPhone'],
  $_POST['Radio'],
  $_POST['Station'],
  $_POST['IsActive'],
  $_POST['Secondary_Phone'],
  $_POST['Member_ID'],
]);

// If needed, get auto-generated PK from DB
//$pk = $db->lastInsertId();  // https://www.php.net/manual/en/pdo.lastinsertid.php

// Step 4: Output
// Here, instead of giving output, I'm redirecting to the SELECT API,
// just in case the data changed by entering it
header('HTTP/1.1 303 See Other');
header('Location: ../members/');
