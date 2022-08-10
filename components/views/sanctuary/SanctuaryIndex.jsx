import React, {useState, useEffect} from 'react'

// NEXT
import Link from 'next/link'
import {useRouter} from 'next/router'

// components
import NavIndex from '../../globals/nav/NavIndex'
import FooterIndex from '../../globals/footer/FooterIndex'
import BackToTopIndex from '../../globals/backtotop/BackToTopIndex'

// storage
import Storage from '../../../services/storage.service'

export default function SanctuaryIndex() {
    // history
    const history = useRouter();

    // states
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
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // functions
    const aggregateData = () => {
        let countries = data[0]
        let result = []
        for (let country in countries) {
            result.push({
                key: country,
                value: countries[country]
            })
        }
        setSectionsData(result)
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
        aggregateData();

    //     // fetch data from local
    //     let storage = new Storage();
    //     let localData = storage.getDataFromLocalStorage('rd-data');

    //     if (localData === null || localData === undefined || localData === '' || localData.length === 0) {
    //         const fetchData = async () => {
    //             try {
    //                 const res = await fetch('https://jsonplaceholder.typicode.com/users');
    //                 const result = await res.json();

    //                 // store data
    //                 let storage = new Storage();
    //                 storage.setData('rd-data', result);

    //                 setData(result);
    //                 setLoading(false);
    //             } catch (error) {
    //                 setError(error);
    //                 setLoading(false);
    //             }
    //         }
    //         fetchData();
    //     }
    //     else {
    //         // fetch data from local
    //         let storage = new Storage();
    //         let localData = storage.getDataFromLocalStorage('rd-data');
    //         setData(localData);
    //         setLoading(false);
    //     }
    } , []);

    // render
    return (
        <div className='h-auto w-full bg-white overflow-hidden'>
            <div className='h-auto w-11/12 mx-auto'>
                <NavIndex />
                <section className='h-auto w-full px-3 py-10 bg-red-50 rounded-b-md'>
                    <h2 className='w-full text-2xl md:text-4xl font-medium flex items-center justify-center text-black'>REDSANCTUARY DATA PAGE</h2>
                    <p className='w-full md:w-7/12 mx-auto text-center text-gray-700 leading-loose my-3 text-gray-600'>
                        On this page you will find a category of data that are sectioned based on countries of the world, where we have endangered species, that will need your help, you can select the country closest to your location and figure out how to support in the <a href="/participate" className='underline text-red-600 font-medium' target="_blank" rel="noopener noreferrer">
                            get involved</a> page.
                    </p>
                </section>

                <section className='h-auto w-full mx-auto my-5 md:mt-10'>
                    {/* Inner */}
                    <div className='h-auto w-full flex flex-col items-start justify-start space-y-10'>
                        {
                        sectionsData && sectionsData.map((sectionElem, index) => {
                                return (
                                    <section 
                                    key={index}
                                    className='h-auto w-full flex flex-col items-start justify-start space-y-5'>
                                        <div className='w-full flex items-center justify-between'>
                                            <h2 className='font-medium text-lg'>{sectionElem.key}</h2>
                                            <Link href={`/country/${sectionElem.key}`}>
                                                <button className='flex items-center justify-end space-x-3'>
                                                    <span className='font-medium'>view all</span>
                                                    <i className='la la-arrow-right'></i>
                                                </button>
                                            </Link>
                                        </div>
                                        {/* Row */}
                                        <div className='h-auto w-full grid grid-cols-1 md:grid-cols-5 gap-5'>
                                            {
                                                sectionElem.value.map(species => {
                                                    return (
                                                        <div 
                                                        key={species.id}
                                                        onClick={() => handleSpeciesClick(species)}
                                                        className='h-52 w-full bg-red-600 rounded-md shadow-lg flex items-center justify-center cursor-pointer'
                                                        style={{
                                                            backgroundImage: `linear-gradient(rgba(0,0,0,0.30), rgba(0,0,0,0.30)), url(${species.image})`,
                                                            objectFit: 'cover',
                                                            backgroundSize: 'cover',
                                                            backgroundPosition: 'center center',
                                                            backgroundRepeat: 'no-repeat'
                                                    
                                                        }}
                                                        >
                                                            <span className='text-white'>{species.name}</span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </section>
                                )
                        })
                        }

                        {/* Loading */}
                        {
                            loading ? <div className='h-auto w-full text-2xl'>Loading...</div> : null
                        }
                    </div>
                </section>
                <FooterIndex />
                <BackToTopIndex />
            </div>
        </div>
    )
}
