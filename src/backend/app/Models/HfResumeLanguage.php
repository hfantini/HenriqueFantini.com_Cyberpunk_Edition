<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $RLANG_ID
 * @property int $CTR_ID
 * @property float $RLANG_LEVEL
 * @property HfCountry $hfCountry
 * @property HfResumeLanguageDetail[] $hfResumeLanguageDetails
 */
class HfResumeLanguage extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_resume_language';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'RLANG_ID';

    /**
     * @var array
     */
    protected $fillable = ['CTR_ID', 'RLANG_LEVEL'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfCountry()
    {
        return $this->belongsTo('HFcom\Models\HfCountry', 'CTR_ID', 'CTR_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfResumeLanguageDetails()
    {
        return $this->hasMany('HFcom\Models\HfResumeLanguageDetail', 'RLANG_ID', 'RLANG_ID');
    }
}
