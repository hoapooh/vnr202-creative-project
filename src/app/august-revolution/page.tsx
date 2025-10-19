"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ScrollToTop } from "@/components/scroll-to-top";
import AugustRevolution from "@/components/section/august-revolution";

export default function AugustRevolutionPage() {
	return (
		<div className="min-h-screen">
			<ScrollProgress className="top-[65px]" />
			<Header />
			<AugustRevolution />
			<Footer />
			<ScrollToTop />
		</div>
	);
}