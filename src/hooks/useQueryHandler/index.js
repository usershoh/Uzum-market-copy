import { useQuery } from "react-query";
import { useAxios } from "../useAxios";

export const useQueryHendler = (props) => {
  const axios = useAxios();
  const { pathname, url } = props;
  return useQuery(
    pathname,
    () =>
      axios({ url })
        .then((res) => res.data)
        .catch((error) => console.log(error)),
    {
      refetchOnWindowFocus: false,
      keepPreviousData: false,
    }
  );
};


