import axios from "axios";

export default async function axiosAPI(path: any) {
  return axios.get(path);
}
