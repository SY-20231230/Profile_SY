import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, NavLink, Route, Routes, useParams } from 'react-router-dom';
import { 
  ArrowDownRight, 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  Code2, 
  Github, 
  Mail, 
  Play, 
  Layers, 
  CheckCircle2, 
  Menu, 
  X, 
  FileText, 
  Cpu, 
  Database, 
  Cloud, 
  GitBranch, 
  AlertCircle, 
  Lightbulb, 
  Target, 
  TrendingUp, 
  Calendar, 
  Users, 
  UserCheck, 
  ExternalLink,
  GraduationCap,
  Award,
  BookOpen,
  Briefcase,
  Compass,
  Check,
  ShieldCheck,
  Sparkles,
  Download
} from 'lucide-react';
import { projects, Project } from './projects';
import { 
  journeyData, 
  educationData, 
  trainingData, 
  certificationsData, 
  awardsAndActivitiesData, 
  strengthsData, 
  experienceData, 
  skillCategoriesData 
} from './profileData';
import './style.css';

// 공통 Header
function Header() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="header">
      <div className="container nav">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          YS<span className="brand-dot">.</span>
          <span className="brand-text">YUN SUNGYONG</span>
        </Link>
        <button 
          className="mobile-menu" 
          aria-label="메뉴 열기" 
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={open ? 'nav-links open' : 'nav-links'}>
          <NavLink onClick={() => setOpen(false)} to="/" end>Home</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/about">About</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/projects">Projects</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/skills">Skills</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/contact">Contact</NavLink>
          <a 
            className="nav-github-mobile" 
            href="https://github.com/SY-20231230" 
            target="_blank" 
            rel="noreferrer" 
            onClick={() => setOpen(false)}
          >
            <Github size={16} /> GitHub <ArrowUpRight size={14} />
          </a>
        </nav>
        <div className="nav-actions">
          <a 
            className="nav-github" 
            href="https://github.com/SY-20231230" 
            target="_blank" 
            rel="noreferrer" 
            title="GitHub 프로필 바로가기"
          >
            <Github size={17} />
            <span>GitHub</span>
            <ArrowUpRight size={13} className="github-arrow" />
          </a>
          <Link className="nav-cta" to="/projects">
            View Projects <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </header>
  );
}

// 뱃지 및 카드 비주얼 컴포넌트
function Pill({ children }: { children: React.ReactNode }) {
  return <span className="pill">{children}</span>;
}

function ProjectVisual({ p }: { p: Project }) {
  return (
    <div
      className={`project-art ${p.thumbnail ? 'has-thumbnail' : ''}`}
      style={{ '--accent': p.accent } as React.CSSProperties}
    >
      {p.thumbnail ? (
        <div className="project-thumb-box">
          <img
            src={p.thumbnail}
            alt={`${p.name} 대표 이미지`}
            className={`thumb-img thumb-${p.slug}`}
          />
        </div>
      ) : (
        <>
          <div className="art-orbit art-orbit-one" />
          <div className="art-orbit art-orbit-two" />
          <span className="art-symbol">
            {p.slug === 'jiphyeonjeon' ? '⌂' : 
             p.slug === 'tomorrow-market' ? '↗' : 
             p.slug === 'universe' ? 'U' : 
             p.slug === 'autoplan-ai' ? '✦' : '◎'}
          </span>
          <span className="art-label">{p.category}</span>
        </>
      )}
    </div>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <Link className="project-card" to={`/projects/${p.slug}`}>
      <ProjectVisual p={p} />
      <div className="project-card-body">
        <div className="card-meta">
          <span>{p.category}</span>
          <span>{p.number} / 05</span>
        </div>
        <div className="card-title-line">
          <div>
            <h3>{p.name}</h3>
            <p className="card-subtitle">{p.subtitle}</p>
          </div>
          <span className="round-arrow">
            <ArrowUpRight size={20} />
          </span>
        </div>
        <div className="card-info-badges">
          <span className="info-chip"><Calendar size={13} /> {p.period}</span>
          <span className="info-chip"><UserCheck size={13} /> {p.role.split('/')[0].trim()}</span>
          {p.youtubeId && (
            <span className="info-chip chip-video"><Play size={11} fill="currentColor" /> 시연 영상</span>
          )}
        </div>
        <div className="tags">
          {p.stack.slice(0, 4).map((s) => (
            <span key={s}>{s}</span>
          ))}
          {p.stack.length > 4 && <span className="more-tag">+{p.stack.length - 4}</span>}
        </div>
      </div>
    </Link>
  );
}

// 4. HOME 페이지
function Home() {
  return (
    <>
      {/* 4.1 Hero Section - Creative Editorial & Neo-Brutalism Style */}
      <section className="hero editorial-hero" id="home">
        {/* 테크니컬 배경 장식 */}
        <div className="hero-bg-elements" aria-hidden="true">
          <div className="hero-bg-grid" />
          <div className="hero-bg-watermark">ARCHITECTING REAL SERVICES</div>
          <div className="hero-bg-glow" />
          <div className="hero-corner-cross cross-tl">+</div>
          <div className="hero-corner-cross cross-tr">+</div>
          <div className="hero-corner-cross cross-bl">+</div>
          <div className="hero-corner-cross cross-br">+</div>
        </div>

        <div className="container hero-grid">
          {/* 왼쪽 텍스트 영역 (약 55%) */}
          <div className="hero-copy">
            <div className="hero-meta-bar">
              <span className="hero-status-pill">
                <span className="availability" /> AI SERVICE & BACKEND DEVELOPER
              </span>
              <span className="hero-issue-tag">PORTFOLIO // VOL. 2026</span>
            </div>

            <h1 className="hero-editorial-title">
              <span className="hero-title-line line-1">
                기술을 넘어,
              </span>
              <span className="hero-title-line line-2">
                <span className="hero-highlight-lime">실제 서비스</span>로
              </span>
              <span className="hero-title-line line-3">
                연결합니다<span className="hero-lime-dot">.</span>
              </span>
            </h1>

            <div className="hero-lead-text">
              <div className="hero-lead-highlight-box">
                <span className="quote-mark">“</span>
                <p className="hero-lead-highlight">
                  AI를 실제 서비스로 연결하는 개발자 윤성용입니다.
                </p>
              </div>
              <p className="hero-lead">
                저는 AI 모델을 실제 사용자가 활용할 수 있는 서비스로 구현하는 데 집중하는 개발자입니다.<br />
                Django·FastAPI 및 Spring Boot를 기반으로 백엔드를 개발하고 AI 모델, 데이터베이스, 외부 API 및 클라우드 환경을 연결하는 다양한 프로젝트를 경험했습니다.<br />
                기능 구현에 그치지 않고 문제 분석부터 서비스 연동과 배포까지 전체 개발 과정을 이해하는 개발자를 지향합니다.
              </p>
            </div>
            
            <div className="hero-actions">
              <Link className="btn btn-primary hero-btn-main" to="/projects">
                View Projects <ArrowUpRight size={17} />
              </Link>
              <Link className="btn btn-ghost hero-btn-sub" to="/about">
                About Me <ArrowRight size={17} />
              </Link>
              <a 
                className="btn btn-github hero-btn-git" 
                href="https://github.com/SY-20231230" 
                target="_blank" 
                rel="noreferrer"
              >
                <Github size={17} /> GitHub <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="hero-bottom">
              <div className="stat-card">
                <span className="big-stat">05</span>
                <span className="stat-label">SELECTED PROJECTS</span>
              </div>
              <div className="vertical-line" />
              <div className="stat-card">
                <span className="big-stat">AI <span className="plus">+</span> BE</span>
                <span className="stat-label">FULL SERVICE INTEGRATION</span>
              </div>
              <div className="vertical-line" />
              <div className="stat-card">
                <span className="big-stat">PM <span className="plus">·</span> PO</span>
                <span className="stat-label">SCRUM MASTER</span>
              </div>
            </div>
          </div>

          {/* 오른쪽 프로필 사진 영역 (약 45%, 회전 폴라로이드/포스터 + 다중 레이어 + 스티커) */}
          <div className="hero-picture-wrap">
            <div className="hero-picture">
              {/* 후면 보조 레이어 1: 네온 라임 네오브루탈리즘 백플레이트 */}
              <div className="picture-layer-lime" />
              
              {/* 후면 보조 레이어 2: 딥 네이비 테크니컬 그리드 플레이트 */}
              <div className="picture-layer-navy">
                <div className="layer-inner-grid" />
                <span className="layer-tag">SPEC // 2026</span>
              </div>

              {/* 메인 사진 프레임: 에디토리얼 테크니컬 포스터 프레임 */}
              <div className="picture-frame">
                <div className="frame-header-bar">
                  <div className="frame-dots">
                    <span className="dot dot-lime" />
                    <span className="dot dot-gray" />
                    <span className="dot dot-gray" />
                  </div>
                  <span className="frame-file-name">YUN_DEV_PROFILE.RAW</span>
                  <span className="frame-meta">100% READY</span>
                </div>

                <div className="frame-img-box">
                  <img 
                    src="/YUN_Profile.jpg" 
                    alt="윤성용 프로필 사진" 
                    className="portrait-img"
                  />
                  {/* 사진 위 미세 격자 및 십자선 오버레이 (비침) */}
                  <div className="portrait-grid-overlay" />
                </div>

                <div className="frame-footer-bar">
                  <div className="frame-footer-left">
                    <span className="frame-tech-sub">BUILDER & ARCHITECT</span>
                    <strong className="frame-name-tag">YUN SUNG YONG</strong>
                  </div>
                  <div className="frame-barcode-mini" aria-hidden="true">
                    <div className="barcode-line w-1" /><div className="barcode-line w-3" /><div className="barcode-line w-2" /><div className="barcode-line w-1" /><div className="barcode-line w-4" /><div className="barcode-line w-2" /><div className="barcode-line w-1" /><div className="barcode-line w-3" />
                  </div>
                </div>
              </div>

              {/* 네오 브루탈리즘 스티커 1: BUILDING THINGS THAT WORK */}
              <div className="sticker-paper sticker-building">
                <div className="sticker-tape" />
                <span className="sticker-kicker">CORE MOTTO</span>
                <strong className="sticker-text">
                  BUILDING<br />THINGS THAT WORK.
                </strong>
                <span className="sticker-arrow">↗</span>
              </div>

              {/* 세로 라벨 2: YUN SUNGYONG — PORTFOLIO 2026 */}
              <div className="sticker-vertical-badge">
                <span className="vertical-text">YUN SUNGYONG — PORTFOLIO 2026</span>
                <span className="vertical-accent" />
              </div>

              {/* 네온 라임 미니 인증 스탬프 3 */}
              <div className="sticker-stamp">
                <span className="stamp-inner">REAL<br />SERVICE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.2 대표 프로젝트 (5개 카드) */}
      <section className="section projects-section" id="projects-preview">
        <div className="container">
          <div className="section-top">
            <div>
              <p className="section-kicker">01 / SELECTED WORKS</p>
              <h2>
                생각을 현실로 만든<br />
                <span>5개의 프로젝트.</span>
              </h2>
            </div>
            <Link className="text-link" to="/projects">
              전체 프로젝트 아카이브 <ArrowUpRight size={19} />
            </Link>
          </div>
          <div className="project-grid">
            {projects.map((p) => (
              <ProjectCard p={p} key={p.slug} />
            ))}
          </div>
        </div>
      </section>

      {/* Home 하단 About 미리보기 배너 */}
      <section className="section home-about-cta">
        <div className="container home-about-inner">
          <div>
            <p className="section-kicker">02 / ABOUT ME</p>
            <h2>기술을 배우는 것에서 멈추지 않고,<br /><span>실제 서비스로 구현합니다.</span></h2>
            <p className="home-about-desc">
              사회복지에서 인공지능으로, 그리고 실제 동작하는 백엔드 아키텍처와 AI 연동 서비스로 성장해 온 윤성용의 여정과 역량을 소개합니다.
            </p>
          </div>
          <div className="home-about-links">
            <Link to="/about" className="btn btn-primary">
              성장 과정 & 이력 자세히 보기 <ArrowUpRight size={17} />
            </Link>
            <Link to="/skills" className="btn btn-ghost-dark">
              기술 스택 분류 보기 <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// 5. ABOUT 페이지
function About() {
  return (
    <main className="about-page page-pad">
      <div className="container">
        {/* 5.1 About Me */}
        <section className="about-header-section">
          <p className="section-kicker">ABOUT YUN SUNGYONG</p>
          <h1 className="about-main-title">
            기술을 배우는 것에서 멈추지 않고,<br />
            <em>실제 서비스로 구현합니다</em><span className="lime">.</span>
          </h1>
          
          <div className="about-bio-card">
            <p className="bio-lead-quote">
              "사회복지를 전공하며 현장에서 겪는 불편을 기술로 해결하는 데 관심을 갖게 되었고, 이를 계기로 개발 분야에 도전했습니다. 이후 인공지능을 전공하며 프로그래밍과 AI 기술을 학습했습니다."
            </p>
            <p>
              첫 개발 프로젝트인 <strong>DORO-SEE</strong>에서 Django·FastAPI 기반 Backend 개발을 담당하면서 API·Database·Frontend 간 데이터 흐름을 익혔습니다. 당시 Backend 구조를 충분히 이해하지 못했던 문제를 해결하기 위해 Node.js 기반 CRUD 웹페이지를 직접 구현하며 Client·Server·Database 간 요청·응답 구조를 학습했습니다.
            </p>
            <p>
              이후 <strong>ZIPHYEONJEON</strong>에서는 Spring Boot와 JPA를 활용한 부동산 데이터 처리 및 AI 시세예측 모델 연동을 경험했고, <strong>TomorrowMarket</strong>에서는 시계열 AI 모델과 Backend 성능평가 기능을 구현했습니다.
            </p>
            <p>
              <strong>UNI:VERSE</strong>에서는 Spring Boot 기반 거래 기능과 AI 위험문구 분석, Docker 및 AWS 배포 구조를 다루었으며, <strong>AutoPlanAI</strong>에서는 Gemini API와 RAG 기반 프로젝트 기획 자동화 기능을 개발했습니다.
            </p>
            <p className="bio-conclusion">
              저는 AI 기술 자체를 학습하는 데 그치지 않고 AI의 결과를 API와 데이터베이스, 웹서비스에 연결하여 실제 서비스로 구현하는 데 가장 큰 가치를 두고 있습니다.
            </p>
          </div>
        </section>

        {/* 5.2 My Journey (타임라인 - 개발 시작일 순) */}
        <section className="about-section-block" id="journey">
          <div className="block-title">
            <span>01</span>
            <h2>My Journey</h2>
            <p>실제 프로젝트 개발 시작일 순으로 정리한 엔지니어링 성장 여정입니다.</p>
          </div>
          <div className="journey-timeline">
            {journeyData.map((item, idx) => (
              <div key={item.slug} className="journey-item">
                <div className="journey-num-badge">0{idx + 1}</div>
                <div className="journey-content-card">
                  <div className="journey-meta">
                    <span className="journey-period"><Calendar size={13} /> {item.period}</span>
                    <span className="journey-tag">{item.tag}</span>
                  </div>
                  <h3>{item.project} — {item.headline}</h3>
                  <p>{item.description}</p>
                  <Link to={`/projects/${item.slug}`} className="journey-link">
                    프로젝트 상세 보기 <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5.7 Core Strengths */}
        <section className="about-section-block" id="strengths">
          <div className="block-title">
            <span>02</span>
            <h2>Core Strengths</h2>
            <p>협업과 프로젝트 완결을 이끄는 세 가지 핵심 강점입니다.</p>
          </div>
          <div className="strengths-grid">
            {strengthsData.map((s) => (
              <div key={s.enTitle} className="strength-card">
                <div className="strength-header">
                  <Sparkles size={20} className="icon-lime" />
                  <div>
                    <span className="strength-en">{s.enTitle}</span>
                    <h3>{s.koTitle}</h3>
                  </div>
                </div>
                <p className="strength-desc">{s.description}</p>
                <ul className="strength-bullets">
                  {s.points.map((pt, i) => (
                    <li key={i}><Check size={14} className="check-icon" /> {pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 5.3 Education & 5.4 Development Training (2열 그리드) */}
        <section className="about-section-block" id="education-training">
          <div className="dual-block-grid">
            {/* Education */}
            <div className="sub-block">
              <div className="sub-block-title">
                <GraduationCap size={22} className="icon-lime" />
                <h3>Education</h3>
              </div>
              <div className="edu-list">
                {educationData.map((edu, i) => (
                  <div key={i} className="edu-item">
                    <div className="edu-head">
                      <strong>{edu.institution}</strong>
                      <span className="edu-status">{edu.status}</span>
                    </div>
                    <div className="edu-sub">
                      <span>{edu.major}</span>
                      <span>{edu.period}</span>
                    </div>
                    {edu.gpa !== '—' && (
                      <div className="edu-gpa">GPA: <strong>{edu.gpa}</strong></div>
                    )}
                    {edu.note && <small className="edu-note">{edu.note}</small>}
                  </div>
                ))}
              </div>
            </div>

            {/* Development Training */}
            <div className="sub-block">
              <div className="sub-block-title">
                <BookOpen size={22} className="icon-lime" />
                <h3>Development Training</h3>
              </div>
              <div className="training-card">
                <div className="training-head">
                  <strong>{trainingData.institution}</strong>
                  <span className="training-period">{trainingData.period}</span>
                </div>
                <div className="training-award-badge">
                  <Award size={16} />
                  <span>{trainingData.award} ({trainingData.awardDate})</span>
                </div>
                <p className="training-subtitle">주요 이수 커리큘럼:</p>
                <ul className="training-curriculum">
                  {trainingData.curriculum.map((c, i) => (
                    <li key={i}><CheckCircle2 size={15} /> {c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5.5 Certifications & 5.6 Awards & Activities (2열 그리드) */}
        <section className="about-section-block" id="cert-awards">
          <div className="dual-block-grid">
            {/* Certifications */}
            <div className="sub-block">
              <div className="sub-block-title">
                <ShieldCheck size={22} className="icon-lime" />
                <h3>Certifications</h3>
              </div>
              <div className="cert-list">
                {certificationsData.map((cert, i) => (
                  <div key={i} className="cert-item">
                    <div className="cert-info">
                      <strong>{cert.name}</strong>
                      <span className="cert-issuer">{cert.issuer}</span>
                      {cert.caution && <small className="cert-caution">{cert.caution}</small>}
                    </div>
                    <div className="cert-status-col">
                      <span className={`cert-badge ${cert.status.includes('필기') ? 'cert-badge-written' : 'cert-badge-pass'}`}>
                        {cert.status}
                      </span>
                      <span className="cert-date">{cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards & Activities */}
            <div className="sub-block">
              <div className="sub-block-title">
                <Award size={22} className="icon-lime" />
                <h3>Awards & Activities</h3>
              </div>
              <div className="activity-list">
                {awardsAndActivitiesData.map((act, i) => (
                  <div key={i} className="activity-item">
                    <span className="activity-date">{act.date}</span>
                    <div className="activity-desc">
                      <strong>{act.title}</strong>
                      <small>{act.category}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5.8 Experience (비개발 경력) */}
        <section className="about-section-block" id="experience">
          <div className="block-title">
            <span>03</span>
            <h2>Work Experience</h2>
            <p>다양한 현장 경험을 통해 기른 책임감과 성실성을 간결하게 소개합니다.</p>
          </div>
          <div className="exp-card">
            <div className="exp-head">
              <div>
                <strong>{experienceData[0].company}</strong>
                <span className="exp-type">{experienceData[0].type}</span>
              </div>
              <span className="exp-period">{experienceData[0].period}</span>
            </div>
            <p className="exp-role">{experienceData[0].role}</p>
            <p className="exp-desc">{experienceData[0].description}</p>
          </div>
        </section>

        {/* 5.9 이력서 다운로드 CTA */}
        <section className="about-resume-cta">
          <div className="about-resume-inner">
            <div>
              <span className="eyebrow">CURRICULUM VITAE</span>
              <h2>공개용 이력서 (PDF)</h2>
              <p>학력, 전문 교육 이수, 자격증, 5대 프로젝트 상세 경험이 정리된 공식 이력서입니다.</p>
            </div>
            <div className="about-resume-actions">
              <a 
                href="/늑대형_AI_백엔드_개발자_윤성용.pdf" 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-primary"
              >
                <ArrowUpRight size={16} /> 새 탭 열람
              </a>
              <a 
                href="/늑대형_AI_백엔드_개발자_윤성용.pdf" 
                download="늑대형_AI_백엔드_개발자_윤성용.pdf"
                className="btn btn-ghost-light"
              >
                <Download size={16} /> PDF 다운로드
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

// 6. PROJECTS 목록 페이지
function Projects() {
  return (
    <main className="listing page-pad">
      <div className="container">
        <p className="section-kicker">THE ARCHIVE / 2026</p>
        <h1>Selected <em>Projects.</em></h1>
        <p className="listing-subtitle">
          AI 모델과 백엔드 아키텍처를 실제 서비스에 연결한 5개의 프로젝트 포트폴리오입니다.
        </p>
        <div className="project-grid">
          {projects.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
      </div>
    </main>
  );
}

function SectionHeading({ idx, title }: { idx: string; title: string }) {
  return (
    <div className="detail-section-heading">
      <span>{idx}</span>
      <h2>{title}</h2>
    </div>
  );
}

// 6. PROJECTS 상세 페이지
function Detail() {
  const { slug } = useParams();
  const p = projects.find((x) => x.slug === slug);

  if (!p) {
    return (
      <main className="page-pad container not-found">
        <h1>프로젝트를 찾을 수 없습니다.</h1>
        <p>요청하신 프로젝트가 존재하지 않거나 주소가 변경되었습니다.</p>
        <Link to="/projects" className="btn btn-primary">
          <ArrowLeft size={16} /> 프로젝트 목록으로 이동
        </Link>
      </main>
    );
  }

  const currentIndex = projects.findIndex((x) => x.slug === slug);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="detail-page">
      <div className="container">
        {/* 상단 뒤로가기 링크 */}
        <Link className="back-link" to="/projects">
          <ArrowLeft size={17} /> ALL PROJECTS ARCHIVE
        </Link>

        {/* 프로젝트 헤더 타이틀 */}
        <div className="detail-head">
          <div>
            <span className="eyebrow">{p.category} / {p.number}</span>
            <h1>{p.name}<span className="lime">.</span></h1>
            <p>{p.subtitle}</p>
          </div>
          <span className="detail-index">PROJECT {p.number} / 05</span>
        </div>

        {/* 최상단 2열 미디어 및 기본 정보 영역 */}
        <div className="detail-media-grid">
          {/* 왼쪽: YouTube 영상 / 플레이스홀더 */}
          <div className="video-holder">
            {p.youtubeId ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${p.youtubeId}`}
                title={`${p.name} 시연 영상`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className="video-empty">
                <div className="play-circle">
                  <Play size={28} fill="currentColor" />
                </div>
                <strong>PROJECT DEMO VIDEO</strong>
                <p>YouTube 시연 영상 링크가 제공되면 이곳에 16:9 반응형 영상이 재생됩니다.</p>
                <span className="video-status-tag">시연 영상 준비 중</span>
              </div>
            )}
          </div>

          {/* 오른쪽: 프로젝트 기본 정보 메타박스 */}
          <div className="detail-overview">
            <p className="overline">PROJECT OVERVIEW</p>
            <h2>{p.subtitle}</h2>
            <p className="overview-desc">{p.description}</p>
            
            <div className="overview-rows">
              <div>
                <span>PERIOD</span>
                <strong>{p.period}</strong>
              </div>
              <div>
                <span>MEMBERS</span>
                <strong>{p.teamSize}</strong>
              </div>
              <div>
                <span>MY ROLE</span>
                <strong>{p.role}</strong>
              </div>
              <div>
                <span>CORE STACK</span>
                <strong>{p.stack.slice(0, 4).join(' · ')}</strong>
              </div>
            </div>

            <div className="detail-links">
              <a 
                href={p.github} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-primary"
              >
                <Github size={17} /> GitHub Repository <ArrowUpRight size={17} />
              </a>
              {p.youtubeId && (
                <a 
                  className="btn btn-ghost-light" 
                  href={`https://youtu.be/${p.youtubeId}`} 
                  target="_blank" 
                  rel="noreferrer"
                >
                  <Play size={15} fill="currentColor" /> YouTube 영상 <ArrowUpRight size={15} />
                </a>
              )}
              {p.demo && (
                <a 
                  className="btn btn-ghost-light" 
                  href={p.demo} 
                  target="_blank" 
                  rel="noreferrer"
                >
                  Live Service <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* 퀵 앵커 네비게이션 바 */}
        <div className="quick-nav-bar">
          <span className="quick-nav-title">QUICK JUMP</span>
          <a href="#section-goals">01. 목표</a>
          <a href="#section-features">02. 주요기능</a>
          <a href="#section-arch">03. 아키텍처</a>
          <a href="#section-stack">04. 기술스택</a>
          <a href="#section-role">05. 담당업무</a>
          <a href="#section-process">06. 개발과정</a>
          <a href="#section-results">07. 성과/지표</a>
          <a href="#section-trouble">08. 문제해결</a>
          <a href="#section-lessons">09. 배운점</a>
        </div>

        {/* 하단 상세 콘텐츠 본문 영역 */}
        <div className="detail-body">
          {/* 01. 개발 동기 및 목표 */}
          <section className="detail-content-section" id="section-goals">
            <SectionHeading idx="01" title="프로젝트 개발 동기 및 목표" />
            <div className="dual-card-grid">
              <div className="info-card">
                <div className="info-card-header">
                  <Lightbulb size={20} className="icon-lime" />
                  <h3>프로젝트 개발 동기</h3>
                </div>
                <p>{p.motivation}</p>
              </div>
              <div className="info-card">
                <div className="info-card-header">
                  <Target size={20} className="icon-lime" />
                  <h3>프로젝트 목표</h3>
                </div>
                <p>{p.goals}</p>
              </div>
            </div>
          </section>

          {/* 02. 주요 기능 */}
          <section className="detail-content-section" id="section-features">
            <SectionHeading idx="02" title="주요 기능" />
            <p className="content-lead">사용자 관점에서 서비스가 제공하는 핵심 기능 목록입니다.</p>
            <div className="feature-grid">
              {p.features.map((feat, i) => (
                <div key={i} className="feature-card">
                  <span className="feature-num">0{i + 1}</span>
                  <p>{feat}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 03. 시스템 아키텍처 */}
          <section className="detail-content-section" id="section-arch">
            <SectionHeading idx="03" title="시스템 아키텍처" />
            <div className="architecture-panel">
              <div className="arch-flow-diagram">
                <div className="flow-step">
                  <span className="flow-step-tag">Client Layer</span>
                  <strong>{p.env.frontend ? p.env.frontend[0] : 'React'}</strong>
                  <small>사용자 UI 및 인터랙션</small>
                </div>
                <div className="flow-arrow">→</div>
                <div className="flow-step">
                  <span className="flow-step-tag">Backend Layer</span>
                  <strong>{p.env.backend ? p.env.backend[0] : 'Spring Boot / FastAPI'}</strong>
                  <small>REST API 및 비즈니스 로직</small>
                </div>
                <div className="flow-arrow">→</div>
                <div className="flow-step">
                  <span className="flow-step-tag">AI / Model Layer</span>
                  <strong>{p.env.aiData ? p.env.aiData[0].split(' ')[0] : 'AI Service'}</strong>
                  <small>추론, RAG 및 모델 연동</small>
                </div>
                <div className="flow-arrow">→</div>
                <div className="flow-step">
                  <span className="flow-step-tag">Storage / Cloud</span>
                  <strong>{p.env.database ? p.env.database[0] : 'MySQL / Cloud'}</strong>
                  <small>데이터 영속성 및 인프라</small>
                </div>
              </div>

              {p.architectureImage ? (
                <div className="arch-diagram-card">
                  <div className="arch-diagram-bar">
                    <span className="diagram-title-chip">
                      <Layers size={14} /> SYSTEM ARCHITECTURE DIAGRAM
                    </span>
                    <a 
                      href={p.architectureImage} 
                      target="_blank" 
                      rel="noreferrer"
                      className="btn-diagram-zoom"
                      title="고해상도 원본 다이어그램 새 창으로 열기"
                    >
                      <ArrowUpRight size={14} /> 원본 확대 보기
                    </a>
                  </div>
                  <div className="arch-diagram-viewer">
                    <a 
                      href={p.architectureImage} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="arch-img-link"
                      title="클릭 시 새 탭에서 고해상도 다이어그램 열기"
                    >
                      <img 
                        src={p.architectureImage} 
                        alt={`${p.name} 시스템 아키텍처 다이어그램`} 
                        className="arch-diagram-img"
                        loading="lazy"
                      />
                    </a>
                  </div>
                  <div className="arch-diagram-caption">
                    <span>※ 다이어그램 이미지를 클릭하면 새 창에서 원본 고해상도로 확대하여 세부 구조를 확인하실 수 있습니다.</span>
                  </div>
                </div>
              ) : (
                <div className="assets-placeholder">
                  <Layers size={36} />
                  <strong>시스템 아키텍처</strong>
                  <span>실제 프로젝트 아키텍처 다이어그램 이미지는 추후 제공 시 업데이트됩니다.</span>
                </div>
              )}
            </div>
          </section>

          {/* 04. 개발 환경 및 기술 스택 */}
          <section className="detail-content-section" id="section-stack">
            <SectionHeading idx="04" title="개발 환경 및 세부 기술 스택" />
            <div className="tech-env-grid">
              {p.env.backend && (
                <div className="env-card">
                  <h4><Cpu size={16} /> Backend</h4>
                  <div className="env-tags">
                    {p.env.backend.map((t) => <span key={t}>{t}</span>)}
                  </div>
                </div>
              )}
              {p.env.aiData && (
                <div className="env-card">
                  <h4><TrendingUp size={16} /> AI / Machine Learning</h4>
                  <div className="env-tags">
                    {p.env.aiData.map((t) => <span key={t}>{t}</span>)}
                  </div>
                </div>
              )}
              {p.env.frontend && (
                <div className="env-card">
                  <h4><Code2 size={16} /> Frontend</h4>
                  <div className="env-tags">
                    {p.env.frontend.map((t) => <span key={t}>{t}</span>)}
                  </div>
                </div>
              )}
              {p.env.database && (
                <div className="env-card">
                  <h4><Database size={16} /> Database</h4>
                  <div className="env-tags">
                    {p.env.database.map((t) => <span key={t}>{t}</span>)}
                  </div>
                </div>
              )}
              {p.env.cloudDevOps && (
                <div className="env-card">
                  <h4><Cloud size={16} /> Cloud & DevOps</h4>
                  <div className="env-tags">
                    {p.env.cloudDevOps.map((t) => <span key={t}>{t}</span>)}
                  </div>
                </div>
              )}
              {p.env.externalApi && (
                <div className="env-card">
                  <h4><ExternalLink size={16} /> External API</h4>
                  <div className="env-tags">
                    {p.env.externalApi.map((t) => <span key={t}>{t}</span>)}
                  </div>
                </div>
              )}
              {p.env.hardware && (
                <div className="env-card">
                  <h4><Cpu size={16} /> Hardware</h4>
                  <div className="env-tags">
                    {p.env.hardware.map((t) => <span key={t}>{t}</span>)}
                  </div>
                </div>
              )}
              {p.env.tools && (
                <div className="env-card">
                  <h4><GitBranch size={16} /> Tools</h4>
                  <div className="env-tags">
                    {p.env.tools.map((t) => <span key={t}>{t}</span>)}
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* 05. 나의 담당 역할 */}
          <section className="detail-content-section" id="section-role">
            <SectionHeading idx="05" title="나의 담당 역할 및 핵심 기여" />
            <p className="content-lead">
              윤성용이 팀 내에서 직접 기획하고 코드로 구현한 구체적인 작업 내역입니다.
            </p>
            <div className="contribution-grid">
              {p.responsibilities.map((task, i) => (
                <div className="contribution" key={i}>
                  <CheckCircle2 size={22} className="check-icon" />
                  <strong>{task}</strong>
                </div>
              ))}
            </div>
          </section>

          {/* 06. 개발 과정 */}
          <section className="detail-content-section" id="section-process">
            <SectionHeading idx="06" title="개발 및 구현 과정" />
            <div className="process-timeline">
              {p.process.map((step, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-badge">0{i + 1}</div>
                  <div className="timeline-content">
                    <p>{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 07. 프로젝트 결과 및 성과 */}
          <section className="detail-content-section" id="section-results">
            <SectionHeading idx="07" title="프로젝트 결과 및 정량적 성과" />
            
            {p.aiMetrics && p.aiMetrics.length > 0 && (
              <div className="metrics-container">
                <div className="metrics-grid">
                  {p.aiMetrics.map((m, i) => (
                    <div key={i} className="metric-box">
                      <span className="metric-label">{m.label}</span>
                      <strong className="metric-val">{m.value}</strong>
                      {m.note && <small className="metric-note">{m.note}</small>}
                    </div>
                  ))}
                </div>
                {p.aiMetricNote && (
                  <div className="metric-caution-note">
                    <AlertCircle size={15} />
                    <span>{p.aiMetricNote}</span>
                  </div>
                )}
              </div>
            )}

            <div className="results-list">
              {p.results.map((res, i) => (
                <div key={i} className="result-item">
                  <div className="result-check"><CheckCircle2 size={18} /></div>
                  <p>{res}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 08. 기술적 문제 해결 경험 (Troubleshooting) */}
          <section className="detail-content-section" id="section-trouble">
            <SectionHeading idx="08" title="기술적 문제 해결 경험 (Troubleshooting)" />
            <p className="content-lead">
              실제 개발 과정에서 직면한 문제와 이를 주도적으로 분석·해결한 4단계 과정입니다.
            </p>
            <div className="trouble-flow-grid">
              <div className="trouble-card trouble-issue">
                <div className="trouble-badge">01. 문제 발생</div>
                <h4>ISSUE</h4>
                <p>{p.troubleshooting.issue}</p>
              </div>
              <div className="trouble-card trouble-cause">
                <div className="trouble-badge">02. 원인 분석</div>
                <h4>CAUSE ANALYSIS</h4>
                <p>{p.troubleshooting.cause}</p>
              </div>
              <div className="trouble-card trouble-solution">
                <div className="trouble-badge">03. 해결 과정</div>
                <h4>SOLUTION</h4>
                <p>{p.troubleshooting.solution}</p>
              </div>
              <div className="trouble-card trouble-lesson">
                <div className="trouble-badge">04. 배운 점</div>
                <h4>LESSONS LEARNED</h4>
                <p>{p.troubleshooting.lesson}</p>
              </div>
            </div>
          </section>

          {/* 09. 프로젝트를 통해 배운 점 및 향후 직무 적용 */}
          <section className="detail-content-section" id="section-lessons">
            <SectionHeading idx="09" title="프로젝트를 통해 배운 점 및 향후 직무 적용" />
            <div className="lessons-box">
              <div className="lesson-col">
                <h3><Lightbulb size={20} className="icon-lime" /> 핵심 회고 및 통찰</h3>
                <p>{p.lessonsLearned}</p>
              </div>
              <div className="lesson-col">
                <h3><TrendingUp size={20} className="icon-lime" /> 향후 직무 적용 방향</h3>
                <p>{p.futureApplication}</p>
                {p.troubleshooting.careerImpact && (
                  <p className="career-impact-sub">{p.troubleshooting.careerImpact}</p>
                )}
              </div>
            </div>
          </section>

          {/* 10. 관련 링크 */}
          <section className="detail-content-section" id="section-links">
            <SectionHeading idx="10" title="관련 링크 및 리소스" />
            <div className="resources-grid">
              <a 
                href={p.github} 
                target="_blank" 
                rel="noreferrer" 
                className="resource-card"
              >
                <Github size={24} />
                <div>
                  <strong>GitHub Repository</strong>
                  <span>{p.github}</span>
                </div>
                <ArrowUpRight size={20} />
              </a>
              {p.demo && (
                <a 
                  href={p.demo} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="resource-card"
                >
                  <ExternalLink size={24} />
                  <div>
                    <strong>배포된 실제 서비스</strong>
                    <span>{p.demo}</span>
                  </div>
                  <ArrowUpRight size={20} />
                </a>
              )}
            </div>
          </section>
        </div>

        {/* 이전 / 다음 프로젝트 순환 내비게이션 */}
        <div className="detail-project-nav">
          <Link to={`/projects/${prevProject.slug}`} className="nav-proj-prev">
            <span className="nav-proj-dir"><ArrowLeft size={16} /> PREVIOUS PROJECT</span>
            <strong>{prevProject.name}</strong>
            <small>{prevProject.subtitle}</small>
          </Link>
          <div className="nav-proj-divider" />
          <Link to={`/projects/${nextProject.slug}`} className="nav-proj-next">
            <span className="nav-proj-dir">NEXT PROJECT <ArrowRight size={16} /></span>
            <strong>{nextProject.name}</strong>
            <small>{nextProject.subtitle}</small>
          </Link>
        </div>
      </div>
    </main>
  );
}

// 7. SKILLS 전용 페이지
function Skills() {
  return (
    <main className="skills-page page-pad">
      <div className="container">
        <p className="section-kicker">TECHNICAL CAPABILITIES</p>
        <h1 className="page-heading">Skills & <em>Technologies.</em></h1>
        <p className="page-lead">
          실제 프로젝트와 교육 과정에서 다루어 검증된 7개 분야 기술 스택입니다.<br />
          임의의 숙련도 수치 대신, 각 기술이 실제로 구현되고 활용된 프로젝트를 명시했습니다.
        </p>

        <div className="skills-categories-grid">
          {skillCategoriesData.map((cat) => (
            <div key={cat.category} className="skill-cat-card">
              <div className="skill-cat-card-header">
                <h3>{cat.category}</h3>
                <span className="skill-count">{cat.skills.length} Skills</span>
              </div>
              <div className="skill-items-list">
                {cat.skills.map((s) => (
                  <div key={s.name} className="skill-detail-item">
                    <div className="skill-name-row">
                      <strong className="skill-item-name">{s.name}</strong>
                    </div>
                    <div className="skill-projects-row">
                      {s.relatedProjects.map((proj, idx) => (
                        <span key={idx} className="skill-proj-badge">{proj}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-bottom-note">
          <p>
            ※ 표시된 모든 기술은 교육 이수 및 5개 실제 프로젝트에서 데이터 파이프라인, 백엔드 API, 클라우드 배포 등에 직접 사용된 기술입니다.
          </p>
        </div>
      </div>
    </main>
  );
}

// 8. CONTACT 전용 페이지
function Contact() {
  return (
    <main className="contact-page page-pad">
      <div className="container">
        <div className="contact-hero-card">
          <p className="section-kicker">GET IN TOUCH</p>
          <h1>Let's Connect<span className="lime">.</span></h1>
          <p className="contact-sub-lead">
            AI 서비스 및 백엔드 개발 분야에서 새로운 기회와 협업을 기다립니다.<br />
            기술을 실제 서비스로 연결하는 개발자로서 문제 해결과 서비스 개발에 기여하고 싶습니다.
          </p>

          <div className="contact-cards-grid">
            {/* GitHub */}
            <a 
              className="contact-info-card" 
              href="https://github.com/SY-20231230" 
              target="_blank" 
              rel="noreferrer"
            >
              <div className="contact-icon-box">
                <Github size={26} />
              </div>
              <div className="contact-info-text">
                <span className="info-label">GITHUB REPOSITORY</span>
                <strong>github.com/SY-20231230</strong>
                <small>코드 커밋 및 오픈소스 저장소</small>
              </div>
              <ArrowUpRight size={20} className="contact-card-arrow" />
            </a>

            {/* Email */}
            <a 
              className="contact-info-card" 
              href="mailto:ysyhsh@naver.com"
            >
              <div className="contact-icon-box">
                <Mail size={26} />
              </div>
              <div className="contact-info-text">
                <span className="info-label">EMAIL ADDRESS</span>
                <strong>ysyhsh@naver.com</strong>
                <small>채용 및 협업 제안 이메일</small>
              </div>
              <ArrowUpRight size={20} className="contact-card-arrow" />
            </a>

            {/* Resume Button */}
            <a 
              className="contact-info-card contact-card-resume"
              href="/늑대형_AI_백엔드_개발자_윤성용.pdf"
              target="_blank"
              rel="noreferrer"
              download="늑대형_AI_백엔드_개발자_윤성용.pdf"
              aria-label="윤성용 개발자 공개용 이력서 PDF 열람 및 다운로드"
            >
              <div className="contact-icon-box resume-icon-box">
                <FileText size={26} />
              </div>
              <div className="contact-info-text">
                <span className="info-label">RESUME DOWNLOAD</span>
                <strong>공개용 이력서 (PDF)</strong>
                <small>클릭 시 새 탭 열람 및 다운로드</small>
              </div>
              <Download size={20} className="contact-card-arrow" />
            </a>
          </div>

          <div className="resume-notice-box resume-ready-box">
            <CheckCircle2 size={20} className="text-lime" />
            <div className="resume-ready-text">
              <strong>공개용 이력서(PDF) 업로드 완료</strong>
              <p>윤성용 개발자의 학력, 교육 이수, 자격증, 상세 프로젝트 경험이 담긴 공식 이력서입니다.</p>
            </div>
            <div className="resume-ready-btns">
              <a 
                href="/늑대형_AI_백엔드_개발자_윤성용.pdf" 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-primary btn-sm"
              >
                <ArrowUpRight size={14} /> 새 탭 열람
              </a>
              <a 
                href="/늑대형_AI_백엔드_개발자_윤성용.pdf" 
                download="늑대형_AI_백엔드_개발자_윤성용.pdf"
                className="btn btn-ghost-light btn-sm"
              >
                <Download size={14} /> PDF 다운로드
              </a>
            </div>
          </div>

          <div className="contact-privacy-note">
            <p>※ 구직 및 협업 연락을 위해 공식 GitHub 및 이메일 주소를 공개하고 있으며, 개인정보 보호를 위해 전화번호 및 상세 주소는 별도 문의 시 전달드립니다.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

// 공통 Footer
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Link to="/" className="footer-brand">YS<span>.</span></Link>
        <span>© 2026 YUN SUNGYONG. AI SERVICE & BACKEND DEVELOPER. BUILT WITH REACT & VERCEL.</span>
        <div className="footer-links">
          <a href="mailto:ysyhsh@naver.com" title="이메일 보내기">
            <Mail size={14} /> ysyhsh@naver.com
          </a>
          <a href="https://github.com/SY-20231230" target="_blank" rel="noreferrer" title="GitHub 프로필">
            <Github size={15} /> GITHUB
          </a>
          <Link to="/projects">
            PROJECTS <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

// 스크롤 상단 이동 컴포넌트
function ScrollTop() {
  const loc = window.location.pathname;
  React.useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const el = document.querySelector(window.location.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 70);
    } else {
      window.scrollTo(0, 0);
    }
  }, [loc]);
  return null;
}

// App 라우팅 (Home, About, Projects, Skills, Contact)
function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<Detail />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
