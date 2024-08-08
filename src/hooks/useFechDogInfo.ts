import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type DogInfo = {
  id: number;
  name: string;
  reference_image_id: string;
  description: string;
  bred_for: string;
  height: { imperial: number; metric: number };
  weight: { imperial: number; metric: number };
  breed_group: string;
  life_span: string;
  temperament: string;
};

type FetchDogInfoState = {
  dog: DogInfo[];
  loading: boolean;
  error: string | null;
};

const useFetchDogInfo = () => {
  const [dogInfoState, setDogInfoState] = useState<FetchDogInfoState>({
    dog: [],
    loading: true,
    error: null,
  });

  const { name } = useParams();

  useEffect(() => {
    const fetchDogInfo = async () => {
      try {
        const response = await axios.get(
          `https://api.thedogapi.com/v1/breeds/search?q=${name}`
        );
        setDogInfoState({
          dog: response.data,
          loading: false,
          error: null,
        });
        console.log(response.data);
      } catch (error) {
        setDogInfoState({
          dog: [],
          loading: false,
          error: "Failed to fetch dog info",
        });
      }
    };

    fetchDogInfo();
  }, [name]);

  return dogInfoState;
};

export default useFetchDogInfo;
