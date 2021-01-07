<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $SKLCD_ID
 * @property int $SKLC_ID
 * @property int $LANG_ID
 * @property string $SKLCD_TITLE
 * @property HfLanguage $hfLanguage
 * @property HfResumeSkillCat $hfResumeSkillCat
 * @property HfResumeSkill[] $hfResumeSkills
 */
class HfResumeSkillCatDetail extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_resume_skill_cat_detail';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'SKLCD_ID';

    /**
     * @var array
     */
    protected $fillable = ['SKLC_ID', 'LANG_ID', 'SKLCD_TITLE'];

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
    public function hfResumeSkillCat()
    {
        return $this->belongsTo('HFcom\Models\HfResumeSkillCat', 'SKLC_ID', 'SKLC_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfResumeSkills()
    {
        return $this->hasMany('HFcom\Models\HfResumeSkill', 'SKLCD_ID', 'SKLCD_ID');
    }
}
