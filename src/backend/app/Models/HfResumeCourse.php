<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $COU_ID
 * @property int $EDUS_ID
 * @property int $CTY_ID
 * @property string $COU_START
 * @property string $COU_END
 * @property string $COU_ICON
 * @property HfCity $hfCity
 * @property HfResumeEducationStatus $hfResumeEducationStatus
 * @property HfResumeCourseDetail[] $hfResumeCourseDetails
 */
class HfResumeCourse extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_resume_course';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'COU_ID';

    /**
     * @var array
     */
    protected $fillable = ['EDUS_ID', 'CTY_ID', 'COU_START', 'COU_END', 'COU_ICON'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfCity()
    {
        return $this->belongsTo('HFcom\Models\HfCity', 'CTY_ID', 'CTY_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfResumeEducationStatus()
    {
        return $this->belongsTo('HFcom\Models\HfResumeEducationStatus', 'EDUS_ID', 'EDUS_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfResumeCourseDetails()
    {
        return $this->hasMany('HFcom\Models\HfResumeCourseDetail', 'COU_ID', 'COU_ID');
    }
}
