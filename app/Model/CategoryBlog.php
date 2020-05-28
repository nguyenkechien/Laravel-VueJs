<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class CategoryBlog extends Model
{
    protected $fillable = ['name', 'description', 'icon', 'metaDescription','metaKeywords','parent_id'];

    public function category_blog()
    {
        return $this->belongsTo('App\Model\CategoryBlog');
    }
}
