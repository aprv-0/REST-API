// Event listener for fetching all data when the "fetch-all" button is clicked
document.getElementById('fetch-all').addEventListener('click', fetchAllData);

// Event listener for fetching posts when the "fetch-posts" button is clicked
document.getElementById('fetch-posts').addEventListener('click', fetchPosts);

// Event listener for fetching user details when the "fetch-user-details" button is clicked
document.getElementById('fetch-user-details').addEventListener('click', fetchUser);

// Event listener for fetching user details when the "fetch-user-details" button is clicked
document.getElementById('fetch-comments').addEventListener('click', fetchComments);

// Event listener for clearing all fetched data when the "fetch-clear-all" button is clicked
document.getElementById('clear-all').addEventListener('click', clearAll);


// Function to fetch both posts and user details simultaneously
function fetchAllData() {
    // Fetch both posts and users data using Promise.all
    Promise.all([
        fetch('https://jsonplaceholder.typicode.com/posts'),
        fetch('https://jsonplaceholder.typicode.com/users'),
        fetch('https://jsonplaceholder.typicode.com/comments')
    ])
    // Convert responses to JSON
    .then(responses => Promise.all(responses.map(response => response.json())))
    // Process the received data
    .then(([posts, users, comments]) => {
        // Display posts data
        displayPosts(posts);
        // Display user details data
        displayUsers(users);
        // Display user details data
        displayComments(comments);
    })
    // Handle errors
    .catch(error => console.error('Error fetching data:', error));
}

// Function to fetch posts data
function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            // Get the posts container
            const postsContainer = document.getElementById('posts-container');
            // Clear previous content
            postsContainer.innerHTML = '';
            // Iterate over each post and display it
            data.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                `;
                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error fetching posts:', error));
}

// Function to display posts data
function displayPosts(posts) {
    // Get the posts container
    const postsContainer = document.getElementById('posts-container');
    // Clear previous content
    postsContainer.innerHTML = '';
    // Iterate over each post and display it
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Function to fetch user details data
function fetchUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            // Get the user details container
            const userDetailsContainer = document.getElementById('user-details-container');
            // Clear previous content
            userDetailsContainer.innerHTML = '';
            // Iterate over each user and display details
            data.forEach(user => {
                const userElement = document.createElement('div');
                userElement.classList.add('user');
                userElement.innerHTML = `
                    <h2>${user.name}</h2>
                    <p>Email: ${user.email}</p>
                    <p>Phone: ${user.phone}</p>
                    <p>Website: ${user.website}</p>
                `;
                userDetailsContainer.appendChild(userElement);
            });
        })
        .catch(error => console.error('Error fetching users:', error));
}

// Function to display user details data
function displayUsers(users) {
    // Get the user details container
    const userDetailsContainer = document.getElementById('user-details-container');
    // Clear previous content
    userDetailsContainer.innerHTML = '';
    // Iterate over each user and display details
    users.forEach(user => {
        const userElement = document.createElement('div');
        userElement.classList.add('user');
        userElement.innerHTML = `
            <h2>${user.name}</h2>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <p>Website: ${user.website}</p>
        `;
        userDetailsContainer.appendChild(userElement);
    });
}

// Function to fetch posts comments
function fetchComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => {
            // Get the comments-container container
            const commentsContainer = document.getElementById('comments-container');
            // Clear previous content
            commentsContainer.innerHTML = '';
            // Iterate over each post and display it
            data.forEach(comments => {
                const commentElement = document.createElement('div');
                commentElement.classList.add('comments');
                commentElement.innerHTML = `
                    <h2>${comments.name}</h2>
                    <p>${comments.email}</p>
                    <p>${comments.body}</p>
                `;
                commentsContainer.appendChild(commentElement);
            });
        }).catch(error => console.error('Error fetching posts:', error));
}

// Function to display post comments data
function displayComments(comments) {
    // Get the comments-container container
    const commentsContainer = document.getElementById('comments-container');
    // Clear previous content
    commentsContainer.innerHTML = '';
    // Iterate over each post and display it
    comments.forEach(comments => {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comments');
        commentElement.innerHTML = `
            <h2>${comments.name}</h2>
            <p>${comments.email}</p>
            <p>${comments.body}</p>
        `;
        commentsContainer.appendChild(commentElement);
    });
}

//Function to clear all fetched data
function clearAll() {
    // Get the posts container
    const postsContainer = document.getElementById('posts-container');
    // Clear previous content
    postsContainer.innerHTML = '';
    // Get the user details container
    const userDetailsContainer = document.getElementById('user-details-container');
    // Clear previous content
    userDetailsContainer.innerHTML = '';
    // Get the comments-container container
    const commentsContainer = document.getElementById('comments-container');
    // Clear previous content
    commentsContainer.innerHTML = '';
}