import { useEffect, useRef, useState } from 'react'
import { GOOGLE_MAPS_REVIEWS, googleListing, guestReviews } from './reviews.ts'
import './Reviews.css'

function GoogleMark() {
  return (
    <svg className="google-mark" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  )
}

function Stars({ value }: { value: number }) {
  return (
    <span className="review-stars" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <i
          key={i}
          className={`mdi ${i < Math.round(value) ? 'mdi-star' : 'mdi-star-outline'}`}
          aria-hidden="true"
        />
      ))}
    </span>
  )
}

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [page, setPage] = useState(0)
  const [pages, setPages] = useState(guestReviews.length)
  const [failedPhotos, setFailedPhotos] = useState<Record<string, true>>({})

  const syncPage = () => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector<HTMLElement>('.review-card')
    if (!card) return
    const gap = Number.parseFloat(getComputedStyle(track).gap) || 0
    const step = card.offsetWidth + gap
    const visible = Math.max(1, Math.round((track.clientWidth + gap) / step))
    const nextPages = Math.max(1, guestReviews.length - visible + 1)
    setPages(nextPages)
    setPage(Math.min(nextPages - 1, Math.round(track.scrollLeft / step)))
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    syncPage()
    track.addEventListener('scroll', syncPage, { passive: true })
    window.addEventListener('resize', syncPage)
    return () => {
      track.removeEventListener('scroll', syncPage)
      window.removeEventListener('resize', syncPage)
    }
  }, [])

  const goTo = (next: number) => {
    const track = trackRef.current
    const card = track?.querySelector<HTMLElement>('.review-card')
    if (!track || !card) return
    const gap = Number.parseFloat(getComputedStyle(track).gap) || 0
    const clamped = Math.max(0, Math.min(pages - 1, next))
    track.scrollTo({ left: clamped * (card.offsetWidth + gap), behavior: 'smooth' })
  }

  return (
    <section id="reviews" className="reviews" aria-labelledby="reviews-heading">
      <h2 id="reviews-heading">Discover Why Our Guests Love Us</h2>
      <a
        className="reviews-score"
        href={GOOGLE_MAPS_REVIEWS}
        target="_blank"
        rel="noreferrer"
      >
        <GoogleMark />
        <strong>{googleListing.rating.toFixed(1)}</strong>
        <Stars value={googleListing.rating} />
        <span className="reviews-score-copy">
          <span>{googleListing.name}</span>
          <span className="reviews-count">{googleListing.reviewCount} Reviews</span>
        </span>
      </a>

      <div className="reviews-carousel">
        <button
          type="button"
          className="reviews-arrow"
          aria-label="Previous reviews"
          disabled={page === 0}
          onClick={() => goTo(page - 1)}
        >
          <i className="mdi mdi-chevron-left" aria-hidden="true" />
        </button>
        <div className="reviews-track" ref={trackRef}>
          {guestReviews.map((review) => (
            <article key={review.name} className="review-card">
              {failedPhotos[review.name] ? (
                <span className="review-avatar" style={{ background: review.color }}>
                  {initials(review.name)}
                </span>
              ) : (
                <img
                  className="review-avatar"
                  src={review.photo}
                  alt=""
                  referrerPolicy="no-referrer"
                  onError={() =>
                    setFailedPhotos((current) => ({ ...current, [review.name]: true }))
                  }
                />
              )}
              <Stars value={review.stars} />
              <p>“{review.quote}”</p>
              <p className="review-byline">
                <GoogleMark />
                <span>
                  {review.name} – {review.date}
                </span>
              </p>
            </article>
          ))}
        </div>
        <button
          type="button"
          className="reviews-arrow"
          aria-label="Next reviews"
          disabled={page >= pages - 1}
          onClick={() => goTo(page + 1)}
        >
          <i className="mdi mdi-chevron-right" aria-hidden="true" />
        </button>
      </div>

      <div className="reviews-dots" role="tablist" aria-label="Review pages">
        {Array.from({ length: pages }, (_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === page}
            aria-label={`Show review ${i + 1}`}
            className={i === page ? 'is-active' : undefined}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  )
}
