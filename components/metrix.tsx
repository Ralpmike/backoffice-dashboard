import { Card, CardContent } from "@/components/ui/card";
import { metricsData } from "@/const/chartData";

export default function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {metricsData.map((metric, index) => (
        <Card key={index} className="bg-primary border-transparent px-4 lg:p-6">
          <CardContent className="px-0">
            <div className="space-y-2 text-center md:text-left">
              <p className="text-xl text-metrics">{metric.title}</p>
              <p className="text-2xl md:text-3xl lg:text-[2rem] xl:text-[41px] font-bold text-metrics-foreground leading-[3rem]">
                {metric.value}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
