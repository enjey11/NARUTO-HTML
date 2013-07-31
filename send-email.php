<?
if($_POST['nombre']!=""){

	// definimos el mensaje
	$mensaje="";
	$mensaje.="Póngase en contacto con:". "\n\n";
	$mensaje.="Nombre: ".$_POST['nombre']."\n";
	$mensaje.="E-mail: ".$_POST['email']."\n";
	$mensaje.="Mensaje: ".$_POST['mensaje']."\n";
	// definimos a quien se lo enviamos
	//$email_destiny="xxx@gmail.com";
	$email_destiny="enjey11@gmail.com";
	$subject="Formulario de Contacto de Naruto";
	// verificamos si se envió
	if (mail($email_destiny,$subject,$mensaje,"From: Contact<".$_POST['email'].">")) {
	    echo 'su email a sido enviado correctamente, nos comunicaremos con usted lo mas pronto posible.';
	} else {
	    echo 'Error '.$_POST['nombre'];
	}
}else{
	header('Location: http://www.naruto.com/');
}
?>