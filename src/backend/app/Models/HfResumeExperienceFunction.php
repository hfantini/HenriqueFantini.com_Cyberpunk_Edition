<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $EXPDF_ID
 * @property int $EXPD_ID
 * @property string $EXPDF_DESC
 * @property HfResumeExperienceDetail $hfResumeExperienceDetail
 */
class HfResumeExperienceFunction extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_resume_experience_function';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'EXPDF_ID';

    /**
     * @var array
     */
    protected $fillable = ['EXPD_ID', 'EXPDF_DESC'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfResumeExperienceDetail()
    {
        return $this->belongsTo('HFcom\Models\HfResumeExperienceDetail', 'EXPD_ID', 'EXPD_ID');
    }
}
