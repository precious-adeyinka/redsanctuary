import React from 'react'

// components
import NavIndex from '../../globals/nav/NavIndex'
import FooterIndex from '../../globals/footer/FooterIndex'
import BackToTopIndex from '../../globals/backtotop/BackToTopIndex'

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

export default function ParticipateIndex() {
  return (
    <div className='h-auto w-11/12 mx-auto flex flex-col items-center justify-center pb-5'>
      <NavIndex />
      <section className='h-auto w-full px-3 py-10 bg-gray-100 rounded-b-md'>
        <h2 className='w-full text-2xl md:text-4xl font-medium flex items-center justify-center'>Get Involved!</h2>
        <p className='w-full md:w-5/12 mx-auto text-center text-gray-700 leading-snug my-3'>Help us to fight against animal extinction around the world one species at a time, in all the countries starting from yours by creating awareness.</p>
        <div className="flex items-center justify-center space-x-3">
          {/* Facebook */}
          <FacebookShareButton
          url={'https://redsanctuary.vercel.app'}
          quote={`Help us create an awareness to save endangered species around your location and the world.`}
          hashtag={['#redsanctuary', '#endangeredspecies', '#savetheworld', '#savetheanimals']}
          >
              <FacebookIcon size={30} round={true} />
          </FacebookShareButton>

          {/* WhatsApp */}
          <WhatsappShareButton
          url={'https://redsanctuary.vercel.app'}
          title={`Help us create an awareness to save endangered species around your location and the world.`}
          seperator={' - '}
          >
            <WhatsappIcon size={30} round={true} />
          </WhatsappShareButton>

          {/* Twitter */}
          <TwitterShareButton
          url={'https://redsanctuary.vercel.app'}
          title={`Help us create an awareness to save endangered species around your location and the world.`}
          hashtag={['#redsanctuary', '#endangeredspecies', '#savetheworld', '#savetheanimals']}
          >
            <TwitterIcon size={30} round={true} />
          </TwitterShareButton>

          {/* Linkedin */}
          <LinkedinShareButton
          url={'https://redsanctuary.vercel.app'}
          source={'https://redsanctuary.vercel.app'}
          title={'redSanctuary Movement'}
          summary={`Help us create an awareness to save endangered species around your location and the world.`}
          >
              <LinkedinIcon size={30} round={true} />
          </LinkedinShareButton>

          {/* Telegram */}
          <TelegramShareButton
          url={'https://redsanctuary.vercel.app'}
          title={`Help us create an awareness to save endangered species around your location and the world.`}
          >
              <TelegramIcon size={30} round={true} />
          </TelegramShareButton>
        </div>
      </section>

      <section className='h-auto w-full flex flex-col items-center justify-center mt-20'>
        <h2 className='w-full text-2xl md:text-4xl font-medium flex items-center justify-center'>What Now?</h2>
        <p className='text-gray-700 text-center mx-auto leading-snug w-full md:w-6/12 my-3'>
          Most of the time people are faced with the question what to do next, and below is a couple of actions you can take to help stop animal extinction.
        </p>
        {/* Row */}
        <section className='grid grid-cols-1 md:grid-cols-4 gap-5 my-5'>
          {/* Block */}
          <div className='h-auto w-full bg-gray-100 rounded-md p-3 py-7 flex flex-col items-start justify-start'>
            <h2 className='w-full text-lg font-medium flex items-center justify-start'>Spread the word</h2>
            <p className='text-gray-700 text-left mx-auto leading-snug w-full 2 my-3'>
              Write an article about a specific endangered species that you know about, you can use our website to find the ones in your location and pick up the details, do some research and write to create awareness on your blog and social media profiles.
            </p>
          </div>
          {/* Block */}
          <div className='h-auto w-full bg-gray-100 rounded-md p-3 py-7 flex flex-col items-start justify-start'>
            <h2 className='w-full text-lg font-medium flex items-center justify-start'>Donate Funds</h2>
            <p className='text-gray-700 text-left mx-auto leading-snug w-full 2 my-3'>
              There are a few individuals and organizations that have taken up the initiative to start a movement, but they can&lsquo;t do it alone they need your help, so reach out to them and support them with your money to encourage what they are doing.
            </p>
          </div>
          {/* Block */}
          <div className='h-auto w-full bg-gray-100 rounded-md p-3 py-7 flex flex-col items-start justify-start'>
            <h2 className='w-full text-lg font-medium flex items-center justify-start'>Volunteer</h2>
            <p className='text-gray-700 text-left mx-auto leading-snug w-full 2 my-3'>
              Participate through volunteering opportunities around you, you can even start something and ask for support. For example you can visit a national park, wildlife refuge, or protected area. These areas provide habitat for hundreds of threatened species!
            </p>
          </div>
          {/* Block */}
          <div className='h-auto w-full bg-gray-100 rounded-md p-3 py-7 flex flex-col items-start justify-start'>
            <h2 className='w-full text-lg font-medium flex items-center justify-start'>Learn</h2>
            <p className='text-gray-700 text-left mx-auto leading-snug w-full 2 my-3'>
            Take it upon yourself to intentionally educate yourself on local endangered animals, as well as species native to your area. You never know who you are sharing your city with!
            </p>
          </div>
        </section>
        {/* Note */}
        <p className='text-gray-400 text-sm text-center'>
          <b>Note:</b>&nbsp;
          When we know more we would include in the list, so come back for more later.
        </p>
      </section>
      <FooterIndex />
      <BackToTopIndex />
    </div>
  )
}
