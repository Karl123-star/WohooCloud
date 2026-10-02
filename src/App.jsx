import './App.css';

const actions = [
  { label: 'Photos', icon: '📷', color: 'purple' },
  { label: 'Files', icon: '📁', color: 'blue' },
  { label: 'Videos', icon: '🎬', color: 'pink' },
  { label: 'Notes', icon: '📝', color: 'green' },
];

const files = [
  { name: 'Summer-trip.mov', type: 'MP4', size: '1.2 GB', status: 'ready' },
  { name: 'Brand-guidelines.pdf', type: 'PDF', size: '340 MB', status: 'shared' },
  { name: 'Team-photos.zip', type: 'ZIP', size: '860 MB', status: 'syncing' },
];

function App() {
  return (
    <div className="app-shell">
      <div className="phone-frame">
        <header className="topbar">
          <button className="nav-button" type="button" aria-label="Open menu">
            <span />
            <span />
            <span />
          </button>

          <div className="brand-block">
            <div className="brand-mark" aria-hidden="true" />
            <div>
              <div className="brand-name">Wohoo Cloud</div>
              <div className="brand-subtitle">Storage</div>
            </div>
          </div>

          <button className="status-button" type="button" aria-label="Notifications">
            <span aria-hidden="true">🔔</span>
            <span className="status-dot" aria-hidden="true" />
          </button>
        </header>

        <main className="content">
          <section className="hero">
            <p className="eyebrow">Your workspace</p>
            <h1>Keep your files safe.</h1>
            <p className="subtitle">
              Sync photos, docs and videos across iPhone, Android and desktop devices.
            </p>

            <div className="cta-row">
              <button className="primary-button" type="button">
                Upload
              </button>
              <button className="secondary-button" type="button">
                Share
              </button>
            </div>
          </section>

          <section className="storage-card" aria-label="Storage overview">
            <div className="card-row">
              <div>
                <p className="label">Available</p>
                <h2>1.4 TB</h2>
              </div>
              <span className="pill success">+12%</span>
            </div>

            <div className="meter" aria-hidden="true">
              <span />
            </div>

            <div className="stats">
              <div>
                <strong>72%</strong>
                <span>Used</span>
              </div>
              <div>
                <strong>18</strong>
                <span>Folders</span>
              </div>
              <div>
                <strong>3.2K</strong>
                <span>Files</span>
              </div>
            </div>
          </section>

          <section className="actions" aria-label="Quick actions">
            {actions.map(({ label, icon, color }) => (
              <button key={label} type="button" className="action-chip">
                <span className={`action-icon ${color}`} aria-hidden="true">
                  {icon}
                </span>
                <span>{label}</span>
              </button>
            ))}
          </section>

          <section className="files-panel">
            <div className="panel-head">
              <h3>Recent files</h3>
              <a href="#">View all</a>
            </div>

            {files.map(({ name, type, size, status }) => (
              <div key={name} className="file-row">
                <div className="file-badge" aria-hidden="true">
                  {type}
                </div>

                <div className="file-meta">
                  <strong>{name}</strong>
                  <span>{size}</span>
                </div>

                <span className={`file-status ${status}`}>{status}</span>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
