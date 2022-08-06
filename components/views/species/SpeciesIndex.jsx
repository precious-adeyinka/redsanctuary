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
import Image from 'next/image'

import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
} from 'react-share'

export default function SpeciesIndex({ speciesName }) {
  // history
  const history = useRouter();

  // state
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); 

  // functions
  const goBack = () => {
    history.back();
  }

  // effects
  useEffect(() => {
    // fetch data from local
    let storage = new Storage();
    let localData = storage.getDataFromLocalStorage('rd-data');

    if (localData === null || localData === undefined || localData === '' || localData.length === 0) {
        const fetchData = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                const result = await res.json();

                // store data
                let storage = new Storage();
                storage.setData('rd-species', result);

                // Update data
                setData(result);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchData();
    }
    else {
        // fetch data from local
        let storage = new Storage();
        let localData = storage.getDataFromLocalStorage('rd-species');

        // Update data
        setData(localData);
        setLoading(false);
    }
} , []);


  return (
    <div className='h-auto w-11/12 mx-auto flex flex-col items-center justify-center pb-5'>
      <NavIndex />
      <header className='h-12 w-full flex items-center justify-between bg-gray-100 py-10 px-3 md:px-10 rounded-b-md mb-10'>
        <div 
        onClick={() => goBack()}
        className='flex items-center justify-start space-x-2 cursor-pointer'>
          <i className='la la-arrow-left text-lg'></i>
          <span className='font-medium'>Back</span>
        </div>
        <div className='font-normal'>
          {speciesName}
        </div>
      </header>

      {/* Row */}
      <section className='h-auto w-full'>
        <div className='h-auto md:h-96 w-full flex flex-col md:flex-row items-center justify-center'>
          <div className='h-full w-full md:w-1/2 bg-gray-100 overflow-hidden'>
            <Image src={data?.image} height={500} width={800} alt=""  />
          </div>
          <div className='h-full w-full md:w-1/2 bg-white flex flex-col items-start justify-center space-y-3 p-4'>
            <h2 className="font-normal text-3xl">{data?.name}</h2>
            <p className='w-full md:w-10/12 text-md text-gray-700 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sequi provident minima, laboriosam cupiditate sunt consequuntur optio explicabo exercitationem aut fugit dolor cumque quidem non error, quod eveniet itaque dolores.</p>
            <div className='w-full md:w-9/12 flex flex-col items-start justify-start space-y-1 bg-red-600 p-2'>
              <h3 className="font-medium text-white text-md md:text-2xl">Take Action Now - SAVE THEM</h3>
              <p className='text-md text-white -mt-4'>Spread the word...</p>
            </div>
            <div className="flex items-center justify-center space-x-3">
              {/* Facebook */}
              <FacebookShareButton
              url={'https://redsanctuary.vercel.app'}
              quote={`${speciesName} needs our help - 'Help us create an awareness to save endangered species around your location and the world.'`}
              hashtag={['#redsanctuary', '#endangeredspecies', '#savetheworld', '#savetheanimals']}
              >
                  <FacebookIcon size={30} round={true} />
              </FacebookShareButton>

              {/* WhatsApp */}
              <WhatsappShareButton
              url={'https://redsanctuary.vercel.app'}
              title={`${speciesName} needs our help - 'Help us create an awareness to save endangered species around your location and the world.'`}
              seperator={' - '}
              >
                  <WhatsappIcon size={30} round={true} />
              </WhatsappShareButton>

              {/* Twitter */}
              <TwitterShareButton
              url={'https://redsanctuary.vercel.app'}
              title={`${speciesName} needs our help - 'Help us create an awareness to save endangered species around your location and the world.'`}
              hashtag={['#redsanctuary', '#endangeredspecies', '#savetheworld', '#savetheanimals']}
              >
                  <TwitterIcon size={30} round={true} />
              </TwitterShareButton>

              {/* Linkedin */}
              <LinkedinShareButton
              url={'https://redsanctuary.vercel.app'}
              source={'https://redsanctuary.vercel.app'}
              title={'redSanctuary Movement'}
              summary={`${speciesName} needs our help - 'Help us create an awareness to save endangered species around your location and the world.'`}
              >
                  <LinkedinIcon size={30} round={true} />
              </LinkedinShareButton>

              {/* Telegram */}
              <TelegramShareButton
              url={'https://redsanctuary.vercel.app'}
              title={`${speciesName} needs our help - 'Help us create an awareness to save endangered species around your location and the world.'`}
              >
                  <TelegramIcon size={30} round={true} />
              </TelegramShareButton>
            </div>
          </div>
        </div>

        {/* Loading */}
        {
          loading ? <div className='h-auto w-full text-2xl'>Loading...</div> : null
        }
      </section>
      <FooterIndex />
      <BackToTopIndex />
    </div>
  )
}
