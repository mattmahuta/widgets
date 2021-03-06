//
// The youtube widget allows you to easily embed videos.
//
// ```
// [[youtube/:id]]
// ```
//
// Options:
//
// ```
// aspect     desired aspect ratio [hd], sd
// ```
//
// Examples:
//
// ```
// Include video with id 1234 in standard def with autoplay
// [[youtube/1234?aspect=sd&autoplay=1]]
// ```
//
var iframe = require("../iframe/iframe");

function render(id, options) {
  options.src = "//www.youtube.com/embed/" + id;
  if (options.autoplay) options.src += "?autoplay=1";
  return iframe(options);
}

module.exports = function(widgets) {
  widgets.add("youtube/:id", render, {aspect: "hd"});
};
