const projectData = require("../data/data")

export default function projects(_req, res) {
  res.status(200).json(projectData)
}
