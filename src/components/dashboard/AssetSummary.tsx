
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, AlertTriangle, Clock, CheckCircle2 } from 'lucide-react';

const AssetSummary = () => {
  const summaryData = [
    {
      title: 'Total Assets',
      value: '2,543',
      icon: <Package className="h-5 w-5" />,
      change: '+8%',
      changeType: 'positive',
      color: 'blue'
    },
    {
      title: 'Maintenance Required',
      value: '24',
      icon: <AlertTriangle className="h-5 w-5" />,
      change: '-12%',
      changeType: 'positive',
      color: 'amber'
    },
    {
      title: 'Pending Assessments',
      value: '12',
      icon: <Clock className="h-5 w-5" />,
      change: '+3',
      changeType: 'negative',
      color: 'purple'
    },
    {
      title: 'Utilization Rate',
      value: '94%',
      icon: <CheckCircle2 className="h-5 w-5" />,
      change: '+2%',
      changeType: 'positive',
      color: 'emerald'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {summaryData.map((item, index) => (
        <Card 
          key={index} 
          className="dashboard-card overflow-hidden animate-fade-in"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <CardHeader className="pb-2 pt-4 px-6 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {item.title}
            </CardTitle>
            <div className={`p-2 rounded-full bg-${item.color}-100/40 text-${item.color}-600`}>
              {item.icon}
            </div>
          </CardHeader>
          <CardContent className="px-6 pb-4">
            <div className="text-2xl font-semibold">{item.value}</div>
            <p className={`text-xs ${item.changeType === 'positive' ? 'text-emerald-600' : 'text-red-600'} flex items-center mt-1`}>
              {item.change}
              <span className="text-muted-foreground ml-1 text-xs">from last month</span>
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AssetSummary;
