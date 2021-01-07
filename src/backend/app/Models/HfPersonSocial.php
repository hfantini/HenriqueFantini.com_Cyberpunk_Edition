<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $PER_ID
 * @property int $SOC_ID
 * @property string $PERS_URL
 * @property int $PERS_ORDER
 * @property HfPerson $hfPerson
 * @property HfSocialnetwork $hfSocialnetwork
 */
class HfPersonSocial extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_person_social';

    /**
     * @var array
     */
    protected $fillable = ['PERS_URL', 'PERS_ORDER'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfPerson()
    {
        return $this->belongsTo('HFcom\Models\HfPerson', 'PER_ID', 'PER_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfSocialnetwork()
    {
        return $this->belongsTo('HFcom\Models\HfSocialnetwork', 'SOC_ID', 'SOC_ID');
    }
}
