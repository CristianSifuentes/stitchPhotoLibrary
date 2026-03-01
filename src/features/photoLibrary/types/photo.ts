export type Album = {
  id: string;
  name: string;
};

export type Photo = {
  id: string;
  albumId: string;
  title: string;
  imageUrl: string;
  capturedAt: string;
  width: number;
  height: number;
  sizeMb: number;
  palette: string[];
};

export type GridDensity = 'compact' | 'comfortable' | 'cinematic';
