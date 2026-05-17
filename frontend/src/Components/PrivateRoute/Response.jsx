import Service from '../../utils/http';
import { Anchor, Button, Card, Container, Group, Space, Stack, Title, Text, Center } from '@mantine/core';
const service = new Service();


export default function Response(props) {
   const baseUrl = service.getBaseURL();
   const redirectUrl = `${baseUrl}/api/s/${props?.response?.shortCode}`;

   const handleDownloadQR = async () => {
     try {
       const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(redirectUrl)}`;
       const response = await fetch(qrUrl);
       const blob = await response.blob();
       const blobUrl = window.URL.createObjectURL(blob);
       
       const a = document.createElement('a');
       a.href = blobUrl;
       a.download = `qr-${props?.response?.shortCode || 'code'}.png`;
       document.body.appendChild(a);
       a.click();
       document.body.removeChild(a);
       window.URL.revokeObjectURL(blobUrl);
     } catch (error) {
       console.error("Error downloading QR Code:", error);
     }
   };

   return (
      <Card shadow="md" radius="md" withBorder p="lg" mt="xl" style={{ maxWidth: 500, margin: '0 auto' }}>
      <Title order={4} mb="sm">Shortened URL</Title>

      <Text mb="sm">
        Here is your shortened URL:
      </Text>

      <Anchor href={redirectUrl} target="_blank" size="lg" weight={600} color="blue">
        {redirectUrl}
      </Anchor>

      <Space h="md" />

      <Center style={{ flexDirection: 'column', gap: '15px' }}>
        <img 
          src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(redirectUrl)}`} 
          alt="QR Code" 
          style={{ 
            border: '2px solid #e0e0e0', 
            padding: '12px', 
            borderRadius: '12px', 
            backgroundColor: '#ffffff',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
          }}
        />
        <Button 
          variant="light" 
          color="blue" 
          radius="md"
          onClick={handleDownloadQR}
        >
          Download QR Code
        </Button>
      </Center>

      <Space h="lg" />

      <Group justify="flex-end">
        <Button variant="outline" color="red" radius="md" onClick={() => props.setResponse(null)}>
          Clear Response
        </Button>
      </Group>
    </Card>
   )
}


