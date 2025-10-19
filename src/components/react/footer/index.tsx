import { socialLinks } from './social-links';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl justify-center px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="order-2 flex justify-center gap-x-6">
          {socialLinks.map(({ name, url, icon: Icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent-foreground"
            >
              <span className="sr-only">{name}</span>
              <Icon />
            </a>
          ))}
        </div>

        <p className="text-muted-foreground mt-8 text-center text-base md:order-1 md:mt-0">
          © {year} Ligue des Alternants - Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
