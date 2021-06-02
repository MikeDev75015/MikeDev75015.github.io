<?php
// Allow from any origin
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 600");    // cache for 10 minutes
header('Content-Type: application/json');

if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    if (isset($_SERVER["HTTP_ACCESS_CONTROL_REQUEST_METHOD"]))
        header("Access-Control-Allow-Methods: POST"); //Make sure you remove those you do not want to support

    if (isset($_SERVER["HTTP_ACCESS_CONTROL_REQUEST_HEADERS"]))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    //Just exit with 200 OK with the above headers for OPTIONS method
    exit(0);
}

function mailer() {
    $input = file_get_contents('php://input');
    $msg = json_decode($input);

    $to = $msg->to;
    $subject = $msg->subject;
    $html = $msg->html;

    $from = 'Recettes maison <recettes-maison@mikeonline.fr>';

    if($input) {

        $headers  = "MIME-Version: 1.0 \n";
        $headers .= "Content-type: text/html; charset=utf-8 \n";
        $headers .= "From: $from  \n";
        $headers .= "Disposition-Notification-To: $from  \n";
        $headers .= "X-Priority: 1  \n";
        $headers .= "X-MSMail-Priority: High \n";

        $CR_Mail = TRUE;
        $response = "";

        if($msg->allDest) {
            $allDest = explode(',', $msg->allDest);
            $arrlength = count($allDest);

            for($x = 0; $x < $arrlength; $x++) {
                $CR_Mail = @mail ($allDest[$x], $subject, $html, $headers);
                if ($CR_Mail === FALSE) {
                    $response .= " ### CR_Mail=$CR_Mail - Error sending mail to " . $allDest[$x] . "\n";
                } else {
                    $response .= " *** CR_Mail=$CR_Mail - Mail sent to " . $allDest[$x] . "\n";
                }
            }

        } else {
            $CR_Mail = @mail ($to, $subject, $html, $headers);
            if ($CR_Mail === FALSE) {
                $response .= " ### CR_Mail=$CR_Mail - Error sending mail to $to\n";
            } else {
                $response .= " *** CR_Mail=$CR_Mail - Mail sent to $to\n";
            }
        }

        echo $response;

    } else {
        echo "Elements not received";
    }
}

return mailer();

?>
