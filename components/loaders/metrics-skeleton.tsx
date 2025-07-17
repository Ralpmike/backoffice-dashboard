import { Card, CardContent } from "../ui/card";

function MetricsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {[...Array(3)].map((_, index) => (
        <Card
          key={index}
          className="bg-primary border-transparent px-4 lg:p-6 animate-pulse"
        >
          <CardContent className="px-0">
            <div className="space-y-2 text-center md:text-left">
              <div className="h-4 w-1/3 bg-muted rounded" />
              <div className="h-8 w-2/3 bg-muted rounded" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default MetricsSkeleton;
