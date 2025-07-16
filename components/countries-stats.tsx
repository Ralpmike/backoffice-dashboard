"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideChevronRight, TrendingUp } from "lucide-react";
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
import { Button } from "./ui/button";

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
    <Card className="bg-primary rounded-[2rem] border-transparent">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-dark-green text-lg font-semibold">
          {title}
        </CardTitle>
        <Button className="text-light-green shadow-none !bg-none border border-[#d1d5db] rounded-full text-xs px-4 py-1 flex items-center gap-1 hover:bg-[#f3f4f6] transition ">
          VIEW ALL{" "}
          <LucideChevronRight size={16} className="text-lighter-green" />
        </Button>
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
                    <p className="font-normal texr-[18px]">{country}</p>
                    <p>{visitors} visitors</p>
                  </div>
                );
              }}
            />
            <Bar
              dataKey="visitors"
              fill="#DFE5DA"
              radius={[4, 4, 4, 4]}
              barSize={8}
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
    </Card>
  );
}
