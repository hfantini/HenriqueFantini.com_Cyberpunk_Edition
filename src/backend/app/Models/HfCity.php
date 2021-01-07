<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $CTY_ID
 * @property int $STA_ID
 * @property string $CTY_NAME
 * @property HfState $hfState
 * @property HfPerson[] $hfPeople
 * @property HfResumeCertificate[] $hfResumeCertificates
 * @property HfResumeCourse[] $hfResumeCourses
 * @property HfResumeEducation[] $hfResumeEducations
 * @property HfResumeExperience[] $hfResumeExperiences
 */
class HfCity extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_city';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'CTY_ID';

    /**
     * @var array
     */
    protected $fillable = ['STA_ID', 'CTY_NAME'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfState()
    {
        return $this->belongsTo('HFcom\Models\HfState', 'STA_ID', 'STA_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfPeople()
    {
        return $this->hasMany('HFcom\Models\HfPerson', 'CTY_ID', 'CTY_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfResumeCertificates()
    {
        return $this->hasMany('HFcom\Models\HfResumeCertificate', 'CTY_ID', 'CTY_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfResumeCourses()
    {
        return $this->hasMany('HFcom\Models\HfResumeCourse', 'CTY_ID', 'CTY_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfResumeEducations()
    {
        return $this->hasMany('HFcom\Models\HfResumeEducation', 'CTY_ID', 'CTY_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfResumeExperiences()
    {
        return $this->hasMany('HFcom\Models\HfResumeExperience', 'CTY_ID', 'CTY_ID');
    }
}
