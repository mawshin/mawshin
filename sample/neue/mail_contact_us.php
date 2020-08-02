<?php
date_default_timezone_set('Asia/Singapore');
//redirect url
/*$redirect = $_SERVER['HTTP_REFERER'];
$pos = strpos($redirect, "neue.sg");
if($pos === false)
{
	echo "invalid request";
	exit;
}

if(!$_POST)
{
	echo "invalid post";
	exit;
}*/

//form values
$form_values[] = $_POST['contactName'];
$form_values[] = $_POST['contactEmail'];
$form_values[] = $_POST['contactMobile'];
$form_values[] = $_POST['contactEnquiry'];


// Formulate the message
$message = '<table cellpadding="0" cellspacing="0" width="100%" style="font-family:\'Century Gothic\', CenturyGothic, AppleGothic, Arial, sans-serif;"><tr><td valign="top" width="180" style="font-weight:bold;">Name :</td><td valign="top">' . $form_values[0];
$message .= '</td></tr><tr><td valign="top" style="font-weight:bold;">Email :</td><td valign="top">' . $form_values[1];
$message .= '</td></tr><tr><td valign="top" style="font-weight:bold;">Mobile (Optional) :</td><td valign="top">' . $form_values[2];
$message .= '</td></tr><tr><td valign="top" style="font-weight:bold;">Enquiry : </td><td valign="top">' . $form_values[3] . '</td></tr></table>';

/* Using PHP Mail */
// $to      = 'contactus@friso.com.sg';
// $subject = 'Contact Us';
// $headers = 'From: '.$form_values[2]. "\r\n" .
//     'Bcc: weiliang.lee@onyxisland.com, priscilla.ang@onyxisland.com, joshua.ooi@onyxisland.com, yuwen.hong@frieslandcampina.com' . "\r\n" . 
//     'X-Mailer: PHP/' . phpversion();
// mail($to, $subject, $message, $headers);

// multiple recipients
//$to  = 'aidan@example.com' . ', '; // note the comma
$to .= 'mawshin.koh@onyxisland.com, jacqueline.leong@onyxisland.com';

//$cc = 'priscilla.ang@onyxisland.com';
//$bcc = 'jacqueline.leong@onyxisland.com';

// subject
$subject = 'Neue Hair Salon Contact Form';

// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Additional headers
$headers .= 'From:' . $form_values[0] .'<' . $form_values[2] . '>' . "\r\n";
// $headers .= 'Cc: ' . $cc . "\r\n";
$headers .= 'Bcc: ' . $bcc . "\r\n";
//$headers .= 'Bcc: birthdaycheck@example.com' . "\r\n";

// Mail it
$status = mail($to, $subject, $message, $headers);


if( $status == true ) 
{
	echo "success";
	exit;
}
else
{
	echo 'Message could not be sent.';
	exit;
}
// header("Location: " . $redirect);
?>