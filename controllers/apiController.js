module.exports = {
  getTestRoute: (req, res) => {
    const data = { test: "success" };
    res.json(data);
  }
};
