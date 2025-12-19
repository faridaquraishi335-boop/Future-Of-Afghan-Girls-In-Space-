document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Message sent! (Demo mode)');
        });
    }

    const commentForm = document.getElementById('commentForm');
    const commentsDiv = document.getElementById('comments');
    if (commentForm && commentsDiv) {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.forEach(c => {
            const p = document.createElement('p');
            p.innerHTML = `<strong>${c.name}:</strong> ${c.text}`;
            commentsDiv.appendChild(p);
        });

        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('commentName').value;
            const text = document.getElementById('commentText').value;
            const newC = {name, text};
            comments.push(newC);
            localStorage.setItem('comments', JSON.stringify(comments));
            const p = document.createElement('p');
            p.innerHTML = `<strong>${name}:</strong> ${text}`;
            commentsDiv.appendChild(p);
            commentForm.reset();
        });
    }
});



