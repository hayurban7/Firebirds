<?php

require 'common.php';
$db = DbConnection::getConnection();

//$vars = [ $_GET['Certification_ID'] ];

$stmt = $db->prepare(
"DELETE FROM Certifications WHERE Certification_ID = ?;"
);
$stmt->execute([
$_POST['Certification_ID'],
]);
header('HTTP/1.1 303 See Other');
header('Location: ../certifications/');
