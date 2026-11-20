interface ReviewItem {
  name: string
  business: string
  city: string
  stars: number
  text: string
}

const REVIEWS: ReviewItem[] = [
  {
    name: 'Sarah B.',
    business: 'Oakline Interiors',
    city: 'Dallas, TX',
    stars: 5,
    text: 'The new sign fits our storefront beautifully, and the installation team was professional throughout.',
  },
  {
    name: 'Michael D.',
    business: 'Northfield Dental',
    city: 'Plano, TX',
    stars: 4,
    text: 'The team helped us work through the design details and delivered a sign we are happy to display.',
  },
  {
    name: 'Maria L.',
    business: 'Willow & Oak Boutique',
    city: 'Frisco, TX',
    stars: 5,
    text: 'The team helped us choose a sign that fits our storefront. The finished look was clean and easy to see.',
  },
  {
    name: 'Daniel R.',
    business: 'Summit Fitness Studio',
    city: 'Fort Worth, TX',
    stars: 4,
    text: 'The design process was straightforward, and the team kept us informed as the project moved along.',
  },
  {
    name: 'Aisha K.',
    business: 'Luna Skin Studio',
    city: 'Dallas, TX',
    stars: 5,
    text: 'We appreciated the attention to detail from the first conversation through installation.',
  },
  {
    name: 'Chris M.',
    business: 'Westhaven Auto Care',
    city: 'Arlington, TX',
    stars: 5,
    text: 'Our new sign gives the building a much more professional look. The installation crew was courteous and tidy.',
  },
  {
    name: 'Priya S.',
    business: 'Cedar Grove Cafe',
    city: 'Plano, TX',
    stars: 4,
    text: 'The team answered our questions and helped us understand the options for our space.',
  },
  {
    name: 'James T.',
    business: 'Brightside Market',
    city: 'Richardson, TX',
    stars: 5,
    text: 'The lettering looks sharp, and the lighting makes the storefront stand out in the evening.',
  },
  {
    name: 'Elena G.',
    business: 'Ember & Co. Salon',
    city: 'Carrollton, TX',
    stars: 5,
    text: 'From the mockup to the final installation, the process felt organized and easy to follow.',
  },
  {
    name: 'Omar H.',
    business: 'Parkway Print Studio',
    city: 'McKinney, TX',
    stars: 4,
    text: 'Good communication and a polished result. We are pleased with how the sign turned out.',
  },
]

function renderStars(count: number) {
  const full = '★'.repeat(count)
  const empty = '☆'.repeat(5 - count)
  return full + empty
}

function ReviewCardList() {
  return (
    <>
      {REVIEWS.map((r, i) => (
        <figure key={i} className="review-card">
          <div className="review-stars" aria-label={`${r.stars} out of 5 stars`}>
            {renderStars(r.stars)}
          </div>
          <blockquote>&ldquo;{r.text}&rdquo;</blockquote>
          <figcaption>
            <strong>{r.name}</strong>
            <span className="review-business">{r.business}</span>
            <span className="review-address">{r.city}</span>
          </figcaption>
        </figure>
      ))}
    </>
  )
}

export default function ReviewCarousel() {
  return (
    <section className="dark sec review-section" aria-labelledby="review-heading">
      <div className="wrap">
        <div className="head-row">
          <div>
            <h2 className="disp sec-h" id="review-heading" style={{ margin: 0, maxWidth: 720 }}>
              What customers value.
            </h2>
            <p className="review-intro">
              Quality, communication, and care at every step.
            </p>
          </div>
        </div>
      </div>
      <div className="review-window" aria-label="Sample customer reviews">
        <div className="review-track">
          <div className="review-group">
            <ReviewCardList />
          </div>
          <div className="review-group" aria-hidden="true">
            <ReviewCardList />
          </div>
        </div>
      </div>
    </section>
  )
}
