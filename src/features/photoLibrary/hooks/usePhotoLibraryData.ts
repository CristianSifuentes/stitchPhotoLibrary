import { useDeferredValue } from 'react';
import { albums, photos } from '../services/photoRepository';
import { usePhotoLibraryState } from '../store/usePhotoLibraryState';

export function usePhotoLibraryData() {
  const state = usePhotoLibraryState(photos);
  const deferredPhotos = useDeferredValue(state.filteredPhotos);

  return {
    albums,
    ...state,
    renderedPhotos: deferredPhotos
  };
}
