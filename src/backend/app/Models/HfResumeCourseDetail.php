<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $COUD_ID
 * @property int $COU_ID
 * @property int $LANG_ID
 * @property string $COUD_TITLE
 * @property string $COUD_INSTITUTE
 * @property string $COUD_DESCRIPTION
 * @property HfLanguage $hfLanguage
 * @property HfResumeCourse $hfResumeCourse
 */
class HfResumeCourseDetail extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_resume_course_detail';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'COUD_ID';

    /**
     * @var array
     */
    protected $fillable = ['COU_ID', 'LANG_ID', 'COUD_TITLE', 'COUD_INSTITUTE', 'COUD_DESCRIPTION'];

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
    public function hfResumeCourse()
    {
        return $this->belongsTo('HFcom\Models\HfResumeCourse', 'COU_ID', 'COU_ID');
    }
}
