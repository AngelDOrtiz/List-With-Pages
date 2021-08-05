import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useChapters } from '../../state/chapter';
import Chapter from './Chapter';

const ChapterList = () => {
  const [page, setPage] = useState(1);
  const { chapters, loading } = useChapters(page);
  if(loading) return <h1>Sailing...</h1>;

  const chapterElements = chapters.map((chapter) => (
    <li key={chapter.id}>
      <Link to={`/${chapter.id}`}>
        <Chapter {...chapter} />
      </Link>
    </li>
  ));

  return (
    <>
      <button
        disabled={page <= 1}
        onClick={() => setPage((prevPage) => prevPage - 1)}
      >
        &lt;
      </button>
      {page}
      <button onClick={() => setPage((prevPage) => prevPage + 1)}>&gt;</button>
      <ul>{chapterElements}</ul>
    </>
  );
};

export default ChapterList;
