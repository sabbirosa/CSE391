<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Mech Master - Book your mechanics</title>
</head>
<body>
    <div class="container">
        <h1>Admin Login</h1>
        
        <div class="login-box">
        <h2>Login</h2>
        <?php
        if(isset($_SESSION['error'])) {
            echo '<p><span style="color: rgb(255, 0, 0); font-weight: bold">
            Incorrect username / password.<br>Please, try again.</span></p>';
            unset($_SESSION['error']);
        };
        ?>
        <form action="signin.php" method="post">
            <input type="text" name="email" placeholder="Email" required>
            <input type="password" name="password" placeholder="Password" required>
            <input type="submit" value="login">
        </form>
    </div>
    </div>
    <div class="back-home">
            <a href="index.html">Back</a>
        </div>
</body>
</html>
