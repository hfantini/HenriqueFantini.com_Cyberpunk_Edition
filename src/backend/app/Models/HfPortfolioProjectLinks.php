<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $PROJL_ID
 * @property int $PROJ_ID
 * @property int $LINKT_ID
 * @property string $PROJL_URL
 * @property HfLinkType $hfLinkType
 * @property HfPortfolioProject $hfPortfolioProject
 */
class HfPortfolioProjectLinks extends Model
{
    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'PROJL_ID';

    /**
     * @var array
     */
    protected $fillable = ['PROJ_ID', 'LINKT_ID', 'PROJL_URL'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfLinkType()
    {
        return $this->belongsTo('HFcom\Models\HfLinkType', 'LINKT_ID', 'LINKT_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfPortfolioProject()
    {
        return $this->belongsTo('HFcom\Models\HfPortfolioProject', 'PROJ_ID', 'PROJ_ID');
    }
}
