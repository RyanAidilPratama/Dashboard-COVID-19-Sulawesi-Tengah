<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\Test;

use Inertia\Inertia;
use App\Models\Gender;
use App\Models\Hospital;
use App\Models\Province;
use App\Models\Infographic;
use App\Services\NationalCaseService;
use App\Services\ProvinceCaseService;
use App\Services\NationalVaccineService;
use App\Services\ProvinceVaccineService;
use App\Services\VaccineLocationService;

class MainController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $local = (new ProvinceCaseService)->latest(72);
        $banners = Banner::active()->get();
        $national = (new NationalCaseService)->latest();
        $hospitals = Hospital::with([
            "contacts", "contacts.contact_type"
        ])
            ->inRandomOrder()->take(3)->get();
        $infographics = Infographic::with("images")->latest()->take(10)->get();
        $vaccine = (new NationalVaccineService)->latest();
        $province_vaccine = (new ProvinceVaccineService)->latest(72);

        return Inertia::render("Home/Index", [
            "local" => $local,
            "national" => $national,
            "banners" => $banners,
            "hospitals" => $hospitals,
            "infographics" => $infographics->map(function ($infographic) {
                return [
                    "title" => $infographic->title,
                    "route" => $infographic->source,
                    "images" => $infographic->images->map(function ($image) {
                        return $image->image_url;
                    })->toArray()
                ];
            }),
            "nationalVaccine" => $vaccine,
            "provinceVaccine" => $province_vaccine,
        ]);
    }

    public function vaccine()
    {
        $province_vaccine = (new ProvinceVaccineService)->latest(72);
        $national_vaccine = (new NationalVaccineService)->latest();
        $vaccine_locations = (new VaccineLocationService)->all(72);

        return Inertia::render("Vaccine/Index", [
            "provinceVaccine" => $province_vaccine,
            "nationalVaccine" => $national_vaccine,
            "vaccineLocations" => $vaccine_locations,
        ]);
    }

    public function contact()
    {

        $districts = District::with("posts")->get();
        $posts = $districts->map(function ($district) {
            return [
                "name" => $district->kabupaten,
                "address" => "Hotline Gugus Tugas COVID-19 di " . $district->kabupaten,
                "posts" => $district->posts->map(function ($post) {
                    return [
                        "name" => $post->nama,
                        "phones" => $post->phones->map(function ($phone) {
                            return $phone->phone;
                        })->toArray()
                    ];
                })->toArray()
            ];
        })->toArray();

        return Inertia::render("Contact/Index", [
            "hospitals" => Hospital::all(),
            "task_forces" => $posts
        ]);
    }


    public function wiki()
    {
        return Inertia::render("Wiki/Index");
    }


    public function data()
    {
        $local = Statistic::latest()->first();
        $national = NationalCaseHistory::latest()->first();
        $districts = District::all();
        $provinces = Province::all();
        $tests = fractal(Test::all(), new TestTransformer)->toArray();
        $nationals = fractal(NationalCaseHistory::all(), new NationalStatisticTransformer)->toArray();
        $genders = fractal(Gender::latest()->first(), new GenderTransformer)->toArray();
        return Inertia::render("Data/Index", [
            "lastUpdate" => $local->created_at->translatedFormat("l, d F Y H:i:s"),
            "local" => $local,
            "national" => $national,
            "tests" => $tests["data"],
            "districts" => $districts,
            "provinces" => $provinces->map(function ($province) {
                return [
                    "provinsi" => $province->provinsi,
                    "meninggal" => $province->meninggal,
                    "sembuh" => $province->sembuh,
                    "positif" => $province->positif,
                    "persentase_kematian" => $province->rasio_kematian,
                    "dalam_perawatan" => $province->dalam_perawatan,
                    "map_id" => $province->map_id
                ];
            })->toArray(),
            "recapNational" => function () use ($nationals) {
                return $nationals["data"];
            },
            "genders" => $genders["data"]
        ]);
    }


    public function infographic()
    {
        $infographics = Infographic::with("images")->latest()->get();
        return Inertia::render("Infographic/Index", [
            "infographics" => $infographics->map(function ($infographic) {
                return [
                    "title" => $infographic->title,
                    "route" => $infographic->link,
                    "images" => $infographic->images->map(function ($image) {
                        return $image->link;
                    })
                ];
            })
        ]);
    }


    public function table()
    {
        $stat = Statistic::with("histories")->get();
        $data = fractal($stat, new StatisticTransformer)->toArray();
        $data = array_replace(setJson([], true, []), $data);
        return Inertia::render("Table/Index", [
            "statistics" => function () use ($data) {
                return $data;
            }
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
