// Today screen — main dashboard

function ScreenToday({ onSheet, onTab }) {
  const { T, stage, showPartners, progressStyle } = useTheme();
  const data = USER_BY_STAGE[stage];
  const stepInfo = STEPS[data.step];
  const pct = Math.min(100, Math.round((data.savings.current / data.savings.target) * 100));
  const creditPct = Math.min(100, Math.round((data.credit.score - 580) / (850 - 580) * 100));

  return (
    <div style={{ paddingBottom: 16 }}>
      {/* Header */}
      <div style={{ padding: '4px 22px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ fontFamily: FONT_BODY, fontSize: 12, color: T.inkMute, letterSpacing: 0.5, textTransform: 'uppercase' }}>Tuesday · May 5</div>
          <div style={{ fontFamily: FONT_SERIF, fontSize: 36, color: T.ink, lineHeight: 1.05, marginTop: 2, letterSpacing: -0.4 }}>
            Good morning, {USER_NAME}
          </div>
          <div style={{ fontFamily: FONT_SERIF, fontStyle: 'italic', fontSize: 17, color: T.inkSoft, marginTop: 4 }}>
            On track for {data.goalDate}.
          </div>
        </div>
        <button onClick={() => onTab('profile')} style={{ width: 38, height: 38, borderRadius: 19, border: 'none', background: T.lineSoft, color: T.ink, position: 'relative', cursor: 'pointer' }}>
          <Icon.bell s={17}/>
          <div style={{ position: 'absolute', top: 8, right: 9, width: 8, height: 8, borderRadius: 4, background: T.clay }}/>
        </button>
      </div>

      {/* Progress */}
      <div style={{ padding: '22px 22px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <div style={{ fontFamily: FONT_BODY, fontSize: 11, color: T.inkMute, letterSpacing: 0.6, textTransform: 'uppercase' }}>
            Step {data.step + 1} of 5 · <span style={{ color: T.ink, fontWeight: 600 }}>{stepInfo.full}</span>
          </div>
          <div style={{ fontFamily: FONT_BODY, fontSize: 12, color: T.inkSoft }}>{Math.round((data.step / 4 + 0.07) * 100)}%</div>
        </div>
        <ProgressBar step={data.step} style={progressStyle}/>
      </div>

      {/* Metric cards */}
      <div style={{ padding: '20px 22px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <MetricCard
          label="Credit score" value={data.credit.score}
          delta={data.credit.delta > 0 ? `+${data.credit.delta} this month` : 'Hold steady'}
          status={data.credit.score >= data.credit.target ? 'On target' : 'Climbing'}
          target={`Target ${data.credit.target}`}
          color={T.sage} bg={T.sageLight} progress={creditPct / 100}
          onClick={() => onSheet('log-credit')}
        />
        <MetricCard
          label="Saved" value={`$${(data.savings.current / 1000).toFixed(1)}k`}
          delta={`+$${data.savings.monthly} this month`}
          status={`${pct}% of goal`} target={`of $${(data.savings.target / 1000).toFixed(0)}k`}
          color={T.ochre} bg={T.ochreLight} progress={pct / 100}
          onClick={() => onSheet('log-savings')}
        />
      </div>

      {/* Coach pinned */}
      <div style={{ padding: '14px 22px 0' }}>
        <div onClick={() => onTab('coach')} style={{
          background: T.card, borderRadius: 22, border: `1px solid ${T.line}`,
          padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer',
        }}>
          <CoachAvatar size={44}/>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: FONT_BODY, fontSize: 11, color: T.inkMute, letterSpacing: 0.5, textTransform: 'uppercase' }}>Coach Dr. Drummond</div>
            <div style={{ fontFamily: FONT_SERIF, fontSize: 17, color: T.ink, lineHeight: 1.2, marginTop: 1 }}>
              "You're moving — let's lock in next month's plan."
            </div>
          </div>
          <button onClick={(e) => { e.stopPropagation(); onSheet('coach'); }} style={{
            border: 'none', height: 36, padding: '0 14px', borderRadius: 18,
            background: T.clay, color: '#fff', fontFamily: FONT_BODY, fontSize: 13, fontWeight: 600, flexShrink: 0, cursor: 'pointer',
          }}>Book</button>
        </div>
      </div>

      {/* To do today */}
      <div style={{ padding: '24px 0 0' }}>
        <SectionTitle action="3 today">To do today</SectionTitle>
        <div style={{ padding: '0 22px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <FeedItem color={T.ochre} tag="Savings" title="Move $135 to your down-payment fund" body="Auto-transfer suggestion · 1 tap" mins="2 min" onClick={() => onSheet('log-savings')}/>
          <FeedItem color={T.sage} tag="Credit" title="Pay $80 to Capital One" body="Drops utilization under 30%" mins="3 min" onClick={() => onSheet('log-credit')}/>
          <FeedItem color={T.plum} tag="Learn" title="Why pre-approval is not pre-qualification" body="Quick read scoped to your stage" mins="4 min"/>
        </div>
      </div>

      {/* Upcoming */}
      <div style={{ padding: '24px 22px 0' }}>
        <div style={{ fontFamily: FONT_BODY, fontSize: 11, color: T.inkMute, letterSpacing: 0.6, textTransform: 'uppercase', marginBottom: 8 }}>Upcoming</div>
        <div onClick={() => onTab('coach')} style={{ background: T.card, borderRadius: 18, border: `1px solid ${T.line}`, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}>
          <div style={{ width: 40, textAlign: 'center' }}>
            <div style={{ fontFamily: FONT_BODY, fontSize: 10, color: T.inkMute, letterSpacing: 0.4, textTransform: 'uppercase' }}>Wed</div>
            <div style={{ fontFamily: FONT_SERIF, fontSize: 22, color: T.ink, lineHeight: 1 }}>7</div>
          </div>
          <div style={{ width: 1, height: 32, background: T.line }}/>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: FONT_BODY, fontSize: 14, fontWeight: 600, color: T.ink }}>Check-in with Dr. Drummond</div>
            <div style={{ fontFamily: FONT_BODY, fontSize: 12, color: T.inkMute, marginTop: 1 }}>10:30 AM · Video · 30 min</div>
          </div>
          <Icon.chev s={16}/>
        </div>
      </div>

      {/* Partner boosts */}
      {showPartners && (
        <div style={{ padding: '28px 0 0' }}>
          <SectionTitle action={<span onClick={() => onTab('partners')} style={{ cursor: 'pointer' }}>See all</span>} eyebrow="Matched to your goals">Partner boosts</SectionTitle>
          <div style={{ display: 'flex', gap: 10, overflowX: 'auto', padding: '0 22px 4px', scrollbarWidth: 'none' }}>
            <PartnerCard color={T.sage} initials="CB" name="CreditBoost" hook="Lift score 20–40 pts" body="Reports rent and utilities to bureaus." cta="Try free" onClick={() => onTab('partners')}/>
            <PartnerCard color={T.ochre} initials="HR" name="Highrise" hook="4.65% APY savings" body="~$330 / yr on your DP fund." cta="Open" onClick={() => onTab('partners')}/>
            <PartnerCard color={T.plum} initials="LC" name="LoanCircle" hook="Soft pre-qualify" body="No credit hit. Two minutes." cta="Start" onClick={() => onTab('partners')}/>
          </div>
        </div>
      )}

      {/* Education */}
      <div style={{ padding: '28px 22px 0' }}>
        <div style={{ fontFamily: FONT_BODY, fontSize: 11, color: T.inkMute, letterSpacing: 0.6, textTransform: 'uppercase', marginBottom: 8 }}>Worth a read</div>
        <div style={{
          borderRadius: 22, padding: 18, color: T.ink,
          background: `linear-gradient(135deg, ${T.sageLight} 0%, ${T.cardAlt} 100%)`,
          border: `1px solid ${T.line}`,
        }}>
          <div style={{ fontFamily: FONT_SERIF, fontSize: 22, lineHeight: 1.15, letterSpacing: -0.2 }}>
            How underwriters actually read your savings.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12 }}>
            <div style={{ fontFamily: FONT_BODY, fontSize: 13, color: T.inkSoft }}>4 min · Article</div>
            <div style={{ width: 30, height: 30, borderRadius: 15, background: T.ink, color: T.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon.arrow s={14}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgressBar({ step, style = 'segmented' }) {
  const { T } = useTheme();
  if (style === 'dots') {
    return (
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'space-between' }}>
        {STEPS.map((s, i) => {
          const done = i < step, cur = i === step;
          return (
            <React.Fragment key={s.key}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <div style={{
                  width: cur ? 18 : 12, height: cur ? 18 : 12, borderRadius: 9,
                  background: done ? T.clayDeep : cur ? T.clay : 'transparent',
                  border: done || cur ? 'none' : `1.5px solid ${T.line}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
                }}>{done && <Icon.check s={9} w={2.6}/>}</div>
                <div style={{ fontFamily: FONT_BODY, fontSize: 9.5, fontWeight: cur ? 700 : 500, color: cur ? T.ink : T.inkMute, letterSpacing: 0.2 }}>{s.short}</div>
              </div>
              {i < STEPS.length - 1 && <div style={{ flex: 1, height: 1.5, background: i < step ? T.clayDeep : T.line, marginBottom: 14 }}/>}
            </React.Fragment>
          );
        })}
      </div>
    );
  }
  if (style === 'ring') {
    const total = 5;
    const pct = (step + 0.35) / total;
    const r = 44, c = 2 * Math.PI * r;
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <svg width="100" height="100" viewBox="0 0 100 100" style={{ flexShrink: 0 }}>
          <circle cx="50" cy="50" r={r} fill="none" stroke={T.line} strokeWidth="6"/>
          <circle cx="50" cy="50" r={r} fill="none" stroke={T.clay} strokeWidth="6" strokeLinecap="round"
            strokeDasharray={`${c * pct} ${c}`} transform="rotate(-90 50 50)"/>
          <text x="50" y="48" textAnchor="middle" fontFamily={FONT_SERIF} fontSize="22" fill={T.ink}>{step + 1}</text>
          <text x="50" y="64" textAnchor="middle" fontFamily={FONT_BODY} fontSize="9" fill={T.inkMute} letterSpacing="0.5">OF 5</text>
        </svg>
        <div>
          <div style={{ fontFamily: FONT_SERIF, fontSize: 22, color: T.ink, lineHeight: 1.1 }}>{STEPS[step].full}</div>
          <div style={{ fontFamily: FONT_BODY, fontSize: 13, color: T.inkSoft, marginTop: 2 }}>Next: {STEPS[Math.min(step+1, 4)].full}</div>
        </div>
      </div>
    );
  }
  // segmented (default)
  return (
    <div style={{ display: 'flex', gap: 4 }}>
      {STEPS.map((s, i) => {
        const done = i < step, cur = i === step;
        return (
          <div key={s.key} style={{ flex: 1 }}>
            <div style={{
              height: 6, borderRadius: 3,
              background: done ? T.clayDeep : cur ? T.clayLight : T.line,
              position: 'relative', overflow: 'hidden',
            }}>
              {cur && <div style={{ position: 'absolute', inset: 0, width: '35%', background: T.clay, borderRadius: 3 }}/>}
            </div>
            <div style={{
              fontFamily: FONT_BODY, fontSize: 10, marginTop: 6, textAlign: 'center',
              color: cur ? T.ink : T.inkMute, fontWeight: cur ? 700 : 500, letterSpacing: 0.2,
            }}>{s.short}</div>
          </div>
        );
      })}
    </div>
  );
}

function MetricCard({ label, value, delta, status, target, color, bg, progress, onClick }) {
  const { T } = useTheme();
  return (
    <div onClick={onClick} style={{
      background: T.card, borderRadius: 22, padding: 16,
      border: `1px solid ${T.line}`, position: 'relative', overflow: 'hidden', cursor: onClick ? 'pointer' : 'default',
    }}>
      <div style={{
        position: 'absolute', top: 12, right: 12,
        padding: '4px 8px', borderRadius: 10, background: bg,
        fontFamily: FONT_BODY, fontSize: 10, fontWeight: 600, color: color, letterSpacing: 0.3,
      }}>{status}</div>
      <div style={{ fontFamily: FONT_BODY, fontSize: 11, color: T.inkMute, letterSpacing: 0.5, textTransform: 'uppercase' }}>{label}</div>
      <div style={{ fontFamily: FONT_SERIF, fontSize: 38, color: T.ink, lineHeight: 1, marginTop: 6, letterSpacing: -0.6 }}>{value}</div>
      <div style={{ fontFamily: FONT_BODY, fontSize: 12, color: color, fontWeight: 600, marginTop: 4 }}>↑ {delta}</div>
      {progress != null && (
        <div style={{ marginTop: 10, height: 4, borderRadius: 2, background: T.lineSoft }}>
          <div style={{ width: `${progress * 100}%`, height: '100%', borderRadius: 2, background: color }}/>
        </div>
      )}
      <div style={{ fontFamily: FONT_BODY, fontSize: 11, color: T.inkMute, marginTop: 6 }}>{target}</div>
    </div>
  );
}

function FeedItem({ color, tag, title, body, mins, onClick }) {
  const { T } = useTheme();
  return (
    <div onClick={onClick} style={{
      background: T.card, borderRadius: 18, padding: '14px 14px',
      border: `1px solid ${T.line}`, display: 'flex', gap: 12, alignItems: 'center', cursor: onClick ? 'pointer' : 'default',
    }}>
      <div style={{ width: 4, alignSelf: 'stretch', borderRadius: 2, background: color, marginRight: 4 }}/>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
          <span style={{ fontFamily: FONT_BODY, fontSize: 10, color: color, fontWeight: 700, letterSpacing: 0.6, textTransform: 'uppercase' }}>{tag}</span>
          <span style={{ fontFamily: FONT_BODY, fontSize: 11, color: T.inkMute }}>· {mins}</span>
        </div>
        <div style={{ fontFamily: FONT_BODY, fontSize: 15, fontWeight: 600, color: T.ink, lineHeight: 1.25 }}>{title}</div>
        <div style={{ fontFamily: FONT_BODY, fontSize: 13, color: T.inkSoft, marginTop: 2 }}>{body}</div>
      </div>
      <Icon.chev s={16}/>
    </div>
  );
}

function PartnerCard({ color, initials, name, hook, body, cta, onClick }) {
  const { T } = useTheme();
  return (
    <div onClick={onClick} style={{
      minWidth: 220, maxWidth: 220, background: T.card, borderRadius: 22, padding: 16,
      border: `1px solid ${T.line}`, flexShrink: 0, cursor: 'pointer',
    }}>
      <PartnerLogo color={color} initials={initials} size={40}/>
      <div style={{ fontFamily: FONT_BODY, fontSize: 14, fontWeight: 700, color: T.ink, marginTop: 10 }}>{name}</div>
      <div style={{ fontFamily: FONT_SERIF, fontSize: 18, color: T.ink, lineHeight: 1.15, marginTop: 2 }}>{hook}</div>
      <div style={{ fontFamily: FONT_BODY, fontSize: 12, color: T.inkSoft, marginTop: 6, lineHeight: 1.4 }}>{body}</div>
      <button style={{
        marginTop: 12, height: 32, padding: '0 14px', borderRadius: 16, border: `1px solid ${T.line}`,
        background: 'transparent', color: T.ink, fontFamily: FONT_BODY, fontSize: 13, fontWeight: 600, cursor: 'pointer',
      }}>{cta}</button>
    </div>
  );
}

window.ScreenToday = ScreenToday;
