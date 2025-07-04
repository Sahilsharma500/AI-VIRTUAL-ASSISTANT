import React, {useContext} from 'react'
import { UserDataContext } from '../context/userContext';
const Card = ({image}) => {
  const {serverUrl, userData,
          setUserData,
          frontendImage, 
          setFrontendImage,
          backendImage, 
          setBackendImage,
          selectedImage, 
          setSelectedImage} = useContext(UserDataContext);
  return (
    <div className={`w-[80px] h-[150px] lg:w-[150px] lg:h-[250px] bg-[#020220] border-2 border-[#0000ff66] rounded-2xl overflow-hidden hover: shadow-blue-950 cursor-pointer hover:border-4 hover:border-white ${selectedImage == image ? "border-4 border-white shadow-2xl shadow-blue-950" : null}`} onClick={() => {
      setSelectedImage(image)
      setBackendImage(null);
      setFrontendImage(null);
    }}>
      <img src={image} className='h-full object-cover' alt="card" />
    </div>
  )
}

export default Card
