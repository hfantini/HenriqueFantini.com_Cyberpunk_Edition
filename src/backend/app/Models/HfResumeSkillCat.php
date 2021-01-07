<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $SKLC_ID
 * @property string $SKLC_ICON
 * @property HfResumeSkillCatDetail[] $hfResumeSkillCatDetails
 */
class HfResumeSkillCat extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_resume_skill_cat';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'SKLC_ID';

    /**
     * @var array
     */
    protected $fillable = ['SKLC_ICON'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfResumeSkillCatDetails()
    {
        return $this->hasMany('HFcom\Models\HfResumeSkillCatDetail', 'SKLC_ID', 'SKLC_ID');
    }
}
