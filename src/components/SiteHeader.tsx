const NAV_LINKS = [
  { href: '#how', label: 'How We Do It' },
  { href: '#ai', label: 'AI at Jeavio' },
  { href: '#about', label: 'About Us' },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="logo" href="#">Jeavio</a>
      <nav className="nav-links" aria-label="Primary">
        {NAV_LINKS.map(({ href, label }) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>
      <a className="btn-nav" href="#contact">Let's Talk</a>
    </header>
  );
}
