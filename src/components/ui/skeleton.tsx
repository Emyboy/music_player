import { cn } from "@/lib/utils";

function Skeleton({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "animate-pulse rounded-md bg-gray-100 dark:bg-gray-800 opacity-10",
                className,
            )}
            {...props}
        />
    );
}

export { Skeleton };
