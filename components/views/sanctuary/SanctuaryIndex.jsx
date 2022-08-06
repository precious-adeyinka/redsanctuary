import React, {useState, useEffect} from 'react'

// NEXT
import Link from 'next/link'

// components
import NavIndex from '../../globals/nav/NavIndex'
import FooterIndex from '../../globals/footer/FooterIndex'
import BackToTopIndex from '../../globals/backtotop/BackToTopIndex'

// storage
import Storage from '../../../services/storage.service'

export default function SanctuaryIndex() {
    // states
    const [data, setData] = useState([{
        'India': [
            {
                id: 1,
                name: 'India-Species-1',
            },
            {
                id: 2,
                name: 'India-Species-2',
            },
            {
                id: 3,
                name: 'India-Species-3',
            },
            {
                id: 4,
                name: 'India-Species-4',
            },
            {
                id: 5,
                name: 'India-Species-5',
            }
        ],
        'Brazil': [
            {
                id: 1,
                name: 'Brazil-Species-1',
            },
            {
                id: 2,
                name: 'Brazil-Species-2',
            },
            {
                id: 3,
                name: 'Brazil-Species-3',
            },
            {
                id: 4,
                name: 'Brazil-Species-4',
            },
            {
                id: 5,
                name: 'Brazil-Species-5',
            }
        ],
        'Africa': [
            {
                id: 1,
                name: 'Africa-Species-1',
            },
            {
                id: 2,
                name: 'Africa-Species-2',
            },
            {
                id: 3,
                name: 'Africa-Species-3',
            },
            {
                id: 4,
                name: 'Africa-Species-4',
            },
            {
                id: 5,
                name: 'Africa-Species-5',
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
            <NavIndex />
            <section className='h-auto w-11/12 mx-auto my-5 md:mt-10'>
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
                                                    className='h-52 w-full bg-red-600 rounded-md shadow-lg flex items-center justify-center'>
                                                        <Link href={`/species/${sectionElem.name}`}>
                                                            <span className='text-white'>{species.name}</span>
                                                        </Link>
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
    )
}
