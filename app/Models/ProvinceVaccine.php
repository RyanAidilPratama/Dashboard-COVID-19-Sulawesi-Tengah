<?php

namespace App\Models;

use App\Models\Province;
use App\Models\NationalVaccine;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ProvinceVaccine extends Model
{
    use HasFactory;

    protected $guarded = [];

    // Relationships
    /**
     * Get the national_vaccine that owns the ProvinceVaccine
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function national_vaccine(): BelongsTo
    {
        return $this->belongsTo(NationalVaccine::class, "day", "id");
    }

    /**
     * Get the province that owns the ProvinceVaccine
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function province(): BelongsTo
    {
        return $this->belongsTo(Province::class, "province_id", "id");
    }

    // Methods

    // Mutators & Accessors
}