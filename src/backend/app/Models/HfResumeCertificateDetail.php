<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $CERD_ID
 * @property int $CER_ID
 * @property int $LANG_ID
 * @property string $CERD_TITLE
 * @property string $CERD_DESC
 * @property HfLanguage $hfLanguage
 * @property HfResumeCertificate $hfResumeCertificate
 */
class HfResumeCertificateDetail extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_resume_certificate_detail';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'CERD_ID';

    /**
     * @var array
     */
    protected $fillable = ['CER_ID', 'LANG_ID', 'CERD_TITLE', 'CERD_DESC'];

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
    public function hfResumeCertificate()
    {
        return $this->belongsTo('HFcom\Models\HfResumeCertificate', 'CER_ID', 'CER_ID');
    }
}
