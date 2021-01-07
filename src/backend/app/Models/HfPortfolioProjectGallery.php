<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $PROJG_ID
 * @property int $MDA_ID
 * @property int $PROJ_ID
 * @property string $PROJG_SRC
 * @property HfMediaType $hfMediaType
 * @property HfPortfolioProject $hfPortfolioProject
 */
class HfPortfolioProjectGallery extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_portfolio_project_gallery';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'PROJG_ID';

    /**
     * @var array
     */
    protected $fillable = ['MDA_ID', 'PROJ_ID', 'PROJG_SRC'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfMediaType()
    {
        return $this->belongsTo('HFcom\Models\HfMediaType', 'MDA_ID', 'MDA_ID');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function hfPortfolioProject()
    {
        return $this->belongsTo('HFcom\Models\HfPortfolioProject', 'PROJ_ID', 'PROJ_ID');
    }
}
