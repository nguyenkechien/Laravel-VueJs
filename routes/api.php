<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['prefix' => '/v1', 'namespace' => 'Api\V1', 'as' => 'api.'], function () {
    Route::resource('companies', 'CompaniesController', ['except' => ['create', 'edit']]);
});

Route::group(['prefix' => '/v1', 'namespace' => 'Api\V1', 'as' => 'api.'], function () {
    Route::resource('users', 'UsersController', ['except' => ['create', 'edit']]);
});

Route::group(['prefix' => 'auth', 'namespace' => 'Api\V1', 'as' => 'api.'], function () {
    Route::get('/', 'LoginController@user');
    Route::post('register', 'LoginController@register');
    Route::post('login', 'LoginController@login');
    Route::post('logout', 'LoginController@logout');
});

Route::group(['prefix' => '/upload', 'namespace' => 'Api\V1', 'as' => 'api.'], function () {
    Route::post('avatar', 'UploadController@avatar');
});

