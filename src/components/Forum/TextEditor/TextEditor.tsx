import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import * as Styled from './styled';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export const TextEditor = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onChange = (editorStateChange: EditorState) => {
        setEditorState(editorStateChange);
    };

    return (
        <Styled.Wrapper>
            <Editor editorState={editorState} onEditorStateChange={onChange} />
        </Styled.Wrapper>
    );
};
