import React, { useEffect, useState } from 'react'
import Service from '../utils/http';
const service=new Service();
import { Avatar, Stack } from '@mantine/core';
import { Text } from '@mantine/core';

const Profile = ()=> {
    const [profileData,setProfileData]=useState(null);

    const  getProfileData= async()=>{
        let data=await service.get('user/me');
        setProfileData(data);
        console.log(data);

    }

    useEffect ( ()=>{
        getProfileData();
    },[])
    // console.log("printing")
  return (
    <Stack align='center'>
        <Avatar src={profileData?.avatar}/>
        <Text> {profileData?.name}</Text>
        <Text>{profileData?.email}</Text>
        <Text>USER ID : {profileData?._id}</Text>
        <Text>{profileData?.createdAt}</Text>
    </Stack>   
    
  )
}

export default  Profile