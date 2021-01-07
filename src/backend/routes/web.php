<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/**
 * 
 *  API Root view.
 * 
 *  @author Henrique Fantini
 *  @since 3.0
 * 
 */
Route::get('/', function () 
{

    return view("welcome");

});

/**
 * 
 *  Login route.
 * 
 *  @author Henrique Fantini
 *  @since 3.0
 * 
 */
Route::get('login', array( 'as' => 'login', function () 
{

    return view("welcome");

} ) );
