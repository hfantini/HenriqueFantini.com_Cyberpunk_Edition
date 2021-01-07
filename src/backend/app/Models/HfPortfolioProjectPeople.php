<?php

namespace HFcom\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property string $PROJP_ID
 * @property int $PROJ_ID
 * @property int $PER_ID
 * @property HfPerson $hfPerson
 * @property HfPortfolioProject $hfPortfolioProject
 */
class HfPortfolioProjectPeople extends Model
{
    /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'hf_portfolio_project_people';

    /**
     * The primary key for the model.
     * 
     * @var string
     */
    protected $primaryKey = 'PROJP_ID';

    /**
     * The "type" of the auto-incrementing ID.
     * 
     * @var string
     */
    protected $keyType = 'string';

    /**
     * Indicates if the IDs are auto-incrementing.
     * 
     * @var bool
     */
    public $incrementing = false;

    /**
     * @var array
     */
    protected $fillable = ['PROJ_ID', 'PER_ID'];

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
    public function hfPortfolioProject()
    {
        return $this->belongsTo('HFcom\Models\HfPortfolioProject', 'PROJ_ID', 'PROJ_ID');
    }
}
