import React, { useContext, useState } from 'react'
import { UserDataContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {MdKeyboardBackspace} from 'react-icons/md'

const Customize2 = () => {
    const {userData, backendImage, selectedImage,serverUrl, setUserData} = useContext(UserDataContext);
    const [assistantName, setAssistantName] = useState(userData?.assistantName || "");
    const [loading, setLoading] = useState(false)
    const handleUpdateAssitant = async() => {
        setLoading(true)
        try{
            let formData = new FormData();
            formData.append("assistantName", assistantName);
            if(backendImage){
                formData.append("assistantImage", backendImage);
            }
            else{
                formData.append("imageUrl", selectedImage);
            }
            const result = await axios.post(`${serverUrl}/api/user/update`, formData, {withCredentials: true});
            setLoading(false)
            console.log(result.data);
            setUserData(result.data);
            navigate('/');
        }
        catch(error){
            setLoading('false');
            console.log(error);
        }
    }
    const navigate = useNavigate();
  return (
    <div className='w-full h-[100vh] bg-gradient-to-t from-black to-[#030353] flex justify-center items-center flex-col p-[20px] relative'>
        <MdKeyboardBackspace className='absolute top-[30px] left-[30px] text-white w-[25px] h-[25px]' onClick={()=> navigate('/customize')}/>
      <h1 className='text-white text-[30px] text-center mb-[40px]'>Enter your <span className='text-blue-400'>Assistant Name</span></h1>
      <input type='text' placeholder='eg: Shifra' className='w-full max-w-[600px] h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-[20px] py-[10px] rounded-full text-[18px]' required onChange={(e) => setAssistantName(e.target.value)} value={assistantName}/>
      {assistantName.length > 0 && <button className='min-w-[300px] h-[60px] mt-[30px] text-black font-semibold bg-white rounded-full text-[19px] cursor-pointer' disabled={loading} onClick={() => {
        handleUpdateAssitant();
        }}>
       {!loading ? "Create Your Assistant.": "loading..."}
    </button>}
    </div>
  )
}

export default Customize2;
