import axios from "axios";

const URL = axios.create({
  baseURL: "https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos",
  headers: {
    "Content-type": "application/json"
  }
});

const create = data => {
  return URL.post("/", data);
};

const readAll = () => {
  return URL.get("/");
};

const update = (id, data) => {
  return URL.patch(`/${id}`, data);
};

const remove = id => {
  return URL.delete(`/${id}`);
};

const TutorialService = {
  readAll,
  create,
  update,
  remove,
};

export default TutorialService;