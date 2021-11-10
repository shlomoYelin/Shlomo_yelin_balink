import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import { DaysView } from "../Components/days-view/days-view";
import { SpecificDay } from "../Components/specific-day/specific-day";

export default function Routers(props) {//extends Component {

    const [dayDate, setDate] = useState(0);
    
    const routs = useRoutes(
        [
            {
                path: '/',
                element:
                    <DaysView
                        daysWeather={props.daysWeather}
                        data={props.data}

                        setDayDate = {(id) => {
                            setDate(id)
                        }}

                    />
            },
            {
                path: '/specificDay',
                element:
                    <SpecificDay
                        daysWeather={props.daysWeather}
                        data={props.data}
                        dayDate = {dayDate}
                    />
            }
        ]
    )

    return routs;

}