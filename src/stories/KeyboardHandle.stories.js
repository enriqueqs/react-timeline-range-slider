import { storiesOf } from '@storybook/react';
import React from 'react';
import KeyboardHandle from "../components/KeyboardHandle";

const stories = storiesOf("app", module)
stories.add("KeyboardHandle", ()=>{
    return <KeyboardHandle domain={[1,5]}
    handle={{ id:"PropTypes.string.isRequired" ,value: 2,percent: 20}}
    getHandleProps={()=>{}}/>
})