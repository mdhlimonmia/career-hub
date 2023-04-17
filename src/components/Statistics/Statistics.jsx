import React from 'react';
import './Statistics.css'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const marks = [
        { id: 2, assignment: "Assignment-2", mark: 52 },
        { id: 3, assignment: "Assignment-3", mark: 57 },
        { id: 1, assignment: "Assignment-1", mark: 50 },
        { id: 4, assignment: "Assignment-4", mark: 55 },
        { id: 5, assignment: "Assignment-5", mark: 58 },
        { id: 6, assignment: "Assignment-6", mark: 53 },
        { id: 7, assignment: "Assignment-7", mark: 60 },
        { id: 8, assignment: "Assignment-8", mark: 60 }
      ];
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#ADD8E6', '#FFDAB9', '#E799A3', '#6A0DAD'];
    return (
        <div>
            <h1 className='statistics'>Statistics</h1>
            <h2 style={{color: "#997beb"}}>Pie Chart For Assignment Marks</h2>
            <PieChart 
                width={800} 
                height={400}
                data = {marks}
            >
                <Pie data = {marks}
                    dataKey = "mark"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    label
                >
                    {marks.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie> 
                <Pie
                    data={marks}
                    cx={720}
                    cy={250}
                    startAngle={180}
                    endAngle={0}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="mark"
                >
                    {marks.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>      
            </PieChart>
        </div>
    );
};

export default Statistics;