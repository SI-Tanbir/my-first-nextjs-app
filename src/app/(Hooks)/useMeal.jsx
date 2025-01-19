
import { useQuery } from '@tanstack/react-query';

const useMeal = ({ keyword }) => {
  // Using React Query to fetch meal data
  const {
    data: mealDb,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['meal', keyword], // Query key should be an array for better caching
    queryFn: async () => {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${keyword}`);
      if (!res.ok) {
        throw new Error('Failed to fetch data'); // Handle errors
      }
      return res.json(); // Return the JSON response
    },
    enabled: !!keyword, // Fetch only if keyword is provided
  });

  return { mealDb, isLoading, isError, error, refetch };
};

export default useMeal;
