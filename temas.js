// Plantillas de diseño de Silla (las usan la app y la página de reservas)
window.SILLA_TEMAS = {
  clasico: { nombre: 'Clásico dorado', bg: '#111113', card: '#1b1b1f', card2: '#24242a', line: '#2f2f36', txt: '#f4f4f5', mut: '#9d9da8', acc: '#e3a33b', acc2: '#f3c06a', onacc: '#1a1408', claro: false },
  urbano:  { nombre: 'Urbano rojo',    bg: '#0e0e10', card: '#19191c', card2: '#232327', line: '#2f2f35', txt: '#f6f6f7', mut: '#9a9aa4', acc: '#e5484d', acc2: '#ff8589', onacc: '#ffffff', claro: false },
  acero:   { nombre: 'Azul acero',     bg: '#0c131c', card: '#132030', card2: '#1a2a3d', line: '#253a52', txt: '#eef4fb', mut: '#8ea3bb', acc: '#3d9bff', acc2: '#86c2ff', onacc: '#ffffff', claro: false },
  bosque:  { nombre: 'Verde bosque',   bg: '#0d1510', card: '#152119', card2: '#1c2b21', line: '#29402f', txt: '#eef6f0', mut: '#8fa898', acc: '#3fb871', acc2: '#7fdca6', onacc: '#08210f', claro: false },
  claro:   { nombre: 'Claro elegante', bg: '#f6f4f0', card: '#ffffff', card2: '#f0ece5', line: '#e3ded5', txt: '#1d1c1a', mut: '#6f6b64', acc: '#1d1c1a', acc2: '#9a7a3e', onacc: '#ffffff', claro: true },
  vintage: { nombre: 'Vintage burdeo', bg: '#f4ece1', card: '#fffaf3', card2: '#efe3d2', line: '#e0d1bb', txt: '#2b1d14', mut: '#7d6a58', acc: '#8b2635', acc2: '#b4504e', onacc: '#fff6ec', claro: true }
};
window.aplicarTema = function (id) {
  const t = window.SILLA_TEMAS[id] || window.SILLA_TEMAS.clasico;
  const r = document.documentElement.style;
  ['bg', 'card', 'card2', 'line', 'txt', 'mut', 'acc', 'acc2', 'onacc'].forEach(k => r.setProperty('--' + k, t[k]));
  document.documentElement.dataset.claro = t.claro ? '1' : '';
  const m = document.querySelector('meta[name=theme-color]'); if (m) m.setAttribute('content', t.bg);
  return t;
};
