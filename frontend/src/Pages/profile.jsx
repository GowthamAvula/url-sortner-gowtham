import React, { useEffect, useState } from 'react'
import Service from '../utils/http';
const service=new Service();
import { Avatar, Stack } from '@mantine/core';
import { Text } from '@mantine/core';
import { Box, Container } from '@mantine/core';

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
    //
  return (
    <Container size={"sm"}>
    <Stack h={300}
      bg="var(--mantine-color-body)"
      align="center"
      justify="center"
      gap="lg">
        <Avatar size={"lg"} radius={"xl"} src={profileData?.avatar}/>
        <Text id="dd"> {profileData?.name}</Text>
        <Text>{profileData?.email}</Text>
        <Text id="gg"> <b>User Id :</b> {profileData?._id}</Text>
        <Text id="hh"><b>Created Account At :</b>{profileData?.createdAt}</Text>
    </Stack> 
    </Container>  
    
  )
}

export default  Profile