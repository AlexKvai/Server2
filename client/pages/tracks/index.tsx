import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Box, Button, Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { ITrack } from '../../types/track';
import TrackList from "../../components/TrackList";

const Index = () => {
  const router = useRouter();
  const tracks: ITrack[] = [
    {
      _id: '1',
      name: 'Трек 1',
      artist: 'Исполнитель 1',
      text: 'Текст 1',
      listens: 5,
      audio: 'http://localhost:3000/3495.mp3',
      picture: 'http://localhost:3000/avat.jpg',
      comments: [],
    },
    {
      _id: '2',
      name: 'Трек 2',
      artist: 'Исполнитель 2',
      text: 'Текст 1',
      listens: 5,
      audio: 'http://localhost:3000/349.mp3',
      picture: 'http://localhost:3000/ava.jpg',
      comments: [],
    },
    {
      _id: '3',
      name: 'Трек 3',
      artist: 'Исполнитель 3',
      text: 'Текст 1',
      listens: 5,
      audio: 'http://localhost:3000/34.mp3',
      picture: 'http://localhost:3000/av.jpg',
      comments: [],
    },
  ];

  return (
    <MainLayout>
      <Grid container justifyContent={'center'}>
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent={'space-between'}>
              <h1>Список треков</h1>
              <Button onClick={() => router.push('/tracks/create')}>
                Загрузить
              </Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks}/>

        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;
