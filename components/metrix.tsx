import { Card, CardContent } from "@/components/ui/card";

const metrics = [
  {
    title: "Total Businesses",
    value: "20",
    type: "count",
  },
  {
    title: "Total Employees",
    value: "10",
    type: "count",
  },
  {
    title: "Total Processed Payrolls",
    value: "10",
    type: "count",
  },
  {
    title: "Total Payments",
    value: "$100,000.00",
    type: "currency",
  },
  {
    title: "Total Withdrawal",
    value: "$10,000.00",
    type: "currency",
  },
  {
    title: "Revenue",
    value: "$100,000.67",
    type: "currency",
  },
];

export function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full border-1">
      {metrics.map((metric, index) => (
        <Card key={index} className="bg-white">
          <CardContent className="p-6">
            <div className="space-y-2">
              <p className="text-sm text-gray-500">{metric.title}</p>
              <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
