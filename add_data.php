<?php
$conn = mysqli_connect('localhost', 'root', 'sql123', 'pharmacy');

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$name = $_POST['name'];
$quantity = $_POST['quantity'];
$price = $_POST['price'];

$sql = "INSERT INTO pharmacytable (name, quantity, price) VALUES ('$name', '$quantity', '$price')";
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