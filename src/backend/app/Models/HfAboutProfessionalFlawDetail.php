<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $PFFD_ID
 * @property int $PFF_ID
 * @property int $LANG_ID
 * @property string $PFFD_TITLE
 * @property string $PFFD_CONTENT
 * @property HfLanguage $hfLanguage
 * @property HfAboutProfessionalFlaw $hfAboutProfessionalFlaw
 */
class HfAboutProfessionalFlawDetail extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_about_professional_flaw_detail';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'PFFD_ID';

    /**
     * @var array
     */
    protected $fillable = ['PFF_ID', 'LANG_ID', 'PFFD_TITLE', 'PFFD_CONTENT'];

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
    public function hfAboutProfessionalFlaw()
    {
        return $this->belongsTo('HFcom\Models\HfAboutProfessionalFlaw', 'PFF_ID', 'PFF_ID');
    }
}
