// Sections.jsx — minimalist hero, features, CTA

const BL_COLORS = {
  red: '#EA3C2A',
  blue: '#4A7BE0',
  yellow: '#F4C84A',
  green: '#5FAD5C',
  orange: '#E87A2E',
};

const FONT = '"Helvetica Neue", Helvetica, Arial, sans-serif';

// Rainbow wordmark — keeps the brand
function Wordmark({ size = 28, mono = false }) {
  const chars = [
    { c: 'B', col: BL_COLORS.red },
    { c: 'a', col: BL_COLORS.blue },
    { c: 'c', col: BL_COLORS.yellow },
    { c: 'k', col: BL_COLORS.green },
    { c: 'l', col: BL_COLORS.red },
    { c: 'i', col: BL_COLORS.blue },
    { c: 'n', col: BL_COLORS.yellow },
    { c: 'e', col: BL_COLORS.orange },
  ];
  return (
    <span style={{
      fontFamily: FONT, fontSize: size, fontWeight: 700,
      letterSpacing: '-0.02em', lineHeight: 1,
    }}>
      {chars.map((ch, i) => (
        <span key={i} style={{ color: mono ? '#fff' : ch.col }}>{ch.c}</span>
      ))}
    </span>
  );
}

// Hero
function Hero({ accent }) {
  return (
    <section style={{
      minHeight: '100vh', padding: '32px 56px',
      display: 'flex', flexDirection: 'column',
      boxSizing: 'border-box', fontFamily: FONT,
    }}>
      {/* Top nav */}
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <Wordmark size={22} />
        <div style={{ display: 'flex', gap: 32 }}>
          {['Features', 'Waitlist'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{
              fontSize: 13, color: 'rgba(255,255,255,0.65)', textDecoration: 'none',
              fontWeight: 400,
            }}>{l}</a>
          ))}
        </div>
      </nav>

      {/* Hero content */}
      <div style={{
        flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 64, alignItems: 'center',
        maxWidth: 1280, width: '100%', margin: '0 auto',
      }} className="hero-grid">
        <div>
          <div style={{
            fontSize: 12, color: 'rgba(255,255,255,0.5)',
            marginBottom: 28, letterSpacing: 0.2,
          }}>
            <span style={{
              display: 'inline-block', width: 6, height: 6, borderRadius: '50%',
              background: accent, marginRight: 10, verticalAlign: 'middle',
            }} />
            Coming soon — TestFlight beta
          </div>

          <h1 style={{
            fontFamily: FONT, fontSize: 56, fontWeight: 500,
            lineHeight: 1.05, letterSpacing: '-0.03em',
            margin: 0, color: '#fff',
          }}>
            Find gigs, gear,<br/>
            and people<br/>
            in NYC.
          </h1>

          <p style={{
            fontSize: 16, color: 'rgba(255,255,255,0.6)', maxWidth: 440,
            lineHeight: 1.55, marginTop: 28, fontWeight: 400,
          }}>
            Backline is the community hub for New York's musicians —
            a marketplace, a hiring board, and a rolodex in one app.
          </p>

          <div style={{ marginTop: 40, display: 'flex', gap: 14, alignItems: 'center' }}>
            <a href="#waitlist" style={{
              background: '#fff', color: '#000',
              padding: '13px 22px', fontSize: 14, fontWeight: 500,
              textDecoration: 'none', borderRadius: 100,
            }}>Join the waitlist</a>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
              iOS — Q2 2026
            </div>
          </div>
        </div>

        {/* Phone */}
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
        }}>
          <BacklinePhone label="HOME" sub="For You" accent="#333" tabIndex={0} />
        </div>
      </div>
    </section>
  );
}

// Feature block — clean, symmetric
function FeatureBlock({ num, label, title, description, bullets, phoneProps, reverse, accent }) {
  return (
    <section style={{
      padding: '100px 56px',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      fontFamily: FONT,
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: reverse ? '1fr 1fr' : '1fr 1fr',
        gap: 80, alignItems: 'center',
        maxWidth: 1280, margin: '0 auto',
      }}>
        {/* Text */}
        <div style={{ order: reverse ? 2 : 1 }}>
          <div style={{
            fontSize: 12, color: 'rgba(255,255,255,0.4)',
            marginBottom: 20, letterSpacing: 0.3,
          }}>
            {num} — {label}
          </div>
          <h2 style={{
            fontFamily: FONT, fontSize: 38, fontWeight: 500,
            lineHeight: 1.1, letterSpacing: '-0.02em',
            margin: 0, color: '#fff',
          }}>{title}</h2>
          <p style={{
            fontSize: 16, color: 'rgba(255,255,255,0.6)', maxWidth: 460,
            lineHeight: 1.6, marginTop: 20, fontWeight: 400,
          }}>{description}</p>

          <ul style={{
            marginTop: 28, padding: 0, listStyle: 'none',
            display: 'flex', flexDirection: 'column', gap: 12,
          }}>
            {bullets.map((b, i) => (
              <li key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: 14,
                fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 1.5,
              }}>
                <span style={{
                  width: 4, height: 4, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.4)',
                  marginTop: 8, flexShrink: 0,
                }} />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Phone */}
        <div style={{
          order: reverse ? 1 : 2,
          display: 'flex', justifyContent: 'center', alignItems: 'center',
        }}>
          <BacklinePhone {...phoneProps} accent="#333" />
        </div>
      </div>
    </section>
  );
}

// Waitlist CTA
function Waitlist({ accent }) {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <section id="waitlist" style={{
      padding: '120px 56px',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      fontFamily: FONT,
    }}>
      <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: FONT, fontSize: 42, fontWeight: 500,
          lineHeight: 1.1, letterSpacing: '-0.03em',
          margin: 0, color: '#fff',
        }}>
          Be on the list.
        </h2>
        <p style={{
          fontSize: 16, color: 'rgba(255,255,255,0.6)',
          margin: '20px auto 0', lineHeight: 1.6, maxWidth: 440,
        }}>
          Drop your email and we'll send a TestFlight invite when Backline opens up to NYC musicians.
        </p>

        <form onSubmit={(e) => { e.preventDefault(); if (email.includes('@')) setSubmitted(true); }}
          style={{
            marginTop: 36, display: 'flex', gap: 8, maxWidth: 440, margin: '36px auto 0',
          }}>
          <input
            type="email" required
            value={email} onChange={e => setEmail(e.target.value)}
            placeholder={submitted ? "you're in" : 'your@email.com'}
            disabled={submitted}
            style={{
              flex: 1, background: 'transparent',
              border: '1px solid rgba(255,255,255,0.2)', outline: 'none',
              padding: '13px 18px', borderRadius: 100,
              fontFamily: FONT, fontSize: 14, color: '#fff',
            }}
          />
          <button type="submit" disabled={submitted} style={{
            background: submitted ? accent : '#fff', color: '#000',
            border: 'none', padding: '0 24px', cursor: submitted ? 'default' : 'pointer',
            fontFamily: FONT, fontSize: 14, fontWeight: 500,
            borderRadius: 100,
          }}>
            {submitted ? 'Joined' : 'Join'}
          </button>
        </form>

        <div style={{
          marginTop: 20, fontSize: 12, color: 'rgba(255,255,255,0.4)',
        }}>
          847 musicians on the list — NYC only at launch
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer style={{
      padding: '48px 56px',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      gap: 40, flexWrap: 'wrap',
      fontFamily: FONT,
    }}>
      <Wordmark size={18} />
      <div style={{
        display: 'flex', gap: 28,
        fontSize: 12, color: 'rgba(255,255,255,0.5)',
      }}>
        <span>© 2026 Backline</span>
        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Instagram</a>
        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a>
        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</a>
      </div>
    </footer>
  );
}

Object.assign(window, { Hero, FeatureBlock, Waitlist, Footer, Wordmark, BL_COLORS });
