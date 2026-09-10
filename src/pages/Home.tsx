import { Link } from 'react-router-dom'
import Reviews from '../Reviews.tsx'
import Seo from '../Seo.tsx'
import './Home.css'

const PHONE = '+917904757565'
const PHONE_DISPLAY = '+91 79047 57565'
const EMAIL = 'vspacezofficial@gmail.com'
const WHATSAPP = 'https://wa.me/917904757565'
const INSTAGRAM = 'https://www.instagram.com/vspacez/'
const MAPS =
  'https://maps.google.com/?q=Yesde+House+Valluvar+Kottam+High+Rd+Nungambakkam+Chennai'

const halls = [
  {
    name: 'Varnam',
    floor: '3rd floor',
    mark: '/varnam.jpg',
    photo: '/varnam-hall.jpg',
    copy: 'Acts as the primary dining hall, adds colour and character for art workshops, children’s theatre, pop-up shows, open mics, and small gatherings.',
  },
  {
    name: 'Vizha',
    floor: '4th floor',
    mark: '/vizha.jpg',
    photo: '/vizha-hall.jpg',
    copy: 'A festive hall for traditional events, private parties, cultural nights, and comedy. Intimate or bustling — it shifts with the occasion.',
  },
  {
    name: 'Vaan',
    floor: '5th floor',
    mark: '/vaan.jpg',
    photo: '/vaan-hall.jpg',
    copy: 'Panoramic city views and natural light. Ideal for yoga, workshops, ceremonies, and photo shoots.',
  },
]

const events = [
  { title: 'Engagement', icon: 'mdi-ring', copy: 'The first celebration of the couple — intimate or grand, styled to the moment.' },
  { title: 'Reception', icon: 'mdi-glass-flute', copy: 'A festive hall for hosting family and friends after the vows.' },
  { title: 'Seemandam', icon: 'mdi-hand-heart', copy: 'A warm, traditional setting for this blessing ceremony.' },
  { title: 'Sangeet', icon: 'mdi-music-note', copy: 'Music, dance, and a floor that can hold the energy of the night.' },
  { title: 'Pre-wedding rituals', icon: 'mdi-flower', copy: 'Mehendi, haldi, and other rites with flexible floor plans.' },
  { title: 'Post-wedding rituals', icon: 'mdi-home-heart', copy: 'Space for the ceremonies that follow the wedding day.' },
  { title: 'Anniversary celebrations', icon: 'mdi-cake-variant', copy: 'Mark another year in a hall that feels like yours.' },
  { title: 'Social functions', icon: 'mdi-account-group', copy: 'Birthdays, family gatherings, and evenings that need a hall with presence.' },
  { title: 'Corporate meetups', icon: 'mdi-briefcase-outline', copy: 'Offsites, town halls, and client evenings across three floors.' },
  { title: 'Workshops', icon: 'mdi-lightbulb-on-outline', copy: 'Talks, classes, and hands-on sessions with Wi-Fi and AV ready.' },
  { title: 'Community nights', icon: 'mdi-microphone-variant', copy: 'Open mics, cultural evenings, and neighbourhood gatherings.' },
  { title: 'Dining hall', icon: 'mdi-silverware-fork-knife', copy: 'Food is essential to every celebration — and every event includes a dining hall.' },
]

const amenities = [
  { title: 'Spaces to suit occasions', copy: '5,000 sq.ft across three distinct halls.' },
  { title: 'Green rooms', copy: 'Private prep space for hosts and performers.' },
  { title: 'Wi-Fi & AV', copy: 'Ready for talks, music, and screens.' },
  { title: 'Furniture & equipment', copy: 'Chairs, tables, music system, projector screen, mics, and more — ready for your setup.' },
  { title: 'Catering', copy: 'In-house catering, or bring your own.' },
  { title: 'Valet parking', copy: 'Drive up and hand over the keys — we take care of parking for you and your guests.' },
  { title: 'Central AC', copy: 'Air conditioning across all three floors.' },
  { title: 'Customized decor', copy: 'Personalized styling and themes so the hall feels like your occasion.' },
]

export default function Home() {
  return (
    <div className="page">
      <Seo
        title="V SPACEZ | Moments Made Magical"
        description="V SPACEZ — Chennai’s venue for social functions, corporate meetups, and celebrations. Nungambakkam."
        path="/"
        markdown="/index.md"
      />
      <header className="top">
        <Link to="/" className="brand">
          <img src="/brand-logo.jpg" alt="V SPACEZ" />
        </Link>
        <nav>
          <a href="#spaces">Spaces</a>
          <a href="#events">Events</a>
          <a href="#amenities">Amenities</a>
          <a href="#reviews">Reviews</a>
          <Link to="/tariff">Tariff</Link>
          <Link to="/visit">Visit</Link>
          <a href="#contact">Contact</a>
          <a className="ghost" href={WHATSAPP} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Nungambakkam, Chennai</p>
            <h1>Make Your Moments Magical at VSpacez</h1>
            <p className="tagline">Where every celebration finds its space, style, and spark.</p>
            <p className="lede">
              Chennai’s venue for social functions, corporate meetups, workshops, and
              community nights — across three floors: Varnam, Vizha, and Vaan.
            </p>
            <p className="notice">
              Our website is getting a refresh. Bookings and enquiries are open as usual.
            </p>
            <div className="actions">
              <a className="primary" href={WHATSAPP} target="_blank" rel="noreferrer">
                Book your event
              </a>
              <a className="secondary" href={`tel:${PHONE}`}>
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <img
              className="hero-photo"
              src="/hero.jpg"
              alt="V SPACEZ venue"
            />
          </div>
        </section>

        <section className="about">
          <h2>About VSpacez</h2>
          <p>
            Welcome to VSpacez, Chennai’s most vibrant venue for celebrating life’s
            special moments. Located in the heart of the city, VSpacez offers a unique
            blend of style, comfort, and versatility, spread across three distinct
            floors: Varnam, Vizha, and Vaan.
          </p>
          <p>
            Central air conditioning, valet parking, restrooms, changing rooms, and
            mirrors come standard. Flexible floor plans adapt to your theme and group
            size — luxury without the fuss.
          </p>
        </section>

        <section id="spaces" className="halls">
          <div className="halls-grid">
            {halls.map((hall) => (
              <article key={hall.name}>
                <div className="hall-photo">
                  <img src={hall.photo} alt={`${hall.name} hall`} />
                  <img className="hall-mark" src={hall.mark} alt="" />
                </div>
                <p className="floor">{hall.floor}</p>
                <h3>{hall.name}</h3>
                <p>{hall.copy}</p>
              </article>
            ))}
          </div>
          <p className="halls-note">
            The 1,600 sq ft halls with seating capacity of 150 and floating capacity up to
            200 guests.
          </p>
        </section>

        <section id="events" className="event-section">
          <h2>Events we host</h2>
          <p className="event-lede">
            From wedding rituals to workshops — the halls adapt to the occasion.
          </p>
          <ul>
            {events.map((item) => (
              <li key={item.title}>
                <i className={`mdi ${item.icon}`} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="amenities" className="amenity-section">
          <h2>Amenities</h2>
          <ul>
            {amenities.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </li>
            ))}
          </ul>
        </section>

        <Reviews />

        <section className="book-cta" aria-labelledby="book-heading">
          <h2 id="book-heading">Book your event</h2>
          <p>
            Message us on WhatsApp or call — we’ll help you pick the hall and lock the
            date with attractive seasonal discounts
          </p>
          <div className="actions">
            <a className="primary" href={WHATSAPP} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a className="secondary" href={`tel:${PHONE}`}>
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </section>
      </main>

      <footer id="contact">
        <div>
          <p className="label">Visit</p>
          <a href={MAPS} target="_blank" rel="noreferrer">
            No. 131, 3rd Floor, Yesde House
            <br />
            Valluvar Kottam High Rd, Nungambakkam
            <br />
            Chennai 600034
          </a>
        </div>
        <div>
          <p className="label">Connect</p>
          <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
        <div className="legal">
          <p>Moments Made Magical</p>
          <Link to="/tariff">Tariff</Link>
          <Link to="/visit">Visit</Link>
          <Link to="/privacy">Privacy policy</Link>
        </div>
      </footer>
    </div>
  )
}
