<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Mech Master - Book your mechanics</title>
</head>
<?php
   require_once('DBconnect.php');
   session_start();

    function getClients($conn, $searchTerm, $sortBy) {
        $query = "SELECT * FROM client";

        if (!empty($searchTerm)) {
            $query .= " WHERE name LIKE '%$searchTerm%' OR phone LIKE '%$searchTerm%' OR mech LIKE '%$searchTerm%'";
        }

        $query .= " ORDER BY $sortBy";

        $result = mysqli_query($conn, $query);

        while ($row = mysqli_fetch_assoc($result)) {
            echo "<tr>";
            echo "<td>" . $row['name'] . "</td>";
            echo "<td>" . $row['phone'] . "</td>";
            echo "<td>" . $row['color'] . "</td>";
            echo "<td>" . $row['license'] . "</td>";
            echo "<td>" . $row['engine_num'] . "</td>";
            echo "<td>" . $row['date'] . "</td>";
            echo "<td>" . $row['mech'] . "</td>";
            echo "</tr>";
        }
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $searchTerm = $_POST["searchTerm"];
        $sortBy = $_POST["sortBy"];
    } else {
        $searchTerm = "";
        $sortBy = "name"; 
    }
?>
<body>
    <div class="container">
    <h1>Clients List</h1>
    <div class="search-container">
        <div class="box1">
        <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
            <label for="searchTerm">Search:</label>
            <input type="text" id="searchTerm" name="searchTerm" value="<?php echo $searchTerm; ?>">
            </div>
            <div class="box2">
            <label for="sortBy">Sort by:</label>
            <select id="sortBy" name="sortBy">
            <option value="name" <?php echo ($sortBy == "name") ? "selected" : ""; ?>>Name</option>
            <option value="phone" <?php echo ($sortBy == "phone") ? "selected" : ""; ?>>Phone</option>
            <option value="mech" <?php echo ($sortBy == "mech") ? "selected" : ""; ?>>Mechanic</option>
            <option value="color" <?php echo ($sortBy == "color") ? "selected" : ""; ?>>Color</option>
            <option value="license" <?php echo ($sortBy == "license") ? "selected" : ""; ?>>License</option>
            <option value="engine_num" <?php echo ($sortBy == "engine_num") ? "selected" : ""; ?>>Engine Number</option>
            <option value="date" <?php echo ($sortBy == "date") ? "selected" : ""; ?>>Date</option>
            </select>
            </div>
            <button type="submit">Search</button>
        </form>
    </div>
    <br>
    <br>
    <style type="text/css">
    .tg  {border-collapse:collapse;border-spacing:10px;margin-left: -50px;width:  120%; border: 2px double black;border-radius: 5px;background-color:darkblue;}
    .tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:25px;
      overflow:hidden;padding:10px 5px;word-break:normal;align-items: center;}
    .tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:25px;
      font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
    .tg .tg-0lax{text-align:left;vertical-align:top}
    </style>
        <table class="tg">
            <thead>
                <tr>
                    <th class="tg-0lax">Name</th>
                    <th class="tg-0lax">Phone</th>
                    <th class="tg-0lax">Color</th>
                    <th class="tg-0lax">License</th>
                    <th class="tg-0lax">Engine Number</th>
                    <th class="tg-0lax">Date</th>
                    <th class="tg-0lax">Mechanic</th>
                </tr>
            </thead>
            <tbody>
                <?php
                getClients($conn, $searchTerm, $sortBy);
                ?>
            </tbody>
        </table>
    </div>
    <div class="button-box">
        <a href="logout.php" style="color:#ffffff;padding: 5px; width: 80px; border-radius: 10px;font-size: 15px;">Logout</a>
    </div>
</body>
</html>
<?php
mysqli_close($conn);
?>