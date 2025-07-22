function checkFields() {
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();
  document.getElementById('publishBtn').disabled = !(title && content);
}

function addPost() {
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();
  if (!title || !content) return;

  const postDiv = document.createElement('div');
  postDiv.className = 'post';

  const now = new Date();
  const timestamp = now.toLocaleString();

  postDiv.innerHTML = `
    <h3>${title}</h3>
    <p>${content}</p>
    <div class="timestamp">🕒 ${timestamp}</div>
  `;

  document.getElementById('posts').prepend(postDiv);

  document.getElementById('title').value = '';
  document.getElementById('content').value = '';
  document.getElementById('publishBtn').disabled = true;
}
