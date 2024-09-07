<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["username"]) && isset($_POST["password"])) {
        $valid_username = "charu";
        $valid_password = "1234";

        $v_username = "dharini";
        $v_password = "1234";

        if ($_POST["username"] === $valid_username || $v_username && $_POST["password"] === $valid_password || $v_password) {
            header("Location:dashboard.html");
            exit();
        } else {
            echo "Invalid User Go Back";
            exit();
        }
    }
}
exit();
?>
