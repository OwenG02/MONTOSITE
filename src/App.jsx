import { useEffect, useRef } from 'react'
import heroImage from '../public/assets/IMG_6089.JPG'
import promoImage from '../public/assets/IMG_6073.JPG'
import liveImageOne from '../public/assets/IMG_5951.JPG'
import liveImageTwo from '../public/assets/IMG_5889.JPG'
import portraitImageOne from '../public/assets/6a861b31-0fb3-4dd8-b04a-0a049a4009e6.JPG'
import portraitImageTwo from '../public/assets/40b9377d-6d77-440e-8a00-30b0e9886a14.JPG'
import heroVideo from '../public/assets/calvideo.mp4'

const bandcampUrl = 'https://monotypes.bandcamp.com/'
const instagramUrl = 'https://instagram.com/monotypesworld96'
const spotifyUrl = 'https://open.spotify.com/artist/1eiXeaeF8NsBtJDqqtAO5p'
const youtubeUrl = 'https://www.youtube.com/@monotypesworld96'



export default function App() {
  const videoRef = useRef(null)

  useEffect(() => {
    let rafId = 0
    let targetTime = 0
    let displayedTime = 0

    const updateTargetFromScroll = () => {
      if (!videoRef.current) return

      const scrollTop = window.scrollY
      const docHeight = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      )
      const scrollPercent = Math.min(Math.max(scrollTop / docHeight, 0), 1)
      const duration = videoRef.current.duration || 0

      if (duration > 0) {
        targetTime = scrollPercent * duration
      }
    }

    const tick = () => {
      const video = videoRef.current

      if (video) {
        displayedTime += (targetTime - displayedTime) * 0.12

        if (Math.abs(video.currentTime - displayedTime) > 0.02) {
          video.currentTime = displayedTime
        }
      }

      rafId = window.requestAnimationFrame(tick)
    }

    const handleLoadedMetadata = () => {
      updateTargetFromScroll()
      displayedTime = targetTime
    }

    const video = videoRef.current
    video?.addEventListener('loadedmetadata', handleLoadedMetadata)
    window.addEventListener('scroll', updateTargetFromScroll, { passive: true })
    window.addEventListener('resize', updateTargetFromScroll)

    updateTargetFromScroll()
    rafId = window.requestAnimationFrame(tick)

    return () => {
      window.cancelAnimationFrame(rafId)
      video?.removeEventListener('loadedmetadata', handleLoadedMetadata)
      window.removeEventListener('scroll', updateTargetFromScroll)
      window.removeEventListener('resize', updateTargetFromScroll)
    }
  }, [])

  return (
    <div className="page">
      <div className="parallax-video-bg">
        <video
          ref={videoRef}
          src={heroVideo}
          muted
          playsInline
          preload="auto"
        />
      </div>
      <header
        className="hero"
        id="home"
      >
        <nav className="nav">
          <div className="logo">monotypes.</div>
          <div className="nav-links">
            <a href="#about">Social</a>
            <a href="#music">Music</a>
            <a href={bandcampUrl} target="_blank" rel="noopener noreferrer">Merch</a>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-text">
            <h1>monotypes.</h1>
            <p className="lead">
              An alternative rock, post-hardcore outfit based in Galway, known for their high-energy performances and "unhinged" stage presence.
            </p>
            <div className="cta-group">
             
      
            </div>
          </div>

          {/*<div className="hero-media">
            <img
              className="hero-image"
              src={promoImage}
              alt="monotypes. promo"
              loading="lazy"
            />
          </div>
          */}

          <div className="hero-card">
            <div className="hero-card-inner">
              <p className="card-title">Latest Release</p>
              <h2>re:up!</h2>
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
                fr
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
            <h2>Follow monotypes.</h2>
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

          <a href="mailto:monotypes@gmail.com" className="email-contact">
            <h3>Contact Us Via Email</h3>
            <p>monotypesworld@gmail.com </p>
          </a>
        </section>

        <section className="section photos" id="photos">
          <div className="section-header">
            <h2>Photos</h2>
          </div>
          <div className="photo-grid">
            {[
              { src: promoImage, alt: 'monotypes. promo two' },
              { src: liveImageOne, alt: 'monotypes. live performance' },
              { src: liveImageTwo, alt: 'monotypes. live performance two' },
              { src: portraitImageOne, alt: 'monotypes. portrait' },
              { src: portraitImageTwo, alt: 'monotypes. portrait two' },
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
              src="https://www.youtube.com/embed/_GhlJt7yl0o"
              title="monotypes. - YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="music-grid">
            {[
              {
                title: 're:up!',
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
          </div>
        </section>

        {/*<section className="section gigs" id="gigs">
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
          <a href="mailto:monotypesworld@gmail.com" className="button ghost gigs-contact">
            Book monotypes.
          </a>
        </section>
        */}
        
      </main>

      <footer className="footer">
        <div>
          <p>© 2026 monotypes. All rights reserved.</p>
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