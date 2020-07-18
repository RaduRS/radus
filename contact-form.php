<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];


    $email_from = 'radus.co.uk';

    $email_subject = 'New Form submission';

    $email_body = "User Name: $name.\n".
                        "User Email: $email.\n".
                            "User Message: $message.\n";

    $to = "support@radus.co.uk";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $email \r\n";
    
    mail($to, $email_subject, $email_body, $headers);
    header("Location: index.html#contact");
?>