
import React, { useState } from 'react';
import AssetSummary from '@/components/dashboard/AssetSummary';
import AssetDistribution from '@/components/dashboard/AssetDistribution';
import RecentActivities from '@/components/dashboard/RecentActivities';
import PerformanceMetrics from '@/components/dashboard/PerformanceMetrics';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Sidebar isOpen={sidebarOpen} toggle={toggleSidebar} />
      
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-[70px]'}`}>
        <Header toggleSidebar={toggleSidebar} />
        
        <main className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-semibold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">Overview of your asset management system</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <AssetSummary />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AssetDistribution />
              <RecentActivities />
            </div>
            
            <PerformanceMetrics />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
