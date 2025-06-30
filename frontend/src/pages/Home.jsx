import React, {useContext} from 'react'
import { UserDataContext } from '../context/userContext';
import { data, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Home = () => {
  const { userData, serverUrl, setUserData } = useContext(UserDataContext);
  const navigate = useNavigate();
  const handleLogOut = async() => {
    try{
      const result = await axios.get(`${serverUrl}/api/auth/logout`, {withCredentials: true});
      setUserData(null);
      navigate('/signin');
    }
    catch(error){
      setUserData(null);
      console.log(data);
    }
  }
    return (
      <div className='w-full h-[100vh] bg-gradient-to-t from-black to-[#02023d] flex justify-center items-center flex-col gap-[15px]'>
        <button
          onClick={handleLogOut}className='min-w-[150px] h-[60px] mt-[30px] text-black font-semibold absolute top-[20px] right-[20px] bg-white rounded-full text-[19px]'
        >
          Log Out
        </button>

        <button
          className='min-w-[150px] h-[60px] mt-[30px] text-black font-semibold bg-white absolute top-[100px] right-[20px] rounded-full text-[19px] px-[20px] py-[10px] cursor-pointer'
          onClick={() => navigate("/customize")}
        >
          Customize your Assistant
        </button>

        <div className='w-[300px] h-[400px] flex justify-center items-center overflow-hidden rounded-4xl shadow-lg cursor-pointer'>
          <img
            src={userData?.assistantImage}
            alt=""
            className='h-full object-cover'
          />
        </div>
        <h1 className='text-white text-[18px] font-semibold'>
          {userData?.assistantName}
        </h1>
      </div>
    );

}

export default Home
