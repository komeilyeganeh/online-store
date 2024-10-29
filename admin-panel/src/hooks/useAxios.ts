import axios from "axios";
import { UseAxiosProps } from "./useAxios.type";
import { useEffect, useState } from "react";
import { API_URL } from "../config/config";

export const useAxios = ({ url, method }: UseAxiosProps) => {
  // ---- hooks ----
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const fetchData = () => {
    axios[method](`${API_URL}${url}`)
      .then((res: any) => {
        setResponse(res.data);
      })
      .catch((err: string) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, [method, url]);

  return { response, error, loading };
};
