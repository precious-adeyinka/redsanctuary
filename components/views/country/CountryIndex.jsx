import React, {useState, useEffect} from 'react'

// components
import NavIndex from '../../globals/nav/NavIndex'
import FooterIndex from '../../globals/footer/FooterIndex'
import BackToTopIndex from '../../globals/backtotop/BackToTopIndex'

// storage
import Storage from '../../../services/storage.service'

// NEXT
import Link from 'next/link'
import {useRouter} from 'next/router'

export default function CountryIndex({ countryName }) {
  // history
  const history = useRouter();

  // state
  const [data, setData] = useState([{
    'India': [
        {
            id: 1,
            name: 'India-Species-1',
            image: 'https://cdn.pixabay.com/photo/2020/03/01/15/30/fox-4893199__340.jpg'
        },
        {
            id: 2,
            name: 'India-Species-2',
            image: 'https://cdn.pixabay.com/photo/2014/05/21/20/58/flock-of-birds-350290__340.jpg',
        },
        {
            id: 3,
            name: 'India-Species-3',
            image: 'https://cdn.pixabay.com/photo/2014/07/29/06/41/polar-bear-404314__340.jpg',
        },
        {
            id: 4,
            name: 'India-Species-4',
            image: 'https://cdn.pixabay.com/photo/2018/05/19/03/26/goat-3412678__340.jpg',
        },
        {
            id: 5,
            name: 'India-Species-5',
            image: 'https://cdn.pixabay.com/photo/2018/05/19/03/26/goat-3412678__340.jpg',
        }
    ],
    'Brazil': [
        {
            id: 1,
            name: 'Brazil-Species-1',
            image: 'https://cdn.pixabay.com/photo/2020/03/01/15/30/fox-4893199__340.jpg'
        },
        {
            id: 2,
            name: 'Brazil-Species-2',
            image: 'https://cdn.pixabay.com/photo/2014/05/21/20/58/flock-of-birds-350290__340.jpg',
        },
        {
            id: 3,
            name: 'Brazil-Species-3',
            image: 'https://cdn.pixabay.com/photo/2014/07/29/06/41/polar-bear-404314__340.jpg',
        },
        {
            id: 4,
            name: 'Brazil-Species-4',
            image: 'https://cdn.pixabay.com/photo/2018/05/19/03/26/goat-3412678__340.jpg',
        },
        {
            id: 5,
            name: 'Brazil-Species-5',
            image: 'https://cdn.pixabay.com/photo/2018/05/19/03/26/goat-3412678__340.jpg',
        }
    ],
    'Africa': [
        {
            id: 1,
            name: 'Africa-Species-1',
            image: 'https://cdn.pixabay.com/photo/2020/03/01/15/30/fox-4893199__340.jpg'
        },
        {
            id: 2,
            name: 'Africa-Species-2',
            image: 'https://cdn.pixabay.com/photo/2014/05/21/20/58/flock-of-birds-350290__340.jpg',
        },
        {
            id: 3,
            name: 'Africa-Species-3',
            image: 'https://cdn.pixabay.com/photo/2014/07/29/06/41/polar-bear-404314__340.jpg',
        },
        {
            id: 4,
            name: 'Africa-Species-4',
            image: 'https://cdn.pixabay.com/photo/2018/05/19/03/26/goat-3412678__340.jpg',
        },
        {
            id: 5,
            name: 'Africa-Species-5',
            image: 'https://cdn.pixabay.com/photo/2018/05/19/03/26/goat-3412678__340.jpg',
        }
    ]
  }]);
  const [sectionsData, setSectionsData] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [info, setInfo] = useState(''); 

  // functions
  const goBack = () => {
    history.back();
  }

  const aggregateData = () => {
    let countries = data[0]
    let result = []
    for (let country in countries) {
        result.push({
            key: country,
            value: countries[country]
        })
    }
    let filteredData = result.filter(item => item.key.toLowerCase() === countryName.toLowerCase())
    if (filteredData.length > 0){
      let finalOuput = filteredData[0];
      setSectionsData(finalOuput.value)
      setLoading(false)
    }
    else {
      setInfo(`${countryName} is not a valid country in our database sorry!`)
      setLoading(false)
    }
  }

  const handleSpeciesClick = (data) => {
    // store data
    let storage = new Storage();
    storage.setData('rd-species', data);

    let url = `/species/${data.name}`;
    history.push(url)
  }

  // effects
  useEffect(() => {
    // aggregate data
    aggregateData();

    // fetch data from local
    // let storage = new Storage();
    // let localData = storage.getDataFromLocalStorage('rd-data');

    // if (localData === null || localData === undefined || localData === '' || localData.length === 0) {
    //     const fetchData = async () => {
    //         try {
    //             const res = await fetch('https://jsonplaceholder.typicode.com/users');
    //             const result = await res.json();

    //             // store data
    //             let storage = new Storage();
    //             storage.setData('rd-data', result);

    //             setData(result);
    //             setLoading(false);
    //         } catch (error) {
    //             setError(error);
    //             setLoading(false);
    //         }
    //     }
    //     fetchData();
    // }
    // else {
    //     // fetch data from local
    //     let storage = new Storage();
    //     let localData = storage.getDataFromLocalStorage('rd-data');
    //     setData(localData);
    //     setLoading(false);
    // }
} , []);


  return (
    <div className='h-auto w-11/12 mx-auto flex flex-col items-center justify-center space-y-10 pb-5'>
      <NavIndex />
      <header className='h-12 w-full flex items-center justify-between'>
        <div 
        onClick={() => goBack()}
        className='flex items-center justify-start space-x-2 cursor-pointer'>
          <i className='la la-arrow-left text-lg'></i>
          <span className='font-medium'>Back</span>
        </div>
        <div className='font-normal'>
          {countryName} Species Page
        </div>
      </header>

      {/* Form */}
      <form></form>


      {/* Row */}
      <section className='h-auto w-full grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-10'>
        {
          sectionsData && sectionsData.map(item => {
            return (
              <div 
              onClick={() => handleSpeciesClick(item)}
              key={item.id}
              className='h-52 w-full bg-red-600 rounded-md shadow-lg flex items-center justify-center cursor-pointer'
              style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.30), rgba(0,0,0,0.30)), url(${item.image})`,
                  objectFit: 'cover',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat'
          
              }}
              >
                <span className='text-white'>{item.name}</span>
              </div>
            )
          })
        }

        {/* Loading */}
        {
          loading ? <div className='h-auto w-full text-2xl'>Loading...</div> : null
        }

        {/* Info */}
        {
          info ? <div className='h-auto w-full text-2xl col-span-5'>{info}</div> : null
        }
      </section>
      <FooterIndex />
      <BackToTopIndex />
    </div>
  )
}
