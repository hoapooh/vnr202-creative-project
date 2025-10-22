import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

export function InteractiveHoverButton({
	children,
	className,
	...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			className={cn(
				"group/interactive bg-background relative w-auto cursor-pointer overflow-hidden rounded-full border p-2 px-6 text-center font-semibold",
				className
			)}
			{...props}
		>
			<div className="flex items-center gap-2">
				<div className="bg-primary h-2 w-2 rounded-full transition-all duration-300 group-hover/interactive:scale-[100.8]"></div>
				<span className="inline-block transition-all duration-300 group-hover/interactive:translate-x-12 group-hover/interactive:opacity-0">
					{children}
				</span>
			</div>
			<div className="text-primary-foreground absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover/interactive:-translate-x-5 group-hover/interactive:opacity-100">
				<span>{children}</span>
				<ArrowRight />
			</div>
		</button>
	);
}
