import { useEffect, useState } from 'react';
import { fetchChapters, fetchSingleChapter } from '../services/onePieceApi';


export const useChapters = (page) => {
  const [loading, setLoading] = useState(true);
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    fetchChapters(page)
      .then(setChapters)
      .finally(() => setLoading(false));
  }, [page]);

  return { chapters, loading };
};

export const useSingleChapter = (id) => {
  const [chapter, setChapter] = useState(null);

  useEffect(() => {
    fetchSingleChapter(id).then(setChapter);
  }, []);
  return chapter;
};
