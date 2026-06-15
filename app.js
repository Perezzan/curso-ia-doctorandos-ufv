const grid = document.querySelector('#promptGrid');
const search = document.querySelector('#search');
const categoryFilter = document.querySelector('#categoryFilter');
const toast = document.querySelector('#toast');

const prompts = window.PROMPTS || [];
const categories = [...new Set(prompts.map(p => p.category))].sort((a, b) => a.localeCompare(b, 'es'));
for (const category of categories) {
  const option = document.createElement('option');
  option.value = category;
  option.textContent = category;
  categoryFilter.appendChild(option);
}

function normalize(text) {
  return String(text || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function render() {
  const q = normalize(search.value);
  const cat = categoryFilter.value;
  const filtered = prompts.filter(p => {
    const haystack = normalize([p.number, p.title, p.description, p.category, p.label, ...(p.materials || []).map(m => m.title), p.prompt].join(' '));
    return (cat === 'all' || p.category === cat) && (!q || haystack.includes(q));
  });

  grid.innerHTML = '';
  if (!filtered.length) {
    grid.innerHTML = '<p class="empty">No hay prompts que coincidan con la búsqueda.</p>';
    return;
  }

  filtered.forEach((p, index) => {
    const card = document.createElement('details');
    card.className = 'card';
    card.innerHTML = `
      <summary>
        <div class="title-row">
          <span class="number">${escapeHtml(p.number || String(index + 1).padStart(2, '0'))}</span>
          <h2>${escapeHtml(p.title)}</h2>
        </div>
        <p class="description">${escapeHtml(p.description)}</p>
        <div class="meta">
          <span class="tag">${escapeHtml(p.label || p.category)}</span>
        </div>
      </summary>
      <div class="content">
        ${renderPromptContent(p, index)}
        <div class="materials">
          <h3>Material asociado</h3>
          ${(p.materials || []).map(m => `<a class="material-link ${m.url === '#' ? 'disabled' : ''}" href="${escapeHtml(m.url)}" ${m.url === '#' ? 'aria-disabled="true"' : 'target="_blank" rel="noopener"'}>${escapeHtml(m.title)} <span>${escapeHtml(m.type || 'documento')}</span></a>`).join('')}
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

function escapeHtml(str) {
  return String(str).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
}

function splitPromptSteps(prompt) {
  const text = String(prompt || '');
  const re = /(Prompt\s+\d+\s+—[^\n]*\n\n)/g;
  const parts = text.split(re);
  const intro = parts.shift()?.trim();
  const steps = [];
  for (let i = 0; i < parts.length; i += 2) {
    const heading = (parts[i] || '').trim();
    const body = (parts[i + 1] || '').trim();
    if (heading && body) steps.push({ heading, body });
  }
  return { intro, steps };
}

function renderPromptContent(p, index) {
  if (p.copyMode !== 'steps') {
    return `
      <div class="prompt" id="prompt-${index}">${escapeHtml(p.prompt)}</div>
      <button class="copy" data-index="${index}">Copiar prompt ${escapeHtml(p.number || '')}</button>`;
  }
  const { intro, steps } = splitPromptSteps(p.prompt);
  const introHtml = intro ? `<p class="step-intro">${escapeHtml(intro)}</p>` : '';
  const stepsHtml = steps.map((step, stepIndex) => `
    <div class="step-block">
      <h3>${escapeHtml(step.heading)}</h3>
      <div class="prompt">${escapeHtml(step.body)}</div>
      <button class="copy copy-step" data-index="${index}" data-step="${stepIndex}">Copiar este prompt</button>
    </div>`).join('');
  return `${introHtml}<div class="steps">${stepsHtml}</div>`;
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const area = document.createElement('textarea');
    area.value = text;
    document.body.appendChild(area);
    area.select();
    document.execCommand('copy');
    area.remove();
  }
}

async function copyPrompt(index) {
  await copyText(prompts[index].prompt);
  showToast('Prompt copiado al portapapeles');
}

async function copyStep(index, stepIndex) {
  const { steps } = splitPromptSteps(prompts[index].prompt);
  await copyText(steps[stepIndex]?.body || '');
  showToast('Prompt copiado al portapapeles');
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 1800);
}

grid.addEventListener('click', e => {
  const button = e.target.closest('.copy');
  if (!button) return;
  if (button.dataset.step !== undefined) {
    copyStep(Number(button.dataset.index), Number(button.dataset.step));
  } else {
    copyPrompt(Number(button.dataset.index));
  }
});
search.addEventListener('input', render);
categoryFilter.addEventListener('change', render);
render();
