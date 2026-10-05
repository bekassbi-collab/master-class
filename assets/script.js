// Add the organizer's WhatsApp number in international format, digits only.
// Example format: country code followed by the subscriber number.
const WHATSAPP_NUMBER = '77472052547';
const button = document.getElementById('registration');
const dialog = document.getElementById('registration-dialog');
if (/^\d{10,15}$/.test(WHATSAPP_NUMBER)) {
  button.textContent = 'WhatsApp арқылы жазылу';
  document.getElementById('contact-note').textContent = 'Күні мен орнын ұйымдастырушыдан нақтылаңыз.';
}
button.addEventListener('click', () => {
  if (/^\d{10,15}$/.test(WHATSAPP_NUMBER)) {
    const message = 'Сәлеметсіз бе! 7 000 теңгелік қазақ тіліндегі массаж мастер-классына жазылғым келеді. Күні мен өтетін орнын айта аласыз ба?';
    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message), '_blank', 'noopener,noreferrer');
  } else {
    dialog.showModal();
  }
});
dialog.querySelectorAll('.close, .close-dialog').forEach(close => close.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
document.getElementById('year').textContent = new Date().getFullYear();
