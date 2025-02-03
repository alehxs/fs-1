document.addEventListener('DOMContentLoaded', () => {
  const githubButton = document.getElementById('github-button');
  const linkedinButton = document.getElementById('linkedin-button');

  githubButton.addEventListener('click', () => {
    window.location.href = 'https://github.com/codecoogs';
  });

  linkedinButton.addEventListener('click', () => {
    window.location.href = 'https://www.linkedin.com/company/code-coogs/posts/?feedView=all';
  });
});