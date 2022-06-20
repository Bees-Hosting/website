<?php

$errorMSG = "Erreur";

$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

// NAME
if (empty($name)) {
    $errorMSG = "Un nom est requis ";
}

// EMAIL
if (empty($email)) {
    $errorMSG .= "Une adresse e-mail est requise ";
}

// MESSAGE
if (empty($message)) {
    $errorMSG .= "Un message est requis ";
}

// change email with your email
$EmailTo = "mail@freewebs.ml";
$Subject = "FreeWebs:: Nouveau message reçu";

// prepare email body text
$Body = "";
$Body .= "Nom: ";
$Body .= $name;
$Body .= "\n";
$Body .= "E-mail: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "Succès";
}else{
    if($errorMSG == ""){
        echo "Quelque chose s'est mal passé" :(";
    } else {
        echo $errorMSG;
    }
}

