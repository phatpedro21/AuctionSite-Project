import express from "express";
import _ from "lodash";

const App = express();

const auctionItems = [
  {
    id: 0,
    item: "item1",
    seller: "a. seller",
    currentPrice: 10
  },
  { id: 1, item: "item2", seller: "a. seller", currentPrice: 500 },
  { id: 2, item: "item3", seller: "a. seller", currentPrice: 15 },
  { id: 3, item: "item4", seller: "a. seller", currentPrice: 1 }
];

App.get("/", (req, res) => {
  console.log("'/'");
  res.send("Auction Site JS");
});

App.get("/auctions", (req, res) => {
  console.log("Fetching All Items");
  res.json(auctionItems);
});

App.get("/auctions/:id", (req, res) => {
  console.log("Fetching item ", req.params.id);
  res.json(_.find(auctionItems, (i) =>i.id = req.params.id);
});

App.listen(3007, err => {
  if (err) {
    console.log(err); //eslint-disable-line no-console
  } else {
    console.log("http://localhost:" + 3007);
  }
});

export default App;
