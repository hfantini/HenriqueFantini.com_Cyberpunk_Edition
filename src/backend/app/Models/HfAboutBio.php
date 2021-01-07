<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $BIO_ID
 * @property HfAboutBioDetail[] $hfAboutBioDetails
 */
class HfAboutBio extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_about_bio';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'BIO_ID';

    /**
     * @var array
     */
    protected $fillable = [];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfAboutBioDetails()
    {
        return $this->hasMany('HFcom\Models\HfAboutBioDetail', 'BIO_ID', 'BIO_ID');
    }
}
