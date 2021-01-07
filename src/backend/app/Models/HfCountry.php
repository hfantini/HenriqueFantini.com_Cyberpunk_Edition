<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $CTR_ID
 * @property string $CTR_NAME
 * @property string $CTR_ICON
 * @property HfResumeLanguage[] $hfResumeLanguages
 * @property HfState[] $hfStates
 */
class HfCountry extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_country';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'CTR_ID';

    /**
     * @var array
     */
    protected $fillable = ['CTR_NAME', 'CTR_ICON'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfResumeLanguages()
    {
        return $this->hasMany('HFcom\Models\HfResumeLanguage', 'CTR_ID', 'CTR_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfStates()
    {
        return $this->hasMany('HFcom\Models\HfState', 'CTR_ID', 'CTR_ID');
    }
}
