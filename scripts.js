document.addEventListener("DOMContentLoaded", () => {
  fetch('posts.json')
    .then(response => response.json())
    .then(posts => {
      const feed = document.getElementById('activity-feed-list');
      posts.forEach(post => {
        const div = document.createElement('div');
        div.className = 'post';
        div.innerHTML = `
          <h4>${post.title}</h4>
          <p>${post.content}</p>
          <small>${new Date(post.date).toLocaleDateString()}</small>
        `;
        feed.appendChild(div);
      });
    })
    .catch(error => {
      document.getElementById('activity-feed-list').textContent = 'Could not load activity posts.';
    });
});

