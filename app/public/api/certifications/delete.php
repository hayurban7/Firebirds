<?php
// DELETE PHP FROM https://makitweb.com/insert-update-delete-records-from-mysql-with-vue-js/
require 'common.php';
$db = DbConnection::getConnection();

//$vars = [ $_GET['Certification_ID'] ];

$stmt = $db->prepare(
"DELETE FROM Certifications WHERE Certification_ID = ?;"
);
$stmt->execute([
$_POST['Certification_ID'],
]);