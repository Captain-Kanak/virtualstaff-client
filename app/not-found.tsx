import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-5">
      <h1 className="text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-2">
        404
      </h1>
      <p className="text-lg text-muted mb-8">
        Page not found. Check the URL or head back home.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          variant="brand"
          size="xl"
          nativeButton={false}
          render={<Link href="/">Back to home</Link>}
        />
        <Button variant="outline" size="xl" nativeButton={false} render={<Link href="/jobs">View jobs</Link>} />
      </div>
    </div>
  );
}
