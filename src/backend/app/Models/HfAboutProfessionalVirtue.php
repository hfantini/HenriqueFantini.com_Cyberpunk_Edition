<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $PFV_ID
 * @property HfAboutProfessionalVirtueDetail[] $hfAboutProfessionalVirtueDetails
 */
class HfAboutProfessionalVirtue extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_about_professional_virtue';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'PFV_ID';

    /**
     * @var array
     */
    protected $fillable = [];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfAboutProfessionalVirtueDetails()
    {
        return $this->hasMany('HFcom\Models\HfAboutProfessionalVirtueDetail', 'PFV_ID', 'PFV_ID');
    }
}
