"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
import {
  Calendar1Icon,
  LucideAArrowDown,
  LucideChevronDown,
} from "lucide-react";

const data = [
  { month: "Jan", value: 2700 },
  { month: "Feb", value: 2900 },
  { month: "Mar", value: 3200 },
  { month: "Apr", value: 2200 },
  { month: "May", value: 2800 },
  { month: "Jun", value: 3450 },
  { month: "Jul", value: 2300 },
  { month: "Aug", value: 2800 },
  { month: "Sept", value: 3500 },
  { month: "Oct", value: 2500 },
  { month: "Nov", value: 2900 },
  { month: "Dec", value: 3100 },
];

export function AnalyticsChart() {
  return (
    <Card className="bg-primary border-transparent">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-2xl font-semibold">Analytics</CardTitle>
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-500 hover:text-gray-700 border-1 border-[#DFE5DA] rounded-full p-4 items-center gap-2"
        >
          <Calendar1Icon /> Select month range{" "}
          <LucideChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            value: {
              label: "Value",
              color: "#000",
            },
          }}
          className="h-[300px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="hsla(81, 84%, 60%, 0.5)"
                    stopOpacity={0.7}
                  />
                  <stop
                    offset="95%"
                    stopColor="hsla(81, 84%, 60%, 0)"
                    stopOpacity={0.3}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#D0D9CA"
                vertical={true}
                horizontal
              />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#666" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#666" }}
                tickFormatter={(value) => `${value / 1000}k`}
                domain={[0, "dataMax + 1000"]}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    formatter={(value) => [`$${value.toLocaleString()}.00`]}
                  />
                }
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#032900"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorValue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
