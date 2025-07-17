"use client";

import dynamic from "next/dynamic";
import { chartData } from "@/const/chartData";
import MetricsSkeleton from "./loaders/metrics-skeleton";
import CountrystasSkeleton from "./loaders/countrystas-skeleton";
import AnaltyicsSkeleton from "./loaders/analtyics-skeleton";

const MetricsGrid = dynamic(() => import("./metrix"), {
  ssr: true,
  loading: () => <MetricsSkeleton />,
});
const CountryStats = dynamic(() => import("./countries-stats"), {
  ssr: true,
  loading: () => <CountrystasSkeleton />,
});
const AnalyticsChart = dynamic(() => import("./analytics-graph"), {
  ssr: true,
  loading: () => <AnaltyicsSkeleton />,
});

export function DashboardContent() {
  return (
    <article className="flex flex-col min-h-screen p-6 space-y-6 overflow-auto">
      <MetricsGrid />
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CountryStats title="Business Countries" countries={chartData} />
        <CountryStats title={"Employee Countries"} countries={chartData} />
      </section>
      <AnalyticsChart />
    </article>
  );
}
