export default function DownloadSection() {
  return (
    <section className="section section-download" id="report">
      <div className="download-card">
        <div className="download-icon" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="12" y1="12" x2="12" y2="18" />
            <polyline points="9 15 12 18 15 15" />
          </svg>
        </div>
        <div className="download-meta">
          <p className="download-label">Investigation Report</p>
          <p className="download-desc">Full findings, methodology, and recommendations — PDF format.</p>
        </div>
        <a
          className="btn-download"
          href="/INVESTIGATION-REPORT.pdf"
          download="INVESTIGATION REPORT.pdf"
        >
          Download PDF
        </a>
      </div>
    </section>
  );
}
