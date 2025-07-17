import { Card, CardContent, CardHeader } from "../ui/card";

function CountrystasSkeleton() {
  return (
    <Card className="bg-primary rounded-[2rem] border-transparent animate-pulse">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="h-4 w-32 bg-muted rounded" />
        <div className="h-6 w-20 bg-muted rounded-full" />
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-6 h-6 bg-muted rounded-sm" />
              <div className="w-full h-3 bg-muted rounded" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default CountrystasSkeleton;
