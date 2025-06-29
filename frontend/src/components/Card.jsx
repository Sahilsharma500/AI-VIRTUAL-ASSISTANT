import React from 'react'

const Card = ({image}) => {
  return (
    <div className='w-[110px] h-[130px] lg:w-[150px] lg:h-[250px] bg-[#020220] border-2 border-[#0000ff66] rounded-2xl overflow-hidden hover: shadow-blue-950 cursor-pointer hover:border-4 hover:border-white'>
      <img src={image} className='h-full object-cover' alt="card" />
    </div>
  )
}

export default Card
