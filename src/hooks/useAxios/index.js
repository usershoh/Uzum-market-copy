import axios from "axios";

export const useAxios = () => {
  const request = (props) => {
    const { url, body, method = "GET" } = props;

    return axios({
      url: `http://localhost:3000/${url}`,
      method,
      data: body,
    });
  };

  return request;
};