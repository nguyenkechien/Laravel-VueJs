<?php

namespace App\Http\Controllers\Api\V1;

use App\Model\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class LoginController extends Controller
{
  public function __construct()
  {
    $this->middleware('auth:api', ['except' => ['login', 'register']]);
  }

  /**
   * Get a JWT via given credentials
   *
   * @param Request $request
   * @return \Illuminate\Http\JsonResponse
   */
  public function register(Request $request)
  {
    $this->validate($request, [
      'name' => 'required',
      'email' => 'required|email|unique:users',
      'password' => 'required|min:6',
    ]);
    if ($request->has('avatar')) {
      $path =  $request->file('avatar')->store('public/avatar');
      $url = Storage::url($path);
    }

    $user = User::create([
      'name' => $request->name,
      'email' => $request->email,
      'password' => bcrypt($request->password),
      'avatar' => $url
    ]);
    return response()->json(['user' => $user], Response::HTTP_OK);
  }
  public function login(Request $request)
  {

    $this->validate($request, [
      'email' => 'required|email',
      'password' => 'required|min:6',
    ]);

    $credentials = request(['email', 'password']);

    if (!Auth::attempt($credentials)) {
      return response()->json(['errors' => 'Wrong account or password'], 401);
    }
    $token = Auth::user()->createToken('key')->accessToken;
    return response()->json(auth('api')->user())->header('Authorization', $token);
  }
  public function logout(Request $request)
  {
    // auth('api')->logout();
    // Auth::logout();
    $request->user()->token()->revoke();
    return response()->json([
      'message' => 'Successfully logged out',
    ]);
  }

  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function user(Request $request)
  {
    return response()->json(auth('api')->user());
  }
}
