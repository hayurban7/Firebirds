<?php

require 'common.php';
$db = DbConnection::getConnection();

$stmt = $db->prepare(
"DELETE FROM Members WHERE Member_ID = ?;"
);
$stmt->execute([
$_POST['Member_ID'],
]);
header('HTTP/1.1 303 See Other');
header('Location: ../members/');