import heroImage from './assets/Red Main Promo 26.jpg'
import promoImage from './assets/Red Promo 2 26.jpg'
import liveImageOne from './assets/HOUSEMATES 12.2.26 (39 of 40).jpg'
import liveImageTwo from './assets/HOUSEMATES 12.2.26 (40 of 40).jpg'
import portraitImageOne from './assets/19-AFA10A29-D9A2-4F27-9C0F-8D150FE10A16.jpg'
import portraitImageTwo from './assets/25-CC87B812-9F03-4509-B122-C71D1E922903.jpg'

const bandcampUrl = 'https://housematesband.bandcamp.com/'
const instagramUrl = 'https://instagram.com/housematesband'
const spotifyUrl = 'https://open.spotify.com/artist/64JQlmkAPwR6IRgsEQ42Tb'
const youtubeUrl = 'https://youtube.com/@housematesband'
const pressKitUrl = 'https://new.express.adobe.com/webpage/jI1tmCDu3FqiE'
const unreleasedUrl = 'https://samply.app/p/Gt0u7VRKr69cpVPLhOFx'


export default function App() {
  return (
    <div className="page">
      <header
        className="hero"
        id="home"
        style={{ '--hero-bg': `url("${liveImageTwo}")` }}
      >
        <nav className="nav">
          <div className="logo">Housemates</div>
          <div className="nav-links">
            <a href="#about">Social</a>
            <a href="#music">Music</a>
            <a href="#gigs">Gigs</a>
            <a href="#press-kit">Press Kit</a>
            <a href={bandcampUrl} target="_blank" rel="noopener noreferrer">Merch</a>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-text">
            <p className="eyebrow">post-grunge • alt-rock</p>
            <h1>HOUSEMATES</h1>
            <p className="lead">
              Forming in 2023 HOUSEMATES exploded onto the Galway DIY scene with a raw, unapologetic sound that cuts the listener to the bone. The post-grunge powerhouse packs attitude & grit while simultaneously leaving a lasting impression. Having caught the attention of longtime alt-rockers Fangclub, the band opened up for them in the Róisín Dubh in April 2025. Combining trashy guitars, driving bass & attacking drums they blend melodic intensity with raw aggression, creating a unique fusion of chaos and control. The group come into their own in the live realm. With a stage show known for it's seismic energy & early 90s undertones, HOUSEMATES turn even the smallest of venues into rocking fun houses every time.
            </p>
            <div className="cta-group">
             
      
            </div>
          </div>

          {/*<div className="hero-media">
            <img
              className="hero-image"
              src={promoImage}
              alt="Housemates promo"
              loading="lazy"
            />
          </div>
          */}

          <div className="hero-card">
            <div className="hero-card-inner">
              <p className="card-title">Latest Release</p>
              <h2>“Cutting Teeth?”</h2>
              <p className="card-copy">
                Streaming everywhere.
              </p>
               <a className="button primary" href="#music">
                Listen Now
              </a>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-inner">
              <h2>Merch</h2>
              <p className="card-copy">
                T-Shirts, Posters, Pins & Stickers available.
              </p>
              <a className="button primary" href={bandcampUrl} target="_blank" rel="noopener noreferrer">
                Shop Now
              </a>
            </div>
          </div>        </div>
      </header>

      <main>
        <section className="section about" id="about">
          <div className="section-header">
            <p className="eyebrow">Social</p>
            <h2>Follow HOUSEMATES</h2>
          </div>
          <div className="social-section">
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="social-card">
              <h3>Instagram</h3>
            </a>
             <a href={bandcampUrl} target="_blank" rel="noopener noreferrer" className="social-card">
              <h3>Bandcamp</h3>
            </a>
            <a href={spotifyUrl} target="_blank" rel="noopener noreferrer" className="social-card">
              <h3>Spotify</h3>
            </a>
            <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="social-card">
              <h3>YouTube</h3>
            </a>
          </div>

          <a href="mailto:housematesmgmt1@gmail.com" className="email-contact">
            <h3>Contact Us Via Email</h3>
            <p>housematesmgmt1@gmail.com </p>
          </a>
        </section>

        <section className="section photos" id="photos">
          <div className="section-header">
            <h2>Photos</h2>
          </div>
          <div className="photo-grid">
            {[
              { src: promoImage, alt: 'Housemates promo two' },
              { src: liveImageOne, alt: 'Housemates live performance' },
              { src: liveImageTwo, alt: 'Housemates live performance two' },
              { src: portraitImageOne, alt: 'Housemates portrait' },
              { src: portraitImageTwo, alt: 'Housemates portrait two' },
            ].map((photo) => (
              <figure className="photo-card" key={photo.src}>
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </section>

        <section className="section music" id="music">
          <div className="section-header">
            <h2>Music</h2>
          </div>

          <div className="music-video">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/ZXaZ32W7gUs"
              title="HOUSEMATES - YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="music-grid">
            {[
              {
                title: 'Boys Who Like Neitzche',
                year: '2026',
              },
              {
                title: 'Drama Queens',
                year: '2026',
              },

            ].map((release) => (
              <article className="music-card" key={release.title}>
                <div>
                  <p className="tag">{release.year}</p>
                  <h3>{release.title}</h3>
                  <p>{release.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="music-cta">
            <a className="button primary" href={spotifyUrl}>
              Stream on Spotify
            </a>
            <a className="button ghost" href={unreleasedUrl}>
              Unreleased Music
            </a>
          </div>
        </section>

        <section className="section gigs" id="gigs">
          <div className="section-header">
            <p className="eyebrow">Live</p>
            <h2>Upcoming Gigs</h2>
          </div>
          <div className="gigs-grid">
            {[
              {
                date: '14 Mar 2026',
                venue: 'Róisín Dubh',
                city: 'Galway, IE',
                note: 'Headliner',
                ticketUrl: 'https://roisindubh.net/',
              },
              {
                date: '14 Mar 2026',
                venue: 'Róisín Dubh',
                city: 'Galway, IE',
                note: 'Headliner',
                ticketUrl: 'https://roisindubh.net/',
              },

            ].map((gig) => (
              <a
                className="gig-card"
                href={gig.ticketUrl || '#'}
                key={`${gig.date}-${gig.venue}`}
                target={gig.ticketUrl ? '_blank' : undefined}
                rel={gig.ticketUrl ? 'noopener noreferrer' : undefined}
                aria-label={`Tickets for ${gig.venue} on ${gig.date}`}
              >
                <p className="tag">{gig.date}</p>
                <h3>{gig.venue}</h3>
                <p>{gig.city}</p>
                <p className="gig-note">{gig.note}</p>
              </a>
            ))}
          </div>
          <a href="mailto:housematesmgmt1@gmail.com" className="button ghost gigs-contact">
            Book HOUSEMATES
          </a>
        </section>

        <section className="section press" id="press-kit">
          <div className="section-header">
            <h2>Press Kit</h2>
          </div>
          <div className="press-embed">
            <iframe
              title="Housemates Press Kit"
              src={pressKitUrl}
              loading="lazy"
              allow="fullscreen"
            />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <p>© 2026 HOUSEMATES. All rights reserved.</p>
          <div className="social-links">
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" title="Instagram">
              IG
            </a>
            <a href={spotifyUrl} target="_blank" rel="noopener noreferrer" title="Spotify">
              Spotify
            </a>
            <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" title="YouTube">
              YT
            </a>
            <a href={bandcampUrl} target="_blank" rel="noopener noreferrer" title="Bandcamp">
              Bandcamp
            </a>
          </div>
        </div>
        <div className="footer-links">
          <a href="#home">Back to top</a>
        </div>
      </footer>
    </div>
  )
}