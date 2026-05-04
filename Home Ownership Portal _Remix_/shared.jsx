// Shared tokens, icons, and primitives for Pathway HomeBuyer

// ─── Theme tokens ──────────────────────────────────────────────
// Pathway brand palette
//   Dark Teal      #00394a   primary deep
//   Medium Teal    #004f68   primary
//   Pathway Blue   #009ed9   accent / CTA
//   Light Slate    #F5FAF9   light bg
//   Medium Slate   #E1E8E7   subtle bg
//   Deep Slate     #C3D9D6   slate accent
//   Plant Green    #35665F   secondary accent
//   Light Khaki    #FAFAF5   warm light bg
//   Medium Khaki   #F0F0DE   warm mid
//   Deep Khaki     #E0E0BB   warm accent
//   Light Beige    #F7F5F2   warm light bg
//   Medium Beige   #E9E0D2   warm mid
//   Deep Beige     #D9C9B1   warm accent
const PALETTE = {
  light: {
    bg: '#F5FAF9',          // light slate background
    bgAlt: '#E1E8E7',       // medium slate
    card: '#FFFFFF',
    cardAlt: '#F7F5F2',     // light beige
    ink: '#00394a',         // dark teal — primary text
    inkSoft: '#004f68',     // medium teal
    inkMute: 'rgba(0,79,104,0.55)',
    line: 'rgba(0,79,104,0.16)',
    lineSoft: 'rgba(0,79,104,0.08)',
    // Accents (mapped to original variable names so screens don't change)
    clay: '#009ed9',        // Pathway Blue → primary CTA / accent
    clayDeep: '#004f68',    // Medium Teal — deeper variant
    clayLight: '#D6EFFA',   // soft Pathway Blue tint
    sage: '#35665F',        // Plant Green
    sageLight: '#C3D9D6',   // Deep Slate (works as sage tint)
    ochre: '#9C8A4E',       // muted khaki ink for ochre slot
    ochreLight: '#F0F0DE',  // medium khaki
    plum: '#7A6A52',        // deep beige ink
    plumLight: '#E9E0D2',   // medium beige
  },
  dark: {
    bg: '#00394a',          // dark teal
    bgAlt: '#004f68',       // medium teal
    card: '#0A4A5E',
    cardAlt: '#0E5570',
    ink: '#FFFFFF',
    inkSoft: 'rgba(255,255,255,0.78)',
    inkMute: 'rgba(255,255,255,0.5)',
    line: 'rgba(255,255,255,0.14)',
    lineSoft: 'rgba(255,255,255,0.07)',
    clay: '#33B3DF',        // Pathway Blue lifted
    clayDeep: '#009ed9',
    clayLight: 'rgba(0,158,217,0.18)',
    sage: '#7AA8A0',
    sageLight: 'rgba(195,217,214,0.16)',
    ochre: '#D9C977',
    ochreLight: 'rgba(240,240,222,0.14)',
    plum: '#C9B89A',
    plumLight: 'rgba(217,201,177,0.14)',
  },
};

// Pathway brand fonts:
//   PP Fragment Glare Light — display (substitute: Fraunces, the closest free analog)
//   Aktiv Grotesk — body (substitute: Inter Tight)
const FONT_SERIF = '"Fraunces", "PP Fragment Glare", "Cormorant Garamond", Georgia, serif';
const FONT_BODY = '"Inter Tight", "Aktiv Grotesk", "Inter", system-ui, -apple-system, sans-serif';

// Density: spacing scale multiplier
const DENSITY = { compact: 0.85, regular: 1, cozy: 1.15 };

// User stages
const STEPS = [
  { key: 'goal',     label: 'Goal',     full: 'Goal Set',          short: 'Goal' },
  { key: 'plan',     label: 'Plan',     full: 'Plan Built',        short: 'Plan' },
  { key: 'credit',   label: 'Credit',   full: 'Credit Ready',      short: 'Credit' },
  { key: 'savings',  label: 'Savings',  full: 'Savings Ready',     short: 'Savings' },
  { key: 'ready',    label: 'Ready',    full: 'Pre-Approved',      short: 'Approved' },
];

// Per-stage user data
const USER_BY_STAGE = {
  goal:     { step: 0, credit: { score: 642, delta: 0, target: 680 }, savings: { current: 800,  target: 24000, monthly: 0   }, goalDate: 'Fall 2027' },
  plan:     { step: 1, credit: { score: 658, delta: +6, target: 680 }, savings: { current: 1900, target: 24000, monthly: 250 }, goalDate: 'Fall 2027' },
  credit:   { step: 2, credit: { score: 678, delta: +9, target: 680 }, savings: { current: 4100, target: 24000, monthly: 380 }, goalDate: 'Spring 2027' },
  savings:  { step: 3, credit: { score: 712, delta: +18, target: 740 }, savings: { current: 8420, target: 24000, monthly: 540 }, goalDate: 'Spring 2027' },
  ready:    { step: 4, credit: { score: 748, delta: +6, target: 740 }, savings: { current: 24800, target: 24000, monthly: 600 }, goalDate: 'This summer' },
};

const COACH = { name: 'Dr. Drummond', title: 'Home-buying coach', initials: 'DD' };
const USER_NAME = 'Maya';

// ─── Theme context ─────────────────────────────────────────────
const ThemeCtx = React.createContext({ T: PALETTE.light, dark: false, density: 1, showPartners: true, progressStyle: 'segmented', stage: 'savings' });
const useTheme = () => React.useContext(ThemeCtx);

// ─── Icons (line, 1.6 weight) ──────────────────────────────────
const Icon = {
  home: ({s=20}) => <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-7 9 7v9a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2v-9z"/></svg>,
  trend:({s=20}) => <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 8-8M21 9V3h-6"/></svg>,
  spark:({s=20}) => <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z"/></svg>,
  chat: ({s=20}) => <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a8 8 0 0 1-12 6.9L4 20l1-4.5A8 8 0 1 1 21 12z"/></svg>,
  user: ({s=20}) => <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg>,
  plus: ({s=20,w=2}) => <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth={w} strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>,
  chev: ({s=16}) => <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>,
  chevDown: ({s=16}) => <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>,
  chevLeft: ({s=18}) => <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6"/></svg>,
  check:({s=16,w=2.2}) => <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth={w} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7"/></svg>,
  bell: ({s=18}) => <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15L6 16zM10 20a2 2 0 0 0 4 0"/></svg>,
  x:    ({s=18}) => <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>,
  dollar:({s=18}) => <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M12 3v18M16 7c-1-1.5-2.5-2-4-2-2.2 0-4 1.3-4 3.2 0 4.4 8 2.4 8 6.8 0 1.9-1.8 3-4 3-1.7 0-3.3-.7-4-2"/></svg>,
  flag: ({s=18}) => <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 21V4M5 4h12l-2 4 2 4H5"/></svg>,
  arrow:({s=18}) => <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>,
  cal:  ({s=18}) => <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>,
  send: ({s=18}) => <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12L20 4l-3 16-4-7-9-1z"/></svg>,
  filter:({s=18}) => <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5h18M6 12h12M10 19h4"/></svg>,
  settings:({s=18}) => <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.4-2.3.9a7 7 0 0 0-2-1.2L14 3h-4l-.6 2.6a7 7 0 0 0-2 1.2L5 6l-2 3.4 2 1.5a7 7 0 0 0 0 2.4l-2 1.5 2 3.4 2.3-.9a7 7 0 0 0 2 1.2L10 21h4l.6-2.6a7 7 0 0 0 2-1.2l2.3.9 2-3.4-2-1.5c.1-.4.1-.8.1-1.2z"/></svg>,
  lock: ({s=14}) => <svg viewBox="0 0 24 24" width={s} height={s} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>,
};

// ─── Avatars / placeholders ────────────────────────────────────
function PartnerLogo({ color, initials, size = 44 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: size,
      background: color, color: '#fff',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: FONT_BODY, fontWeight: 600, fontSize: size * 0.34,
      letterSpacing: 0.4, flexShrink: 0,
    }}>{initials}</div>
  );
}

function CoachAvatar({ size = 48 }) {
  const { T } = useTheme();
  return (
    <div style={{
      width: size, height: size, borderRadius: size, flexShrink: 0,
      background: `repeating-linear-gradient(135deg, ${T.clay} 0 7px, ${T.clayDeep} 7px 14px)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#fff', fontFamily: FONT_SERIF, fontSize: size * 0.42,
    }}>{COACH.initials}</div>
  );
}

// ─── Status bar ────────────────────────────────────────────────
function StatusBar() {
  const { T, dark } = useTheme();
  const c = T.ink;
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '18px 28px 0', height: 54, position: 'relative', zIndex: 5,
    }}>
      <div style={{ fontFamily: '-apple-system,SF Pro,system-ui', fontWeight: 600, fontSize: 16, color: c }}>9:41</div>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        <svg width="17" height="11" viewBox="0 0 19 12"><rect x="0" y="7.5" width="3" height="4.5" rx="0.7" fill={c}/><rect x="4.5" y="5" width="3" height="7" rx="0.7" fill={c}/><rect x="9" y="2.5" width="3" height="9.5" rx="0.7" fill={c}/><rect x="13.5" y="0" width="3" height="12" rx="0.7" fill={c}/></svg>
        <svg width="15" height="11" viewBox="0 0 17 12"><path d="M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z" fill={c}/><path d="M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z" fill={c}/><circle cx="8.5" cy="10.5" r="1.5" fill={c}/></svg>
        <svg width="25" height="12" viewBox="0 0 27 13"><rect x="0.5" y="0.5" width="23" height="12" rx="3.5" stroke={c} strokeOpacity="0.4" fill="none"/><rect x="2" y="2" width="17" height="9" rx="2" fill={c}/></svg>
      </div>
    </div>
  );
}

// ─── Phone shell ───────────────────────────────────────────────
function Phone({ children }) {
  const { T, dark } = useTheme();
  return (
    <div style={{
      width: 393, height: 852, borderRadius: 48, overflow: 'hidden',
      position: 'relative', background: T.bg,
      boxShadow: '0 30px 70px rgba(40,20,10,0.20), 0 0 0 1px rgba(34,32,27,0.10)',
      fontFamily: FONT_BODY, color: T.ink,
      WebkitFontSmoothing: 'antialiased',
    }}>
      <div style={{
        position: 'absolute', top: 11, left: '50%', transform: 'translateX(-50%)',
        width: 124, height: 36, borderRadius: 22, background: '#000', zIndex: 50,
      }} />
      <StatusBar/>
      <div style={{ position: 'absolute', inset: 0, paddingTop: 54 }}>{children}</div>
      <div style={{
        position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)',
        width: 134, height: 5, borderRadius: 3,
        background: dark ? 'rgba(245,239,230,0.55)' : 'rgba(34,32,27,0.32)',
        zIndex: 70, pointerEvents: 'none',
      }}/>
    </div>
  );
}

// ─── FAB ───────────────────────────────────────────────────────
function FAB({ onClick, label = 'Log update', bottom = 88 }) {
  const { T } = useTheme();
  return (
    <button onClick={onClick} style={{
      position: 'absolute', right: 18, bottom, zIndex: 30,
      height: 52, padding: '0 20px 0 16px', borderRadius: 26,
      background: T.clay, color: '#fff', border: 'none',
      display: 'flex', alignItems: 'center', gap: 6,
      fontFamily: FONT_BODY, fontSize: 14.5, fontWeight: 600, letterSpacing: -0.1,
      boxShadow: `0 8px 22px ${T.clay}66, 0 2px 6px ${T.clay}40`,
      cursor: 'pointer',
    }}>
      <Icon.plus s={17} w={2.4}/> {label}
    </button>
  );
}

// ─── Bottom Nav ────────────────────────────────────────────────
function BottomNav({ active, onChange }) {
  const { T, dark } = useTheme();
  const items = [
    { key: 'home', label: 'Today', icon: Icon.home },
    { key: 'progress', label: 'Progress', icon: Icon.trend },
    { key: 'partners', label: 'Partners', icon: Icon.spark },
    { key: 'coach', label: 'Coach', icon: Icon.chat },
    { key: 'profile', label: 'You', icon: Icon.user },
  ];
  return (
    <div style={{
      position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 20,
      paddingBottom: 22, paddingTop: 8,
      background: dark ? 'rgba(26,24,22,0.92)' : 'rgba(255,252,246,0.92)',
      backdropFilter: 'blur(18px) saturate(180%)',
      WebkitBackdropFilter: 'blur(18px) saturate(180%)',
      borderTop: `0.5px solid ${T.line}`,
      display: 'flex', justifyContent: 'space-around',
    }}>
      {items.map(it => {
        const on = it.key === active;
        const Ico = it.icon;
        return (
          <button key={it.key} onClick={() => onChange(it.key)} style={{
            flex: 1, border: 'none', background: 'transparent',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
            padding: '6px 0', color: on ? T.clay : T.inkMute, cursor: 'pointer',
          }}>
            <Ico s={22}/>
            <div style={{ fontFamily: FONT_BODY, fontSize: 10.5, fontWeight: on ? 600 : 500, letterSpacing: 0.1 }}>{it.label}</div>
          </button>
        );
      })}
    </div>
  );
}

// ─── Bottom sheet ──────────────────────────────────────────────
function BottomSheet({ open, onClose, title, children }) {
  const { T } = useTheme();
  return (
    <>
      <div onClick={onClose} style={{
        position: 'absolute', inset: 0, zIndex: 80,
        background: open ? 'rgba(20,15,10,0.42)' : 'transparent',
        pointerEvents: open ? 'auto' : 'none',
        transition: 'background 240ms ease',
      }} />
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 81,
        background: T.card, borderRadius: '24px 24px 0 0', color: T.ink,
        transform: open ? 'translateY(0)' : 'translateY(110%)',
        transition: 'transform 320ms cubic-bezier(.22,.9,.3,1)',
        paddingBottom: 34, maxHeight: '88%',
        display: 'flex', flexDirection: 'column',
        boxShadow: '0 -10px 40px rgba(40,20,10,0.20)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '10px 0 4px' }}>
          <div style={{ width: 36, height: 4, borderRadius: 2, background: T.line }} />
        </div>
        {title && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 20px 6px' }}>
            <div style={{ fontFamily: FONT_SERIF, fontSize: 26, color: T.ink, lineHeight: 1.05 }}>{title}</div>
            <button onClick={onClose} style={{
              width: 32, height: 32, border: 'none', background: T.lineSoft,
              borderRadius: 16, color: T.ink, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
            }}><Icon.x s={16}/></button>
          </div>
        )}
        <div style={{ flex: 1, overflow: 'auto', padding: '4px 20px 12px' }}>{children}</div>
      </div>
    </>
  );
}

// ─── Section heading ───────────────────────────────────────────
function SectionTitle({ children, action, eyebrow }) {
  const { T } = useTheme();
  return (
    <div style={{ padding: '0 22px', marginBottom: 12 }}>
      {eyebrow && <div style={{ fontFamily: FONT_BODY, fontSize: 11, color: T.inkMute, letterSpacing: 0.6, textTransform: 'uppercase', marginBottom: 4 }}>{eyebrow}</div>}
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: FONT_SERIF, fontSize: 24, color: T.ink, lineHeight: 1.05, letterSpacing: -0.2 }}>{children}</div>
        {action && <div style={{ fontFamily: FONT_BODY, fontSize: 13, color: T.inkSoft, fontWeight: 500 }}>{action}</div>}
      </div>
    </div>
  );
}

// ─── Sheet bodies ──────────────────────────────────────────────
function LogUpdateSheet({ onClose, presetType }) {
  const { T } = useTheme();
  const [type, setType] = React.useState(presetType || 'credit');
  const [val, setVal] = React.useState('');
  const [note, setNote] = React.useState('');
  const [step, setStep] = React.useState(1);

  const types = [
    { k: 'credit', label: 'Credit score', icon: Icon.trend, color: T.sage, hint: 'New credit score', placeholder: '730' },
    { k: 'savings', label: 'Savings', icon: Icon.dollar, color: T.ochre, hint: 'Current balance', placeholder: '8,420' },
    { k: 'goal', label: 'Goal', icon: Icon.flag, color: T.plum, hint: 'Update or new goal', placeholder: 'Save $1k by July' },
  ];
  const cur = types.find(t => t.k === type);

  if (step === 2) {
    return (
      <div style={{ padding: '20px 4px' }}>
        <div style={{
          width: 64, height: 64, borderRadius: 32, background: T.sageLight,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 18px', color: T.sage,
        }}><Icon.check s={32}/></div>
        <div style={{ fontFamily: FONT_SERIF, fontSize: 32, color: T.ink, textAlign: 'center', lineHeight: 1.05 }}>Logged.</div>
        <div style={{ fontFamily: FONT_BODY, fontSize: 15, color: T.inkSoft, textAlign: 'center', marginTop: 10, lineHeight: 1.5, padding: '0 8px' }}>
          Dr. Drummond will see this before your next check-in.
        </div>
        <button onClick={onClose} style={{
          marginTop: 24, width: '100%', height: 52, borderRadius: 26, border: 'none',
          background: T.ink, color: T.bg, fontFamily: FONT_BODY, fontSize: 16, fontWeight: 600, cursor: 'pointer',
        }}>Back to dashboard</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '4px 0 12px' }}>
      <div style={{ fontFamily: FONT_BODY, fontSize: 11, color: T.inkMute, marginBottom: 10, letterSpacing: 0.5, textTransform: 'uppercase' }}>What's the update?</div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 22 }}>
        {types.map(t => {
          const on = t.k === type;
          const Ico = t.icon;
          return (
            <button key={t.k} onClick={() => setType(t.k)} style={{
              flex: 1, padding: '14px 8px', borderRadius: 18,
              background: on ? t.color : T.lineSoft, color: on ? '#fff' : T.ink,
              border: `1px solid ${on ? t.color : T.line}`,
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
              fontFamily: FONT_BODY, fontSize: 13, fontWeight: 600, cursor: 'pointer',
            }}><Ico s={20}/>{t.label}</button>
          );
        })}
      </div>

      <div style={{ fontFamily: FONT_BODY, fontSize: 13, color: T.inkMute, marginBottom: 8 }}>{cur.hint}</div>
      <div style={{ position: 'relative', marginBottom: 18 }}>
        {type === 'savings' && <div style={{ position: 'absolute', left: 18, top: '50%', transform: 'translateY(-50%)', fontFamily: FONT_SERIF, fontSize: 28, color: T.inkMute }}>$</div>}
        <input value={val} onChange={e => setVal(e.target.value)} placeholder={cur.placeholder} style={{
          width: '100%', boxSizing: 'border-box',
          height: 60, borderRadius: 18, padding: type === 'savings' ? '0 18px 0 36px' : '0 18px',
          background: T.bg, border: `1px solid ${T.line}`, color: T.ink,
          fontFamily: type === 'goal' ? FONT_BODY : FONT_SERIF,
          fontSize: type === 'goal' ? 16 : 28, outline: 'none',
        }}/>
      </div>

      <div style={{ fontFamily: FONT_BODY, fontSize: 13, color: T.inkMute, marginBottom: 8 }}>Note for Dr. Drummond (optional)</div>
      <textarea value={note} onChange={e => setNote(e.target.value)} placeholder="Anything you want to share?" rows={3} style={{
        width: '100%', boxSizing: 'border-box',
        borderRadius: 16, padding: '12px 16px', resize: 'none',
        background: T.bg, border: `1px solid ${T.line}`, color: T.ink,
        fontFamily: FONT_BODY, fontSize: 15, outline: 'none', lineHeight: 1.4,
      }}/>

      <button disabled={!val} onClick={() => setStep(2)} style={{
        marginTop: 16, width: '100%', height: 56, borderRadius: 28, border: 'none',
        background: val ? T.clay : T.lineSoft,
        color: val ? '#fff' : T.inkMute,
        fontFamily: FONT_BODY, fontSize: 16, fontWeight: 600,
        cursor: val ? 'pointer' : 'default',
      }}>Log update</button>
    </div>
  );
}

function ScheduleCoachSheet({ onClose }) {
  const { T } = useTheme();
  const days = [
    { d: 'Tue', n: 6, m: 'May' }, { d: 'Wed', n: 7, m: 'May' }, { d: 'Thu', n: 8, m: 'May' },
    { d: 'Fri', n: 9, m: 'May' }, { d: 'Mon', n: 12, m: 'May' },
  ];
  const slots = ['9:00 AM', '10:30 AM', '1:00 PM', '3:30 PM', '5:00 PM'];
  const [day, setDay] = React.useState(2);
  const [slot, setSlot] = React.useState(1);
  const [done, setDone] = React.useState(false);

  if (done) {
    return (
      <div style={{ padding: '20px 4px' }}>
        <div style={{
          width: 64, height: 64, borderRadius: 32, background: T.sageLight,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 18px', color: T.sage,
        }}><Icon.check s={32}/></div>
        <div style={{ fontFamily: FONT_SERIF, fontSize: 30, color: T.ink, textAlign: 'center', lineHeight: 1.05 }}>You're booked.</div>
        <div style={{ fontFamily: FONT_BODY, fontSize: 15, color: T.inkSoft, textAlign: 'center', marginTop: 10, lineHeight: 1.5 }}>
          {days[day].d}, {days[day].m} {days[day].n} · {slots[slot]}<br/>We'll send a reminder the day before.
        </div>
        <button onClick={onClose} style={{
          marginTop: 24, width: '100%', height: 52, borderRadius: 26, border: 'none',
          background: T.ink, color: T.bg, fontFamily: FONT_BODY, fontSize: 16, fontWeight: 600, cursor: 'pointer',
        }}>Done</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '4px 0 12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 18, background: T.bg, marginBottom: 22 }}>
        <CoachAvatar size={42}/>
        <div>
          <div style={{ fontFamily: FONT_BODY, fontSize: 15, fontWeight: 600, color: T.ink }}>{COACH.name}</div>
          <div style={{ fontFamily: FONT_BODY, fontSize: 13, color: T.inkMute }}>{COACH.title} · 30 min</div>
        </div>
      </div>

      <div style={{ fontFamily: FONT_BODY, fontSize: 11, color: T.inkMute, marginBottom: 10, letterSpacing: 0.5, textTransform: 'uppercase' }}>Pick a day</div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 22, overflowX: 'auto' }}>
        {days.map((d, i) => {
          const on = i === day;
          return (
            <button key={i} onClick={() => setDay(i)} style={{
              minWidth: 64, padding: '12px 6px', borderRadius: 16,
              background: on ? T.ink : T.bg, color: on ? T.bg : T.ink, border: 'none',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, fontFamily: FONT_BODY, cursor: 'pointer',
            }}>
              <span style={{ fontSize: 11, opacity: 0.7, letterSpacing: 0.5, textTransform: 'uppercase' }}>{d.d}</span>
              <span style={{ fontFamily: FONT_SERIF, fontSize: 22 }}>{d.n}</span>
              <span style={{ fontSize: 10, opacity: 0.6 }}>{d.m}</span>
            </button>
          );
        })}
      </div>

      <div style={{ fontFamily: FONT_BODY, fontSize: 11, color: T.inkMute, marginBottom: 10, letterSpacing: 0.5, textTransform: 'uppercase' }}>Pick a time</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 18 }}>
        {slots.map((s, i) => {
          const on = i === slot;
          return (
            <button key={i} onClick={() => setSlot(i)} style={{
              padding: '14px 12px', borderRadius: 14,
              background: on ? T.clay : 'transparent', color: on ? '#fff' : T.ink,
              border: `1px solid ${on ? T.clay : T.line}`,
              fontFamily: FONT_BODY, fontSize: 15, fontWeight: on ? 600 : 500, cursor: 'pointer',
            }}>{s}</button>
          );
        })}
      </div>

      <button onClick={() => setDone(true)} style={{
        width: '100%', height: 56, borderRadius: 28, border: 'none',
        background: T.clay, color: '#fff',
        fontFamily: FONT_BODY, fontSize: 16, fontWeight: 600, cursor: 'pointer',
      }}>Confirm with Dr. Drummond</button>
    </div>
  );
}

Object.assign(window, {
  PALETTE, FONT_SERIF, FONT_BODY, DENSITY,
  STEPS, USER_BY_STAGE, COACH, USER_NAME,
  ThemeCtx, useTheme,
  Icon, PartnerLogo, CoachAvatar,
  Phone, FAB, BottomNav, BottomSheet, SectionTitle,
  LogUpdateSheet, ScheduleCoachSheet,
});
