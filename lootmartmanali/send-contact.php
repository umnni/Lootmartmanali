<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    die("Invalid request.");
}

$name = trim($_POST["name"] ?? "");
$email = trim($_POST["email"] ?? "");
$phone = trim($_POST["phone"] ?? "");
$queryType = trim($_POST["query_type"] ?? "");
$product = trim($_POST["product"] ?? "");
$orderId = trim($_POST["order_id"] ?? "");
$message = trim($_POST["message"] ?? "");

if (
    strlen($name) < 3 ||
    !filter_var($email, FILTER_VALIDATE_EMAIL) ||
    !preg_match("/^[0-9]{10}$/", $phone) ||
    empty($queryType) ||
    empty($product) ||
    strlen($message) < 10
) {
    die("Please fill all details correctly.");
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;

    $mail->Username = 'YOUR_EMAIL@gmail.com';
    $mail->Password = 'YOUR_APP_PASSWORD';

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->setFrom('YOUR_EMAIL@gmail.com', 'LootMart Manali Contact Form');
    $mail->addAddress('YOUR_EMAIL@gmail.com');

    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = "New Contact Query - LootMart Manali";

    $mail->Body = "
      <h2>New Customer Query</h2>
      <p><b>Name:</b> {$name}</p>
      <p><b>Email:</b> {$email}</p>
      <p><b>Phone:</b> {$phone}</p>
      <p><b>Query Type:</b> {$queryType}</p>
      <p><b>Product Category:</b> {$product}</p>
      <p><b>Order ID / Bill No:</b> {$orderId}</p>
      <p><b>Message:</b><br>{$message}</p>
    ";

    $mail->send();

    echo "Thank you! Your query has been submitted successfully.";

} catch (Exception $e) {
    echo "Message could not be sent. Error: {$mail->ErrorInfo}";
}
?>