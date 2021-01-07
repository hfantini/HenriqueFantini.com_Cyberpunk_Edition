<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $MDA_ID
 * @property string $MDA_TITLE
 * @property HfPortfolioProjectGallery[] $hfPortfolioProjectGalleries
 */
class HfMediaType extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_media_type';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'MDA_ID';

    /**
     * @var array
     */
    protected $fillable = ['MDA_TITLE'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfPortfolioProjectGalleries()
    {
        return $this->hasMany('HFcom\Models\HfPortfolioProjectGallery', 'MDA_ID', 'MDA_ID');
    }
}
