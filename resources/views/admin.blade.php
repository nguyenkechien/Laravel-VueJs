<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>Laravel</title>

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

  <!-- Styles -->

  <link rel="stylesheet" href="{{ asset('css/main.css') }}">
</head>

<body>
  <div id="app">

  </div>
  <script src="{{ asset('js/main.js') }}"></script>
  @if(config('app.env') == 'local')
    <script src="http://localhost:35729/livereload.js"></script>
  @endif
</body>
<!-- development -->

</html>
