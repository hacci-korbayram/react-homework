import { useEffect, useState } from "react";

const useFetchNewsAsync = (url, initialValue) => {
  const [data, setData] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setData(data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        setIsLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, [url]);
  return [data, setData, isLoading];
};

export default useFetchNewsAsync;
