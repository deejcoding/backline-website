// BacklinePhone.jsx — minimalist phone placeholder

function BacklinePhoneScreen({ label = 'SCREENSHOT GOES HERE', sub, tabIndex = 0 }) {
  const tabs = [
    { label: 'Home' },
    { label: 'Services' },
    { label: 'Create' },
    { label: 'Market' },
    { label: 'Profile' },
  ];

  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#000',
      display: 'flex', flexDirection: 'column',
      position: 'relative',
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    }}>
      {/* Nav title */}
      <div style={{ paddingTop: 62, paddingBottom: 18, paddingLeft: 20 }}>
        <div style={{
          fontSize: 30, fontWeight: 700, color: '#fff',
          letterSpacing: '-0.02em',
        }}>{sub || 'For You'}</div>
      </div>

      {/* Placeholder */}
      <div style={{
        flex: 1, margin: '0 16px 16px', borderRadius: 16,
        border: '1px dashed rgba(255,255,255,0.18)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: 12, padding: 20, textAlign: 'center',
      }}>
        <div style={{
          fontSize: 10, color: 'rgba(255,255,255,0.4)',
          letterSpacing: 1.5,
        }}>{label}</div>
        {sub && (
          <div style={{
            fontSize: 9, color: 'rgba(255,255,255,0.25)', letterSpacing: 1.2,
          }}>/ {sub}</div>
        )}
      </div>

      {/* Tab bar */}
      <div style={{
        height: 78,
        display: 'flex', alignItems: 'flex-start', justifyContent: 'space-around',
        paddingTop: 10, paddingBottom: 24,
        borderTop: '0.5px solid rgba(255,255,255,0.08)',
      }}>
        {tabs.map((t, i) => (
          <div key={i} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
            opacity: i === tabIndex ? 1 : 0.35,
          }}>
            <div style={{
              width: 18, height: 18, borderRadius: 3,
              background: 'rgba(255,255,255,0.8)',
            }} />
            <div style={{ fontSize: 10, fontWeight: 500, color: '#fff' }}>{t.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BacklinePhone({ label, sub, tabIndex }) {
  return (
    <div style={{
      filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.5))',
    }}>
      <IOSDevice dark width={300} height={640}>
        <BacklinePhoneScreen label={label} sub={sub} tabIndex={tabIndex} />
      </IOSDevice>
    </div>
  );
}

Object.assign(window, { BacklinePhone, BacklinePhoneScreen });
