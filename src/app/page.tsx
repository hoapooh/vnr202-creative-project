"use client";

import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Header } from "@/components/header";
import { VideoText } from "@/components/ui/video-text";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Home() {
	return (
		<div className="min-h-screen">
			<ScrollProgress className="top-[65px]" />
			<Header />

			<div className="py-16">
				<section className="w-full h-[calc(100dvh-64px)] relative flex flex-col items-center justify-center bg-black">
					<div className="relative h-52 w-full overflow-hidden">
						<VideoText
							src="https://res.cloudinary.com/dofnn7sbx/video/upload/v1760579013/132235-752803332_small_rljhch.mp4"
							fontSize={"160"}
						>
							KHÍ THẾ MÙA THU
						</VideoText>
					</div>
					<p className="text-white text-5xl font-laco">Phong trào giải phóng dân tộc 1939 - 1945</p>
				</section>
			</div>

			<Footer />
			<ScrollToTop />
		</div>
	);
}
