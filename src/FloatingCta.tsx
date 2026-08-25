import { useState } from 'react'
import './FloatingCta.css'

const PHONE = '+917904757565'
const WHATSAPP = 'https://wa.me/917904757565'

export default function FloatingCta() {
  const [open, setOpen] = useState(false)

  return (
    <div className={`fab ${open ? 'is-open' : ''}`}>
      <a
        className="fab-action"
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <i className="mdi mdi-whatsapp" aria-hidden="true" />
      </a>
      <a className="fab-action" href={`tel:${PHONE}`} aria-label="Call">
        <i className="mdi mdi-phone" aria-hidden="true" />
      </a>
      <button
        type="button"
        className="fab-toggle"
        aria-label={open ? 'Close contact options' : 'Open contact options'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <i
          className={`mdi ${open ? 'mdi-close' : 'mdi-dots-horizontal'}`}
          aria-hidden="true"
        />
      </button>
    </div>
  )
}
