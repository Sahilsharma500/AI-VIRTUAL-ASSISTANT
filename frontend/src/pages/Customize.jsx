import React, { useState } from 'react';
import Card from '../components/Card';
import {RiImageAddLine} from 'react-icons/ri'
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/authBg.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.jpeg';
import image7 from '../assets/image7.jpeg';

function Customize() {
    const [frontendImage, setFrontendImage] = useState(null);
    const [backendImage, setBackendImage] = useState(null);
  return (
  <div className='w-full h-[100vh] bg-gradient-to-t from-black to-[#030353] flex justify-center items-center flex-col'>
    <h1 className='text-white text-[30px] text-center mb-[40px]'>Select your <span className='text-blue-400'>Assistant Image</span></h1>
    <div className='w-[90%] max-w-[60%] flex justify-center items-center flex-wrap lg:gap-[15px] gap-[25px]'>
      <Card image={image1} />
      <Card image={image2} />
      <Card image={image3} />
      <Card image={image4} />
      <Card image={image5} />
      <Card image={image6} />
      <Card image={image7} />
      <div className='w-[110px] h-[130px] lg:w-[150px] lg:h-[250px] bg-[#020220] border-2 border-[#0000ff66] rounded-2xl overflow-hidden hover: shadow-blue-950 cursor-pointer hover:border-4 hover:border-white flex items-center justify-center'>
        <RiImageAddLine className='text-white w-[25px]'/>
      </div>
    </div>
    <button className='min-w-[150px] h-[60px] mt-[30px] text-black font-semibold bg-white rounded-full text-[19px]'>
       Next
    </button>
  </div>
);

}

export default Customize;
