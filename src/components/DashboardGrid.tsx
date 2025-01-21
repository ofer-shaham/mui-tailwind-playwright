import React, { useState } from 'react';
import { Paper, IconButton, Typography, Box } from '@mui/material';
import { Minimize2, Maximize2 } from 'lucide-react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const DashboardItem: React.FC<{
  title: string;
  isMinimized: boolean;
  onToggleMinimize: () => void;
  children: React.ReactNode;
}> = ({ title, isMinimized, onToggleMinimize, children }) => (
  <Paper className="h-full p-4 flex flex-col">
    <div className="flex justify-between items-center mb-4">
      <Typography variant="h6">{title}</Typography>
      <IconButton onClick={onToggleMinimize} size="small">
        {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
      </IconButton>
    </div>
    <Box className={`flex-grow ${isMinimized ? 'hidden' : ''}`}>
      {children}
    </Box>
  </Paper>
);

export const DashboardGrid: React.FC = () => {
  const [minimizedItems, setMinimizedItems] = useState<Record<string, boolean>>({});
  const [layout, setLayout] = useState([
    { i: 'stats', x: 0, y: 0, w: 6, h: 4 },
    { i: 'chart', x: 6, y: 0, w: 6, h: 4 },
    { i: 'tasks', x: 0, y: 4, w: 8, h: 4 },
    { i: 'activity', x: 8, y: 4, w: 4, h: 4 },
  ]);

  const toggleMinimize = (itemId: string) => {
    setMinimizedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  return (
    <div className="p-4">
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={100}
        width={1200}
        onLayoutChange={setLayout}
        draggableHandle=".MuiTypography-h6"
      >
        <div key="stats">
          <DashboardItem
            title="Statistics"
            isMinimized={minimizedItems['stats']}
            onToggleMinimize={() => toggleMinimize('stats')}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-100 rounded">
                <Typography variant="h4">1,234</Typography>
                <Typography>Total Users</Typography>
              </div>
              <div className="p-4 bg-green-100 rounded">
                <Typography variant="h4">89%</Typography>
                <Typography>Satisfaction</Typography>
              </div>
            </div>
          </DashboardItem>
        </div>

        <div key="chart">
          <DashboardItem
            title="Analytics"
            isMinimized={minimizedItems['chart']}
            onToggleMinimize={() => toggleMinimize('chart')}
          >
            <div className="h-full flex items-center justify-center bg-gray-100">
              <Typography>Chart Placeholder</Typography>
            </div>
          </DashboardItem>
        </div>

        <div key="tasks">
          <DashboardItem
            title="Recent Tasks"
            isMinimized={minimizedItems['tasks']}
            onToggleMinimize={() => toggleMinimize('tasks')}
          >
            <div className="space-y-2">
              {['Task 1', 'Task 2', 'Task 3'].map((task) => (
                <div key={task} className="p-2 bg-gray-50 rounded">
                  {task}
                </div>
              ))}
            </div>
          </DashboardItem>
        </div>

        <div key="activity">
          <DashboardItem
            title="Activity Feed"
            isMinimized={minimizedItems['activity']}
            onToggleMinimize={() => toggleMinimize('activity')}
          >
            <div className="space-y-2">
              {['User logged in', 'New order', 'System update'].map((activity) => (
                <div key={activity} className="p-2 bg-gray-50 rounded text-sm">
                  {activity}
                </div>
              ))}
            </div>
          </DashboardItem>
        </div>
      </GridLayout>
    </div>
  );
};