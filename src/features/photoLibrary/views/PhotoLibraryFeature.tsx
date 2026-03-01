import { usePhotoLibraryData } from '../hooks/usePhotoLibraryData';

const densityColumns = {
  compact: 'repeat(auto-fill, minmax(120px, 1fr))',
  comfortable: 'repeat(auto-fill, minmax(160px, 1fr))',
  cinematic: 'repeat(auto-fill, minmax(210px, 1fr))'
} as const;

export function PhotoLibraryFeature() {
  const {
    albums,
    query,
    updateQuery,
    selectedAlbum,
    setSelectedAlbum,
    selectedPhoto,
    renderedPhotos,
    setSelectedPhotoId,
    density,
    setDensity,
    isPending
  } = usePhotoLibraryData();

  return (
    <div className="photo-library-layout">
      <aside className="sidebar glass">
        <h1>Photo Library</h1>
        <label className="search-box" aria-label="Search photos">
          <span>⌕</span>
          <input value={query} onChange={(event) => updateQuery(event.target.value)} placeholder="Search" />
        </label>

        <nav>
          {albums.map((album) => (
            <button
              key={album.id}
              className={selectedAlbum === album.id ? 'active' : ''}
              onClick={() => setSelectedAlbum(album.id)}
            >
              {album.name}
            </button>
          ))}
        </nav>
      </aside>

      <section className="gallery-zone">
        <header className="gallery-toolbar glass">
          <p>{isPending ? 'Curating your results...' : `${renderedPhotos.length} visuals ready`}</p>
          <div className="density-switcher" role="group" aria-label="Grid density">
            {(['compact', 'comfortable', 'cinematic'] as const).map((option) => (
              <button key={option} onClick={() => setDensity(option)} className={density === option ? 'active' : ''}>
                {option}
              </button>
            ))}
          </div>
        </header>

        <div className="gallery-grid" style={{ gridTemplateColumns: densityColumns[density] }}>
          {renderedPhotos.map((photo) => (
            <article
              className={`photo-card ${selectedPhoto?.id === photo.id ? 'selected' : ''}`}
              key={photo.id}
              onClick={() => setSelectedPhotoId(photo.id)}
            >
              <img src={photo.imageUrl} alt={photo.title} loading="lazy" />
              <div className="overlay">
                <h3>{photo.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <aside className="details-pane glass">
        {selectedPhoto ? (
          <>
            <img src={selectedPhoto.imageUrl} alt={selectedPhoto.title} className="detail-hero" />
            <div className="detail-tabs">
              <button className="active">Details</button>
              <button>Content</button>
              <button>Palette</button>
            </div>

            <dl>
              <dt>File Name</dt>
              <dd>{selectedPhoto.title.toLowerCase().replace(/\s+/g, '_')}.jpg</dd>
              <dt>Date Taken</dt>
              <dd>{new Date(selectedPhoto.capturedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</dd>
              <dt>Dimensions</dt>
              <dd>
                {selectedPhoto.width} × {selectedPhoto.height}
              </dd>
              <dt>Size</dt>
              <dd>{selectedPhoto.sizeMb.toFixed(1)} MB</dd>
              <dt>Dominant Colors</dt>
              <dd className="palette">
                {selectedPhoto.palette.map((color) => (
                  <span key={color} style={{ background: color }} title={color} />
                ))}
              </dd>
            </dl>
          </>
        ) : (
          <p>No photo selected.</p>
        )}
      </aside>
    </div>
  );
}
