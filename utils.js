

function buildLinkToStore(link) {
  var args = {};

  args.title = link.title;
  args.created = link.created;
  args.author = link.author;
  args.fullname = link.name;
  args.url = link.url;

  return args;
}

module.exports.buildLinkToStore = buildLinkToStore;