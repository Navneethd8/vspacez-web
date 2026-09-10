import { Link } from 'react-router-dom'
import Seo from '../Seo.tsx'
import './Home.css'

const PHONE = '+917904757565'
const PHONE_DISPLAY = '+91 79047 57565'
const EMAIL = 'vspacezofficial@gmail.com'
const WHATSAPP = 'https://wa.me/917904757565'
const INSTAGRAM = 'https://www.instagram.com/vspacez/'
const MAPS =
  'https://maps.google.com/?q=Yesde+House+Valluvar+Kottam+High+Rd+Nungambakkam+Chennai'

type Rate = { label: string; price: string }
type Pair = { halls: string; marks: string[] }
type VenuePackage = {
  name: string
  note: string
  marks?: string[]
  pairs?: Pair[]
  rates: Rate[]
}

const packages: VenuePackage[] = [
  {
    name: 'Single hall package',
    note: 'Preferable for events under 75 guests',
    marks: ['/varnam.jpg', '/vizha.jpg', '/vaan.jpg'],
    rates: [
      { label: 'Half-day tariff', price: '30,000' },
      { label: 'Utilities', price: '5,000' },
    ],
  },
  {
    name: 'Event and dining hall package',
    note: 'Vizha + Vaan, or Vizha + Varnam',
    pairs: [
      { halls: 'Vizha + Vaan', marks: ['/vizha.jpg', '/vaan.jpg'] },
      { halls: 'Vizha + Varnam', marks: ['/vizha.jpg', '/varnam.jpg'] },
    ],
    rates: [
      { label: 'Half-day tariff', price: '50,000' },
      { label: 'Utilities', price: '5,000' },
    ],
  },
]

const terms = [
  'Utilities include electricity, housekeeping, and valet parking.',
  'Chairs, tables, and green rooms are included as part of the package.',
  'Half-day timings are generally 7:30 am to 2:30 pm, or 3:30 pm to 10:30 pm.',
  'GST extra.',
  'A refundable security deposit of ₹5,000 applies for all events, to cover damages if any.',
  'Events can be booked with 50% advance payment, with the remaining payment due one week before the event.',
  'Outside caterers and decorators are allowed at no additional charge.',
  'Cancellation within 30 days of the event entails foregoing the entire advance payment. Cancellation with more than 30 days’ lead time entails foregoing 50% of the advance, or the option to reschedule to another available future date.',
]

export default function Tariff() {
  return (
    <div className="page">
      <Seo
        title="Venue Tariff | V SPACEZ"
        description="Venue Tariff at V SPACEZ, Nungambakkam. Single hall or event and dining hall packages for a half-day hire."
        path="/tariff"
        markdown="/tariff.md"
      />
      <header className="top">
        <Link to="/" className="brand">
          <img src="/brand-logo.jpg" alt="V SPACEZ" />
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/#spaces">Spaces</Link>
          <Link to="/visit">Visit</Link>
          <Link to="/#contact">Contact</Link>
          <a className="ghost" href={WHATSAPP} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </nav>
      </header>

      <main>
        <section className="tariff-intro">
          <p className="eyebrow">Tariff card</p>
          <h1>Venue Tariff</h1>
          <p className="lede">
            Book a single hall, or pair Vizha with Vaan or Varnam. Prices below are in
            Indian rupees for a half-day package.
          </p>
        </section>

        <section className="tariff-cards" aria-label="Venue Tariff">
          {packages.map((item) => (
            <article key={item.name}>
              {item.marks ? (
                <div className="hall-marks">
                  {item.marks.map((src) => (
                    <img key={src} className="hall-mark" src={src} alt="" />
                  ))}
                </div>
              ) : (
                <div className="combo-pairs">
                  {item.pairs?.map((pair) => (
                    <div key={pair.halls} className="combo-pair">
                      <div className="hall-marks">
                        {pair.marks.map((src) => (
                          <img key={`${pair.halls}-${src}`} className="hall-mark" src={src} alt="" />
                        ))}
                      </div>
                      <p>{pair.halls}</p>
                    </div>
                  ))}
                </div>
              )}
              <h2>{item.name}</h2>
              <p className="package-note">{item.note}</p>
              <ul className="rates">
                {item.rates.map((rate) => (
                  <li key={rate.label}>
                    <span className="duration">{rate.label}</span>
                    <span className="price">₹{rate.price}*</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="tariff-terms" aria-labelledby="tariff-terms">
          <h2 id="tariff-terms">Terms</h2>
          <ol>
            {terms.map((item) => (
              <li key={item}>*{item}</li>
            ))}
          </ol>
        </section>

        <section className="book-cta" aria-labelledby="tariff-book">
          <h2 id="tariff-book">Book your event</h2>
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
          <Link to="/visit">Visit</Link>
          <Link to="/privacy">Privacy policy</Link>
        </div>
      </footer>
    </div>
  )
}
