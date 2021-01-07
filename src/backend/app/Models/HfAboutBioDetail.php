<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $BIOD_ID
 * @property int $BIO_ID
 * @property int $LANG_ID
 * @property string $BIOD_CONTENT
 * @property HfAboutBio $hfAboutBio
 * @property HfLanguage $hfLanguage
 */
class HfAboutBioDetail extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_about_bio_detail';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'BIOD_ID';

    /**
     * @var array
     */
    protected $fillable = ['BIO_ID', 'LANG_ID', 'BIOD_CONTENT'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfAboutBio()
    {
        return $this->belongsTo('HFcom\Models\HfAboutBio', 'BIO_ID', 'BIO_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfLanguage()
    {
        return $this->belongsTo('HFcom\Models\HfLanguage', 'LANG_ID', 'LANG_ID');
    }
}
