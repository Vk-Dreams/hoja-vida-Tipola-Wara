/**
 * modo-oscuro.js
 */

document.addEventListener('DOMContentLoaded', function () {
  var boton = document.getElementById('boton-tema');
  if (!boton) return;

  var icono = boton.querySelector('.theme-toggle__icono');
  var texto = boton.querySelector('.theme-toggle__texto');

  function actualizarBoton(tema) {
    var esOscuro = tema === 'oscuro';
    boton.setAttribute('aria-pressed', String(esOscuro));
    if (texto) texto.textContent = esOscuro ? 'Modo claro' : 'Modo oscuro';
    if (icono) icono.textContent = esOscuro ? '☀️' : '🌙';
  }

  var temaActual = document.documentElement.getAttribute('data-tema') || 'claro';
  actualizarBoton(temaActual);

  boton.addEventListener('click', function () {
    temaActual = temaActual === 'oscuro' ? 'claro' : 'oscuro';
    document.documentElement.setAttribute('data-tema', temaActual);
    try {
      localStorage.setItem('tema', temaActual);
    } catch (error) {
      console.warn('No se pudo guardar la preferencia de tema.', error.message);
    }
    actualizarBoton(temaActual);
  });
});
