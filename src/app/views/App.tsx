import { RootLayout } from './RootLayout';
import { PhotoLibraryFeature } from '@features/photoLibrary/views/PhotoLibraryFeature';

export function App() {
  return (
    <RootLayout>
      <PhotoLibraryFeature />
    </RootLayout>
  );
}
