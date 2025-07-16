"use client";

import { AnalyticsChart } from "./analytics-graph";
import CountryStats from "./countries-stats";
import { MetricsGrid } from "./metrix";
import { chartData } from "@/const/chartData";

export function DashboardContent() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6 overflow-auto">
        {/* Metrics Grid */}
        <MetricsGrid />

        {/* Country Statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CountryStats title="Business Countries" countries={chartData} />
          {/* {/* <CountryStats
            title="Business Countries"
            countries={[
              { name: "USA", flag: "🇺🇸", count: 16 },
              { name: "Nigeria", flag: "🇳🇬", count: 12 },
              { name: "Japan", flag: "🇯🇵", count: 10 },
              { name: "France", flag: "🇫🇷", count: 8 },
              { name: "Jamaica", flag: "🇯🇲", count: 7 },
            ]}
          /> */}
          <CountryStats title={"Employee Countries"} countries={chartData} />
          {/* title="Employee Countries"
            countries={[
              { name: "USA", flag: "🇺🇸", count: 16 },
              { name: "Nigeria", flag: "🇳🇬", count: 12 },
              { name: "Japan", flag: "🇯🇵", count: 10 },
              { name: "France", flag: "🇫🇷", count: 8 },
              { name: "Jamaica", flag: "🇯🇲", count: 7 },
            ]} */}
        </div>

        {/* Analytics Chart */}
        <AnalyticsChart />
      </div>
    </div>
  );
}
