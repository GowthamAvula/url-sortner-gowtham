import { Button, Container, TextInput } from '@mantine/core'
import React, { useState } from 'react'
import Service from '../utils/http'
import Response from '../Components/PrivateRoute/Response';


const service = new Service();


export default function UrlShortener() {

    const [response, setResponse] = useState(null);

   const generateShortUrl = async () => {

       console.log(input?.originalUrl);
       try {
           const data = await service.post("s", input);
           setResponse(data);
           console.log(data);
       } catch (error) {
           console.error("Error generating short URL:", error);
       }
   }


   const [input, setInput] = useState({
       originalUrl: "",
       customUrl: "",
       expiresAt: "",
       title: ""
   });

   return (
       <Container size={"xs"}>
           URL Shortener
           {!response ?

           <>
           <TextInput
               size="lg"
               label="Original Url "
               withAsterisk
               placeholder="Enter your orginal url"
               styles={{
          input: {
            borderColor: '#bfbfbf',
            borderWidth: 1,
            borderStyle: 'solid',
            backgroundColor: '#fff',
            fontFamily: 'Georgia, serif',
            fontSize: 16,
            padding: '12px',
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)',
          },
          label: {
            fontWeight: 600,
            color: '#444',
            fontSize: 15,
            fontFamily: 'Georgia, serif',
            marginBottom: 6,
          },
          description: {
            fontSize: 13,
            color: '#777',
            fontStyle: 'italic',
            marginTop: 4,
          },
        }}
               onChange={(e) => { setInput({ ...input, originalUrl: e.target.value }) }}
           />
           <TextInput
               size="lg"
               label="Custom Url "
               placeholder="You can customize your short url"
               styles={{
          input: {
            borderColor: '#bfbfbf',
            borderWidth: 1,
            borderStyle: 'solid',
            backgroundColor: '#fff',
            fontFamily: 'Georgia, serif',
            fontSize: 16,
            padding: '12px',
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)',
          },
          label: {
            fontWeight: 600,
            color: '#444',
            fontSize: 15,
            fontFamily: 'Georgia, serif',
            marginBottom: 6,
          },
          description: {
            fontSize: 13,
            color: '#777',
            fontStyle: 'italic',
            marginTop: 4,
          },
        }}
               onChange={(e) => { setInput({ ...input, customUrl: e.target.value }) }}
           />
           <TextInput
               size="lg"
               label="Title"
               placeholder=""
               styles={{
          input: {
            borderColor: '#bfbfbf',
            borderWidth: 1,
            borderStyle: 'solid',
            backgroundColor: '#fff',
            fontFamily: 'Georgia, serif',
            fontSize: 16,
            padding: '12px',
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)',
          },
          label: {
            fontWeight: 600,
            color: '#444',
            fontSize: 15,
            fontFamily: 'Georgia, serif',
            marginBottom: 6,
          },
          description: {
            fontSize: 13,
            color: '#777',
            fontStyle: 'italic',
            marginTop: 4,
          },
        }}
               onChange={(e) => { setInput({ ...input, title: e.target.value }) }}
           />
           <TextInput
               size="lg"
               type='date'
               label="expiresAt"
               placeholder=""
               styles={{
          input: {
            borderColor: '#bfbfbf',
            borderWidth: 1,
            borderStyle: 'solid',
            backgroundColor: '#fff',
            fontFamily: 'Georgia, serif',
            fontSize: 16,
            padding: '12px',
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)',
          },
          label: {
            fontWeight: 600,
            color: '#444',
            fontSize: 15,
            fontFamily: 'Georgia, serif',
            marginBottom: 6,
          },
          description: {
            fontSize: 13,
            color: '#777',
            fontStyle: 'italic',
            marginTop: 4,
          },
        }}
               onChange={(e) => { setInput({ ...input, expiresAt: e.target.value }) }}
           />
           <br/>
           <Button               
            radius="xs"
            size="md"
               style={{
          backgroundColor: '#2f4f4f',
          color: '#fff',
          fontFamily: 'Georgia, serif',
          fontSize: 16,
          fontWeight: 'bold',
          padding: '10px 24px',
          border: '1px solid #333',
          boxShadow: '0 3px 8px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.2s ease-in-out',
        }}
         onClick={generateShortUrl}
        >
                   Generate short url
           </Button>

           </>:
           <Response response={response} setResponse = {setResponse}/>
}

       </Container>
   )
}
