// Hardcoded JSON data to keep things easier to administrate
const projectData = require("../data/data")

export default function projects(_req, res) {
  res.status(200).json(projectData)
}
