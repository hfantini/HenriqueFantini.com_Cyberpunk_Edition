<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $RLANGD_ID
 * @property int $RLANG_ID
 * @property string $RLANGD_TITLE
 * @property HfResumeLanguage $hfResumeLanguage
 */
class HfResumeLanguageDetail extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_resume_language_detail';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'RLANGD_ID';

    /**
     * @var array
     */
    protected $fillable = ['RLANG_ID', 'RLANGD_TITLE'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfResumeLanguage()
    {
        return $this->belongsTo('HFcom\Models\HfResumeLanguage', 'RLANG_ID', 'RLANG_ID');
    }
}
