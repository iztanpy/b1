const QuoteController = require("./controllers/QuoteController.js");

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", QuoteController.getAllQuotes);

app.post("/post", QuoteController.addQuote);

app.put("/put", QuoteController.addQuote);

app.delete("/delete", QuoteController.deleteLastQuote);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
