<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Successful!</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div id="wrapper">
        <main>
            <h1>Thank You For the feedback!</h1>
            <p>you entered the following data</p>
            <br>
            <div class="output">
            <?php 
            // php script runs here
            if($_SERVER["REQUEST_METHOD"] == "POST") {
                $name = $_POST["name"];
                $date = $_POST["date"];
                $email = $_POST["email"];
                $phone = $_POST["phone"];
                $comments = $_POST["comments"];
            }
        
            // build output
        
            if ($name == '') {
                echo 'name: N/A';
            } else {
                echo 'name: ' . $name;
            }
            echo "<br>";
        
            if ($date == '') {
                echo 'date: N/A';
            } else {
                echo 'date: ' . $date;
            }
            echo "<br>";
        
            if ($email == '') {
                echo 'email: N/A';
            } else {
                echo 'email: ' . $email;
            }
            echo "<br>";
        
            if ($phone == '') {
                echo 'phone: N/A';
            } else {
                echo 'phone: ' . $phone;
            }
            echo "<br>";
        
            if ($comments == '') {
                echo 'comments: N/A';
            } else {
                echo 'comments: ' . $comments;
            }
            echo "<br>";
        
            ?>
            </div>
            <div class="container">
                <a href="contact.html" class="back">Go Back</a>
            </div>
        </main>
    </div>
    <footer>
        <div class="copyright">
            Daniel Perry &copy; 2024
        </div>
        <script src="scripts/footer.js"></script>
    </footer>
</body>
</html>