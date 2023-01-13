import { storiesOf } from '@storybook/react';
import React from 'react';
import SliderRail from "../components/SliderRail";

const stories = storiesOf("app", module)
stories.add("SliderRail", ()=>{
    return <SliderRail getRailProps={()=>{}}/>
})