import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { AreaChart, Area } from 'recharts';
import { ComposedChart, Bar, Line as ComposedLine, XAxis as ComposedXAxis, YAxis as ComposedYAxis, Tooltip as ComposedTooltip, Legend as ComposedLegend } from 'recharts'; // Updated import to avoid duplicate `CartesianGrid`
import { RadarChart, Radar, PolarGrid, PolarAngleAxis } from 'recharts';
import data from '../../../data/dashboardData.json';

// Tailwind blue-500, white, and black colors
const COLORS = ['#3b82f6', '#000000', '#ffffff']; // blue-500, black, white

const ResponsiveGrid = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 0 }}>
      <Grid container spacing={3}>
        {/* Area Chart: Project Timeline */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 3, backgroundColor: COLORS[2] }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#3b82f6' }} gutterBottom color="textPrimary">
              Project Timeline
            </Typography>
            <Typography variant="body2" sx={{}} gutterBottom color="textPrimary">
              Gain an overview of the project’s milestones, deadlines, and key deliverables. The chart below shows the progress of completed and pending tasks over time, helping you stay on track.
            </Typography>

            <AreaChart
              width={500}
              height={300}
              data={data.projectTimelineData}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid stroke="#DCDCDC" />
              <XAxis dataKey="month" stroke={COLORS[1]} />
              <YAxis stroke={COLORS[1]} />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="completed" stroke={COLORS[0]} fill={COLORS[0]} />
              <Area type="monotone" dataKey="pending" stroke={COLORS[1]} fill={COLORS[1]} />
            </AreaChart>
          </Paper>
        </Grid>

        {/* Composed Chart: Team Performance */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 3, backgroundColor: COLORS[2] }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#3b82f6' }} gutterBottom color="textPrimary">
              Team Performance
            </Typography>
            <Typography variant="body2" sx={{}} gutterBottom color="textPrimary">
              Monitor the efficiency and output of your team members in real-time. This chart displays task completion progress and team member performance, helping identify areas for improvement.
            </Typography>

            <ComposedChart
              width={500}
              height={300}
              data={data.teamPerformanceData}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid stroke="#DCDCDC" />
              <ComposedXAxis dataKey="name" stroke={COLORS[1]} />
              <ComposedYAxis stroke={COLORS[1]} />
              <ComposedTooltip />
              <ComposedLegend />
              <Bar dataKey="tasks" fill={COLORS[0]} />
              <ComposedLine type="monotone" dataKey="tasks" stroke={COLORS[2]} />
            </ComposedChart>
          </Paper>
        </Grid>

        {/* Radar Chart: Project Status */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 3, backgroundColor: COLORS[2] }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#3b82f6' }} gutterBottom color="textPrimary">
              Project Status
            </Typography>
            <Typography variant="body2" sx={{}} gutterBottom color="textPrimary">
              Get up-to-date information on the current state of your project’s progress.
              This radar chart visualizes various key performance indicators of your project's health.
              Use this data to identify strengths and areas for improvement in your project’s trajectory.
            </Typography>


            <RadarChart
              width={500}
              height={300}
              outerRadius="80%"
              data={data.projectStatusData}
            >
              <PolarGrid stroke="#DCDCDC" />
              <PolarAngleAxis dataKey="name" stroke={COLORS[1]} />
              <Radar
                name="Project Status"
                dataKey="value"
                stroke={COLORS[0]}
                fill={COLORS[0]}
                fillOpacity={0.6}
              />
            </RadarChart>
          </Paper>
        </Grid>

        {/* Line Chart: User Engagement */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 3, backgroundColor: COLORS[2] }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold', color:'#3b82f6' }} gutterBottom color="textPrimary">
              User Engagement
            </Typography>
            <Typography variant="body2" sx={{}} gutterBottom color="textPrimary">
              Understand how users are interacting with your product and their level of engagement. This chart tracks active users over time, helping you assess user retention and engagement trends.
            </Typography>

            <LineChart
              width={500}
              height={300}
              data={data.userEngagementData}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid stroke="#DCDCDC" />
              <XAxis dataKey="day" stroke={COLORS[1]} />
              <YAxis stroke={COLORS[1]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="activeUsers" stroke={COLORS[0]} />
            </LineChart>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResponsiveGrid;
