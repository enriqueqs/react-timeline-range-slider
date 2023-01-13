import { storiesOf } from '@storybook/react';
import React from 'react';
import Handle from "../components/Handle";

const stories = storiesOf("app", module)
stories.add("handle", ()=>{
    return <Handle domain={[1,5]}
    handle={{ id:"PropTypes.string.isRequired" ,value: 2,percent: 20}}
    getHandleProps={()=>{}}/>
})