"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import ReactCountryFlag from "react-country-flag";

interface CountryStatProps {
  title: string;
  countries: {
    country: string;
    code: string;
    visitors: number;
  }[];
}

export default function CountryStats({ title, countries }: CountryStatProps) {
  return (
    <Card className="bg-[#f7faf7] rounded-xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-[#032900] text-lg font-semibold">
          {title}
        </CardTitle>
        <button className="text-[#032900] border border-[#d1d5db] rounded-full text-xs px-4 py-1 flex items-center gap-1 hover:bg-[#f3f4f6] transition">
          VIEW ALL <span className="text-sm">{">"}</span>
        </button>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart
            data={countries}
            layout="vertical"
            margin={{ top: 10, right: 40, bottom: 10, left: 60 }}
          >
            <XAxis type="number" hide />
            <YAxis
              type="category"
              dataKey="country"
              tickLine={false}
              axisLine={false}
              tick={({ x, y, payload }) => {
                const country = countries.find(
                  (d) => d.country === payload.value
                );
                return (
                  <g transform={`translate(${x},${y})`}>
                    <foreignObject width={140} height={40} x={-110} y={-15}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                        }}
                      >
                        <ReactCountryFlag
                          countryCode={country?.code || ""}
                          svg
                          style={{
                            width: "1.5em",
                            height: "1.5em",
                            borderRadius: "4px",
                          }}
                        />
                        <span
                          style={{
                            fontSize: "14px",
                            color: "#1f2937", // Tailwind's gray-800
                          }}
                        >
                          {payload.value}
                        </span>
                      </div>
                    </foreignObject>
                  </g>
                );
              }}
            />
            <RechartsTooltip
              cursor={{ fill: "#e5e7eb" }}
              content={({ payload }) => {
                if (!payload || payload.length === 0) return null;
                const { country, visitors } = payload[0].payload;
                return (
                  <div className="bg-white shadow-md border text-sm p-2 rounded-md">
                    <p className="font-medium">{country}</p>
                    <p>{visitors} visitors</p>
                  </div>
                );
              }}
            />
            <Bar
              dataKey="visitors"
              fill="#D9EAD3"
              radius={[4, 4, 4, 4]}
              barSize={10}
            >
              <LabelList
                dataKey="visitors"
                position="right"
                style={{ fill: "#1f2937", fontSize: 14, fontWeight: 500 }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>

      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium text-[#032900]">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-gray-500 leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
