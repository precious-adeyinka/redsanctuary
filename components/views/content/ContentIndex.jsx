import React, {useState, useEffect} from 'react'

// Components
import SpeciesSliderIndex from '../../layouts/speciesSlider/SpeciesSliderIndex';

export default function ContentIndex() {
    // species states
    const [countries, setCountries] = useState([
        {
            id: 1,
            name: "America",
            image: 'https://cdn.pixabay.com/photo/2015/03/11/12/31/buildings-668616__340.jpg'
        },
        {
            id: 2,
            name: "Uganda",
            image: 'https://cdn.pixabay.com/photo/2020/04/05/10/50/uganda-5005579__340.jpg'
        },
        {
            id: 3,
            name: "Canada",
            image: 'https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204__480.jpg'
        },
        {
            id: 4,
            name: "Seychelles",
            image: 'https://cdn.pixabay.com/photo/2018/07/22/22/36/praslin-3555706__340.jpg'
        },
    ]);

    const [species, setSpecies] = useState([
        {
            id: 1,
            name: "Fox",
            image: 'https://cdn.pixabay.com/photo/2020/03/01/15/30/fox-4893199__340.jpg'
        },
        {
            id: 2,
            name: "Goose",
            image: 'https://cdn.pixabay.com/photo/2014/05/21/20/58/flock-of-birds-350290__340.jpg'
        },
        {
            id: 3,
            name: "Polar Bear",
            image: 'https://cdn.pixabay.com/photo/2014/07/29/06/41/polar-bear-404314__340.jpg'
        },
        {
            id: 4,
            name: "Goat",
            image: 'https://cdn.pixabay.com/photo/2018/05/19/03/26/goat-3412678__340.jpg'
        },
    ]);

  return (
    <div className='h-auto w-full mx-auto flex flex-col items-center justify-center space-y-12 md:space-y-28 my-3 py-10'>
       {/* Section */}
        <SpeciesSliderIndex
        label={'Endangered By Country'}
        filter={'country'}
        data={countries}
        />

        {/* Section */}
        <SpeciesSliderIndex
        label={'Endangered By Species'}
        filter={'species'}
        data={species}
        />
    </div>
  )
}
