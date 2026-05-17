import {
  Button,
  Center,
  Container,
  Stack,
  Text,
  Title,
  Badge,
  Group,
  SimpleGrid,
  Card
} from "@mantine/core";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getIsLoggedIn } from "../../redux/slices/User";
import { IconLink, IconBolt, IconChartBar, IconQrcode } from "@tabler/icons-react";

const Home = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        background: "linear-gradient(135deg, #d9afd9 0%, #97d9e1 100%)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Container size="sm" style={{ position: "relative", zIndex: 1, width: '90%' }}>
        <div
          style={{
            backdropFilter: "blur(20px)",
            background: "rgba(255, 255, 255, 0.15)",
            border: "1px solid rgba(255, 255, 255, 0.25)",
            borderRadius: "32px",
            padding: "3rem 2rem",
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
            textAlign: "center",
            color: "#ffffff"
          }}
        >
          <Center>
            <div style={{
              background: 'rgba(255, 255, 255, 0.2)',
              padding: '16px',
              borderRadius: '50%',
              display: 'flex',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
            }}>
              <IconLink size={40} color="#ffffff" />
            </div>
          </Center>

          <Title
            order={1}
            style={{
              color: "white",
              fontWeight: 800,
              fontSize: "3rem",
              marginTop: "1.5rem",
              letterSpacing: '-0.5px'
            }}
          >
            Url <span style={{ color: '#228be6' }}>Shortner</span>
          </Title>

          <Text
            size="lg"
            style={{
              color: "rgba(255, 255, 255, 0.9)",
              marginTop: "1rem",
              marginBottom: "2rem",
              fontWeight: 400,
              lineHeight: 1.6
            }}
          >
            Simplify your links, generate instant scan-ready QR codes, and track click counts with real-time accuracy.
          </Text>

          <Button
            size="lg"
            radius="xl"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            style={{
              boxShadow: '0 8px 24px rgba(34, 139, 230, 0.3)',
              padding: '0 40px',
              fontWeight: 700,
              fontSize: '1.1rem',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            onClick={() =>
              isLoggedIn ? navigate("/Shorturl") : navigate("/login")
            }
          >
            Get Started
          </Button>

          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md" mt="3rem">
            <Card padding="md" radius="lg" style={{ background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.15)', color: '#fff' }}>
              <Group gap="xs" justify="center">
                <IconBolt size={20} color="#ffec99" />
                <Text fw={700} size="sm">Lightning Fast</Text>
              </Group>
              <Text size="xs" mt="xs" c="rgba(255, 255, 255, 0.7)">Instant redirects with optimized route resolution.</Text>
            </Card>

            <Card padding="md" radius="lg" style={{ background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.15)', color: '#fff' }}>
              <Group gap="xs" justify="center">
                <IconChartBar size={20} color="#b2f2bb" />
                <Text fw={700} size="sm">Track Analytics</Text>
              </Group>
              <Text size="xs" mt="xs" c="rgba(255, 255, 255, 0.7)">Keep precise track of total redirects and clicks.</Text>
            </Card>

            <Card padding="md" radius="lg" style={{ background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.15)', color: '#fff' }}>
              <Group gap="xs" justify="center">
                <IconQrcode size={20} color="#a5d8ff" />
                <Text fw={700} size="sm">QR Generation</Text>
              </Group>
              <Text size="xs" mt="xs" c="rgba(255, 255, 255, 0.7)">Download scan-ready QR codes for seamless sharing.</Text>
            </Card>
          </SimpleGrid>
        </div>
      </Container>
    </div>
  );
};

export default Home;
