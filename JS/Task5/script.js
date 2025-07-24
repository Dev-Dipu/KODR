// Store comments in local storage
let comments = JSON.parse(localStorage.getItem('comments')) || [];

// DOM Elements
const commentForm = document.getElementById('commentForm');
const commentInput = document.getElementById('commentInput');
const commentsContainer = document.getElementById('commentsContainer');

// Add new comment
commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const content = commentInput.value.trim();
    if (content) {
        const newComment = {
            id: Date.now(),
            content,
            replies: [],
            timestamp: new Date().toLocaleString()
        };
        comments.push(newComment);
        saveComments();
        renderComments();
        commentInput.value = '';
    }
});

// Add reply to a comment
function addReply(commentId) {
    const replyInput = document.getElementById(`replyInput-${commentId}`);
    const content = replyInput.value.trim();
    if (content) {
        const reply = {
            id: Date.now(),
            content,
            timestamp: new Date().toLocaleString()
        };
        const comment = comments.find(c => c.id === commentId);
        if (comment) {
            comment.replies.push(reply);
            saveComments();
            renderComments();
        }
    }
}

// Save comments to local storage
function saveComments() {
    localStorage.setItem('comments', JSON.stringify(comments));
}

// Delete a comment
function deleteComment(commentId) {
    comments = comments.filter(comment => comment.id !== commentId);
    saveComments();
    renderComments();
}

// Delete a reply
function deleteReply(commentId, replyId) {
    const comment = comments.find(c => c.id === commentId);
    if (comment) {
        comment.replies = comment.replies.filter(reply => reply.id !== replyId);
        saveComments();
        renderComments();
    }
}

// Render all comments and their replies
function renderComments() {
    commentsContainer.innerHTML = comments.map(comment => `
        <div class="border rounded-lg p-4 mb-4 bg-gray-50">
            <div class="flex justify-between items-start mb-2">
                <p class="text-gray-800">${comment.content}</p>
                <button onclick="deleteComment(${comment.id})" class="text-red-500 hover:text-red-700">Delete</button>
            </div>
            <small class="text-gray-500">${comment.timestamp}</small>
            
            <!-- Reply Form -->
            <div class="mt-4 mb-2">
                <textarea id="replyInput-${comment.id}" class="w-full p-2 border rounded-lg mb-2" placeholder="Write a reply..."></textarea>
                <button onclick="addReply(${comment.id})" class="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600">Reply</button>
            </div>

            <!-- Replies -->
            <div class="ml-8 mt-4">
                ${comment.replies.map(reply => `
                    <div class="border-l-2 border-gray-300 pl-4 mb-2">
                        <div class="flex justify-between items-start">
                            <p class="text-gray-800">${reply.content}</p>
                            <button onclick="deleteReply(${comment.id}, ${reply.id})" class="text-red-500 hover:text-red-700">Delete</button>
                        </div>
                        <small class="text-gray-500">${reply.timestamp}</small>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Initial render
renderComments();
