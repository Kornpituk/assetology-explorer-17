
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Search, FileText, Download, Filter, Calendar } from "lucide-react";

const Reports = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  const reportCategories = [
    "All Reports",
    "Asset Value",
    "Depreciation",
    "Maintenance",
    "Utilization",
    "Compliance",
    "Audit"
  ];
  
  const reportsList = [
    { 
      title: "Asset Value Summary", 
      description: "Overview of total asset values by category",
      category: "Asset Value",
      lastGenerated: "2023-06-15"
    },
    { 
      title: "Annual Depreciation Report", 
      description: "Detailed depreciation calculations for all assets",
      category: "Depreciation",
      lastGenerated: "2023-05-22"
    },
    { 
      title: "Maintenance Schedule", 
      description: "Upcoming and overdue maintenance activities",
      category: "Maintenance",
      lastGenerated: "2023-06-10"
    },
    { 
      title: "Asset Utilization Analysis", 
      description: "Usage statistics and efficiency metrics",
      category: "Utilization",
      lastGenerated: "2023-06-01"
    },
    { 
      title: "Compliance Status Report", 
      description: "Regulatory compliance status for critical assets",
      category: "Compliance",
      lastGenerated: "2023-05-15"
    },
    { 
      title: "Asset Audit History", 
      description: "Complete history of asset audits and verifications",
      category: "Audit",
      lastGenerated: "2023-04-30"
    },
    { 
      title: "Asset Lifecycle Report", 
      description: "Analysis of assets through their complete lifecycle",
      category: "Asset Value",
      lastGenerated: "2023-05-05"
    },
    { 
      title: "Inventory Discrepancy Report", 
      description: "Variances between recorded and actual inventory",
      category: "Audit",
      lastGenerated: "2023-06-05"
    }
  ];
  
  const filteredReports = selectedCategory === "All Reports" 
    ? reportsList 
    : reportsList.filter(report => report.category === selectedCategory);
  
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
          <Button>
            <FileText className="h-4 w-4 mr-2" />
            Generate New Report
          </Button>
        </div>
        
        <Separator />
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search reports..." className="pl-10 w-full" />
          </div>
          
          <div className="flex gap-2 w-full md:w-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex gap-2">
                  <Filter className="h-4 w-4" />
                  <span>{selectedCategory === "All Reports" ? "Categories" : selectedCategory}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {reportCategories.map((category) => (
                  <DropdownMenuItem 
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="outline">
              <Calendar className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredReports.map((report, i) => (
            <Card key={i} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{report.title}</CardTitle>
                <CardDescription>{report.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category:</span>
                    <span>{report.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Last Generated:</span>
                    <span>{new Date(report.lastGenerated).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Format:</span>
                    <span>PDF, Excel</span>
                  </div>
                  <div className="mt-4 pt-2 border-t">
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Download Report
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;
