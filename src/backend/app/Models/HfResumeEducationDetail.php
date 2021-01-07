<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $EDUD_ID
 * @property int $EDU_ID
 * @property int $EDUS_ID
 * @property int $LANG_ID
 * @property string $EDUD_INSTITUTE
 * @property string $EDUD_TYPE
 * @property HfLanguage $hfLanguage
 * @property HfResumeEducation $hfResumeEducation
 * @property HfResumeEducationStatus $hfResumeEducationStatus
 */
class HfResumeEducationDetail extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_resume_education_detail';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'EDUD_ID';

    /**
     * @var array
     */
    protected $fillable = ['EDU_ID', 'EDUS_ID', 'LANG_ID', 'EDUD_INSTITUTE', 'EDUD_TYPE'];

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
    public function hfResumeEducation()
    {
        return $this->belongsTo('HFcom\Models\HfResumeEducation', 'EDU_ID', 'EDU_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfResumeEducationStatus()
    {
        return $this->belongsTo('HFcom\Models\HfResumeEducationStatus', 'EDUS_ID', 'EDUS_ID');
    }
}
