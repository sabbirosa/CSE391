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
        <h1>Mechanic Slot Blooking Form</h1>
        <br>
        <form action="insert_client.php" method="post">
            <input type="text" name="name" placeholder="Name" required>
            <input type="text" name="phone" placeholder="Phone" required>
            <input type="text" name="color" placeholder="Color" required>
            <input type="text" name="license" placeholder="License" required>
            <input type="text" name="engine_num" placeholder="Engine Number" required>
            <input type="date" name="date" placeholder="Date" required>
            <br>
            <label for="mech">Select Mechanic:</label>
            <select id="mech" name="mech" required>
            
            <?php
                require_once('DBconnect.php');
                session_start();

                function getRemainingSeats($conn, $mech) {

                    $mechQuery = "SELECT COUNT(*) as client_count FROM client WHERE mech = '$mech'";
                    $mechResult = mysqli_query($conn, $mechQuery);
                    $mechRow = mysqli_fetch_assoc($mechResult);

                    $clientCount = $mechRow['client_count'];
                    $remainingSeats = 4 - $clientCount;

                    return $remainingSeats;
                }

                $mechs = array(
                    "M1",
                    "M2",
                    "M3",
                    "M4"
                );

                foreach ($mechs as $mech) {
                    $remainingSeats = getRemainingSeats($conn, $mech);
                    echo "<option value=\"$mech\">$mech ($remainingSeats customers Remaining)</option>";
                }
            ?>
            </select>
            <br>
            <button type="submit">Register</button>
            <button type="reset">Clear</button>
        </form>
        <div class="back-home">
            <a href="index.html">Home</a>
        </div>
    </div>
</body>
</html>
