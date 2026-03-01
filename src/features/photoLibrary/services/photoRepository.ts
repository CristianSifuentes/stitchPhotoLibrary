import { Album, Photo } from '../types/photo';

export const albums: Album[] = [
  { id: 'album-01', name: 'Album 01' },
  { id: 'album-02', name: 'Album 02' },
  { id: 'album-03', name: 'Album 03' },
  { id: 'squirrels', name: 'Squirrels' },
  { id: 'acorns', name: 'Acorns' },
  { id: 'beach', name: 'The Beach' }
];

export const photos: Photo[] = [
  {
    id: 'p1',
    albumId: 'squirrels',
    title: 'Squirrel Portrait',
    imageUrl: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=800&q=80',
    capturedAt: '2023-10-26',
    width: 3024,
    height: 4032,
    sizeMb: 2.5,
    palette: ['#a94f00', '#7f8794', '#0c8f67', '#c9ced4', '#f38d3f']
  },
  {
    id: 'p2',
    albumId: 'squirrels',
    title: 'Focused Friend',
    imageUrl: 'https://images.unsplash.com/photo-1501706362039-c6e80948f01b?auto=format&fit=crop&w=800&q=80',
    capturedAt: '2024-02-19',
    width: 2400,
    height: 3200,
    sizeMb: 3.1,
    palette: ['#7f5c3a', '#333', '#b4a38d', '#dc9952', '#8aa35f']
  },
  {
    id: 'p3',
    albumId: 'beach',
    title: 'Morning Waves',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    capturedAt: '2025-06-07',
    width: 3840,
    height: 2160,
    sizeMb: 4.2,
    palette: ['#94d2ff', '#1f4e78', '#ffdf9e', '#6ec4e8', '#dcecf3']
  },
  {
    id: 'p4',
    albumId: 'acorns',
    title: 'Autumn Acorns',
    imageUrl: 'https://images.unsplash.com/photo-1542370285-b8eb8317691c?auto=format&fit=crop&w=800&q=80',
    capturedAt: '2024-09-17',
    width: 3000,
    height: 2000,
    sizeMb: 1.8,
    palette: ['#6f4f28', '#d4b483', '#a07441', '#43321c', '#efddc9']
  },
  {
    id: 'p5',
    albumId: 'album-01',
    title: 'Mountain Mark',
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    capturedAt: '2023-01-11',
    width: 3200,
    height: 2133,
    sizeMb: 2.1,
    palette: ['#97aebd', '#34495d', '#efefef', '#536a7a', '#202f3a']
  },
  {
    id: 'p6',
    albumId: 'album-02',
    title: 'Forest Bird',
    imageUrl: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80',
    capturedAt: '2022-05-28',
    width: 2896,
    height: 2896,
    sizeMb: 2.9,
    palette: ['#6f8b5a', '#d8d2bd', '#2e3326', '#8a5e3b', '#b58a66']
  }
];
