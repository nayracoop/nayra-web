<?PHP

if(!isset($_POST["name"]) || $_POST["name"] == "") die('{ "enviado":false, "mensaje":"Por favor, ingrese su nombre" }');
if(!isset($_POST["surname"]) || $_POST["surname"] == "") die('{ "enviado":false, "mensaje":"Por favor, ingrese su apellido" }');
if(!isset($_POST["email"]) || $_POST["email"] == "") die('{ "enviado":false, "mensaje":"Por favor, ingrese su email" }');
if(!isset($_POST["message"]) || $_POST["message"] == "") die('{ "enviado":false, "mensaje":"Por favor, ingrese su mensaje" }');

$to = "info@nayra.coop";

$name = $_POST["name"];
$surname = $_POST["surname"];
$email = $_POST["email"];
$message = $_POST["message"];

$headers  = 'MIME-Version: 1.0' . "\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\n";
//$headers .= 'To: ' . $to . "\n";
$headers .= 'From:'.$name.' '.$surname.' <'.$email.">\n";

$asunto = "Nayra - Contacto";
$cuerpo = '';//'<h1>Nayra - Contacto</h1>';
$cuerpo .= '<p><b>Nombre</b>: '.$name.'<br />';
$cuerpo .= '<b>Apellido</b>: '.$surname.'<br />';
$cuerpo .= '<b>Email</b>: '.$email.'</p>';
$cuerpo .= '<p><b>Mensaje</b>:</p>';
$cuerpo .= $message;

if(mail($to, $asunto, $cuerpo, $headers)) die('{ "enviado":true }');
die('{ "enviado":false, "mensaje":"Error al enviar el mensaje" }');

?>
