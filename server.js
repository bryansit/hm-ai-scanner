async function fetchAIRecommendation() {
  const el = document.getElementById('ai-content');
  
  // Loading realista
  el.innerHTML = `
      <div style="display:flex;align-items:center;gap:8px;margin:12px 0">
          <div class="ai-loading">
              <div class="dot"></div><div class="dot"></div><div class="dot"></div>
          </div>
          <span style="font-size:10px;color:#ccc">IA analizando...</span>
      </div>
  `;

  // Datos personalizados según género
  const genderEmoji = selectedGender === 'M' ? '💪' : '✨';
  const styles = selectedGender === 'M' ? 
      ['Look urbano perfecto', 'Estilo atlético total', 'Street style 2026'] :
      ['Elegante y comfy', 'Look goddess', 'Trendy total'];
  
  const items = CATALOG[selectedGender];
  const item1 = items[0].name;
  const item2 = items[Math.floor(Math.random() * items.length)].name;
  
  // Simula tiempo de procesamiento IA (1.8s)
  setTimeout(() => {
      const recommendation = `${genderEmoji} ${item1} + ${item2}. ${styles[Math.floor(Math.random()*styles.length)]}. ¡Perfecto para ti!`;
      el.innerHTML = `<div class="ai-text">${recommendation}</div>`;
  }, 1800);
}