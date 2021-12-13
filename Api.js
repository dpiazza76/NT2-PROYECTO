import axios from "axios";

const URI_USERS = "https://games-ort.herokuapp.com/api/users";
const URI_GAMES = "https://games-ort.herokuapp.com/api/games";

export const getUsers = async () => {
  const response = await axios.get(URI_USERS);
  return response;
};

export const getRanking = async (token) => {
  console.log(token)
  const response = await axios.get(URI_USERS + "/ranking",{
    headers: {
        'authorization': token,
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
    }});
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
  const response = await axios.post(URI_USERS + "/auth/local", user);
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
  const response = await axios.post(URI_USERS +"/auth/google", config);
  return response;
};

