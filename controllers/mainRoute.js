const mainRoute = require("express").Router();

mainRoute.get("/", (req, res) => {
  const htmlContent = `
    <html>
      <body>
      <h1>Yovel and Yarin Backend project</h1>
      <br /> <br />
      <h1>Welcome to our Cost Manager App!</h1>
      </body>
    </html>
  `;

  res.send(htmlContent);
});

module.exports = mainRoute;
