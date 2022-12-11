import React from 'react';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const data = [
    {
        "Alcohol": 1,
        "Malic Acid": 14.23,
        "Ash": 1.71,
        "Alcalinity of ash": 2.43,
        "Magnesium": 15.6,
        "Total phenols": 127,
        "Flavanoids": 2.8,
        "Nonflavanoid phenols": 3.06,
        "Proanthocyanins": ".28",
        "Color intensity": 2.29,
        "Hue": 40.88,
        "OD280/OD315 of diluted wines": 1.04,
        "Unknown": 3.92
    },
    {
        "Alcohol": 2,
        "Malic Acid": 14,
        "Ash": 11.71,
        "Alcalinity of ash": 21.43,
        "Magnesium": 1.6,
        "Total phenols": 1227,
        "Flavanoids": 2.82,
        "Nonflavanoid phenols": 32.06,
        "Proanthocyanins": ".282",
        "Color intensity": 22.29,
        "Hue": 100.64,
        "OD280/OD315 of diluted wines": 12.04,
        "Unknown": 32.92
    },
    {
        "Alcohol": 3,
        "Malic Acid": 15,
        "Ash": 88.71,
        "Alcalinity of ash": 231.43,
        "Magnesium": 13.6,
        "Total phenols": 327,
        "Flavanoids": 32.82,
        "Nonflavanoid phenols": 32.06,
        "Proanthocyanins": ".3282",
        "Color intensity": 322.29,
        "Hue": 80.64,
        "OD280/OD315 of diluted wines": 12.04,
        "Unknown": 322.92
    },
    {
        "Alcohol": 4,
        "Malic Acid": 105,
        "Ash": 118.71,
        "Alcalinity of ash": 210.43,
        "Magnesium": 130.6,
        "Total phenols": 2.27,
        "Flavanoids": 322.82,
        "Nonflavanoid phenols": 322.06,
        "Proanthocyanins": ".0222",
        "Color intensity": 1.29,
        "Hue": 30.64,
        "OD280/OD315 of diluted wines": 10.04,
        "Unknown": 322.92
    },
    {
        "Alcohol": 5,
        "Malic Acid": 65,
        "Ash": 1.71,
        "Alcalinity of ash": 10.43,
        "Magnesium": 10.6,
        "Total phenols": 29.27,
        "Flavanoids": 39.82,
        "Nonflavanoid phenols": 22.06,
        "Proanthocyanins": "222",
        "Color intensity": 21.29,
        "Hue": 88.624,
        "OD280/OD315 of diluted wines": 210.04,
        "Unknown": 22.92
    },
    {
        "Alcohol": 6,
        "Malic Acid": 65,
        "Ash": 1.71,
        "Alcalinity of ash": 10.43,
        "Magnesium": 10.6,
        "Total phenols": 29.27,
        "Flavanoids": 39.82,
        "Nonflavanoid phenols": 22.06,
        "Proanthocyanins": "222",
        "Color intensity": 11.29,
        "Hue": 108.624,
        "OD280/OD315 of diluted wines": 210.04,
        "Unknown": 22.92
    },

];



const Scatter = () => {
    return (
        <>
                <h1 style={{ textAlign:'center'}}>Scatter Chart</h1>  
                
                <LineChart
                    width={300}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Alcohol" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="Hue"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="Malic Acid" stroke="#82ca9d" />
                </LineChart>
                
            
        </>
    )
}
export default Scatter;