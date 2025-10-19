"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ScrollToTop } from "@/components/scroll-to-top";
import HistoricalContext from "@/components/section/historical-context";

export default function HistoricalContextPage() {
	return (
		<div className="min-h-screen">
			<ScrollProgress className="top-[65px]" />
			<Header />
			<HistoricalContext />
			<Footer />
			<ScrollToTop />
		</div>
	);
}