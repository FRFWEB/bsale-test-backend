import { getCategoryByName, getAllCategory } from "../servicies/category.js";

const getCategory = (req, res) => {
  let { name } = req.params;
  let data = getCategoryByName(name);
  data
    .then((data) => {
      res.send(data);
    })
    .catch((e) => {
      console.log(e);
    });
};

const getCategorys = (req, res) => {
  let data = getAllCategory();
  data
    .then((data) => {
      res.send(data);
    })
    .catch((e) => {
      console.log(e);
    });
};

export { getCategory, getCategorys };
