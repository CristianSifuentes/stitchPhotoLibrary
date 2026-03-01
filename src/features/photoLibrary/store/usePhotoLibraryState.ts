import { useMemo, useState, useTransition } from 'react';
import { GridDensity, Photo } from '../types/photo';

export function usePhotoLibraryState(initialPhotos: Photo[]) {
  const [query, setQuery] = useState('');
  const [selectedAlbum, setSelectedAlbum] = useState('squirrels');
  const [selectedPhotoId, setSelectedPhotoId] = useState(initialPhotos[0]?.id ?? '');
  const [density, setDensity] = useState<GridDensity>('comfortable');
  const [isPending, startTransition] = useTransition();

  const updateQuery = (nextQuery: string) => {
    startTransition(() => setQuery(nextQuery));
  };

  const scopedPhotos = useMemo(
    () => initialPhotos.filter((photo) => photo.albumId === selectedAlbum),
    [initialPhotos, selectedAlbum]
  );

  const filteredPhotos = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return scopedPhotos;
    return scopedPhotos.filter((photo) => photo.title.toLowerCase().includes(normalized));
  }, [scopedPhotos, query]);

  const selectedPhoto = filteredPhotos.find((photo) => photo.id === selectedPhotoId) ?? filteredPhotos[0] ?? null;

  return {
    query,
    isPending,
    density,
    selectedAlbum,
    selectedPhoto,
    filteredPhotos,
    setSelectedAlbum,
    setSelectedPhotoId,
    setDensity,
    updateQuery
  };
}
