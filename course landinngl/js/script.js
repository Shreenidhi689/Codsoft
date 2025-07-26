const buttons = document.querySelectorAll('.toggle-btn');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const topics = btn.nextElementSibling;
    topics.style.display = topics.style.display === 'block' ? 'none' : 'block';
    btn.textContent = topics.style.display === 'block' ? 'Hide Topics' : 'Show Topics';
  });
});
