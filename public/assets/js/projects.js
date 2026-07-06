/* projects.js — Data and rendering for project cards and modal */

const PROJECTS = [
  {
    id: 'pixel2excel',
    tag: 'SaaS Product',
    title: 'Pixel2Excel',
    problem: 'Teachers often spend valuable time manually transferring grades from paper sheets and images into editable digital formats.',
    solution: 'Built an AI-powered web application that extracts table data from grade sheet images and converts it into editable spreadsheet-like content. The product focuses on simplicity, speed, and educational workflows.',
    outcome: 'Currently being tested and improved through direct teacher feedback.',
    features: [
      'Image upload and processing',
      'AI-powered table extraction',
      'Editable spreadsheet interface',
      'Teacher-focused workflow',
      'Error handling and validation improvements'
    ],
    stack: ['JavaScript', 'Node.js', 'Express', 'Gemini API'],
    status: 'Testing',
    result: 'Actively refined through real-world testing to improve accuracy, reliability, and user experience.',
    links: {
      live: 'https://pixel2excel.onrender.com',
      github: 'https://github.com/krnl0xsns1nk/pixel2excel'
    }
  },
  {
    id: '7asib-app',
    tag: 'Mobile app',
    title: '7asib app',
    problem: 'i was working on chat project so i needed to learn mobile dev to create an app',
    solution: "i created an app as my first app turning my old website to an mobile app (Android right now)",
    outcome: "first step to learn mobile dev, i am now able to create apps using my skills on reactjs but jut a bit if changes",
    features: [
      'a copy of 7asib.vercel.app but without animation',
      'offline mode, dont need to internet connection',
      'Ad-free experience',
    ],
    stack: ["React Native", "Expo", "TypeScript", "Android"],
    status: "Live",
    result: "built to understand a new programming world",
    links: {
      github: "https://github.com/krnl0xsns1nk/7asib-app",
    },
  },

  {
    id: '7asib',
    tag: 'Education Tool',
    title: '7asib',
    problem: 'Students using the Moroccan-French grading system often rely on calculators filled with ads or manually calculate their grades.',
    solution: 'Created a free and lightweight grade calculator designed specifically for Moroccan students, providing fast calculations without advertisements or distractions.',
    outcome: 'Successfully indexed by Google and accessible through search results.',
    features: [
      'Moroccan-French grading system support',
      'Mobile-first design',
      'Android app available',
      'Fast and simple calculations',
      'Ad-free experience'
    ],
    stack: ['Next.js', 'TypeScript'],
    status: 'Live',
    result: 'Built to solve a personal problem and continues to serve students looking for a simple grading tool.',
    links: {
      live: 'https://7asib.vercel.app',
      github: 'https://github.com/krnl0xsns1nk/7asib'
    }
  },

  {
    id: 'teacher-portfolio',
    tag: 'Client Project',
    title: 'Custom Teacher Portfolio',
    problem: 'A teacher needed a professional online presence that reflected his goals, preferences, and personal brand rather than relying on generic templates.',
    solution: 'Worked directly with the client to understand his requirements and transform his ideas into a customized website tailored to his needs.',
    outcome: 'Delivered a personalized portfolio website shaped through real feedback and iteration.',
    features: [
      'Custom layout and structure',
      'Responsive design',
      'Content-focused presentation',
      'Client-driven revisions',
      'Optimized user experience'
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
    status: 'Delivered',
    result: 'Demonstrated the ability to understand client requirements and convert ideas into a functional product.',
    links: {
      live: 'https://yassinegehbal.vercel.app',
      github: 'https://github.com/krnl0xsns1nk/yassinegehbal'
    }
  }
];

const CASE_STUDIES = [
  {
    index: '01',
    title: 'Pixel2Excel — Making Grade Sheets Editable',
    status: 'Testing',
    problem: 'Teachers frequently work with photographed or scanned grade sheets. Converting this information into editable digital data is repetitive and time-consuming.',
    solution: 'Developed an AI-assisted workflow that extracts structured table data from uploaded images and presents it in an editable spreadsheet-like interface. The project is continuously improved through direct user feedback.',
    stack: ['JavaScript', 'Node.js', 'Express', 'Gemini API']
  },

  {
    index: '02',
    title: '7asib — A Grade Calculator Built From a Personal Need',
    status: 'Live',
    problem: 'Many available grade calculators either contain intrusive advertisements or fail to support the Moroccan-French grading system correctly.',
    solution: 'Built a focused Progressive Web App that helps students calculate grades quickly, accurately, and without distractions.',
    stack: ['Next.js', 'TypeScript', 'Next-PWA']
  },

  {
    index: '03',
    title: 'Custom Teacher Portfolio — Turning Requirements Into a Product',
    status: 'Delivered',
    problem: 'The client needed more than a template. He wanted a website that matched his vision, goals, and professional identity.',
    solution: 'Gathered requirements directly from the client, translated ideas into clear features, and iterated on the design based on feedback until the final result matched expectations.',
    stack: ['HTML', 'CSS', 'JavaScript']
  }
];

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((p, i) => `
    <div
      class="project-card reveal"
      style="--i: ${i}"
      data-project-id="${p.id}"
    >
      <span class="project-card__tag">${p.tag}</span>
      <h3 class="project-card__title">${p.title}</h3>
      <p class="project-card__problem">${p.problem}</p>
      <p class="project-card__solution">${p.solution}</p>
      ${p.outcome ? `<span class="project-card__outcome">${p.outcome}</span>` : ''}

      <div class="project-card__footer">
        <div class="project-card__links">
          ${p.links && p.links.live ? `
            <a href="${p.links.live}" class="project-card__link" target="_blank" rel="noopener noreferrer" aria-label="View live project" onclick="event.stopPropagation()">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <path d="M15 3h6v6"/>
                <path d="M10 14L21 3"/>
              </svg>
              Live
            </a>
          ` : ''}
          ${p.links && p.links.github ? `
            <a href="${p.links.github}" class="project-card__link" target="_blank" rel="noopener noreferrer" aria-label="View source on GitHub" onclick="event.stopPropagation()">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.22.7.83.58A12 12 0 0 0 24 12C24 5.37 18.63 0 12 0z"/>
              </svg>
              Code
            </a>
          ` : ''}
        </div>
        <span class="project-card__cta">
          Details
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </span>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.projectId));
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', 'View details');
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(card.dataset.projectId);
      }
    });
  });
}

function renderCaseStudies() {
  const list = document.getElementById('caseList');
  if (!list) return;

  list.innerHTML = CASE_STUDIES.map(c => `
    <div class="case-item reveal">
      <div class="case-item__header">
        <div class="case-item__meta">
          <span class="case-item__index">${c.index}</span>
          <h3 class="case-item__title">${c.title}</h3>
        </div>
        <span class="case-item__status ${c.status === 'Live' ? 'live' : ''}">${c.status}</span>
      </div>
      <div class="case-item__body">
        <div class="case-block">
          <p class="case-block__label">Problem</p>
          <p class="case-block__text">${c.problem}</p>
        </div>
        <div class="case-block">
          <p class="case-block__label">Approach</p>
          <p class="case-block__text">${c.solution}</p>
        </div>
      </div>
      <div class="case-item__stack">
        ${c.stack.map(s => `<span class="stack-badge">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function openModal(projectId) {
  const project = PROJECTS.find(p => p.id === projectId);
  if (!project) return;

  const overlay = document.getElementById('modalOverlay');
  const content = document.getElementById('modalContent');

  const linksHtml = (project.links && (project.links.live || project.links.github)) ? `
    <div class="modal__links">
      ${project.links.live ? `
        <a href="${project.links.live}" class="btn btn--primary btn--small" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <path d="M15 3h6v6"/>
            <path d="M10 14L21 3"/>
          </svg>
          View Live
        </a>
      ` : ''}
      ${project.links.github ? `
        <a href="${project.links.github}" class="btn btn--ghost btn--small" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.22.7.83.58A12 12 0 0 0 24 12C24 5.37 18.63 0 12 0z"/>
          </svg>
          View Code
        </a>
      ` : ''}
    </div>
  ` : '';

  content.innerHTML = `
    <p class="modal__label">${project.tag}</p>
    <h2 class="modal__title" id="modalTitle">${project.title}</h2>
    ${linksHtml}

    <div class="modal__section">
      <p class="modal__section-label">The Problem</p>
      <p class="modal__section-text">${project.problem}</p>
    </div>

    <div class="modal__divider"></div>

    <div class="modal__section">
      <p class="modal__section-label">The Solution</p>
      <p class="modal__section-text">${project.solution}</p>
    </div>

    <div class="modal__divider"></div>

    <div class="modal__section">
      <p class="modal__section-label">Key Features</p>
      <div class="modal__features">
        ${project.features.map(f => `<span class="modal__feature">${f}</span>`).join('')}
      </div>
    </div>

    <div class="modal__divider"></div>

    <div class="modal__section">
      <p class="modal__section-label">Tech Stack</p>
      <div class="modal__stack">
        ${project.stack.map(s => `<span class="stack-badge">${s}</span>`).join('')}
      </div>
    </div>

    <div class="modal__divider"></div>

    <div class="modal__section">
      <p class="modal__section-label">Result</p>
      <p class="modal__section-text">${project.result}</p>
    </div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  const firstFocusable = overlay.querySelector('button, a');
  if (firstFocusable) firstFocusable.focus();
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Close triggers
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
