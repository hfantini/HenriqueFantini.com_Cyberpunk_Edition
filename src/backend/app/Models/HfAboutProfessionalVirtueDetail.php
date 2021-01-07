<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $PFVD_ID
 * @property int $PFV_ID
 * @property int $LANG_ID
 * @property string $PFVD_TITLE
 * @property string $PFVD_CONTENT
 * @property HfLanguage $hfLanguage
 * @property HfAboutProfessionalVirtue $hfAboutProfessionalVirtue
 */
class HfAboutProfessionalVirtueDetail extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_about_professional_virtue_detail';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'PFVD_ID';

    /**
     * @var array
     */
    protected $fillable = ['PFV_ID', 'LANG_ID', 'PFVD_TITLE', 'PFVD_CONTENT'];

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
    public function hfAboutProfessionalVirtue()
    {
        return $this->belongsTo('HFcom\Models\HfAboutProfessionalVirtue', 'PFV_ID', 'PFV_ID');
    }
}
