document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('formStatus').textContent = "문의가 성공적으로 접수되었습니다. 감사합니다!";
  this.reset();
});
