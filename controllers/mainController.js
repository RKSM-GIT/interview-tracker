

//Get Requests

module.exports.index_get = (req, res) => {
  res.render("index.ejs");
};

module.exports.contact_get = (req, res) => {
  res.render("contact.ejs");
};

module.exports.get_404 = (req, res) => {
  res.status(404).render("404.ejs");
};