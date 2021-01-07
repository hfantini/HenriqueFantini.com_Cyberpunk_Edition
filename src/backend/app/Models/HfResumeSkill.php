<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $SKL_ID
 * @property int $SKLCD_ID
 * @property string $SKL_ICON
 * @property string $SKL_TITLE
 * @property float $SKL_KNOWLEDGE
 * @property boolean $SKL_FAV
 * @property HfResumeSkillCatDetail $hfResumeSkillCatDetail
 * @property HfPortfolioProjectTech[] $hfPortfolioProjectTeches
 */
class HfResumeSkill extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_resume_skill';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'SKL_ID';

    /**
     * @var array
     */
    protected $fillable = ['SKLCD_ID', 'SKL_ICON', 'SKL_TITLE', 'SKL_KNOWLEDGE', 'SKL_FAV'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfResumeSkillCatDetail()
    {
        return $this->belongsTo('HFcom\Models\HfResumeSkillCatDetail', 'SKLCD_ID', 'SKLCD_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfPortfolioProjectTeches()
    {
        return $this->hasMany('HFcom\Models\HfPortfolioProjectTech', 'SKL_ID', 'SKL_ID');
    }
}
