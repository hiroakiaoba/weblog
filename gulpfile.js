var config = require("./gulp/config.js");
var gulp = require("gulp");
var load = require("require-dir");
var development, production;

// recurse -> 入れ子になっていても配下のファイルを全て読み込む
load("./gulp/tasks", { recurse: true });

development = [
  "copy-third_party",
  "copy-images",
  "copy-javascripts",
  "compile-sass"
];

production = [
  "copy-third_party",
  "copy-images",
  "minify-javascripts",
  "compile-sass"
];

gulp.task("default", config.env.IS_DEVELOPMENT ? development : production);