function seedBlogPosts() {
    const blogPosts = [
        {
    id: 1,
    title: "Getting Started with Vanilla JavaScript.",
    preview: "Getting Started with JavaScript (JS)'s core concepts and features. JavaScript is a versatile, high-level programming language primarily used for web development to create interactive and dynamic web pages. Here's a concise guide to start with JS.",
    content: `
        <div class="content-section">
            <h2 class="section-title">What is JavaScript?</h2>
            <div class="section-content">
                JavaScript is a dynamic, interpreted programming language that enables interactive web pages and is an essential part of web applications. Originally created by Brendan Eich at Netscape in 1995, JavaScript has evolved into one of the most popular programming languages in the world.
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title">Key Features of JavaScript</h2>
            <div class="section-content">
                <h3>1. Dynamic Typing</h3>
                <p>Variables in JavaScript don't need explicit type declarations. The type is determined at runtime:</p>
                <div class="code-block">
let name = "John";        // String
let age = 25;             // Number
let isStudent = true;     // Boolean
                </div>
            </div>

            <div class="section-content">
                <h3>2. First-Class Functions</h3>
                <p>Functions are treated as values and can be assigned to variables, passed as arguments, or returned from other functions:</p>
                <div class="code-block">
const greet = function(name) {
    return "Hello, " + name + "!";
};

const sayHello = greet;
console.log(sayHello("Alice")); // "Hello, Alice!"
                </div>
            </div>

            <div class="section-content">
                <h3>3. Prototype-based Object-Oriented Programming</h3>
                <p>JavaScript uses prototypes rather than classes for inheritance:</p>
                <div class="code-block">
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function() {
    return "Hi, I'm " + this.name + " and I'm " + this.age + " years old.";
};
                </div>
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title">Core Concepts to Master</h2>
            <div class="section-content">
                <h3>Variables and Data Types</h3>
                <p>JavaScript has several primitive data types:</p>
                <ul class="feature-list">
                    <li><strong>String:</strong> Text data ("Hello World")</li>
                    <li><strong>Number:</strong> Numeric values (42, 3.14)</li>
                    <li><strong>Boolean:</strong> true or false</li>
                    <li><strong>Undefined:</strong> Variable declared but not assigned</li>
                    <li><strong>Null:</strong> Intentional absence of value</li>
                    <li><strong>Symbol:</strong> Unique identifier (ES6+)</li>
                    <li><strong>BigInt:</strong> Large integers (ES2020+)</li>
                </ul>
            </div>

            <div class="section-content">
                <h3>Control Structures</h3>
                <p>Essential for program flow control:</p>
                <div class="code-block">
// Conditional statements
if (condition) {
    // code block
} else if (anotherCondition) {
    // code block
} else {
    // code block
}

// Loops
for (let i = 0; i < 5; i++) {
    console.log(i);
}

while (condition) {
    // code block
}
                </div>
            </div>

            <div class="section-content">
                <h3>Functions</h3>
                <p>Functions are reusable blocks of code:</p>
                <div class="code-block">
// Function declaration
function calculateArea(length, width) {
    return length * width;
}

// Arrow function (ES6+)
const multiply = (a, b) => a * b;

// Function with default parameters
function greetUser(name = "Guest") {
    return "Welcome, " + name + "!";
}
                </div>
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title">DOM Manipulation</h2>
            <div class="section-content">
                <p>JavaScript's primary strength in web development is DOM (Document Object Model) manipulation:</p>
                <div class="code-block">
// Selecting elements
const button = document.getElementById("myButton");
const paragraphs = document.querySelectorAll("p");

// Modifying content
button.textContent = "Click me!";
button.style.backgroundColor = "blue";

// Adding event listeners
button.addEventListener("click", function() {
    alert("Button clicked!");
});

// Creating new elements
const newDiv = document.createElement("div");
newDiv.innerHTML = "<h2>Dynamic Content</h2>";
document.body.appendChild(newDiv);
                </div>
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title">Modern JavaScript Features (ES6+)</h2>
            <div class="section-content">
                <h3>Destructuring</h3>
                <p>Extract values from arrays or properties from objects:</p>
                <div class="code-block">
const [first, second] = ["apple", "banana"];
const {name, age} = {name: "John", age: 25};
                </div>
            </div>

            <div class="section-content">
                <h3>Template Literals</h3>
                <p>String interpolation with backticks:</p>
                <div class="code-block">
const name = "Alice";
const message = \`Hello, \${name}! Today is \${new Date().toDateString()}\`;
                </div>
            </div>

            <div class="section-content">
                <h3>Promises and Async/Await</h3>
                <p>Handle asynchronous operations:</p>
                <div class="code-block">
// Promise
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data));

// Async/Await
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}
                </div>
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title">Best Practices</h2>
            <div class="section-content">
                <ul class="feature-list">
                    <li><strong>Use meaningful variable names:</strong> <code>userAge</code> instead of <code>ua</code></li>
                    <li><strong>Follow consistent naming conventions:</strong> camelCase for variables and functions</li>
                    <li><strong>Use strict mode:</strong> Add <code>"use strict";</code> at the beginning of your scripts</li>
                    <li><strong>Handle errors gracefully:</strong> Use try-catch blocks for error handling</li>
                    <li><strong>Comment your code:</strong> Explain complex logic and functionality</li>
                    <li><strong>Use modern syntax:</strong> Prefer <code>const</code> and <code>let</code> over <code>var</code></li>
                    <li><strong>Validate user input:</strong> Always sanitize and validate data from users</li>
                </ul>
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title">Common Pitfalls to Avoid</h2>
            <div class="section-content">
                <ul class="feature-list">
                    <li><strong>Hoisting confusion:</strong> Understand how <code>var</code>, <code>let</code>, and <code>const</code> behave differently</li>
                    <li><strong>Scope issues:</strong> Be aware of function scope vs block scope</li>
                    <li><strong>Type coercion:</strong> JavaScript's automatic type conversion can be tricky</li>
                    <li><strong><code>this</code> binding:</strong> Understand how <code>this</code> works in different contexts</li>
                    <li><strong>Callback hell:</strong> Use Promises or async/await for better asynchronous code</li>
                </ul>
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title">Next Steps</h2>
            <div class="section-content">
                <ul class="feature-list">
                    <li>Practice with coding exercises and challenges</li>
                    <li>Build small projects (calculator, todo list, weather app)</li>
                    <li>Learn about JavaScript frameworks (React, Vue, Angular)</li>
                    <li>Explore Node.js for server-side JavaScript</li>
                    <li>Study design patterns and advanced concepts</li>
                    <li>Join the JavaScript community and contribute to open source</li>
                </ul>
                <p><strong>Remember:</strong> JavaScript is constantly evolving, so stay updated with the latest features and best practices. The key to mastering JavaScript is consistent practice and building real-world projects.</p>
            </div>
        </div>
    `,
    createdAt: new Date().toISOString(),
    tag: "JavaScript"
},
           {
    id: 2,
    title: "Why HTML Semantics Matter.",
    preview: "Semantic HTML improves accessibility, SEO, and code clarity. Learn why using proper tags like <header>, <main>, and <article> matters for both users and developers.",
    content: `
        <div class="content-section">
            <h2 class="section-title">Introduction to Semantic HTML</h2>
            <div class="section-content">
                Semantic HTML refers to the use of HTML tags that convey meaning about the content within them. Instead of using generic tags like <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> for everything, semantic tags like <code>&lt;header&gt;</code>, <code>&lt;article&gt;</code>, and <code>&lt;section&gt;</code> help both developers and browsers better understand the structure and purpose of the content.
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title">Why Semantics Are Important</h2>
            <div class="section-content">
                <ul class="feature-list">
                    <li><strong>Accessibility:</strong> Screen readers and assistive technologies rely on semantic tags to present content correctly.</li>
                    <li><strong>SEO:</strong> Search engines use semantics to better index and rank your content.</li>
                    <li><strong>Maintainability:</strong> Clear structure improves readability and maintainability of code.</li>
                    <li><strong>Consistency:</strong> Standards-based code is easier for teams to collaborate on.</li>
                </ul>
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title">Examples of Semantic Elements</h2>
            <div class="section-content">
                <div class="code-block">
&lt;header&gt;Website Header&lt;/header&gt;
&lt;nav&gt;Main Navigation&lt;/nav&gt;
&lt;main&gt;
    &lt;article&gt;
        &lt;h1&gt;Article Title&lt;/h1&gt;
        &lt;p&gt;Article content...&lt;/p&gt;
    &lt;/article&gt;
&lt;/main&gt;
&lt;footer&gt;Footer Information&lt;/footer&gt;
                </div>
                <p>These tags clearly describe each section's role, making it easier for humans and machines to parse the layout.</p>
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title">When to Use Semantic Tags</h2>
            <div class="section-content">
                <ul class="feature-list">
                    <li>Use <code>&lt;article&gt;</code> for self-contained content like blog posts or news items.</li>
                    <li>Use <code>&lt;section&gt;</code> to group related content within a page.</li>
                    <li>Use <code>&lt;aside&gt;</code> for tangentially related content like sidebars.</li>
                    <li>Use <code>&lt;nav&gt;</code> for major navigation links.</li>
                    <li>Use <code>&lt;main&gt;</code> to wrap the central topic of the page.</li>
                </ul>
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title">Final Thoughts</h2>
            <div class="section-content">
                Semantic HTML isn't just about writing better code — it’s about building inclusive, discoverable, and reliable websites. Adopting semantic practices is a simple way to improve your website's structure and performance for both users and machines.
            </div>
        </div>
    `,
    createdAt: new Date().toISOString(),
    tag: "HTML"
        },
            {
    id: 3,
    title: "CSS Flexbox for Layouts.",
    preview: "Flexbox is a powerful CSS layout module that makes designing responsive, one-dimensional layouts easier and more efficient. Learn how it simplifies alignment, spacing, and distribution.",
    content: `
        <div class="content-section">
            <h2 class="section-title">Introduction to Flexbox</h2>
            <div class="section-content">
                Flexbox (Flexible Box Layout) is a CSS layout model that allows elements within a container to be automatically arranged depending on screen size or content size. It’s ideal for building responsive, single-dimensional (row or column) layouts.
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title">Basic Flexbox Syntax</h2>
            <div class="section-content">
                To use Flexbox, you apply <code>display: flex;</code> to a container element. This makes its children become flex items.
                <div class="code-block">
.container {
    display: flex;
}
                </div>
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title">Common Flexbox Properties</h2>
            <div class="section-content">
                <ul class="feature-list">
                    <li><strong>flex-direction:</strong> Defines the main axis (row, column)</li>
                    <li><strong>justify-content:</strong> Controls alignment on the main axis (start, center, space-between, etc.)</li>
                    <li><strong>align-items:</strong> Controls alignment on the cross axis</li>
                    <li><strong>flex-wrap:</strong> Allows items to wrap to the next line</li>
                    <li><strong>flex:</strong> Shorthand for grow, shrink, and basis of a flex item</li>
                </ul>
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title">Example: Horizontal Layout</h2>
            <div class="section-content">
                <div class="code-block">
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.item {
    flex: 1;
    padding: 20px;
}
                </div>
                <p>This creates a horizontal row of items that are spaced evenly and stretch to the same height.</p>
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title">Responsive Design with Flexbox</h2>
            <div class="section-content">
                Flexbox makes it easy to create layouts that adapt to different screen sizes. By combining <code>flex-wrap</code> with <code>media queries</code>, you can make your layout adjust gracefully.
                <div class="code-block">
@media (max-width: 600px) {
    .container {
        flex-direction: column;
    }
}
                </div>
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title">When to Use Flexbox</h2>
            <div class="section-content">
                <ul class="feature-list">
                    <li>Aligning items horizontally or vertically</li>
                    <li>Building responsive navigation bars or card grids</li>
                    <li>Distributing space evenly among child elements</li>
                    <li>Creating simple UI components without floats or positioning</li>
                </ul>
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title">Final Thoughts</h2>
            <div class="section-content">
                Flexbox simplifies layout tasks that were traditionally complex or required lots of hacks. Once you understand the main axis and cross axis, it becomes an essential tool for responsive design.
            </div>
        </div>
    `,
    createdAt: new Date().toISOString(),
    tag: "CSS"
        },
        {

    id: 4,
    title: "LocalStorage in Web Development.",
    preview: "Learn how to use localStorage to persist data in the browser across page reloads. It’s a simple key-value store for strings, ideal for saving user preferences or small datasets.",
    content: `
        <div class="content-section">
            <h2 class="section-title">What is localStorage?</h2>
            <div class="section-content">
                <code>localStorage</code> is a Web Storage API that allows you to store key-value pairs in a user's browser. Unlike cookies, the data doesn’t expire when the session ends — it persists until explicitly cleared.
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title">localStorage vs sessionStorage</h2>
            <div class="section-content">
                <ul class="feature-list">
                    <li><strong>localStorage:</strong> Persists indefinitely until manually cleared</li>
                    <li><strong>sessionStorage:</strong> Cleared when the browser tab is closed</li>
                    <li>Both store only strings (you can stringify objects)</li>
                    <li>Max size: ~5MB depending on the browser</li>
                </ul>
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title">Basic Usage</h2>
            <div class="section-content">
                <div class="code-block">
// Store data
localStorage.setItem('username', 'john_doe');

// Retrieve data
const user = localStorage.getItem('username');
console.log(user); // \"john_doe\"

// Remove data
localStorage.removeItem('username');

// Clear all data
localStorage.clear();
                </div>
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title">Storing Complex Data (Objects/Arrays)</h2>
            <div class="section-content">
                Because localStorage only stores strings, you must use <code>JSON.stringify()</code> and <code>JSON.parse()</code> to handle objects.
                <div class="code-block">
// Save an object
const settings = { theme: 'dark', fontSize: '16px' };
localStorage.setItem('settings', JSON.stringify(settings));

// Retrieve it later
const storedSettings = JSON.parse(localStorage.getItem('settings'));
console.log(storedSettings.theme); // \"dark\"
                </div>
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title">Common Use Cases</h2>
            <div class="section-content">
                <ul class="feature-list">
                    <li>Saving user preferences (theme, language)</li>
                    <li>Caching small datasets (API results, filters)</li>
                    <li>Storing form inputs temporarily</li>
                    <li>Tracking UI state (like sidebar collapse/expand)</li>
                </ul>
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title">Cautions and Limitations</h2>
            <div class="section-content">
                <ul class="feature-list">
                    <li><strong>No automatic expiration:</strong> You must manage cleanup manually</li>
                    <li><strong>String only:</strong> Complex data needs JSON serialization</li>
                    <li><strong>Security:</strong> Don’t store sensitive information (e.g., passwords, tokens)</li>
                    <li><strong>Size limit:</strong> Usually around 5MB — not for large datasets</li>
                </ul>
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title">Conclusion</h2>
            <div class="section-content">
                <p><code>localStorage</code> is a powerful tool for small, persistent client-side data. With careful usage and proper serialization, it’s a great way to improve UX without relying on a backend or cookies.</p>
            </div>
        </div>
    `,
    createdAt: new Date().toISOString(),
    tag: "Web API"
        },
        {
            id: 5,
    title: "How to Simulate Routing with Hashes.",
    preview: "Learn how to simulate page navigation in single-page applications using URL hash fragments. This method enables basic routing without a server or JavaScript framework.",
    content: `
        <div class="content-section">
            <h2 class="section-title">What is Hash Routing?</h2>
            <div class="section-content">
                Hash routing uses the <code>window.location.hash</code> property to simulate navigation between pages in a single-page application (SPA). It's a simple way to manage views without needing a backend server or a full router.
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title">How It Works</h2>
            <div class="section-content">
                A hash route is a fragment that follows a <code>#</code> in the URL:
                <div class="code-block">
https://example.com/#/about
https://example.com/#/contact
                </div>
                Changing the hash doesn’t reload the page but triggers a <code>hashchange</code> event, which you can listen for in JavaScript.
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title">Setting and Reading Hashes</h2>
            <div class="section-content">
                <div class="code-block">
// Set a hash
window.location.hash = '#/about';

// Get the current hash
console.log(window.location.hash); // \"#/about\"
                </div>
                <p>This allows you to simulate different views like “home”, “about”, “blog”, etc.</p>
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title">Handling Hash Changes</h2>
            <div class="section-content">
                You can use the <code>hashchange</code> event to detect changes and render different content:
                <div class="code-block">
window.addEventListener('hashchange', () => {
    const currentRoute = window.location.hash;
    renderView(currentRoute);
});
                </div>
                <p>This lets you conditionally show/hide sections or dynamically load content.</p>
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title">Example: Simple Router</h2>
            <div class="section-content">
                <div class="code-block">
function renderView(route) {
    if (route === '#/about') {
        content.innerHTML = '&lt;h1&gt;About Page&lt;/h1&gt;';
    } else if (route === '#/contact') {
        content.innerHTML = '&lt;h1&gt;Contact Page&lt;/h1&gt;';
    } else {
        content.innerHTML = '&lt;h1&gt;Home Page&lt;/h1&gt;';
    }
}
                </div>
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title">Advantages of Hash Routing</h2>
            <div class="section-content">
                <ul class="feature-list">
                    <li>✅ No server configuration needed</li>
                    <li>✅ Works on static file hosts (e.g. GitHub Pages)</li>
                    <li>✅ Simple to implement with vanilla JS</li>
                    <li>✅ Back/forward browser support</li>
                </ul>
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title">Limitations</h2>
            <div class="section-content">
                <ul class="feature-list">
                    <li>⚠️ Not SEO-friendly (search engines may ignore hashes)</li>
                    <li>⚠️ Limited to client-side routing only</li>
                    <li>⚠️ Less control compared to full-featured routers like React Router</li>
                </ul>
            </div>
        </div>

        <div class="content-section">
            <h2 class="section-title">Conclusion</h2>
            <div class="section-content">
                Hash-based routing is perfect for small SPAs or demos. It’s easy to implement, requires no dependencies, and works on any static web host. For more advanced apps, consider using a routing library or switching to the History API.
            </div>
        </div>
    `,
    createdAt: new Date().toISOString(),
    tag: "Routing"
        }
    ];

    localStorage.setItem("blogPosts", JSON.stringify(blogPosts));
    console.log("Blog posts seeded to localStorage!");
}

class QueryParams {
    static getAll() {
        const params = new URLSearchParams(window.location.search);
        const result = {};
        for (let [key, value] of params) {
            result[key] = value;
        }
        return result;
    }

    static get(key) {
        const params = new URLSearchParams(window.location.search);
        return params.get(key);
    }

    static set(key, value) {
        const params = new URLSearchParams(window.location.search);
        params.set(key, value);
        this.updateURL(params);
    }

    static remove(key) {
        const params = new URLSearchParams(window.location.search);
        params.delete(key);
        this.updateURL(params);
    }

    static update(paramsObj) {
        const params = new URLSearchParams(window.location.search);
        
        Object.entries(paramsObj).forEach(([key, value]) => {
            if (value === null || value === undefined || value === '') {
                params.delete(key);
            } else {
                params.set(key, value);
            }
        });
        
        this.updateURL(params);
    }

    static clear() {
        this.updateURL(new URLSearchParams());
    }

    static updateURL(params) {
        const newURL = params.toString() 
            ? `${window.location.pathname}?${params.toString()}`
            : window.location.pathname;
        
        window.history.pushState({}, '', newURL);
        
        window.dispatchEvent(new CustomEvent('queryParamsChanged', {
            detail: { params: this.getAll() }
        }));
    }
}

function truncateText(html, maxLength) {
    // Strip HTML tags
    const div = document.createElement('div');
    div.innerHTML = html;
    const text = div.textContent || div.innerText || "";
    
    // Truncate to maxLength
    return text.length > maxLength
        ? text.substring(0, maxLength).trim() + "..."
        : text;
}


class BlogManager {
    constructor() {
        this.posts = this.loadPosts();
        this.filteredPosts = [...this.posts];
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.applyFiltersFromURL();
        this.renderPosts();
    }

    loadPosts() {
        const stored = localStorage.getItem("blogPosts");
        return stored ? JSON.parse(stored) : [];
    }

    setupEventListeners() {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.trim();
                QueryParams.update({ search: searchTerm });
            });
        }

        const categoryTags = document.querySelectorAll('.tag[data-filter]');
        categoryTags.forEach(tag => {
            tag.addEventListener('click', (e) => {
                e.preventDefault();
                const category = e.target.dataset.filter;
                QueryParams.update({ category: category });
            });
        });

        window.addEventListener('queryParamsChanged', () => {
            this.applyFiltersFromURL();
            this.renderPosts();
        });

        window.addEventListener('popstate', () => {
            this.applyFiltersFromURL();
            this.renderPosts();
        });
    }

    applyFiltersFromURL() {
        const params = QueryParams.getAll();
        const searchTerm = params.search || '';
        const category = params.category || '';

        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = searchTerm;
        }

        document.querySelectorAll('.tag[data-filter]').forEach(tag => {
            tag.classList.remove('active');
            if (tag.dataset.filter === category) {
                tag.classList.add('active');
            }
        });

        this.filteredPosts = this.posts.filter(post => {
            const matchesSearch = !searchTerm || 
                post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.content.toLowerCase().includes(searchTerm.toLowerCase());
            
            const matchesCategory = !category || 
                post.tag.toLowerCase() === category.toLowerCase();
            
            return matchesSearch && matchesCategory;
        });
    }

    renderPosts() {
        const postsContainer = document.querySelector('.blog-posts');
        if (!postsContainer) return;

        const existingPosts = postsContainer.querySelectorAll('.blog-post');
        existingPosts.forEach(post => post.remove());

        if (this.filteredPosts.length === 0) {
            this.renderNoResults();
            return;
        }

        this.filteredPosts.forEach(post => {
            const postElement = this.createPostElement(post);
            postsContainer.appendChild(postElement);
        });
    }

    createPostElement(post) {
        const article = document.createElement('article');
        article.className = 'blog-post';
        article.dataset.category = post.tag.toLowerCase();
        article.dataset.id = post.id;

        const date = new Date(post.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        article.innerHTML = `
            <div class="post-header">
                <div>
                    <h2 class="post-title">${post.title}</h2>
                    <div class="post-meta">Published on ${date}</div>
                </div>
                <span class="post-category">${post.tag}</span>
            </div>
            <p class="post-excerpt">${post.preview || truncateText(post.content, 250)}</p>
            <a href="blog?id=${post.id}&data=yes" class="read-more" data-id="${post.id}">Read More →</a>
        `;

        const readMoreLink = article.querySelector('.read-more');
        readMoreLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.assign(`./blog/index.html?post=${post.id}`)
            console.log(`URL updated with post ID: ${post.id}`);
        });

        return article;
    }

    renderNoResults() {
        const postsContainer = document.querySelector('.blog-posts');
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.innerHTML = `
            <h3>No posts found</h3>
            <p>Try adjusting your search or filter criteria.</p>
            <button onclick="blogManager.clearFilters()" class="clear-filters-btn">Clear Filters</button>
        `;
        postsContainer.appendChild(noResults);
    }

    clearFilters() {
        QueryParams.clear();
        document.getElementById('searchInput').value = '';
        document.querySelectorAll('.tag[data-filter]').forEach(tag => {
            tag.classList.remove('active');
        });
    }

    getShareableURL() {
        return window.location.href;
    }

    filterPosts(searchTerm = '', category = '') {
        QueryParams.update({ search: searchTerm, category: category });
    }
}

function getPostById(id) {
    const posts = JSON.parse(localStorage.getItem("blogPosts") || "[]");
    return posts.find(post => post.id === parseInt(id));
}

function sharePost(postId) {
    const baseUrl = window.location.origin + window.location.pathname;
    const shareUrl = `${baseUrl}?post=${postId}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Check out this blog post',
            url: shareUrl
        });
    } else {
        navigator.clipboard.writeText(shareUrl).then(() => {
            alert('Link copied to clipboard!');
        });
    }
}

let blogManager;

document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem("blogPosts")) {
  seedBlogPosts();
}
    blogManager = new BlogManager();
    
    const postId = QueryParams.get('post');
    if (postId) {
        const post = getPostById(postId);
        if (post) {
            console.log('Loading specific post:', post);
        }
    }
});