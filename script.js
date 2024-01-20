// script.js
async function fetchRepos() {
    const username = document.getElementById('username').value;
    const repoList = document.getElementById('repoList');
    
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      const repositories = await response.json();
  
      repoList.innerHTML = '';
  
      repositories.forEach(repo => {
        const repoItem = document.createElement('li');
        repoItem.classList.add('repoItem');
        repoItem.innerHTML = `
          <strong>${repo.name}</strong> - ${repo.description || 'No description available.'}<br>
          Language: ${repo.language || 'Not specified'}<br>
          <a href="${repo.html_url}" target="_blank">View on GitHub</a>
        `;
        repoList.appendChild(repoItem);
      });
    } catch (error) {
      console.error('Error fetching repositories:', error.message);
      repoList.innerHTML = '<li class="repoItem">Error fetching repositories. Please check the username and try again.</li>';
    }
  }
  