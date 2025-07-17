"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
import { Calendar1Icon, LucideChevronDown } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

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

export default function AnalyticsChart() {
  const [selectedMonth, setSelectedMonth] = useState("Sept");

  const selectedData = data.find((d) => d.month === selectedMonth);
  return (
    <Card className="bg-primary border-transparent">
      <CardHeader className="flex flex-row items-center justify-between pb-4 flex-wrap">
        <CardTitle className="text-2xl font-semibold">Analytics</CardTitle>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              aria-label="Select month range"
              variant="ghost"
              size="sm"
              className="text-[#586657] text-sm hover:text-gray-700 border-1 border-[#DFE5DA] rounded-full p-4 items-center gap-2"
            >
              <Calendar1Icon /> Select month range{" "}
              <LucideChevronDown className=" h-6 w-6" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto bg-white border rounded-lg p-2">
            <div className="grid grid-cols-3 gap-2">
              {data.map((item) => (
                <Button
                  aria-label={item.month}
                  key={item.month}
                  variant={item.month === selectedMonth ? "default" : "ghost"}
                  size="sm"
                  className="text-gray-500 text-sm hover:text-gray-700  p-4 items-center gap-2"
                  onClick={() => setSelectedMonth(item.month)}
                >
                  {item.month}
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            value: {
              label: "Value",
              color: "#000",
            },
          }}
          className="h-[350px] w-full "
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 20, right: 10, left: -40, bottom: 5 }}
              className="w-full"
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
                    indicator="line"
                    labelClassName="font-semibold"
                    className="bg-dark-green text-white text-center text-xs px-2 py-4 rounded-sm shadow"
                  />
                }
              />
              {selectedData && (
                <>
                  <ReferenceLine
                    x={selectedMonth}
                    stroke="#032900"
                    strokeDasharray="0"
                  />
                </>
              )}
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
