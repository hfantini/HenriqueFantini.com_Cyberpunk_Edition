<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $LINKT_ID
 * @property string $LINKT_LABEL
 * @property string $LINKT_ICON
 * @property HfPortfolioProjectLink[] $hfPortfolioProjectLinks
 */
class HfLinkType extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_link_type';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'LINKT_ID';

    /**
     * @var array
     */
    protected $fillable = ['LINKT_LABEL', 'LINKT_ICON'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function hfPortfolioProjectLinks()
    {
        return $this->hasMany('HFcom\Models\HfPortfolioProjectLink', 'LINKT_ID', 'LINKT_ID');
    }
}
