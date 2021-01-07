<?php

    namespace HFcom\Http\Controllers;

    use Illuminate\Http\Request;
    use HFcom\Helpers\ResponseHelper;
    use \stdClass;
    use HFcom\Mail\SendContactMail;
    use Illuminate\Support\Facades\Mail;

    class ContactController
    {   
        public function processSendRequest(Request $request)
        {
            try
            {
                $resp = null;
                $param = $request->all();

                try
                {
                    $validationResult = $this->validateMessageParam( $param );

                    if( $validationResult === true )
                    {
                        $this->sendMessage($param);
                        return ResponseHelper::respondSuccess( "contact_mail_success" );
                    }
                    else
                    {
                        return ResponseHelper::respondValidation( $validationResult);
                    }
                }
                catch( \Throwable $e )
                {
                    throw $e;
                }

            }
            catch( \Throwable $e )
            {
                return ResponseHelper::respondError($e);
            }
        }

        protected function validateMessageParam( $param )
        {
            $issue = false;
            $error = new stdClass();

            $error->name = [];
            $error->mail = [];
            $error->phone = [];
            $error->subject = [];
            $error->message = [];
            $error->captcha = [];

            try
            {
                $param = $param;

                // == NAME

                if( strlen( $param['name'] ) == 0)
                {
                    $issue = true;
                    array_push( $error->name, "validation_name_empty" );                    
                }
                else if( strlen( $param['name'] ) > 45 )
                {
                    $issue = true;
                    array_push( $error->name, "validation_name_length" );
                }

                // == MAIL

                if( strlen( $param['mail'] ) == 0)
                {
                    $issue = true;
                    array_push( $error->mail, "validation_mail_empty" );   
                }
                else if( strlen( $param['mail'] ) > 100 )
                {
                    $issue = true;
                    array_push( $error->mail, "validation_mail_length" );
                } 

                if ( strpos($param['mail'], '@') === false)
                { 
                    $issue = true;
                    array_push( $error->mail, "validation_mail_at" );
                }

                // == PHONE

                if( strlen( $param['phone'] ) != 0 )
                {
                    if( strlen( $param['phone'] ) > 20 )
                    {
                        $issue = true;
                        array_push( $error->phone, "validation_phone_length" );
                    }     
                    
                    if( is_numeric( $param['phone'] ) === false )
                    {
                        $issue = true;
                        array_push( $error->phone, "validation_phone_numeric" );
                    }
                }
                
                // == SUBJECT

                if( strlen( $param['subject'] ) == 0 )
                {
                    $issue = true;
                    array_push( $error->subject, "validation_subject_empty" );
                }
                else if( strlen( $param['subject'] ) > 50 )
                {
                    $issue = true;
                    array_push( $error->subject, "validation_subject_length" );
                }                
                
                // == MESSAGE

                if( strlen( $param['message'] ) == 0 )
                {
                    $issue = true;
                    array_push( $error->message, "validation_message_empty" );
                }
                if( strlen( $param['message'] ) > 1024 )
                {
                    $issue = true;
                    array_push( $error->message, "validation_message_length" );
                }                    
                
                // == RECAPTCHA

                $post_data = http_build_query(
                    array(
                        'secret' => '6LdqjLwUAAAAAHteVf_sg0H7YRiUlFqzrLFy1EGT',
                        'response' => $param['recapKey'],
                        'remoteip' => $_SERVER['REMOTE_ADDR']
                    )
                );
                
                $opts = array('http' =>
                    array(
                        'method'  => 'POST',
                        'header'  => 'Content-type: application/x-www-form-urlencoded',
                        'content' => $post_data
                    )
                );

                $context  = stream_context_create($opts);
                $response = file_get_contents('https://www.google.com/recaptcha/api/siteverify', false, $context);
                $result = json_decode($response);

                if (!$result->success) 
                {
                    array_push( $error->captcha, "validation_message_length" );
                }                
            }
            catch( \Throwable $e )
            {
                throw $e;
            }

            // == FINAL

            if($issue == true)
            {
                return $error;
            }
            else
            {
                return true;
            }
        }

        protected function sendMessage( $data )
        {
            Mail::to("contact@henriquefantini.com")->send( new SendContactMail( $data ) );
        }
    }

?>
