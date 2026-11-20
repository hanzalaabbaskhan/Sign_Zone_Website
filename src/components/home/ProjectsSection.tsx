export default function ProjectsSection() {
  return (
    <section className="light sec" id="projects">
      <div className="wrap">
        <div className="eyebrow">Selected projects</div>
        <h2 className="disp sec-h">Real signs. Real places.</h2>
        <p className="loc-intro">
          See how different sign systems come together for businesses across North Texas. Open a case study to explore the project.
        </p>

        <div className="case-grid">
          {/* Card 1: Arwa Coffee */}
          <article className="case-card">
            <div className="case-image">
              <img
                src="/images/project-arwa.webp"
                alt="Arwa Coffee signage"
                loading="lazy"
              />
            </div>
            <div className="case-body">
              <div className="case-meta">Arlington, TX &nbsp;·&nbsp; Coffee house</div>
              <h3>Arwa Coffee</h3>
              <p className="case-type">Dimensional storefront letters + logo</p>
              <details>
                <summary>
                  Explore case study
                  <span aria-hidden="true">+</span>
                </summary>
                <div className="case-detail">
                  <strong>Project overview</strong>
                  <p>
                    Gold dimensional letters and a logo identify the coffee house above the glass entrance of a brick mixed-use building.
                  </p>
                  <strong>Sign system</strong>
                  <p>Dimensional storefront letters + logo</p>
                  <a
                    href="https://www.signexpressusa.com/projects/arwa-coffee-storefront-sign/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View source project ↗
                  </a>
                </div>
              </details>
            </div>
          </article>

          {/* Card 2: Apex Specialty Care */}
          <article className="case-card">
            <div className="case-image">
              <img
                src="/images/project-apex.webp"
                alt="Apex Specialty Care signage"
                loading="lazy"
              />
            </div>
            <div className="case-body">
              <div className="case-meta">Plano, TX &nbsp;·&nbsp; Specialty hospital</div>
              <h3>Apex Specialty Care</h3>
              <p className="case-type">Illuminated channel letters + logo</p>
              <details>
                <summary>
                  Explore case study
                  <span aria-hidden="true">+</span>
                </summary>
                <div className="case-detail">
                  <strong>Project overview</strong>
                  <p>
                    White illuminated letters and a peak-shaped mark span the hospital facade, with the sign mounted high above the windows.
                  </p>
                  <strong>Sign system</strong>
                  <p>Illuminated channel letters + logo</p>
                  <a
                    href="https://www.signexpressusa.com/projects/apex-specialty-care-illuminated-sign/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View source project ↗
                  </a>
                </div>
              </details>
            </div>
          </article>

          {/* Card 3: A Mart Food Market */}
          <article className="case-card">
            <div className="case-image">
              <img
                src="/images/project-amart.webp"
                alt="A Mart Food Market signage"
                loading="lazy"
              />
            </div>
            <div className="case-body">
              <div className="case-meta">Dallas, TX &nbsp;·&nbsp; Grocery store</div>
              <h3>A Mart Food Market</h3>
              <p className="case-type">Channel letters + logo cabinet + backer</p>
              <details>
                <summary>
                  Explore case study
                  <span aria-hidden="true">+</span>
                </summary>
                <div className="case-detail">
                  <strong>Project overview</strong>
                  <p>
                    An illuminated logo cabinet identifies the entry tower while a separate set of storefront letters carries the market name across the facade.
                  </p>
                  <strong>Sign system</strong>
                  <p>Channel letters + logo cabinet + backer</p>
                  <a
                    href="https://www.signexpressusa.com/projects/a-mart-food-market-channel-letters/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View source project ↗
                  </a>
                </div>
              </details>
            </div>
          </article>

          {/* Card 4: Sanjiva Medical Spa */}
          <article className="case-card">
            <div className="case-image">
              <img
                src="/images/project-sanjiva.webp"
                alt="Sanjiva Medical Spa signage"
                loading="lazy"
              />
            </div>
            <div className="case-body">
              <div className="case-meta">Dallas, TX &nbsp;·&nbsp; Medical spa</div>
              <h3>Sanjiva Medical Spa</h3>
              <p className="case-type">Halo-lit letters + logo</p>
              <details>
                <summary>
                  Explore case study
                  <span aria-hidden="true">+</span>
                </summary>
                <div className="case-detail">
                  <strong>Project overview</strong>
                  <p>
                    Dimensional letters and a looping logo stand off a marble-look facade, with backlighting outlining the sign after dark.
                  </p>
                  <strong>Sign system</strong>
                  <p>Halo-lit letters + logo</p>
                  <a
                    href="https://www.signexpressusa.com/projects/sanjiva-medical-spa-interior-sign/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View source project ↗
                  </a>
                </div>
              </details>
            </div>
          </article>

          {/* Card 5: Scratch Wings */}
          <article className="case-card">
            <div className="case-image">
              <img
                src="/images/project-scratch.webp"
                alt="Scratch Wings signage"
                loading="lazy"
              />
            </div>
            <div className="case-body">
              <div className="case-meta">Grand Prairie, TX &nbsp;·&nbsp; Restaurant</div>
              <h3>Scratch Wings</h3>
              <p className="case-type">Channel letters + logo + tagline cabinet</p>
              <details>
                <summary>
                  Explore case study
                  <span aria-hidden="true">+</span>
                </summary>
                <div className="case-detail">
                  <strong>Project overview</strong>
                  <p>
                    Red dimensional lettering, a rooster logo and a tagline cabinet bring the restaurant identity together above the storefront.
                  </p>
                  <strong>Sign system</strong>
                  <p>Channel letters + logo + tagline cabinet</p>
                  <a
                    href="https://www.signexpressusa.com/projects/scratch-wings-restaurant-sign/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View source project ↗
                  </a>
                </div>
              </details>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
