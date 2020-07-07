"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var process_1 = require("process");
var app = express_1.default();
var port = process_1.env.PORT || 8000;
app.use(cors_1.default());
var people = {
    gabriel: "oliveira",
    jhon: "yesss"
};
app.get('/', function (request, response) {
    response.send("hello");
});
app.listen(port, function () { return console.log('Listening on port ' + port); });
