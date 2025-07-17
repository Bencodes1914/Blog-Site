function getPostById(id) {
    const posts = JSON.parse(localStorage.getItem("blogPosts") || "[]");
    return posts.find((post) => post.id === parseInt(id));
}

function renderArticleContent(post) {
    const articleElement = document.querySelector("#article-content");
    const loadingElement = document.querySelector("#loading");
    const errorElement = document.querySelector("#error");
    const titleElement = document.querySelector("#article-title");
    const tagElement = document.querySelector("#article-tag");
    const dateElement = document.querySelector("#article-date");
    const bodyElement = document.querySelector("#article-body");

    if (!post) {
        loadingElement.style.display = "none";
        errorElement.style.display = "block";
        return;
    }

    const date = new Date(post.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    document.title = `${post.title} - TechBlog`;
    loadingElement.style.display = "none";
    articleElement.style.display = "block";
    titleElement.textContent = post.title;
    tagElement.textContent = post.tag.toUpperCase();
    tagElement.className = `tag ${post.tag.toLowerCase()}`;
    dateElement.textContent = `Published on ${date}`;
    bodyElement.innerHTML = `
        <div class="code-block" data-language="${post.tag}">
            ${post.content}
        </div>
    `;
}

function loadRecentPosts() {
    const posts = JSON.parse(localStorage.getItem("blogPosts") || "[]");
    const recentPostsContainer = document.getElementById("recent-posts");
    
    posts.slice(0, 4).forEach(post => {
        const postElement = document.createElement("li");
        postElement.innerHTML = `<a href="index.html?post=${post.id}">${post.title}</a>`;
        recentPostsContainer.appendChild(postElement);
    });
}

function goBack() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = "index.html";
    }
}

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const postId = urlParams.get("post");

    const post = getPostById(postId);
    renderArticleContent(post);
    loadRecentPosts();
    initSmoothScrolling();

    // Update category links to match filtering
    document.querySelectorAll(".tag[data-filter]").forEach(tag => {
        tag.addEventListener("click", (e) => {
            e.preventDefault();
            const category = e.target.dataset.filter;
            window.location.href = `index.html?category=${category}`;
        });
    });

    // Add scroll effect for header
    window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        if (window.scrollY > 100) {
            header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";
        } else {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        }
    });
});