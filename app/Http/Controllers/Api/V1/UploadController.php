<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Model\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UploadController extends Controller
{
  public function avatar(Request $request)
  {
    // if ($request->has('avatar') && $request->has('email')) {
    $path =  $request->file('avatar')->store('public/avatar');
    $user = User::where('email', $request['email'])->first();
    $url = Storage::url($path);
    $user->update([
      'avatar' => $url
    ]);
    // }
    return response(['messenger' => 'Done!', 'patch' => $url], 200);
  }
}
