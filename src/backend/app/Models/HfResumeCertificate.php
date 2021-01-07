<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $CER_ID
 * @property int $CTY_ID
 * @property string $CER_ICON
 * @property HfCity $hfCity
 * @property HfResumeCertificateDetail[] $hfResumeCertificateDetails
 */
class HfResumeCertificate extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_resume_certificate';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'CER_ID';

    /**
     * @var array
     */
    protected $fillable = ['CTY_ID', 'CER_ICON'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfCity()
    {
        return $this->belongsTo('HFcom\Models\HfCity', 'CTY_ID', 'CTY_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfResumeCertificateDetails()
    {
        return $this->hasMany('HFcom\Models\HfResumeCertificateDetail', 'CER_ID', 'CER_ID');
    }
}
