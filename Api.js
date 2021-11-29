import axios from "axios";

const URI_USERS = "http://localhost:3000/api/users";
const URI_GAMES = "http://localhost:3000/api/games";

export const getUsers = async () => {
  const response = await axios.get(URI_USERS);
  return response;
};

export const getRanking = async () => {
  const response = await axios.get(URI_USERS + "/ranking");
  return response;
};

export const getUserById = async (id) => {
  const response = await axios.get(URI_USERS + "/getId" + "/" + id.toString());
  return response;
};

export const postUser = async (user) => {
  const response = await axios.post(URI_USERS, user);
  return response;
};

export const login = async (user) => {
  const response = await axios.post(URI_USERS + "/login", user);
  return response;
};

export const getUserByEmail = async (email) => {
  const response = await axios.get(URI_USERS +"/search?email="+email.toString());
  return response;
};

export const loginGoogle = async (googleToken) => {
  const config = {
    headers: { Authorization: googleToken }
};
  const response = await axios.post(URI_USERS +"/logingoogle", config);
  return response;
};