  
export const fetchChapters = async (page) => {
  const res = await fetch(
    'https://ac-vill.herokuapp.com/villagers'
  );
  const chapters = await res.json();
  
  return chapters.slice((page - 1) * 20, page * 20);
};
  
export const fetchSingleChapter = async (id) => {
  const res = await fetch(`https://ac-vill.herokuapp.com/villagers/${id}`);
  
  return res.json();
};
