import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { AreaChart, Area } from 'recharts';
import { ComposedChart, Bar, Line as ComposedLine, XAxis as ComposedXAxis, YAxis as ComposedYAxis, Tooltip as ComposedTooltip, Legend as ComposedLegend } from 'recharts'; // Updated import to avoid duplicate `CartesianGrid`
import { RadarChart, Radar, PolarGrid, PolarAngleAxis } from 'recharts';
import data from '../../../data/dashboardData.json';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const ResponsiveGrid = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 0 }}>
      <Grid container spacing={3}>
        {/* Area Chart: Project Timeline */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Project Timeline
            </Typography>
            <AreaChart
              width={500}
              height={300}
              data={data.projectTimelineData}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="completed" stroke="#8884d8" fill="#8884d8" />
              <Area type="monotone" dataKey="pending" stroke="#82ca9d" fill="#82ca9d" />
            </AreaChart>
          </Paper>
        </Grid>

        {/* Composed Chart: Team Performance */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Team Performance
            </Typography>
            <ComposedChart
              width={500}
              height={300}
              data={data.teamPerformanceData}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <ComposedXAxis dataKey="name" />
              <ComposedYAxis />
              <ComposedTooltip />
              <Bar dataKey="tasks" fill="#8884d8" />
              <ComposedLine type="monotone" dataKey="tasks" stroke="#82ca9d" />
            </ComposedChart>
          </Paper>
        </Grid>

        {/* Radar Chart: Project Status */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Project Status
            </Typography>
            <RadarChart
              width={500}
              height={300}
              outerRadius="80%"
              data={data.projectStatusData}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="name" />
              <Radar
                name="Project Status"
                dataKey="value"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
            </RadarChart>
          </Paper>
        </Grid>

        {/* Line Chart: User Engagement */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              User Engagement
            </Typography>
            <LineChart
              width={500}
              height={300}
              data={data.userEngagementData}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="activeUsers" stroke="#82ca9d" />
            </LineChart>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResponsiveGrid;
