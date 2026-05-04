// Progress, Coach, Partners, Profile screens

// ─── Progress ──────────────────────────────────────────────────
function ScreenProgress({ onSheet }) {
  const { T, stage } = useTheme();
  const data = USER_BY_STAGE[stage];
  const [tab, setTab] = React.useState('journey');

  return (
    <div style={{ paddingBottom: 16 }}>
      <div style={{ padding: '4px 22px 20px' }}>
        <div style={{ fontFamily: FONT_BODY, fontSize: 12, color: T.inkMute, letterSpacing: 0.5, textTransform: 'uppercase' }}>Your plan</div>
        <div style={{ fontFamily: FONT_SERIF, fontSize: 36, color: T.ink, lineHeight: 1.05, letterSpacing: -0.4, marginTop: 2 }}>Progress</div>
        <div style={{ fontFamily: FONT_SERIF, fontStyle: 'italic', fontSize: 17, color: T.inkSoft, marginTop: 4 }}>
          {data.step + 1} of 5 steps · {data.goalDate}
        </div>
      </div>

      {/* Tab switcher */}
      <div style={{ padding: '0 22px 16px' }}>
        <div style={{ display: 'flex', background: T.cardAlt, borderRadius: 12, padding: 3, gap: 2 }}>
          {[{ k: 'journey', l: 'Journey' }, { k: 'history', l: 'Activity' }].map(t => (
            <button key={t.k} onClick={() => setTab(t.k)} style={{
              flex: 1, height: 32, border: 'none', borderRadius: 10,
              background: tab === t.k ? T.card : 'transparent',
              color: tab === t.k ? T.ink : T.inkSoft,
              fontFamily: FONT_BODY, fontSize: 13, fontWeight: tab === t.k ? 600 : 500,
              cursor: 'pointer', boxShadow: tab === t.k ? '0 1px 3px rgba(0,0,0,0.06)' : 'none',
            }}>{t.l}</button>
          ))}
        </div>
      </div>

      {tab === 'journey' && (
        <div style={{ padding: '0 22px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {STEPS.map((s, i) => {
            const done = i < data.step, cur = i === data.step;
            return (
              <div key={s.key} style={{
                background: cur ? T.card : T.cardAlt, borderRadius: 22,
                border: `1px solid ${cur ? T.line : T.lineSoft}`,
                padding: '16px 18px', position: 'relative',
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 18,
                    background: done ? T.sage : cur ? T.clay : 'transparent',
                    border: !done && !cur ? `1.5px dashed ${T.line}` : 'none',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0,
                  }}>
                    {done ? <Icon.check s={18}/> : cur ? <span style={{ fontFamily: FONT_SERIF, fontSize: 17 }}>{i + 1}</span> : <Icon.lock s={14}/>}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                      <div style={{ fontFamily: FONT_SERIF, fontSize: 22, color: T.ink, lineHeight: 1.1, letterSpacing: -0.2 }}>{s.full}</div>
                      {cur && <span style={{ fontFamily: FONT_BODY, fontSize: 9.5, fontWeight: 700, letterSpacing: 0.6, textTransform: 'uppercase', padding: '3px 8px', borderRadius: 8, background: T.clay, color: '#fff' }}>NOW</span>}
                    </div>
                    <div style={{ fontFamily: FONT_BODY, fontSize: 13, color: T.inkSoft, lineHeight: 1.45 }}>
                      {s.key === 'goal' && 'Timing and dream home defined — drives everything else.'}
                      {s.key === 'plan' && 'Personalized roadmap with monthly targets and milestones.'}
                      {s.key === 'credit' && `Score reached ${USER_BY_STAGE.savings.credit.score}, comfortably above 680.`}
                      {s.key === 'savings' && `$${data.savings.current.toLocaleString()} of $${data.savings.target.toLocaleString()} · ~9 months at this pace.`}
                      {s.key === 'ready' && 'Pre-approved and cleared to tour homes and make offers.'}
                    </div>
                    {cur && (
                      <div style={{ marginTop: 12 }}>
                        <div style={{ height: 6, borderRadius: 3, background: T.lineSoft }}>
                          <div style={{ width: '35%', height: '100%', borderRadius: 3, background: T.clay }}/>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontFamily: FONT_BODY, fontSize: 11, color: T.inkMute }}>
                          <span>35% complete</span>
                          <span>~9 months</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {tab === 'history' && (
        <div style={{ padding: '0 22px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { date: 'May 4', tag: 'Savings', color: T.ochre, title: 'Logged $8,420 balance', sub: '+$420 from last month' },
            { date: 'May 1', tag: 'Goal', color: T.plum, title: 'Adjusted target date', sub: 'Spring 2027 → confirmed' },
            { date: 'Apr 28', tag: 'Credit', color: T.sage, title: 'Score climbed to 712', sub: '+18 since March' },
            { date: 'Apr 22', tag: 'Coach', color: T.clay, title: 'Met with Dr. Drummond', sub: '30 min · Notes saved' },
            { date: 'Apr 15', tag: 'Savings', color: T.ochre, title: 'Logged $8,000 balance', sub: 'Hit 33% of goal' },
            { date: 'Apr 8', tag: 'Plan', color: T.plum, title: 'Plan built with Dr. Drummond', sub: 'Stage advanced' },
          ].map((h, i) => (
            <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'center', padding: '12px 14px', background: T.card, borderRadius: 18, border: `1px solid ${T.line}` }}>
              <div style={{ width: 44, textAlign: 'center', flexShrink: 0 }}>
                <div style={{ fontFamily: FONT_BODY, fontSize: 10, color: T.inkMute, letterSpacing: 0.5, textTransform: 'uppercase' }}>{h.date.split(' ')[0]}</div>
                <div style={{ fontFamily: FONT_SERIF, fontSize: 20, color: T.ink, lineHeight: 1 }}>{h.date.split(' ')[1]}</div>
              </div>
              <div style={{ width: 1, alignSelf: 'stretch', background: T.line }}/>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: FONT_BODY, fontSize: 9.5, fontWeight: 700, letterSpacing: 0.6, textTransform: 'uppercase', color: h.color }}>{h.tag}</div>
                <div style={{ fontFamily: FONT_BODY, fontSize: 14, color: T.ink, fontWeight: 600, marginTop: 1 }}>{h.title}</div>
                <div style={{ fontFamily: FONT_BODY, fontSize: 12, color: T.inkSoft, marginTop: 1 }}>{h.sub}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Coach ─────────────────────────────────────────────────────
function ScreenCoach({ onSheet }) {
  const { T } = useTheme();
  const [draft, setDraft] = React.useState('');
  const [sent, setSent] = React.useState([]);

  const send = () => {
    if (!draft.trim()) return;
    setSent([...sent, { from: 'me', text: draft.trim() }]);
    setDraft('');
    setTimeout(() => {
      setSent(s => [...s, { from: 'coach', text: "Got it — let's talk through it on Wednesday. I'll come prepared." }]);
    }, 800);
  };

  const messages = [
    { from: 'coach', text: "Morning Maya — saw your savings tick up. Nice." },
    { from: 'coach', text: "Let's lock in the auto-transfer this week and then talk about which neighborhoods make sense at your price." },
    { from: 'me', text: "Sounds good. What's a realistic price range now?" },
    { from: 'coach', text: "At your current pace, $310–$340k by next spring. We'll refine when you hit pre-approval." },
    ...sent,
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '4px 22px 16px' }}>
        <div style={{ fontFamily: FONT_BODY, fontSize: 12, color: T.inkMute, letterSpacing: 0.5, textTransform: 'uppercase' }}>Your team</div>
        <div style={{ fontFamily: FONT_SERIF, fontSize: 36, color: T.ink, lineHeight: 1.05, letterSpacing: -0.4, marginTop: 2 }}>Coach</div>
      </div>

      {/* Coach header card */}
      <div style={{ padding: '0 22px 14px' }}>
        <div style={{
          background: T.card, borderRadius: 22, border: `1px solid ${T.line}`,
          padding: 16, display: 'flex', alignItems: 'center', gap: 14,
        }}>
          <CoachAvatar size={56}/>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: FONT_SERIF, fontSize: 22, color: T.ink, lineHeight: 1.1 }}>{COACH.name}</div>
            <div style={{ fontFamily: FONT_BODY, fontSize: 12, color: T.inkSoft, marginTop: 2, display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 7, height: 7, borderRadius: 4, background: T.sage, display: 'inline-block' }}/>
              Active · usually replies in 2h
            </div>
          </div>
          <button onClick={() => onSheet('coach')} style={{
            border: 'none', height: 38, padding: '0 14px', borderRadius: 19,
            background: T.clay, color: '#fff', fontFamily: FONT_BODY, fontSize: 13, fontWeight: 600, cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: 6,
          }}><Icon.cal s={14}/> Book</button>
        </div>
      </div>

      {/* Next session */}
      <div style={{ padding: '0 22px 16px' }}>
        <div style={{
          background: T.cardAlt, borderRadius: 18, padding: '12px 16px',
          display: 'flex', alignItems: 'center', gap: 12, border: `1px solid ${T.lineSoft}`,
        }}>
          <Icon.cal s={18}/>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: FONT_BODY, fontSize: 13, color: T.ink, fontWeight: 600 }}>Next: Wed May 7 · 10:30 AM</div>
            <div style={{ fontFamily: FONT_BODY, fontSize: 12, color: T.inkSoft, marginTop: 1 }}>Video · 30 min · Reschedule anytime</div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflow: 'auto', padding: '0 22px 12px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ fontFamily: FONT_BODY, fontSize: 11, color: T.inkMute, letterSpacing: 0.5, textTransform: 'uppercase', textAlign: 'center', padding: '6px 0' }}>Today</div>
        {messages.map((m, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: m.from === 'me' ? 'flex-end' : 'flex-start' }}>
            <div style={{
              maxWidth: '78%', padding: '10px 14px', borderRadius: 18,
              background: m.from === 'me' ? T.clay : T.card,
              color: m.from === 'me' ? '#fff' : T.ink,
              border: m.from === 'me' ? 'none' : `1px solid ${T.line}`,
              fontFamily: FONT_BODY, fontSize: 14, lineHeight: 1.4,
              borderBottomRightRadius: m.from === 'me' ? 6 : 18,
              borderBottomLeftRadius: m.from === 'me' ? 18 : 6,
            }}>{m.text}</div>
          </div>
        ))}
      </div>

      {/* Composer */}
      <div style={{ padding: '8px 14px 12px', background: T.bg, borderTop: `1px solid ${T.lineSoft}` }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end' }}>
          <div style={{ flex: 1, background: T.card, borderRadius: 22, border: `1px solid ${T.line}`, padding: '10px 14px' }}>
            <input value={draft} onChange={e => setDraft(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()} placeholder="Message Dr. Drummond…" style={{
              border: 'none', outline: 'none', background: 'transparent', width: '100%',
              fontFamily: FONT_BODY, fontSize: 14, color: T.ink,
            }}/>
          </div>
          <button onClick={send} disabled={!draft.trim()} style={{
            width: 44, height: 44, borderRadius: 22, border: 'none',
            background: draft.trim() ? T.clay : T.lineSoft, color: draft.trim() ? '#fff' : T.inkMute,
            display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: draft.trim() ? 'pointer' : 'default',
          }}><Icon.send s={18}/></button>
        </div>
      </div>
    </div>
  );
}

// ─── Partners ──────────────────────────────────────────────────
function ScreenPartners() {
  const { T } = useTheme();
  const [filter, setFilter] = React.useState('all');

  const partners = [
    { id: 1, color: T.sage, initials: 'CB', name: 'CreditBoost', cat: 'credit', hook: 'Lift score 20–40 pts', body: 'Reports rent, utilities, and streaming subscriptions to all three bureaus.', cta: 'Try free', stars: 4.7, fit: 'Perfect for your stage' },
    { id: 2, color: T.ochre, initials: 'HR', name: 'Highrise', cat: 'savings', hook: '4.65% APY savings', body: 'High-yield savings, FDIC-insured. Could earn ~$330 / yr on your DP fund.', cta: 'Open account', stars: 4.8, fit: 'Top match' },
    { id: 3, color: T.plum, initials: 'LC', name: 'LoanCircle', cat: 'lender', hook: 'Soft pre-qualify', body: 'See your range without a credit hit. Two-minute form, no commitment.', cta: 'Start', stars: 4.5 },
    { id: 4, color: T.sage, initials: 'TK', name: 'Trackline', cat: 'credit', hook: 'Dispute errors fast', body: 'Find and dispute credit-report errors in minutes.', cta: 'Scan free', stars: 4.4 },
    { id: 5, color: T.ochre, initials: 'SU', name: 'StashUp', cat: 'savings', hook: 'Round-up saving', body: 'Round up purchases and stash the change automatically.', cta: 'Connect', stars: 4.6 },
    { id: 6, color: T.clay, initials: 'AP', name: 'Aspen Realty', cat: 'agent', hook: 'First-time buyer agents', body: 'Vetted agents who specialize in customers like you.', cta: 'Match me', stars: 4.9 },
  ];

  const cats = [
    { k: 'all', l: 'All' },
    { k: 'credit', l: 'Credit' },
    { k: 'savings', l: 'Savings' },
    { k: 'lender', l: 'Lenders' },
    { k: 'agent', l: 'Agents' },
  ];
  const visible = filter === 'all' ? partners : partners.filter(p => p.cat === filter);

  return (
    <div style={{ paddingBottom: 16 }}>
      <div style={{ padding: '4px 22px 16px' }}>
        <div style={{ fontFamily: FONT_BODY, fontSize: 12, color: T.inkMute, letterSpacing: 0.5, textTransform: 'uppercase' }}>Trusted boosts</div>
        <div style={{ fontFamily: FONT_SERIF, fontSize: 36, color: T.ink, lineHeight: 1.05, letterSpacing: -0.4, marginTop: 2 }}>Partners</div>
        <div style={{ fontFamily: FONT_SERIF, fontStyle: 'italic', fontSize: 16, color: T.inkSoft, marginTop: 4 }}>
          Curated for where you are.
        </div>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: 8, padding: '0 22px 16px', overflowX: 'auto', scrollbarWidth: 'none' }}>
        {cats.map(c => (
          <button key={c.k} onClick={() => setFilter(c.k)} style={{
            padding: '8px 14px', borderRadius: 18, border: `1px solid ${filter === c.k ? T.ink : T.line}`,
            background: filter === c.k ? T.ink : 'transparent', color: filter === c.k ? T.bg : T.ink,
            fontFamily: FONT_BODY, fontSize: 13, fontWeight: 500, cursor: 'pointer', flexShrink: 0,
          }}>{c.l}</button>
        ))}
      </div>

      {/* Featured */}
      {filter === 'all' && (
        <div style={{ padding: '0 22px 16px' }}>
          <div style={{
            background: `linear-gradient(135deg, ${T.clayLight} 0%, ${T.cardAlt} 100%)`,
            borderRadius: 22, padding: 18, border: `1px solid ${T.line}`,
          }}>
            <div style={{ fontFamily: FONT_BODY, fontSize: 10, fontWeight: 700, letterSpacing: 0.6, textTransform: 'uppercase', color: T.clayDeep }}>Top match for you</div>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginTop: 10 }}>
              <PartnerLogo color={T.ochre} initials="HR" size={52}/>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: FONT_SERIF, fontSize: 22, color: T.ink, lineHeight: 1.1 }}>Highrise</div>
                <div style={{ fontFamily: FONT_BODY, fontSize: 13, color: T.inkSoft, marginTop: 2 }}>4.65% APY · ~$330 / yr on your fund</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* List */}
      <div style={{ padding: '0 22px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {visible.map(p => (
          <div key={p.id} style={{
            background: T.card, borderRadius: 20, border: `1px solid ${T.line}`,
            padding: 16, display: 'flex', gap: 14,
          }}>
            <PartnerLogo color={p.color} initials={p.initials} size={48}/>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                <div style={{ fontFamily: FONT_BODY, fontSize: 15, fontWeight: 700, color: T.ink }}>{p.name}</div>
                <div style={{ fontFamily: FONT_BODY, fontSize: 12, color: T.inkSoft }}>★ {p.stars}</div>
              </div>
              <div style={{ fontFamily: FONT_SERIF, fontSize: 17, color: T.ink, lineHeight: 1.2, marginTop: 2 }}>{p.hook}</div>
              <div style={{ fontFamily: FONT_BODY, fontSize: 13, color: T.inkSoft, marginTop: 4, lineHeight: 1.4 }}>{p.body}</div>
              {p.fit && <div style={{ fontFamily: FONT_BODY, fontSize: 11, color: T.clay, fontWeight: 600, marginTop: 6 }}>● {p.fit}</div>}
              <button style={{
                marginTop: 12, height: 34, padding: '0 16px', borderRadius: 17, border: `1px solid ${T.line}`,
                background: 'transparent', color: T.ink, fontFamily: FONT_BODY, fontSize: 13, fontWeight: 600, cursor: 'pointer',
              }}>{p.cta}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Profile ───────────────────────────────────────────────────
function ScreenProfile({ onSheet }) {
  const { T, stage } = useTheme();
  const data = USER_BY_STAGE[stage];
  return (
    <div style={{ paddingBottom: 16 }}>
      <div style={{ padding: '4px 22px 24px' }}>
        <div style={{ fontFamily: FONT_BODY, fontSize: 12, color: T.inkMute, letterSpacing: 0.5, textTransform: 'uppercase' }}>Your account</div>
        <div style={{ fontFamily: FONT_SERIF, fontSize: 36, color: T.ink, lineHeight: 1.05, letterSpacing: -0.4, marginTop: 2 }}>You</div>
      </div>

      {/* Profile card */}
      <div style={{ padding: '0 22px 16px' }}>
        <div style={{ background: T.card, borderRadius: 22, border: `1px solid ${T.line}`, padding: 18, display: 'flex', gap: 14, alignItems: 'center' }}>
          <div style={{
            width: 60, height: 60, borderRadius: 30, flexShrink: 0,
            background: `repeating-linear-gradient(135deg, ${T.ochre} 0 7px, ${T.clay} 7px 14px)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontFamily: FONT_SERIF, fontSize: 26,
          }}>M</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: FONT_SERIF, fontSize: 24, color: T.ink, lineHeight: 1.1 }}>{USER_NAME} Chen</div>
            <div style={{ fontFamily: FONT_BODY, fontSize: 13, color: T.inkSoft, marginTop: 2 }}>maya@gmail.com</div>
            <div style={{ fontFamily: FONT_BODY, fontSize: 11, color: T.clay, fontWeight: 600, letterSpacing: 0.4, textTransform: 'uppercase', marginTop: 6 }}>{STEPS[data.step].full}</div>
          </div>
        </div>
      </div>

      {/* Goals */}
      <div style={{ padding: '8px 22px 0' }}>
        <div style={{ fontFamily: FONT_BODY, fontSize: 11, color: T.inkMute, letterSpacing: 0.6, textTransform: 'uppercase', marginBottom: 10 }}>Your goals</div>
        <div style={{ background: T.card, borderRadius: 20, border: `1px solid ${T.line}`, overflow: 'hidden' }}>
          {[
            { icon: Icon.flag, label: 'Target move-in', val: data.goalDate },
            { icon: Icon.dollar, label: 'Down payment goal', val: `$${data.savings.target.toLocaleString()}` },
            { icon: Icon.trend, label: 'Credit target', val: data.credit.target },
          ].map((row, i, arr) => {
            const Ico = row.icon;
            return (
              <div key={i} style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: i < arr.length - 1 ? `1px solid ${T.lineSoft}` : 'none' }}>
                <div style={{ width: 30, height: 30, borderRadius: 15, background: T.lineSoft, color: T.inkSoft, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Ico s={15}/>
                </div>
                <div style={{ flex: 1, fontFamily: FONT_BODY, fontSize: 14, color: T.ink }}>{row.label}</div>
                <div style={{ fontFamily: FONT_BODY, fontSize: 14, color: T.inkSoft, fontWeight: 500 }}>{row.val}</div>
                <Icon.chev s={14}/>
              </div>
            );
          })}
        </div>
      </div>

      {/* Settings list */}
      <div style={{ padding: '20px 22px 0' }}>
        <div style={{ fontFamily: FONT_BODY, fontSize: 11, color: T.inkMute, letterSpacing: 0.6, textTransform: 'uppercase', marginBottom: 10 }}>Settings</div>
        <div style={{ background: T.card, borderRadius: 20, border: `1px solid ${T.line}`, overflow: 'hidden' }}>
          {[
            { label: 'Notifications', sub: 'Reminders, coach replies' },
            { label: 'Linked accounts', sub: '2 banks · 1 credit card' },
            { label: 'Privacy', sub: 'What we share with partners' },
            { label: 'Help & support', sub: '' },
          ].map((row, i, arr) => (
            <div key={i} style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: i < arr.length - 1 ? `1px solid ${T.lineSoft}` : 'none' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: FONT_BODY, fontSize: 14, color: T.ink, fontWeight: 500 }}>{row.label}</div>
                {row.sub && <div style={{ fontFamily: FONT_BODY, fontSize: 12, color: T.inkMute, marginTop: 1 }}>{row.sub}</div>}
              </div>
              <Icon.chev s={14}/>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: '20px 22px 0', textAlign: 'center', fontFamily: FONT_SERIF, fontStyle: 'italic', fontSize: 14, color: T.inkMute }}>
        Pathway · Member since March 2025
      </div>
    </div>
  );
}

window.ScreenProgress = ScreenProgress;
window.ScreenCoach = ScreenCoach;
window.ScreenPartners = ScreenPartners;
window.ScreenProfile = ScreenProfile;
