  
export const fetchChapters = async (page) => {
  const res = await fetch(
    'https://onepiececover.com/api/chapters'
  );
  const chapters = await res.json();
  
  return chapters.slice((page - 1) * 20, page * 20);
};
  
export const fetchSingleChapter = async (id) => {
  const res = await fetch(`https://onepiececover.com/api/chapters/${id}`);
  
  return res.json();
};
