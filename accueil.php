<?php
// Démarrer la session pour récupérer les infos du client si besoin
session_start();
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accueil - Boutique</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        /* Styles similaires au formulaire */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: url('prmr.jpg') center/cover no-repeat;
            backdrop-filter: blur(8px);
        }

        .container {
            background: rgba(255, 255, 255, 0.9);
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
            max-width: 400px;
            width: 100%;
        }

        .container h2 {
            color: #8a583c;
            margin-bottom: 20px;
        }

        .welcome-text {
            font-size: 18px;
            color: #5a3e2b;
            margin-bottom: 20px;
        }

        .btn {
            background-color: #8a583c;
            color: white;
            border: none;
            padding: 12px;
            width: 100%;
            border-radius: 5px;
            font-size: 18px;
            cursor: pointer;
            transition: background 0.3s;
            text-decoration: none;
            display: inline-block;
        }

        .btn:hover {
            background-color: #5a3e2b;
        }
    </style>
</head>

<body>
    <div class="container">
        <h2>Bienvenue ! 🎉</h2>
        <p class="welcome-text">Votre inscription a été réussie. Profitez de notre boutique dès maintenant.</p>
        <a href="boutique.php" class="btn">Accéder à la boutique</a>
    </div>
</body>

</html>
