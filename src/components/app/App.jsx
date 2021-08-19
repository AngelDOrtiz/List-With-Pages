import React from 'react';
import {  Switch, Route } from 'react-router-dom';
import ChapterList from '../chapters/ChapterList';
import ChapterDetails from '../details/ChapterDetails';

export default function App() {
  return (
    
    <Switch>
      <Route exact path="/" component={ChapterList} />
      <Route exact path="/:id" component={ChapterDetails} />
    </Switch>
    
  );
}
