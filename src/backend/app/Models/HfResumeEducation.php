<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $EDU_ID
 * @property int $CTY_ID
 * @property string $EDU_START
 * @property string $EDU_END
 * @property string $EDU_ICON
 * @property HfCity $hfCity
 * @property HfResumeEducationDetail[] $hfResumeEducationDetails
 */
class HfResumeEducation extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_resume_education';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'EDU_ID';

    /**
     * @var array
     */
    protected $fillable = ['CTY_ID', 'EDU_START', 'EDU_END', 'EDU_ICON'];

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
    public function hfResumeEducationDetails()
    {
        return $this->hasMany('HFcom\Models\HfResumeEducationDetail', 'EDU_ID', 'EDU_ID');
    }
}
