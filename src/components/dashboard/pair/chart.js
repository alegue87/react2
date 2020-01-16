import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, CartesianGrid, Tooltip } from 'recharts';
import Title from '../title';

// Generate Sales Data
function createData(time, balance, equity) {
    return { time, balance, equity };
}
/*
const data = [
    createData('00:00', 0),
    createData('03:00', 300),
    createData('06:00', 600),
    createData('09:00', 800),
    createData('12:00', 1500),
    createData('15:00', 2000),
    createData('18:00', 2400),
    createData('21:00', 2400),
    createData('24:00', undefined),
];*/

export default function Chart({args}) { // destruttura da props
    var history = args.history;
    var pairName = args.pairName;
    const theme = useTheme();
    var data = [];
    history.forEach( (info) => {
        data.push(createData(info.datetime, info.balance, info.equity))
    })
    
    return (
        <React.Fragment>
            <Title>{pairName}</Title>
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 10,
                        left: 16,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
                    <YAxis stroke={theme.palette.text.secondary}>
                        <Label
                            angle={-90}
                            position="left"
                            style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
                        >
                            €
                        </Label>
                    </YAxis>
                    <Tooltip/>
                    <Line type="monotone" dataKey="balance" stroke={theme.palette.primary.main}  />
                    <Line type="monotone" dataKey="equity" stroke={theme.palette.secondary.main}  />
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}