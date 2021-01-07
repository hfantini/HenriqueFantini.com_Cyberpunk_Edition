<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $EXP_ID
 * @property int $CTY_ID
 * @property string $EXP_START
 * @property string $EXP_END
 * @property string $EXP_ICON
 * @property HfCity $hfCity
 * @property HfResumeExperienceDetail[] $hfResumeExperienceDetails
 */
class HfResumeExperience extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_resume_experience';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'EXP_ID';

    /**
     * @var array
     */
    protected $fillable = ['CTY_ID', 'EXP_START', 'EXP_END', 'EXP_ICON'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfCity()
    {
        return $this->belongsTo('HFcom\Models\HfCity', 'CTY_ID', 'CTY_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfResumeExperienceDetails()
    {
        return $this->hasMany('HFcom\Models\HfResumeExperienceDetail', 'EXP_ID', 'EXP_ID');
    }
}
