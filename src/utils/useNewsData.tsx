import { useState, useEffect } from "react";
import { getData } from "./api/getData";

const useNewsData = () => {
  const [news, setNews] = useState<LatestNews[] | null>([]);
  
  useEffect(() => {
    getData('news')
      .then((data: LatestNews[]) => {
        setNews(data); // Save the filtered data in state
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return news;
}

export default useNewsData;