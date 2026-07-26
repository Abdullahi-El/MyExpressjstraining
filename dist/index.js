import express from "express";
const app = express();
const port = 3000;
app.get("/", (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        <title>My Express Website</title>

        <style>
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          body {
            font-family: Arial, Helvetica, sans-serif;
            background-color: #f4f7fb;
            color: #1f2937;
            line-height: 1.6;
          }

          header {
            background-color: #111827;
            color: white;
            padding: 20px 10%;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          header h1 {
            font-size: 24px;
          }

          nav a {
            color: white;
            text-decoration: none;
            margin-left: 20px;
          }

          nav a:hover {
            text-decoration: underline;
          }

          .hero {
            min-height: 500px;
            padding: 100px 10%;
            display: flex;
            align-items: center;
            background-color: #e8f0ff;
          }

          .hero-content {
            max-width: 700px;
          }

          .hero h2 {
            font-size: 48px;
            margin-bottom: 20px;
            color: #111827;
          }

          .hero p {
            font-size: 20px;
            margin-bottom: 30px;
            color: #4b5563;
          }

          .button {
            display: inline-block;
            background-color: #2563eb;
            color: white;
            text-decoration: none;
            padding: 12px 24px;
            border-radius: 8px;
          }

          .button:hover {
            background-color: #1d4ed8;
          }

          section {
            padding: 70px 10%;
          }

          .section-title {
            text-align: center;
            margin-bottom: 40px;
          }

          .section-title h2 {
            font-size: 34px;
            margin-bottom: 10px;
          }

          .cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
          }

          .card {
            background-color: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          }

          .card h3 {
            margin-bottom: 15px;
            color: #2563eb;
          }

          .about {
            background-color: white;
          }

          .about-content {
            max-width: 800px;
            margin: auto;
            text-align: center;
          }

          .contact {
            text-align: center;
          }

          footer {
            background-color: #111827;
            color: white;
            text-align: center;
            padding: 25px;
          }

          @media (max-width: 800px) {
            header {
              flex-direction: column;
              gap: 15px;
            }

            nav a {
              margin: 0 8px;
            }

            .hero {
              padding-top: 70px;
              padding-bottom: 70px;
            }

            .hero h2 {
              font-size: 36px;
            }

            .cards {
              grid-template-columns: 1fr;
            }
          }
        </style>
      </head>

      <body>
        <header>
          <h1>My Express Website</h1>

          <nav>
            <a href="/">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main>
          <section class="hero">
            <div class="hero-content">
              <h2>Welcome to My First Express Website</h2>

              <p>
                This website is being served by Node.js, Express and
                TypeScript. Express receives the browser request and sends
                this HTML page as the response.
              </p>

              <a class="button" href="#services">Explore Services</a>
            </div>
          </section>

          <section id="services">
            <div class="section-title">
              <h2>My Services</h2>
              <p>Some examples of what this website could offer.</p>
            </div>

            <div class="cards">
              <article class="card">
                <h3>Web Development</h3>

                <p>
                  Building responsive websites using HTML, CSS,
                  JavaScript, TypeScript and Express.
                </p>
              </article>

              <article class="card">
                <h3>Backend Development</h3>

                <p>
                  Creating servers, routes, APIs and database-powered
                  applications with Node.js.
                </p>
              </article>

              <article class="card">
                <h3>Application Design</h3>

                <p>
                  Designing clean and user-friendly interfaces for desktop
                  and mobile devices.
                </p>
              </article>
            </div>
          </section>

          <section id="about" class="about">
            <div class="about-content">
              <div class="section-title">
                <h2>About This Project</h2>
              </div>

              <p>
                This is a beginner Express project. The server was written
                with TypeScript and compiled into JavaScript. The browser
                sends a GET request to the root route, and Express responds
                with this complete HTML document.
              </p>
            </div>
          </section>

          <section id="contact" class="contact">
            <div class="section-title">
              <h2>Contact</h2>

              <p>
                You can later add a real contact form and connect it to an
                Express POST route.
              </p>
            </div>

            <a class="button" href="mailto:example@example.com">
              Send an Email
            </a>
          </section>
        </main>

        <footer>
          <p>
            &copy; ${new Date().getFullYear()} My Express Website.
            Built with Express and TypeScript.
          </p>
        </footer>
      </body>
    </html>
  `);
});
app.get("/about", (req, res) => {
    res.send(`
    <h1>About Page</h1>
    <p>This is another Express route.</p>
    <a href="/">Return home</a>
  `);
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
