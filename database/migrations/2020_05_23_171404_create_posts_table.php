<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title')->unique();
            $table->text('content');
            $table->string('thumbnail')->nullable();
            $table->string('metaDescription')->nullable();
            $table->string('metaKeywords')->nullable();
            $table->string('tags')->nullable();
            $table->string('keywords')->nullable();
            $table->string('param')->unique();
            $table->unsignedInteger('category_id')->unsigned()->index()->nullable();
            $table->foreign('category_id')->references('id')->on('category_blog')->onDelete('set null');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
