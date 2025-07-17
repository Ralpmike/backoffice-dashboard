import { Card, CardContent, CardHeader } from "../ui/card";

function AnaltyicsSkeleton() {
  return (
    <Card className="bg-primary border-transparent animate-pulse">
      <CardHeader className="flex flex-row items-center justify-between pb-4 flex-wrap">
        <div className="h-6 w-32 bg-muted rounded" />
        <div className="h-8 w-40 bg-muted rounded-full" />
      </CardHeader>
      <CardContent>
        <div className="h-[350px] w-full bg-muted rounded-lg" />
      </CardContent>
    </Card>
  );
}

export default AnaltyicsSkeleton;
