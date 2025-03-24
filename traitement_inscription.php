<?php

$host = "localhost"; 
$user = "root";      
$password = "";      
$dbname = "ecommerce";

$conn = new mysqli($host, $user, $password, $dbname);


if ($conn->connect_error) {
    die("Échec de la connexion : " . $conn->connect_error);
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = htmlspecialchars(trim($_POST['nom']));
    $prenom = htmlspecialchars(trim($_POST['prenom']));
    $email = htmlspecialchars(trim($_POST['email']));
    $telephone = htmlspecialchars(trim($_POST['telephone']));
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT); //

    
    $sql_check = "SELECT id FROM Client WHERE email = ?";
    $stmt_check = $conn->prepare($sql_check);
    $stmt_check->bind_param("s", $email);
    $stmt_check->execute();
    $stmt_check->store_result();

    if ($stmt_check->num_rows > 0) {
        echo "Cet email est déjà utilisé. Veuillez en choisir un autre.";
    } else {
        
        $sql = "INSERT INTO Client (nom, email) VALUES (?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ss", $nom, $email);

        if ($stmt->execute()) {
        
            header("Location: accueil.php");
            exit(); 
        } else {
            echo "Erreur lors de l'inscription : " . $conn->error;
        }
        $stmt->close();
    }

    $stmt_check->close();
}

$conn->close();
?>
