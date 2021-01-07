<?php

namespace HFcom\Helpers;

use Illuminate\Http\Response;

class ResponseHelper
{
    public static function respondSuccess( $content )
    {
        http_response_code(200);

        return Response()->json(["status" => "200",
                                 "data" => $content], 200);
    }

    public static function respondValidation( $error )
    {
        return Response()->json(["status" => "422",
                                 "data" => $error], 422);
    }

    public static function respondError( $error )
    {
        http_response_code(500);

        if($error != null)
        {
            if( is_a( $error, "Exception" ) )
            {
                return Response()->json(["status" => "500",
                                   "data" => $error->getMessage()], 500);
            }
            else if( is_string( $error ) )
            {
                return Response()->json(["status" => "500",
                                         "data" => $error], 500);
            }
            else
            {
                return Response()->json(["status" => "500",
                                         "data" => "Unknown Error!"], 500);
            }
        }
        else
        {
            return Response()->json(["status" => "500",
                                   "data" => "Unknown Error!"], 500);
        }
    }
}

?>