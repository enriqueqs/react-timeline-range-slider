import { useArgs } from "@storybook/addons";
import { endOfToday } from "date-fns";
import React from 'react';
import TimeRange from "../components/TimeRange";




const getTodayAtSpecificHour = (hour = 12) =>
  {return new Date(new Date().setHours(hour, 0, 0, 0))}
const selectedStart = getTodayAtSpecificHour();
const selectedEnd = getTodayAtSpecificHour(14);
const twoDaysAgo =  getTodayAtSpecificHour(0)
twoDaysAgo.setDate(twoDaysAgo.getDate() - 5);
const startTime = twoDaysAgo;
const endTime = endOfToday();

export default {
    title: "timerange comp",
    component: TimeRange,
    args: {
        ticksNumber: 12,
selectedInterval: [selectedStart, selectedEnd],
timelineInterval: [startTime,endTime]
    }
}


const Template = args =><TimeRange {...args}/>

export const Default = Template.bind({})

Default.args= {
ticksNumber: 12,
selectedInterval: [selectedStart, selectedEnd],
timelineInterval: [startTime,endTime]
}

export const WithInteraction = (args)=>{
    const [{error, selectedInterval}, updateArgs]= useArgs();
    const errorHandler = ()=>updateArgs({error: !error});
    const onChangeCallback = (date)=>updateArgs({selectedInterval: date});

    return <TimeRange error={false}
    ticksNumber={12}
    selectedInterval={selectedInterval}
    onUpdateCallback={errorHandler}
    onChangeCallback={onChangeCallback}
    />
}
