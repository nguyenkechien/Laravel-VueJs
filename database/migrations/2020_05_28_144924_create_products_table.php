<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('description');
            $table->string('metaDescription');
            $table->string('metaKeywords');
            $table->string('tags')->nullable();
            $table->string('keywords')->nullable();
            $table->string('param')->unique();
            $table->string('thumbnail')->nullable();
            $table->unsignedInteger('category_id')->unsigned()->index()->nullable();
            $table->foreign('category_id')->references('id')->on('category_products')->onDelete('set null');
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
        Schema::dropIfExists('products');
    }
}
