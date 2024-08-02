import { useMutation } from "react-query";
import { useAxios } from "../useAxios";

export const useMutationHandler = ({ url, method = "PUT" }) => {
  const axios = useAxios();

  const mutation = useMutation((body) =>
    axios({ url, method, body })
      .then((res) => res.data)
      .catch((error) => {
        console.error("Ошибка при выполнении мутации:", error);
        throw error;
      })
  );

  return mutation;
};
