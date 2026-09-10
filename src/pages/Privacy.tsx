import { Link } from 'react-router-dom'
import Seo from '../Seo.tsx'
import './Home.css'

export default function Privacy() {
  return (
    <div className="page privacy">
      <Seo
        title="Privacy policy | V SPACEZ"
        description="How V SPACEZ collects, uses, and protects information when you visit our website or book our venue in Nungambakkam, Chennai."
        path="/privacy"
        markdown="/privacy.md"
      />
      <header className="top">
        <Link to="/" className="brand">
          <img src="/brand-logo.jpg" alt="V SPACEZ" />
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/tariff">Tariff</Link>
          <Link to="/visit">Visit</Link>
        </nav>
      </header>

      <main className="about">
        <h1>Privacy policy</h1>
        <p>
          VSpacez is committed to protecting your privacy. This policy explains how we
          collect, use, and safeguard information when you visit our website or use our
          services.
        </p>
        <h2>Information we collect</h2>
        <p>
          Personal information may include your name, contact details, payment details,
          demographic information, and anything you choose to send us. Non-personal
          information may include browser type, IP address, device, operating system, and
          browsing behaviour.
        </p>
        <h2>How we use it</h2>
        <p>
          We use information to process bookings, provide services, respond to enquiries,
          send updates you request, and improve the site. We do not sell your personal
          information. We may share it with trusted service providers or if required by law.
        </p>
        <h2>Contact</h2>
        <p>
          No. 131, 3rd Floor, Yesde House, Valluvar Kottam High Rd, Nungambakkam,
          Chennai 600034
          <br />
          Phone: +91 79047 57565
          <br />
          Email: vspacezofficial@gmail.com
        </p>
      </main>
    </div>
  )
}
