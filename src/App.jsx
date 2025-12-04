import React from "react";

function SocialIcons({ labelPrefix = "Find me on" }) {
  return (
    <div className="social-row" aria-label="Social links">
      <span className="social-row-label">{labelPrefix}</span>
      <div className="social-icons">
        <a href="#" className="social-icon" aria-label="LinkedIn">
          in
        </a>
        <a href="#" className="social-icon" aria-label="GitHub">
          gh
        </a>
        <a href="#" className="social-icon" aria-label="Stack Overflow">
          so
        </a>
        <a href="#" className="social-icon" aria-label="Twitter / X">
          x
        </a>
        <a href="#" className="social-icon" aria-label="Instagram">
          ig
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <main className="page">
      <div className="page-inner">
        {/* HERO / BIO TOP */}
        <section className="section hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="hero-headline">
              <div className="eyebrow">Software Engineer</div>
              <h1 id="hero-title" className="hero-title">
                I craft thoughtful web experiences and robust front‑end systems.
              </h1>
              <p className="hero-subtitle">
                I’m a developer focused on building fast, accessible, and visually
                polished interfaces with modern web technologies who is also a filmmaker, photographer, and writer
              </p>
            </div>

            <div className="hero-body">
              <p className="lead">
                From product MVPs to design‑heavy marketing sites, I love turning
                complex ideas into clean, intuitive user journeys.
              </p>
            </div>

            <SocialIcons />
          </div>

          <div className="hero-media-wrap">
            <div className="hero-media">
              <div className="hero-photo-circle">
                {/* replace with your image */}
                <img
                  src="/images/headshot.png"
                  alt="Portrait"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section skills" aria-labelledby="skills-title">
          <header className="section-header">
            <h2 id="skills-title">Skills that ship high‑quality experiences.</h2>
          </header>

          <div className="skills-grid">
            <div className="skill-col">
              <div className="skill-title">Product‑minded Frontend</div>
              <p className="skill-body">
                Translating product requirements and design systems into
                maintainable, production‑ready UI using React, TypeScript, and
                modern CSS.
              </p>
              <div className="skill-divider" aria-hidden="true" />
            </div>

            <div className="skill-col">
              <div className="skill-title">Interaction &amp; Motion</div>
              <p className="skill-body">
                Micro‑interactions, animations, and subtle motion that reinforce
                hierarchy and feedback without sacrificing performance.
              </p>
              <div className="skill-divider" aria-hidden="true" />
            </div>

            <div className="skill-col">
              <div className="skill-title">Design Systems</div>
              <p className="skill-body">
                Building reusable components, tokens, and documentation that keep
                teams shipping consistently across platforms.
              </p>
              <div className="skill-divider" aria-hidden="true" />
            </div>

            <div className="skill-col">
              <div className="skill-title">Performance &amp; Accessibility</div>
              <p className="skill-body">
                Auditing and improving Core Web Vitals, semantics, and keyboard
                flows to keep experiences inclusive and snappy.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section className="section projects" aria-labelledby="projects-title">
          <header className="section-header">
            <h2 id="projects-title">Featured projects.</h2>
          </header>

          <div className="projects-grid">
            {/* Project 1 */}
            <article className="project-card">
              <div className="project-media project-media-no-bg">
                <div
                  className="project-img"
                  style={{
                    backgroundImage: "url('/images/project-logo.png')",
                    backgroundColor: "transparent",
                  }}
                  aria-hidden="true"
                />
              </div>
              <div className="project-body">
                <div className="project-meta">
                  <h3>
                    <a
                      href="https://walantu-app.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      Walantu Home Services
                    </a>
                  </h3>
                  <p className="project-description">
                    Designed and built a website for Walantu, a home service company based in Accra, Ghana that hires out handymen and women.
                  </p>
                  <div className="tag-row">
                    <span className="tag">React</span>
                    <span className="tag">TypeScript</span>
                    <span className="tag">Framer Motion</span>
                  </div>
                </div>
                <div className="btn-row">
                  <a
                    href="https://walantu-app.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Live demo
                  </a>
                  <a href="#" className="btn btn-secondary">
                    View code
                  </a>
                </div>
              </div>
            </article>

            {/* Project 2 */}
            <article className="project-card">
              <div className="project-media">
                <div
                  className="project-img"
                  style={{
                    backgroundImage:
                      "url('https://via.placeholder.com/800x600.png?text=Project+2')",
                  }}
                  aria-hidden="true"
                />
              </div>
              <div className="project-body">
                <div className="project-meta">
                  <h3>Design system for a multi‑brand platform</h3>
                  <p className="project-description">
                    Built a token‑driven component library and documentation site
                    that enabled teams to ship new pages in hours instead of days.
                  </p>
                  <div className="tag-row">
                    <span className="tag">Design Systems</span>
                    <span className="tag">Storybook</span>
                    <span className="tag">Theming</span>
                  </div>
                </div>
                <div className="btn-row">
                  <a href="#" className="btn btn-primary">
                    Live demo
                  </a>
                  <a href="#" className="btn btn-secondary">
                    View code
                  </a>
                </div>
              </div>
            </article>

            {/* Project 3 */}
            <article className="project-card">
              <div className="project-media">
                <div
                  className="project-img"
                  style={{
                    backgroundImage:
                      "url('https://via.placeholder.com/800x600.png?text=Project+3')",
                  }}
                  aria-hidden="true"
                />
              </div>
              <div className="project-body">
                <div className="project-meta">
                  <h3>Real‑time dashboard for product analytics</h3>
                  <p className="project-description">
                    Implemented live charts, filters, and saved views for product
                    teams using performant data fetching strategies and
                    virtualization.
                  </p>
                  <div className="tag-row">
                    <span className="tag">Next.js</span>
                    <span className="tag">Charts</span>
                    <span className="tag">Live Data</span>
                  </div>
                </div>
                <div className="btn-row">
                  <a href="#" className="btn btn-primary">
                    Live demo
                  </a>
                  <a href="#" className="btn btn-secondary">
                    View code
                  </a>
                </div>
              </div>
            </article>

            {/* Project 4 */}
            <article className="project-card">
              <div className="project-media">
                <div
                  className="project-img"
                  style={{
                    backgroundImage:
                      "url('https://via.placeholder.com/800x600.png?text=Project+4')",
                  }}
                  aria-hidden="true"
                />
              </div>
              <div className="project-body">
                <div className="project-meta">
                  <h3>Content‑driven editorial experience</h3>
                  <p className="project-description">
                    A flexible, CMS‑powered layout system for long‑form content with
                    strong typography and media treatments.
                  </p>
                  <div className="tag-row">
                    <span className="tag">Headless CMS</span>
                    <span className="tag">Accessibility</span>
                    <span className="tag">Performance</span>
                  </div>
                </div>
                <div className="btn-row">
                  <a href="#" className="btn btn-primary">
                    Live demo
                  </a>
                  <a href="#" className="btn btn-secondary">
                    View code
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* TECH */}
        <section className="section tech" aria-labelledby="tech-title">
          <header className="section-header">
            <h2 id="tech-title">Tech I love working with.</h2>
          </header>

          <div className="tech-body">
            <p>
              I lean on a focused toolkit that keeps front‑end experiences
              performant and maintainable, while staying flexible enough to plug
              into different stacks and backends.
            </p>
          </div>

          <div className="tech-stack" aria-label="Technology stack">
            <span className="chip">HTML &amp; CSS (Grid / Flexbox)</span>
            <span className="chip">TypeScript</span>
            <span className="chip">React / Next.js</span>
            <span className="chip">Tailwind / CSS‑in‑JS</span>
            <span className="chip">Framer Motion</span>
            <span className="chip">Node.js</span>
            <span className="chip">REST &amp; GraphQL</span>
            <span className="chip">Jest / Testing Library</span>
          </div>
        </section>

        {/* ARTICLES */}
        <section
          className="section articles"
          aria-labelledby="articles-title"
        >
          <header className="section-header">
            <h2 id="articles-title">Articles &amp; writing.</h2>
          </header>

          <div className="articles-grid">
            {/* Article 1 */}
            <article className="article-card">
              <div className="article-media">
                <div
                  className="article-img"
                  style={{
                    backgroundImage:
                      "url('https://via.placeholder.com/800x600.png?text=Article+1')",
                  }}
                  aria-hidden="true"
                />
              </div>
              <div className="article-meta">
                <div className="article-date">Sep 2024 · Frontend</div>
                <h3>Designing resilient front‑end architectures for growth</h3>
                <p className="article-excerpt">
                  A deep dive into patterns and trade‑offs that keep your React
                  codebase sane as product scope and teams scale.
                </p>
                <div className="article-cta-row">
                  <a href="#" className="btn btn-secondary btn-full">
                    Read article
                  </a>
                </div>
              </div>
            </article>

            {/* Article 2 */}
            <article className="article-card">
              <div className="article-media">
                <div
                  className="article-img"
                  style={{
                    backgroundImage:
                      "url('https://via.placeholder.com/800x600.png?text=Article+2')",
                  }}
                  aria-hidden="true"
                />
              </div>
              <div className="article-meta">
                <div className="article-date">Jul 2024 · UX</div>
                <h3>Micro‑interactions that actually help users</h3>
                <p className="article-excerpt">
                  How to use motion and feedback to support comprehension and
                  trust, not distract from the task at hand.
                </p>
                <div className="article-cta-row">
                  <a href="#" className="btn btn-secondary btn-full">
                    Read article
                  </a>
                </div>
              </div>
            </article>

            {/* Article 3 */}
            <article className="article-card">
              <div className="article-media">
                <div
                  className="article-img"
                  style={{
                    backgroundImage:
                      "url('https://via.placeholder.com/800x600.png?text=Article+3')",
                  }}
                  aria-hidden="true"
                />
              </div>
              <div className="article-meta">
                <div className="article-date">May 2024 · Performance</div>
                <h3>From slow to snappy: practical Web Vitals fixes</h3>
                <p className="article-excerpt">
                  Real‑world optimizations that move the needle on LCP, CLS, and
                  TBT without rewriting your entire stack.
                </p>
                <div className="article-cta-row">
                  <a href="#" className="btn btn-secondary btn-full">
                    Read article
                  </a>
                </div>
              </div>
            </article>

            {/* Article 4 */}
            <article className="article-card">
              <div className="article-media">
                <div
                  className="article-img"
                  style={{
                    backgroundImage:
                      "url('https://via.placeholder.com/800x600.png?text=Article+4')",
                  }}
                  aria-hidden="true"
                />
              </div>
              <div className="article-meta">
                <div className="article-date">Mar 2024 · Design Systems</div>
                <h3>Tokens first: scaling visuals across products</h3>
                <p className="article-excerpt">
                  Lessons from rolling out a cross‑brand design system with shared
                  foundations and localized expression.
                </p>
                <div className="article-cta-row">
                  <a href="#" className="btn btn-secondary btn-full">
                    Read article
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* BOTTOM BIO / ABOUT */}
        <section className="section bio-bottom" aria-labelledby="about-title">
          <div className="bio-bottom-media-wrap">
            <div className="bio-bottom-media">
              <div className="bio-circle">
                {/* replace with your image */}
                <img
                  src="/images/headshot.png"
                  alt="Portrait"
                />
              </div>
            </div>
          </div>

          <div className="bio-bottom-copy">
            <header className="bio-bottom-text">
              <div className="eyebrow">A bit more about me</div>
              <h2 id="about-title">
                Creative, curious, and innovative.
              </h2>
              <p>
                I am a dynamic and creative individual who is always looking to create an exciting new narrative. 
                Not only as a coder, but as a filmmaker, photographer, and writer. 
                I find that my artistic background has helped me to approach problems 
                from a unique perspective and to see the world in a new way.
              </p>
              <p>
                Having grown up and traveled around the world on every continent, 
                I have a deep appreciation for different cultures and perspectives 
                which I am able to call on in all my creative and programming work.
              </p>
            </header>

            <SocialIcons labelPrefix="Let’s connect" />
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;


