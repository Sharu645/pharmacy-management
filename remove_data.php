<?php
$conn = mysqli_connect('localhost', 'root', 'sql123', 'pharmacy');

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$name = $_POST['name'];

$sql = "DELETE FROM pharmacytable WHERE name='$name'";
if (mysqli_query($conn, $sql)) {
    $sql = "SELECT name, quantity, price FROM pharmacytable";
    $result = mysqli_query($conn, $sql);

    $data = array();
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }
    }

    mysqli_close($conn);

    header('Content-Type: application/json');
    echo json_encode($data);
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

?>