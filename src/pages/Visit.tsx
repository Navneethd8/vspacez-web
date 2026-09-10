import { Link } from 'react-router-dom'
import Seo from '../Seo.tsx'
import './Home.css'

const PHONE = '+917904757565'
const PHONE_DISPLAY = '+91 79047 57565'
const EMAIL = 'vspacezofficial@gmail.com'
const WHATSAPP = 'https://wa.me/917904757565'
const INSTAGRAM = 'https://www.instagram.com/vspacez/'
const MAPS =
  'https://www.google.com/maps/dir//VSpacez,+3rd+Floor,+Yesde+House,+No:+131,+Valluvar+Kottam+High+Rd,+Ponnangipuram,+Tirumurthy+Nagar,+Nungambakkam,+Chennai,+Tamil+Nadu+600034,+India/@13.0558624,80.2425613,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a5267e3f14c72b5:0x577a68af1bd8f77!2m2!1d80.2425613!2d13.0558624'
const MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.85!2d80.2425613!3d13.0558624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267e3f14c72b5%3A0x577a68af1bd8f77!2sVSpacez!5e0!3m2!1sen!2sin'

export default function Visit() {
  return (
    <div className="page">
      <Seo
        title="Visit us | V SPACEZ"
        description="Visit V SPACEZ in Nungambakkam. Call ahead so we can make your visit convenient and pleasant. Directions from Valluvar Kottam junction."
        path="/visit"
        markdown="/visit.md"
      />
      <header className="top">
        <Link to="/" className="brand">
          <img src="/brand-logo.jpg" alt="V SPACEZ" />
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/#spaces">Spaces</Link>
          <Link to="/tariff">Tariff</Link>
          <Link to="/#contact">Contact</Link>
          <a className="ghost" href={WHATSAPP} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </nav>
      </header>

      <main className="visit-layout">
        <div className="visit-copy">
          <section className="visit-intro">
            <p className="eyebrow">Nungambakkam, Chennai</p>
            <h1>Visit us</h1>
            <p className="lede">
              Feel free to visit us anytime. Do call us though, so we make sure your visit
              is convenient and pleasant.
            </p>
            <div className="actions">
              <a className="primary" href={`tel:${PHONE}`}>
                Call {PHONE_DISPLAY}
              </a>
              <a className="secondary" href={WHATSAPP} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </section>

          <section className="visit-directions" aria-labelledby="directions-heading">
            <h2 id="directions-heading">Directions</h2>
            <p>
              From Valluvar Kottam junction, be on the right lane and cross Kovai Pazhamudhir
              Nilayam and then Star Health Insurance. V Spacez will be to your right.
            </p>
            <ul className="visit-notes">
              <li>
                There is parking on-site. During events, we engage valet drivers to park as
                many cars as needed.
              </li>
              <li>
                Varnam is on 3rd floor, Vizha is on 4th floor and Vaan is on 5th floor.
              </li>
            </ul>
          </section>

          <section className="visit-address" aria-labelledby="address-heading">
            <h2 id="address-heading">Address</h2>
            <p>
              No. 131, 3rd Floor, Yesde House
              <br />
              Valluvar Kottam High Rd, Nungambakkam
              <br />
              Chennai 600034
            </p>
            <div className="actions">
              <a className="secondary" href={MAPS} target="_blank" rel="noreferrer">
                Open in Google Maps
              </a>
            </div>
          </section>
        </div>

        <section className="visit-map" aria-label="Map to V SPACEZ">
          <iframe
            title="V SPACEZ on Google Maps"
            src={MAP_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
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
          <Link to="/privacy">Privacy policy</Link>
        </div>
      </footer>
    </div>
  )
}
