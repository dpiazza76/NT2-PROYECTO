import axios from "axios";

const URI_USERS = "http://localhost:3000/api/users";
const URI_GAMES = "http://localhost:3000/api/games";

export const getUsers = async () => {
  const response = await axios.get(URI_USERS);
  return response;
};

