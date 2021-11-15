import React, { useState } from 'react';
import { EditorState } from 'draft-js';

import { isServer } from 'store/rootStore';

import * as Styled from './styled';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

let Editor: any;

if (!isServer) {
    // eslint-disable-next-line no-return-assign
    import('react-draft-wysiwyg').then((m) => (Editor = m.Editor));
}

export const TextEditor = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onChange = (editorStateChange: EditorState) => {
        setEditorState(editorStateChange);
    };

    return (
        <Styled.Wrapper>
            {Editor && (
                <Editor
                    editorState={editorState}
                    onEditorStateChange={onChange}
                />
            )}
        </Styled.Wrapper>
    );
};
