import axios from "axios";

const URI_USERS = "http://localhost:3000/api/users";
const URI_GAMES = "http://localhost:3000/api/games";

export const getUsers = async () => {
  const response = await axios.get(URI_USERS);
  return response;
};

export const getRanking = async () => {
  const response = await axios.get(URI_USERS + '/ranking');
    return response;
}

export const getUserById = async (id) => {
  const response = await axios.get(URI_USERS +'/getId' + '/' + id.toString());
  return response;
}
