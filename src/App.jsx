import { useEffect, useMemo, useState } from "react";
import mark from "../assets/arcdev-mark.jpg";

function useReveal(key) {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]:not([data-revealed])");
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.setAttribute("data-revealed", "");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [key]);
}

const content = {
  en: {
    nav: [
      ["About", "#about"],
      ["Services", "#services"],
      ["Projects", "#projects"],
      ["Contact", "#contact"],
    ],
    cta: "Start a Project",
    chaptersLabel: "ArcDev chapters",
    missionControl: "Digital mission control",
    footer:
      "Company profile, custom application, and internal system development.",
    chapters: [
      {
        label: "Future",
        title: "We build digital systems for companies ready to move faster.",
        text: "ArcDev turns websites, workflows, and internal operations into digital products that feel precise, reliable, and built for the way your team actually works.",
        action: "Explore projects",
        href: "#projects",
      },
      {
        label: "Orbit",
        title: "Every project starts by mapping the real business gravity.",
        text: "Before we write code, we study how work moves through your team: approvals, reports, handovers, customer journeys, and the places where manual work slows everything down.",
        action: "About ArcDev",
        href: "#about",
      },
      {
        label: "Launch",
        title: "From company profile websites to operational command centers.",
        text: "We create public-facing websites, custom apps, ERP modules, dashboards, and long-term improvements that help teams make cleaner decisions.",
        action: "View services",
        href: "#services",
      },
    ],
    about: {
      kicker: "About ArcDev",
      title: "About ArcDev",
      text: "ArcDev is a technology development team focused on building websites, custom applications, and business systems that help companies work more efficiently. We believe every business has a unique workflow, so we design digital solutions that are tailored to real business needs, not just generic templates.",
      cards: [
        [
          "01",
          "Workflow First",
          "We study how your team actually works before deciding what to build.",
        ],
        [
          "02",
          "Custom System",
          "Every module is shaped around real operations, roles, and business goals.",
        ],
        [
          "03",
          "Long-Term Fit",
          "The system is designed to be maintainable, scalable, and useful after launch.",
        ],
      ],
    },
    problems: {
      kicker: "Business Problems",
      title: "Is Your Business Still Running Manually?",
      items: [
        "Business data is scattered across spreadsheets",
        "Manual workflow slows down operations",
        "Difficult to monitor finance, inventory, projects, or reports",
        "Existing website looks outdated",
        "Internal processes are not integrated",
        "Business needs a system built around its own workflow",
      ],
    },
    servicesTitle: {
      kicker: "Capabilities",
      title:
        "Everything needed to turn business operations into digital infrastructure.",
    },
    services: [
      [
        "01",
        "Company Profile",
        "Premium business websites with stronger positioning, clearer content, and responsive UI.",
      ],
      [
        "02",
        "Custom App",
        "Web applications for approval flows, reporting, finance, inventory, CRM, or internal work.",
      ],
      [
        "03",
        "ERP Modules",
        "Operational systems split into modules so they can grow with your team.",
      ],
      [
        "04",
        "Care & Redesign",
        "Maintenance, UI cleanup, performance tuning, and feature iteration after launch.",
      ],
    ],
    projectsHead: {
      kicker: "Projects",
      title: "Mission archive",
      text: "Click a project to visit its own preview page with visuals, explanation, scope, and the problem it solves.",
    },
    projects: [
      {
        id: "gatratrust-system",
        code: "MISSION 01",
        title: "Gatratrust System",
        category: "Business Administration System",
        summary:
          "A Laravel business administration system for quotations, invoices, purchase orders, and approval workflows.",
        description:
          "Gatratrust System helps teams input client data, create quotations, invoices, purchase orders, and print-ready documents through a structured approval flow. Each document status can be tracked, and the output is ready to send to clients.",
        metrics: [
          "Quotation in minutes",
          "Multi-level approval",
          "Print-ready PDF output",
        ],
        tech: ["Laravel", "MySQL", "Blade", "jQuery", "PHP"],
        scope: [
          "Client data management",
          "Quotation management",
          "Invoice management",
          "Purchase order module",
          "Approval workflow",
          "Document output and print",
        ],
        images: [
          ["/portfolio/gatra/dashboard-gatra.png", "Dashboard"],
          ["/portfolio/gatra/form-quotation.png", "Quotation Form"],
          ["/portfolio/gatra/list-invoice.png", "Invoice List"],
          ["/portfolio/gatra/output-dokumen.png", "Document Output"],
          ["/portfolio/gatra/login-gatra.png", "Login Page"],
        ],
        accent: "blue",
      },
      {
        id: "geotama-system",
        code: "MISSION 02",
        title: "Geotama System",
        category: "ERP Management System",
        summary:
          "An ERP management system for requests, projects, invoices, payments, reports, and approval workflows.",
        description:
          "Geotama System connects requests, projects, invoices, payments, and reporting in one application with role-based access. Each user receives access based on their role, and every status change is recorded in real time.",
        metrics: [
          "Request-to-payment flow",
          "Role-based access",
          "PDF invoice export",
        ],
        tech: [
          "Laravel",
          "MySQL",
          "Blade",
          "jQuery",
          "REST API",
          "VPS",
          "Nginx",
        ],
        scope: [
          "Request management",
          "Project management",
          "Invoice management",
          "Payment tracking",
          "Approval workflow",
          "PDF export",
          "Production VPS deployment",
        ],
        images: [
          ["/portfolio/geotama/dashboard.png", "Dashboard Overview"],
          ["/portfolio/geotama/modul-invoice.png", "Invoice Module"],
          ["/portfolio/geotama/alur-sistem.png", "System Flow"],
          ["/portfolio/geotama/export-pdf.png", "PDF Export"],
          ["/portfolio/geotama/login-geotama.png", "Login Page"],
        ],
        accent: "cyan",
      },
      {
        id: "dompetarc",
        code: "MISSION 03",
        title: "DompetArc",
        category: "Personal Finance App",
        summary:
          "A mobile-first personal finance web, PWA, and Android app for wallets, transactions, and budgets.",
        description:
          "DompetArc lets users create multiple wallets, record income, expenses, and transfers, monitor balances, review monthly summaries, and manage budgets by category. Guest mode stores data locally on the device, while online accounts store data on the server.",
        metrics: ["Web, PWA, and Android", "Guest mode", "Receipt OCR support"],
        tech: [
          "React JS",
          "Laravel",
          "MySQL",
          "Capacitor Android",
          "Tesseract OCR",
          "Ubuntu VPS",
          "Nginx",
        ],
        previewType: "mobile",
        scope: [
          "React mobile-first UI",
          "Laravel API",
          "Wallet and transaction modules",
          "Budget by category",
          "Receipt upload and OCR",
          "Capacitor Android build",
          "VPS deployment",
        ],
        images: [
          ["/portfolio/dompetarc/Dashboard.jpg", "Dashboard"],
          ["/portfolio/dompetarc/Riwayat_transaksi.jpg", "Transaction History"],
          ["/portfolio/dompetarc/Form_transaksi.jpg", "Transaction Form"],
          ["/portfolio/dompetarc/Anggaran.jpg", "Budget"],
          ["/portfolio/dompetarc/Flow_apk.png", "Application Flow"],
        ],
        accent: "violet",
      },
    ],
    contact: {
      kicker: "Contact",
      title: "Ready to plan your next digital launch?",
      whatsapp: "WhatsApp Consultation",
    },
    detail: {
      back: "Back to projects",
      galleryLabel: "preview gallery",
      captions: ["dashboard overview", "module workflow", "reporting view"],
      missionBrief: "Mission Brief",
      explanation: "Project explanation",
      impact: "Impact",
      tech: "Tech Stack",
      scope: "Scope",
      preview: "Preview",
    },
  },
  id: {
    nav: [
      ["Tentang", "#about"],
      ["Layanan", "#services"],
      ["Project", "#projects"],
      ["Kontak", "#contact"],
    ],
    cta: "Mulai Project",
    chaptersLabel: "Chapter ArcDev",
    missionControl: "Pusat kendali digital",
    footer:
      "Pengembangan company profile, aplikasi custom, dan sistem internal bisnis.",
    chapters: [
      {
        label: "Masa Depan",
        title:
          "Kami membangun sistem digital untuk bisnis yang siap bergerak lebih cepat.",
        text: "ArcDev mengubah website, workflow, dan operasional internal menjadi produk digital yang presisi, stabil, dan sesuai cara kerja tim Anda.",
        action: "Lihat project",
        href: "#projects",
      },
      {
        label: "Orbit",
        title:
          "Setiap project dimulai dari memetakan gravitasi bisnis yang sebenarnya.",
        text: "Sebelum menulis kode, kami memahami alur kerja tim Anda: approval, laporan, serah-terima, perjalanan customer, dan titik manual yang memperlambat pekerjaan.",
        action: "Tentang ArcDev",
        href: "#about",
      },
      {
        label: "Peluncuran",
        title:
          "Dari website company profile sampai command center operasional.",
        text: "Kami membuat website publik, aplikasi custom, modul ERP, dashboard, dan improvement jangka panjang agar tim bisa mengambil keputusan lebih bersih.",
        action: "Lihat layanan",
        href: "#services",
      },
    ],
    about: {
      kicker: "Tentang ArcDev",
      title: "Tentang ArcDev",
      text: "ArcDev adalah tim pengembangan teknologi yang berfokus membangun website, aplikasi custom, dan sistem bisnis yang membantu perusahaan bekerja lebih efisien. Kami percaya setiap bisnis memiliki workflow yang unik, jadi solusi digital harus disesuaikan dengan kebutuhan bisnis nyata, bukan sekadar template generik.",
      cards: [
        [
          "01",
          "Workflow First",
          "Kami memahami cara kerja tim terlebih dahulu sebelum menentukan sistem yang dibangun.",
        ],
        [
          "02",
          "Sistem Custom",
          "Setiap modul disusun mengikuti operasional, role, dan tujuan bisnis yang nyata.",
        ],
        [
          "03",
          "Siap Bertumbuh",
          "Sistem dibuat agar mudah dirawat, dikembangkan, dan tetap berguna setelah launch.",
        ],
      ],
    },
    problems: {
      kicker: "Masalah Bisnis",
      title: "Apakah Bisnis Anda Masih Berjalan Manual?",
      items: [
        "Data bisnis tersebar di banyak spreadsheet",
        "Workflow manual memperlambat operasional",
        "Sulit memantau finance, inventory, project, atau report",
        "Website yang ada terlihat outdated",
        "Proses internal belum terintegrasi",
        "Bisnis membutuhkan sistem yang mengikuti workflow sendiri",
      ],
    },
    servicesTitle: {
      kicker: "Kapabilitas",
      title:
        "Semua yang dibutuhkan untuk mengubah operasional bisnis menjadi infrastruktur digital.",
    },
    services: [
      [
        "01",
        "Company Profile",
        "Website bisnis premium dengan positioning lebih kuat, konten jelas, dan UI responsive.",
      ],
      [
        "02",
        "Aplikasi Custom",
        "Aplikasi web untuk approval, reporting, finance, inventory, CRM, atau kerja internal.",
      ],
      [
        "03",
        "Modul ERP",
        "Sistem operasional berbasis modul agar mudah berkembang mengikuti kebutuhan tim.",
      ],
      [
        "04",
        "Care & Redesign",
        "Maintenance, perapihan UI, optimasi performa, dan iterasi fitur setelah launch.",
      ],
    ],
    projectsHead: {
      kicker: "Project",
      title: "Arsip misi",
      text: "Klik project untuk membuka halaman preview berisi visual, penjelasan, scope, dan masalah yang diselesaikan.",
    },
    projects: [
      {
        id: "gatratrust-system",
        code: "MISI 01",
        title: "Gatratrust System",
        category: "Sistem Administrasi Bisnis",
        summary:
          "Sistem administrasi bisnis berbasis Laravel untuk quotation, invoice, purchase order, dan approval workflow.",
        description:
          "Gatratrust System membantu tim menginput data klien, membuat quotation, invoice, purchase order, dan dokumen siap cetak melalui alur approval yang terstruktur. Setiap status dokumen dapat dilacak, dan output siap dikirim ke klien.",
        metrics: [
          "Quotation selesai dalam menit",
          "Approval multi-level",
          "Output PDF siap cetak",
        ],
        tech: ["Laravel", "MySQL", "Blade", "jQuery", "PHP"],
        scope: [
          "Manajemen data klien",
          "Manajemen quotation",
          "Manajemen invoice",
          "Modul purchase order",
          "Approval workflow",
          "Output dan cetak dokumen",
        ],
        images: [
          ["/portfolio/gatra/dashboard-gatra.png", "Dashboard"],
          ["/portfolio/gatra/form-quotation.png", "Form Quotation"],
          ["/portfolio/gatra/list-invoice.png", "Daftar Invoice"],
          ["/portfolio/gatra/output-dokumen.png", "Output Dokumen"],
          ["/portfolio/gatra/login-gatra.png", "Halaman Login"],
        ],
        accent: "blue",
      },
      {
        id: "geotama-system",
        code: "MISI 02",
        title: "Geotama System",
        category: "Sistem Manajemen ERP",
        summary:
          "Sistem manajemen ERP untuk request, project, invoice, payment, report, dan approval workflow.",
        description:
          "Geotama System menghubungkan request, project, invoice, payment, dan reporting dalam satu aplikasi dengan role-based access. Setiap user mendapatkan akses sesuai perannya, dan setiap perubahan status tercatat secara real time.",
        metrics: [
          "Alur request sampai payment",
          "Akses berbasis role",
          "Export invoice PDF",
        ],
        tech: [
          "Laravel",
          "MySQL",
          "Blade",
          "jQuery",
          "REST API",
          "VPS",
          "Nginx",
        ],
        scope: [
          "Manajemen request",
          "Manajemen project",
          "Manajemen invoice",
          "Tracking payment",
          "Approval workflow",
          "Export PDF",
          "Deployment VPS produksi",
        ],
        images: [
          ["/portfolio/geotama/dashboard.png", "Overview Dashboard"],
          ["/portfolio/geotama/modul-invoice.png", "Modul Invoice"],
          ["/portfolio/geotama/alur-sistem.png", "Alur Sistem"],
          ["/portfolio/geotama/export-pdf.png", "Export PDF"],
          ["/portfolio/geotama/login-geotama.png", "Halaman Login"],
        ],
        accent: "cyan",
      },
      {
        id: "dompetarc",
        code: "MISI 03",
        title: "DompetArc",
        category: "Aplikasi Keuangan Personal",
        summary:
          "Aplikasi keuangan mobile-first untuk web, PWA, dan Android yang mengelola wallet, transaksi, dan anggaran.",
        description:
          "DompetArc memungkinkan user membuat beberapa wallet, mencatat pemasukan, pengeluaran, transfer, memantau saldo, melihat ringkasan bulanan, dan mengatur anggaran per kategori. Guest mode menyimpan data secara lokal, sementara akun online menyimpan data di server.",
        metrics: ["Web, PWA, dan Android", "Guest mode", "Dukungan OCR struk"],
        tech: [
          "React JS",
          "Laravel",
          "MySQL",
          "Capacitor Android",
          "Tesseract OCR",
          "Ubuntu VPS",
          "Nginx",
        ],
        previewType: "mobile",
        scope: [
          "UI React mobile-first",
          "API Laravel",
          "Modul wallet dan transaksi",
          "Anggaran per kategori",
          "Upload struk dan OCR",
          "Build Android Capacitor",
          "Deployment VPS",
        ],
        images: [
          ["/portfolio/dompetarc/Dashboard.jpg", "Dashboard"],
          ["/portfolio/dompetarc/Riwayat_transaksi.jpg", "Riwayat Transaksi"],
          ["/portfolio/dompetarc/Form_transaksi.jpg", "Form Transaksi"],
          ["/portfolio/dompetarc/Anggaran.jpg", "Anggaran"],
          ["/portfolio/dompetarc/Flow_apk.png", "Alur Aplikasi"],
        ],
        accent: "violet",
      },
    ],
    contact: {
      kicker: "Kontak",
      title: "Siap merencanakan peluncuran digital berikutnya?",
      whatsapp: "Konsultasi WhatsApp",
    },
    detail: {
      back: "Kembali ke project",
      galleryLabel: "galeri preview",
      captions: ["overview dashboard", "alur modul", "tampilan laporan"],
      missionBrief: "Ringkasan Misi",
      explanation: "Penjelasan project",
      impact: "Dampak",
      tech: "Tech Stack",
      scope: "Scope",
      preview: "Preview",
    },
  },
};

function SpaceBackground() {
  return (
    <div className="space-background" aria-hidden="true">
      <div className="nebula nebula-one" />
      <div className="nebula nebula-two" />
      <div className="star-layer star-layer-one" />
      <div className="star-layer star-layer-two" />
      <div className="meteor meteor-one" />
      <div className="meteor meteor-two" />
      <div className="meteor meteor-three" />
      <div className="planet-glow" />
      {Array.from({ length: 12 }).map((_, index) => (
        <span key={index} />
      ))}
    </div>
  );
}

function Header({ locale, onHome, onLocaleChange, onNavigate, t }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <button
        className="brand reset-button"
        type="button"
        onClick={onHome}
        aria-label="ArcDev home"
      >
        <img src={mark} alt="" />
        <span>ArcDev</span>
      </button>

      <nav
        className={menuOpen ? "nav-links open" : "nav-links"}
        aria-label="Primary navigation"
      >
        {t.nav.map(([label, href]) => (
          <a
            key={label}
            href={href}
            onClick={(event) => onNavigate(event, href, closeMenu)}
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <div className="language-toggle" aria-label="Language switcher">
          {["en", "id"].map((lang) => (
            <button
              className={locale === lang ? "active" : ""}
              key={lang}
              type="button"
              onClick={() => onLocaleChange(lang)}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
        <a
          className="header-cta"
          href="#contact"
          onClick={(event) => onNavigate(event, "#contact")}
        >
          {t.cta}
        </a>
      </div>

      <button
        className="menu-button"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
    </header>
  );
}

function SpacePreview({ project, index = 0 }) {
  const image = project.images?.[index % project.images.length];
  const previewClass = `space-preview ${project.accent} preview-${index + 1} ${
    project.previewType === "mobile" ? "mobile-preview" : ""
  }`;

  return (
    <div className={previewClass}>
      <div className="preview-orbit" />
      <div className="preview-screen">
        <div className="screen-top">
          <span />
          <span />
          <span />
          <strong>{project.code}</strong>
        </div>
        {image ? (
          <img
            className="preview-image"
            src={image[0]}
            alt={`${project.title} ${image[1]}`}
          />
        ) : (
          <>
            <div className="screen-grid">
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="screen-chart">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </>
        )}
      </div>
      <div className="preview-caption">{image?.[1] ?? project.category}</div>
    </div>
  );
}

function HomePage({ onProjectOpen, t, locale }) {
  useReveal(locale);
  const activeChapter = t.chapters[0];

  return (
    <main className="page-shell home-shell">
      <section className="hero-cinematic" id="home">
        <div className="hero-content">
          <p className="kicker">{activeChapter.label}</p>
          <h1>{activeChapter.title}</h1>
          <p className="lead">{activeChapter.text}</p>
          <a className="button primary" href={activeChapter.href}>
            {activeChapter.action}
          </a>
        </div>

        <div className="hero-visual">
          <div className="saturn-brand" aria-label="ArcDev orbit animation">
            <div className="saturn-ring ring-back" />
            <div className="saturn-ring ring-main" />
            <div className="saturn-ring ring-front" />
            <div className="saturn-glow" />
            <div className="saturn-core">
              <div className="saturn-lockup">
                <img src={mark} alt="" />
                <span>ArcDev</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-layout">
          <div className="about-copy" data-reveal="">
            <h2>{t.about.title}</h2>
            <p>{t.about.text}</p>
          </div>
          <div className="about-visual-grid">
            {t.about.cards.map(([number, title, text], i) => (
              <article
                className="about-card"
                key={title}
                data-reveal=""
                style={{ "--reveal-delay": `${i * 90}ms` }}
              >
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="problem-section">
        <div className="problem-lead" data-reveal="">
          <p className="kicker">{t.problems.kicker}</p>
          <h2>{t.problems.title}</h2>
        </div>
        <div className="pain-grid">
          {t.problems.items.map((item, index) => (
            <article
              className="pain-card"
              key={item}
              data-reveal=""
              style={{ "--reveal-delay": `${index * 70}ms` }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="services-head" data-reveal="">
          <p className="kicker">{t.servicesTitle.kicker}</p>
          <h2>{t.servicesTitle.title}</h2>
        </div>
        <div className="service-lines">
          {t.services.map(([number, title, text], i) => (
            <article
              key={title}
              data-reveal=""
              style={{ "--reveal-delay": `${i * 80}ms` }}
            >
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="projects-head" data-reveal="">
          <div>
            <p className="kicker">{t.projectsHead.kicker}</p>
            <h2>{t.projectsHead.title}</h2>
          </div>
          <p>{t.projectsHead.text}</p>
        </div>

        <div className="project-orbit-list">
          {t.projects.map((project, index) => (
            <button
              className="project-row"
              type="button"
              key={project.id}
              onClick={() => onProjectOpen(project.id)}
              data-reveal=""
              style={{ "--reveal-delay": `${index * 100}ms` }}
            >
              <div className="project-index">{project.code}</div>
              <div>
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <SpacePreview project={project} />
            </button>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <h2 data-reveal="">{t.contact.title}</h2>
        <div className="contact-actions" data-reveal="" style={{ "--reveal-delay": "120ms" }}>
          <a href="mailto:arcadedevelop0@gmail.com">arcadedevelop0@gmail.com</a>
          <a href="https://wa.me/62895603502918">{t.contact.whatsapp}</a>
        </div>
      </section>
    </main>
  );
}

function ProjectPage({ project, onBack, t }) {
  return (
    <main
      className={`page-shell project-detail ${project.previewType === "mobile" ? "mobile-project" : ""}`}
    >
      <button className="back-button" type="button" onClick={onBack}>
        {t.detail.back}
      </button>

      <section className="project-hero">
        <div>
          <p className="kicker">{project.code}</p>
          <h1>{project.title}</h1>
          <p className="lead">{project.summary}</p>
        </div>
        <SpacePreview project={project} />
      </section>

      <section
        className="project-gallery"
        aria-label={`${project.title} ${t.detail.galleryLabel}`}
      >
        {project.images.slice(0, 5).map((image, item) => (
          <figure key={item}>
            <SpacePreview project={project} index={item} />
            <figcaption>
              {t.detail.preview} {item + 1}: {image[1]}
            </figcaption>
          </figure>
        ))}
      </section>

      <section className="project-story">
        <div>
          <p className="kicker">{t.detail.missionBrief}</p>
          <h2>{t.detail.explanation}</h2>
        </div>
        <p>{project.description}</p>
      </section>

      <section className="project-data">
        <div>
          <p className="kicker">{t.detail.impact}</p>
          <ul>
            {project.metrics.map((metric) => (
              <li key={metric}>{metric}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="kicker">{t.detail.tech}</p>
          <ul>
            {project.tech.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="kicker">{t.detail.scope}</p>
          <ul>
            {project.scope.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

function App() {
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [locale, setLocale] = useState("en");
  const year = useMemo(() => new Date().getFullYear(), []);
  const t = content[locale];
  const activeProject = activeProjectId
    ? t.projects.find((project) => project.id === activeProjectId)
    : null;

  const openProject = (projectId) => {
    setActiveProjectId(projectId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeProject = () => {
    setActiveProjectId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToSection = (event, href, afterNavigate) => {
    event.preventDefault();
    afterNavigate?.();
    setActiveProjectId(null);

    window.setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        window.history.replaceState(null, "", href);
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 80);
  };

  return (
    <>
      <SpaceBackground />
      <Header
        locale={locale}
        onHome={closeProject}
        onLocaleChange={setLocale}
        onNavigate={navigateToSection}
        t={t}
      />
      <div className={`locale-scope locale-${locale}`}>
        {activeProject ? (
          <ProjectPage project={activeProject} onBack={closeProject} t={t} />
        ) : (
          <HomePage onProjectOpen={openProject} t={t} locale={locale} />
        )}
      </div>
      <footer>
        <span>ArcDev</span>
        <p>{t.footer}</p>
        <small>{year}</small>
      </footer>
    </>
  );
}

export default App;
