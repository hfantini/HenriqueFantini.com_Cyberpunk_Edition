<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $EXPD_ID
 * @property int $EXP_ID
 * @property int $LANG_ID
 * @property string $EXPD_TITLE
 * @property string $EXPD_COMPANY
 * @property string $EXPD_DESC
 * @property HfLanguage $hfLanguage
 * @property HfResumeExperience $hfResumeExperience
 * @property HfResumeExperienceFunction[] $hfResumeExperienceFunctions
 */
class HfResumeExperienceDetail extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_resume_experience_detail';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'EXPD_ID';

    /**
     * @var array
     */
    protected $fillable = ['EXP_ID', 'LANG_ID', 'EXPD_TITLE', 'EXPD_COMPANY', 'EXPD_DESC'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfLanguage()
    {
        return $this->belongsTo('HFcom\Models\HfLanguage', 'LANG_ID', 'LANG_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfResumeExperience()
    {
        return $this->belongsTo('HFcom\Models\HfResumeExperience', 'EXP_ID', 'EXP_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfResumeExperienceFunctions()
    {
        return $this->hasMany('HFcom\Models\HfResumeExperienceFunction', 'EXPD_ID', 'EXPD_ID');
    }
}
