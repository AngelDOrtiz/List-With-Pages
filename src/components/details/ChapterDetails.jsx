import React from 'react';
import { useParams } from 'react-router-dom';
import { useSingleChapter } from '../../state/chapter';

const ChapterDetails = () => {
  const { id } = useParams();
  const chapter = useSingleChapter(id);
  if(!chapter) return <h1>Loading...</h1>;

  return (
    <section data-testid="1">
      <h2>Villager Details</h2>
      <dl>
        <dt>Name</dt>
        <dd>{chapter.name}</dd>

        <dt>Species</dt>
        <dd>{chapter.species}</dd>

        <dt>Quote</dt>
        <dd>{chapter.quote}</dd>

        <dt>Phrase</dt>
        <dd>{chapter.phrase}</dd>

        <dt>Skill</dt>
        <dd>{chapter.skill}</dd>

        <dt>Image</dt>
        <dd>
          <img src={chapter.image} alt={chapter.name} />
        </dd>
      </dl>
    </section>
  );
};

export default ChapterDetails;
