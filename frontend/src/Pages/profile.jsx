import React, { useEffect, useState } from 'react';
import Service from '../utils/http';
const service = new Service();
import { Avatar, Card, Container, Stack, Text, Title, Badge, Group, Divider, ThemeIcon } from '@mantine/core';
import { IconUser, IconMail, IconFingerprint, IconCalendarEvent, IconShieldCheckered } from '@tabler/icons-react';

const Profile = () => {
    const [profileData, setProfileData] = useState(null);

    const getProfileData = async () => {
        let data = await service.get('user/me');
        setProfileData(data);
    };

    useEffect(() => {
        getProfileData();
    }, []);

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div
            style={{
                minHeight: '100vh',
                width: '100%',
                background: 'linear-gradient(135deg, #d9afd9 0%, #97d9e1 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px 20px',
            }}
        >
            <Container size="xs" style={{ width: '100%' }}>
                <Card
                    shadow="xl"
                    radius="24px"
                    padding="xl"
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.25)',
                        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                        color: '#ffffff',
                    }}
                >
                    <Stack align="center" gap="md" style={{ textAlign: 'center' }}>
                        <Avatar
                            size={120}
                            radius={120}
                            src={profileData?.avatar}
                            style={{
                                border: '4px solid rgba(255, 255, 255, 0.8)',
                                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                                transition: 'transform 0.3s ease',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        />

                        <div>
                            <Title order={2} style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.8rem' }}>
                                {profileData?.name || 'Loading Name...'}
                            </Title>
                            <Badge 
                                variant="gradient" 
                                gradient={{ from: 'indigo', to: 'cyan' }} 
                                size="lg" 
                                mt="xs"
                                radius="md"
                                leftSection={<IconShieldCheckered size={14} />}
                            >
                                Active Member
                            </Badge>
                        </div>
                    </Stack>

                    <Divider my="lg" color="rgba(255, 255, 255, 0.2)" />

                    <Stack gap="md">
                        <Group gap="md" wrap="nowrap">
                            <ThemeIcon size="lg" radius="md" variant="light" style={{ background: 'rgba(255, 255, 255, 0.2)', color: '#ffffff' }}>
                                <IconUser size={20} />
                            </ThemeIcon>
                            <div>
                                <Text size="xs" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Display Name</Text>
                                <Text size="sm" fw={600} style={{ color: '#ffffff' }}>{profileData?.name}</Text>
                            </div>
                        </Group>

                        <Group gap="md" wrap="nowrap">
                            <ThemeIcon size="lg" radius="md" variant="light" style={{ background: 'rgba(255, 255, 255, 0.2)', color: '#ffffff' }}>
                                <IconMail size={20} />
                            </ThemeIcon>
                            <div>
                                <Text size="xs" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Email Address</Text>
                                <Text size="sm" fw={600} style={{ color: '#ffffff' }}>{profileData?.email}</Text>
                            </div>
                        </Group>

                        <Group gap="md" wrap="nowrap">
                            <ThemeIcon size="lg" radius="md" variant="light" style={{ background: 'rgba(255, 255, 255, 0.2)', color: '#ffffff' }}>
                                <IconFingerprint size={20} />
                            </ThemeIcon>
                            <div>
                                <Text size="xs" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>User ID</Text>
                                <Text size="xs" fw={500} style={{ color: '#ffffff', fontFamily: 'monospace' }}>{profileData?._id}</Text>
                            </div>
                        </Group>

                        <Group gap="md" wrap="nowrap">
                            <ThemeIcon size="lg" radius="md" variant="light" style={{ background: 'rgba(255, 255, 255, 0.2)', color: '#ffffff' }}>
                                <IconCalendarEvent size={20} />
                            </ThemeIcon>
                            <div>
                                <Text size="xs" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Account Created</Text>
                                <Text size="sm" fw={600} style={{ color: '#ffffff' }}>{formatDate(profileData?.createdAt)}</Text>
                            </div>
                        </Group>
                    </Stack>
                </Card>
            </Container>
        </div>
    );
};

export default Profile;