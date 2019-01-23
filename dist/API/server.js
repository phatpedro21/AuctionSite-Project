"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var App = (0, _express2.default)();

var auctionItems = [
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

App.get("/", function(req, res) {
  console.log("'/'");
  res.send("Auction Site JS");
});

App.get("/auctions", function(req, res) {
  console.log("Fetching All Items");
  res.json(auctionItems);
});

App.get("/auctions/:id", function(req, res) {
  console.log("Fetching item ", req.params.id);
  res.json(_lodash2.default.find(auctionItems, { ["id"]: req.params.id }));
});

App.listen(3007, function(err) {
  if (err) {
    console.log(err); //eslint-disable-line no-console
  } else {
    console.log("http://localhost:" + 3007);
  }
});

exports.default = App;
