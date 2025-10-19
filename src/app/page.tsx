"use client";

import { VideoText } from "@/components/ui/video-text";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
	Carousel, 
	CarouselContent, 
	CarouselItem, 
	CarouselNext, 
	CarouselPrevious 
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
	const sections = [
		{
			id: 1,
			title: "Bối cảnh Lịch sử và Sự Chuyển hướng Chiến lược",
			description: "Tác động của CTTG thứ 2 và các hội nghị TW Đảng (1939-1941)",
			href: "/historical-context",
			period: "1939-1941",
			image: "/1.jpg"
		},
		{
			id: 2,
			title: "Xây dựng Lực lượng và Chuẩn bị Khởi nghĩa",
			description: "Thành lập Việt Minh, xây dựng lực lượng vũ trang và căn cứ địa",
			href: "/building-forces", 
			period: "1941-1945",
			image: "/2.jpg"
		},
		{
			id: 3,
			title: "Cao trào Kháng Nhật Cứu nước",
			description: "Từ sự kiện Nhật đảo chính Pháp đến chuẩn bị tổng khởi nghĩa",
			href: "/anti-japanese-movement",
			period: "3/1945 - 8/1945",
			image: "/3.jpg"
		},
		{
			id: 4,
			title: "Tổng Khởi nghĩa Tháng Tám 1945",
			description: "Giành chính quyền toàn quốc và thành lập nước VNDCCH",
			href: "/august-revolution",
			period: "Tháng 8/1945",
			image: "/4.jpg"
		},
		{
			id: 5,
			title: "Ý nghĩa Lịch sử và Bài học Kinh nghiệm",
			description: "Tầm quan trọng và các bài học từ Cách mạng Tháng Tám",
			href: "/historical-significance",
			period: "Di sản lịch sử",
			image: "/5.jpg"
		}
	];

	return (
		<div className="h-screen w-screen py-16 snap-y snap-mandatory scroll-smooth delay-200">
			<ScrollProgress className="top-[65px]" />
			<Header />

			{/* <div className="py-16 snap-y snap-mandatory scroll-smooth delay-200"> */}
				{/* Introduction */}
				<section className="w-full h-[calc(100dvh-64px)] relative flex flex-col items-center justify-center bg-black snap-start">
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

				{/* Navigation Carousel */}
				<section className="h-screen mx-auto px-6 py-16 snap-start">
					<div className="text-center space-y-6 mb-12">
						<h2 className="text-4xl font-bold text-gray-800 font-laco">
							Hành trình Lịch sử
						</h2>
						<p className="text-xl text-gray-600">
							Khám phá từng giai đoạn của cuộc cách mạng giải phóng dân tộc
						</p>
					</div>

					<Carousel
						opts={{
							align: "start",
							loop: false,
						}}
						className="w-full"
					>
						<CarouselContent className="-ml-2 md:-ml-4">
							{sections.map((section) => (
								<CarouselItem key={section.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
									<Link href={section.href}>
										<Card className="h-full cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border-0 overflow-hidden group">
											<div className="relative h-48 overflow-hidden">
												{/* Background Image */}
												<Image
													src={section.image}
													alt={section.title}
													fill
													className="object-cover transition-transform duration-300 group-hover:scale-110"
													sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
												/>
												{/* Dark overlay for better text readability */}
												<div className="absolute inset-0 bg-black/30" />
												{/* Section number overlay */}
												<div className="absolute bottom-4 left-4">
													<div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
														<span className="text-xl font-bold text-red-600">
															{section.id}
														</span>
													</div>
												</div>
												{/* Period badge */}
												<div className="absolute top-4 right-4">
													<div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
														{section.period}
													</div>
												</div>
												{/* Hover overlay */}
												<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
											</div>
											<CardHeader className="pb-3">
												<CardTitle className="text-lg leading-tight text-gray-800 line-clamp-2 group-hover:text-red-700 transition-colors">
													{section.title}
												</CardTitle>
											</CardHeader>
											<CardContent className="pt-0">
												<p className="text-sm text-gray-600 line-clamp-3 leading-relaxed mb-4">
													{section.description}
												</p>
												<div className="flex items-center text-red-600 text-sm font-medium group-hover:text-red-700 transition-colors">
													Tìm hiểu thêm
													<svg 
														className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
														fill="none" 
														stroke="currentColor" 
														viewBox="0 0 24 24"
													>
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
													</svg>
												</div>
											</CardContent>
										</Card>
									</Link>
								</CarouselItem>
							))}
						</CarouselContent>
						<div className="flex justify-center mt-8 gap-4">
							<CarouselPrevious className="relative inset-0 translate-y-0" />
							<CarouselNext className="relative inset-0 translate-y-0" />
						</div>
					</Carousel>
				</section>

				{/* Introduction Text */}
				<section className="h-screen mx-auto px-6 py-16 snap-start">
					<div className="text-center space-y-6">
						<h3 className="text-3xl font-bold text-gray-800">
							Cuộc Cách mạng Tháng Tám 1945
						</h3>
						<p className="text-lg text-gray-600 leading-relaxed">
							Cách mạng Tháng Tám năm 1945 là một trong những sự kiện quan trọng nhất trong lịch sử dân tộc Việt Nam. 
							Đây là cuộc cách mạng giải phóng dân tộc đầu tiên thành công ở một nước thuộc địa, mở ra kỷ nguyên 
							độc lập, tự do cho dân tộc Việt Nam và có tác động sâu sắc đến phong trào giải phóng dân tộc trên thế giới.
						</p>
						<div className="grid md:grid-cols-3 gap-8 mt-12">
							<div className="text-center">
								<div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
									<span className="text-2xl">🏛️</span>
								</div>
								<h4 className="font-semibold text-gray-800 mb-2">Thành lập Nhà nước</h4>
								<p className="text-sm text-gray-600">Nước Việt Nam Dân chủ Cộng hòa ra đời</p>
							</div>
							<div className="text-center">
								<div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
									<span className="text-2xl">⚔️</span>
								</div>
								<h4 className="font-semibold text-gray-800 mb-2">Giải phóng Dân tộc</h4>
								<p className="text-sm text-gray-600">Kết thúc gần 1 thế kỷ đô hộ thực dân</p>
							</div>
							<div className="text-center">
								<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
									<span className="text-2xl">🌟</span>
								</div>
								<h4 className="font-semibold text-gray-800 mb-2">Di sản Lịch sử</h4>
								<p className="text-sm text-gray-600">Bài học quý báu cho thế hệ mai sau</p>
							</div>
						</div>
					</div>
				</section>
			{/* </div> */}

			<Footer />
			<ScrollToTop />
		</div>
	);
}