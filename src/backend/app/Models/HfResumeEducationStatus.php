<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $EDUS_ID
 * @property string $EDUS_NAME
 * @property HfResumeCourse[] $hfResumeCourses
 * @property HfResumeEducationDetail[] $hfResumeEducationDetails
 */
class HfResumeEducationStatus extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_resume_education_status';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'EDUS_ID';

    /**
     * @var array
     */
    protected $fillable = ['EDUS_NAME'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfResumeCourses()
    {
        return $this->hasMany('HFcom\Models\HfResumeCourse', 'EDUS_ID', 'EDUS_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfResumeEducationDetails()
    {
        return $this->hasMany('HFcom\Models\HfResumeEducationDetail', 'EDUS_ID', 'EDUS_ID');
    }
}
