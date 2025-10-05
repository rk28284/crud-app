
<body>
  <div class="container">
    <h1>🧑‍💼 Employee Management System</h1>
    <p class="lead">A straightforward <strong>CRUD</strong> (Create, Read, Update, Delete) web application to manage a list of employees. Built with the MERN stack and styled with Tailwind CSS.</p>
    <div class="meta">
      <div class="badge">Frontend: React, Tailwind CSS</div>
      <div class="badge">Backend: Node, Express, MongoDB</div>
      <div class="badge">Deployed: Vercel (frontend) • Render (backend)</div>
    </div>
    <section>
      <h2>⚙️ Features</h2>
      <h3>Backend</h3>
      <ul>
        <li>RESTful API endpoints for employee management:</li>
        <pre><code>POST /api/employees/add   — Create
GET  /api/employees   — Read (all)
PUT  /api/employees/:id — Update
DELETE /api/employees/:id — Delete</code></pre>
        <li>MongoDB (Mongoose) for data modeling and persistence</li>
        <li>CORS enabled for frontend-backend communication</li>
      </ul>

  <h3>Frontend</h3>
      <ul>
        <li>Responsive table/list showing all employees</li>
        <li>Form to add new employees (name, email, position)</li>
        <li>Edit &amp; Delete actions for each employee (Edit via modal)</li>
        <li>Search / filter bar to find employees by name</li>
            <li>Search functionality to quickly filter by name</li>
        <li>Smooth modal UX for editing employee data</li>
      </ul>
    </section>

  <section>
      <h2>📦 Installation &amp; Setup</h2>
      <p class="small">Make sure you have <code>node</code> and <code>npm</code> installed.</p>

   <h4>Clone the repositories</h4>
      <pre><code>git clone &lt;your-frontend-repo-link&gt;
git clone &lt;your-backend-repo-link&gt;</code></pre>

  <h4>Backend</h4>
      <pre><code>cd backend
npm install
# create a .env with:
# MONGO_URI=your_mongodb_connection_string
# PORT=8080
      node index.js</code></pre>

   <h4>Frontend</h4>
      <pre><code>cd frontend
npm install
npm start</code></pre>
    </section>

  <section>
      <h2>🔗 Live Links</h2>
      <p class="small">Add your project URLs and repo links below:</p>
      <ul>
        <li>Frontend (Vercel): <a href="#">https://employee-management-iota-nine.vercel.app/</a></li>
        <li>Backend (Render): <a href="#">https://crud-app-q4e0.onrender.com/</a></li>
      </ul>
    </section>
    <section>
      <h2>🧑‍💻 Author</h2>
      <p>Rakesh Kumar<br>
      Full Stack Developer | MERN &amp; MEAN | Generative AI Enthusiast</p>
      <p class="small">Email: <a href="mailto:rk28284@gmail.com">rk28284@gmail.com</a> • Location: Patna, Bihar</p>
    </section>

  </div>
</body>
</html>
