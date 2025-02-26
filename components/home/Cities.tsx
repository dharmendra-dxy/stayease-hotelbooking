import Image from 'next/image';
import React from 'react'

const Cities = () => {

  const imageData = [
    {src:'/gate-of-india.png', text:"Delhi"},
    {src:'/gateway.png', text:"Mumbai"},
    {src:'/mahabodhi.png', text:"Gaya"},
    {src:'/taj-mahal.png', text:"Agra"},
  ]

  return (
    <section className='mt-12 bg-gray-200 dark:bg-gray-800'>
      <div className='padding-x padding-y container w-full mx-auto'>
        <p className='text-center text-xl font-semibold'>
          We have Hotels located in every cities across India
        </p>

        <div className='flex items-center justify-evenly flex-wrap mt-16 gap-4'>
          {
            imageData.map((item) => (
              <CitiesCard
                key={item.text}
                src={item.src}
                text = {item.text}
              />
            ))
          }
        </div>


      </div>
    </section>
  )
}

export default Cities;


type CitiesCardProps = {
  src: string,
  text:string,
}

const CitiesCard:React.FC<CitiesCardProps> = ({src,text}) => {
  return(
    <div className='px-10 py-3 bg-rose-400 hover:bg-rose-500 rounded-lg w-fit'>
      <Image
        src={src}
        alt='cities'
        width={60}
        height={60}
        className='pt-2'
      />
      <p className='text-white mt-2 text-center'>{text}</p>

    </div>
  )
}