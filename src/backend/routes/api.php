<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'auth:api'], function()
{
    // == PRIVATE REQUESTS

});

Route::group(['middleware' => 'guest'], function()
{
    // == PUBLIC REQUESTS

    Route::get("/home", function ()
    {
        try
        {
            $result = App::call("HFcom\Http\Controllers\MainController@getMainData", [] );
            return ResponseHelper::respondSuccess( $result );
        }
        catch( Exception $e )
        {
            return ResponseHelper::respondError($e);
        }
    });

    Route::get("/about/{lang}", function ($lang)
    {
        try
        {
            $result = App::call("HFcom\Http\Controllers\AboutController@getAboutData", [$lang] );
            return ResponseHelper::respondSuccess( $result );
        }
        catch( Exception $e )
        {
            return ResponseHelper::respondError($e);
        }
    });    

    Route::get("/resume/{lang}", function ($lang)
    {
        try
        {
            $result = App::call("HFcom\Http\Controllers\ResumeController@getResumeData", [$lang] );
            return ResponseHelper::respondSuccess( $result );
        }
        catch( Exception $e )
        {
            return ResponseHelper::respondError($e);
        }
    });  
    
    Route::get("/portfolio/{lang}", function ($lang)
    {
        try
        {
            $result = App::call("HFcom\Http\Controllers\PortfolioController@getProjects", [$lang] );
            return ResponseHelper::respondSuccess( $result );
        }
        catch( Exception $e )
        {
            return ResponseHelper::respondError($e);
        }
    });

    Route::get("/portfolio/{lang}/{id}", function ($lang, $id)
    {
        try
        {
            $result = App::call("HFcom\Http\Controllers\PortfolioController@getProjectDetail", [$lang, $id] );
            return ResponseHelper::respondSuccess( $result );
        }
        catch( Exception $e )
        {
            return ResponseHelper::respondError($e);
        }
    });
    
    Route::post("/contact/send", "ContactController@processSendRequest");  

});