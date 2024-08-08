import axios from "axios";
import { useEffect, useState } from "react";

type Dogs = {
  id: number;
  name: string;
  bred_for: string;
  reference_image_id: string;
};

type FetchDogsState = {
  dogs: Dogs[];
  loading: boolean;
  error: string | null;
};

const useFetchDogs = () => {
  const [dogsState, setDogsState] = useState<FetchDogsState>({
    dogs: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await axios.get(
          "https://api.thedogapi.com/v1/breeds?api_key=live_aUWfA5HbDKgfHOJEguwJopRePisjncm3JUq99mBygqvvjjMpYTEX7nZI6GtYLtKr"
        );
        setDogsState({
          dogs: response.data,
          loading: false,
          error: null,
        });
      } catch (error) {
        setDogsState({
          dogs: [],
          loading: false,
          error: "Failed to fetch dogs",
        });
      }
    };

    fetchDogs();
  }, []);

  return dogsState;
};

export default useFetchDogs;
