
const cards = document.querySelector('#cards');
const toc = document.querySelector('#toc-links');
const count = document.querySelector('#count');
const missing = document.querySelector('#missing');
const data = window.INSTITUTIONS || [];
const escapeHtml = (value='') => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
function render(filter='All'){
  const filtered = filter === 'All' ? data : data.filter(d => d.city === filter);
  cards.innerHTML = filtered.map(d => {
    const img = d.image_paths && d.image_paths.length ? `<img src="${escapeHtml(d.image_paths[0])}" alt="${escapeHtml(d.institution_name)} archival or reference image" loading="lazy">` : `<div class="placeholder"><div><strong>${escapeHtml(d.institution_name.split(/\s+/).slice(0,2).join(' '))}</strong><span>Image pending / no photo supplied</span></div></div>`;
    const body = d.text ? escapeHtml(d.text) : 'Spreadsheet text pending. Add a verified description in StoryMap_Text_Photos and regenerate the story map data.';
    const notice = d.text ? '' : '<div class="notice">Narrative text is missing in the provided spreadsheet.</div>';
    return `<article class="profile-card" id="${escapeHtml(d.slug)}" data-city="${escapeHtml(d.city)}">
      <div class="profile-grid">
        <div class="media-panel">${img}</div>
        <div class="content-panel">
          <div class="eyebrow">${escapeHtml(d.city)} · ${escapeHtml(d.corridor)}</div>
          <h2>${escapeHtml(d.institution_name)}</h2>
          <p class="dek">${escapeHtml(d.excerpt)}</p>
          <div class="meta" aria-label="institution profile facts">
            <div><b>City</b><span>${escapeHtml(d.city)}</span></div>
            <div><b>Institution Layer</b><span>${escapeHtml(d.layer)}</span></div>
            <div><b>Corridor / Network</b><span>${escapeHtml(d.corridor)}</span></div>
            <div><b>StoryMap Status</b><span>${d.text_status === 'available' ? 'Text loaded' : 'Text pending'} / ${d.image_status === 'available' ? 'Image loaded' : 'Image pending'}</span></div>
          </div>
          <div class="section-title">Profile Narrative</div>
          <div class="body-text">${body}</div>
          ${notice}
          <div class="status-row"><span class="pill good">From spreadsheet</span><span class="pill">${escapeHtml(d.layer)}</span></div>
        </div>
      </div>
    </article>`;
  }).join('');
  toc.innerHTML = filtered.map(d => `<a href="#${escapeHtml(d.slug)}">${escapeHtml(d.institution_name)}<small>${escapeHtml(d.city)}</small></a>`).join('');
  count.textContent = `${filtered.length} institution profiles`;
  const missingRows = filtered.filter(d => d.text_status !== 'available' || d.image_status !== 'available').length;
  missing.textContent = `${missingRows} need text and/or image follow-up`;
}
document.querySelectorAll('.filter').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  render(btn.dataset.filter);
  window.scrollTo({top: document.querySelector('.layout').offsetTop - 60, behavior:'smooth'});
}));
render();
