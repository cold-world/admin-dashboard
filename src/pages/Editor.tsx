import React from 'react';
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from '@syncfusion/ej2-react-richtexteditor';

import { EditorData } from '../data/dummy';
import { Header } from '../components';

type Props = {};

export const Editor = (props: Props): JSX.Element => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 bg-white'>
      <Header category='App' title='Editor' />
      <RichTextEditorComponent>
        <EditorData/>
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]}/>
      </RichTextEditorComponent>
    </div>
  );
};
