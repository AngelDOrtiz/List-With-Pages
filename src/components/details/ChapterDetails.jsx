import React from 'react';
import { useParams } from 'react-router-dom';
import { useSingleChapter } from '../../state/chapter';

const ChapterDetails = () => {
  const { id } = useParams();
  const chapter = useSingleChapter(id);
  if(!chapter) return <h1>Sailing...</h1>;

  return (
    <section>
      <h2>Chapter Details</h2>
      <dl>
        <dt>Title</dt>
        <dd>{chapter.title}</dd>

        <dt>Chapter</dt>
        <dd>{chapter.chapter}</dd>

        <dt>Image</dt>
        <dd>
          <img src={chapter.cover_image} alt={chapter.title} />
        </dd>
      </dl>
    </section>
  );
};

export default ChapterDetails;
