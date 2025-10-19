"use client";

import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Home() {
	return (
		<div className="min-h-screen snap-y snap-mandatory">
			<ScrollProgress className="top-[65px]" />
			<Header />

			{/* Introduction section */}
			<div className="py-16">
				<section className="w-full h-[calc(100dvh-64px)] relative flex flex-col items-center justify-center overflow-hidden">
					{/* Background Video */}
					<video
						className="absolute inset-0 w-full h-full object-cover z-0"
						src="https://res.cloudinary.com/dofnn7sbx/video/upload/v1760579013/132235-752803332_small_rljhch.mp4"
						autoPlay
						loop
						muted
						playsInline
					/>

					{/* Dark overlay for better text readability */}
					<div className="absolute inset-0 bg-black/50 z-10"></div>

					{/* Text content */}
					<div className="relative z-20 text-center">
						<h1 className="text-white text-9xl font-laco mb-8">
							<span className="text-yellow-500">KHÍ T</span>
							<span className="text-red-500">HẾ MÙ</span>
							<span className="text-yellow-500">A THU</span>
						</h1>
						<p className="text-white text-5xl font-laco">
							Phong trào giải phóng dân tộc 1939 - 1945
						</p>
					</div>
				</section>

				{/* Historical Content Section */}
				<section className="max-w-6xl mx-auto px-6 py-16 space-y-12">
					{/* Introduction */}
					<div className="text-center space-y-4">
						<h1 className="text-4xl font-bold text-gray-800">
							Bối cảnh Lịch sử và Sự Chuyển hướng Chiến lược của Đảng
						</h1>
						<p className="text-xl text-gray-600">(1939-1941)</p>
					</div>

					{/* World War II Impact */}
					<Card className="shadow-lg">
						<CardHeader>
							<CardTitle className="text-2xl text-blue-700 flex items-center gap-2">
								<span className="w-2 h-2 bg-blue-700 rounded-full"></span>
								Tác động của Chiến tranh Thế giới thứ hai
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="grid gap-6">
								<div className="flex gap-4">
									<Badge variant="outline" className="min-w-fit">
										Tháng 9/1939
									</Badge>
									<p className="text-gray-700">
										Chiến tranh Thế giới thứ hai bùng nổ. Chính phủ Pháp tăng cường đàn áp phong
										trào cách mạng ở thuộc địa, đặt Đảng Cộng sản Đông Dương ra ngoài vòng pháp
										luật.
									</p>
								</div>
								<div className="flex gap-4">
									<Badge variant="outline" className="min-w-fit">
										Tháng 6/1940
									</Badge>
									<p className="text-gray-700">Đức tấn công và chiếm đóng Pháp.</p>
								</div>
								<div className="flex gap-4">
									<Badge variant="outline" className="min-w-fit">
										Tháng 9/1940
									</Badge>
									<p className="text-gray-700">
										Quân phiệt Nhật tiến vào Đông Dương. Thực dân Pháp đầu hàng và câu kết với Nhật,
										đẩy nhân dân Đông Dương vào tình cảnh{" "}
										<span className="font-semibold">&ldquo;một cổ hai tròng&rdquo;</span>.
									</p>
								</div>
								<div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
									<h4 className="font-semibold text-red-800 mb-2">Chính sách của Pháp-Nhật:</h4>
									<p className="text-red-700">
										Thực dân Pháp thi hành chính sách thời chiến, phát xít hóa bộ máy thống trị, và
										thực hiện &ldquo;kinh tế chỉ huy&rdquo; để vơ vét sức người, sức của phục vụ
										chiến tranh.
									</p>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Central Committee Meetings */}
					<Card className="shadow-lg">
						<CardHeader>
							<CardTitle className="text-2xl text-green-700 flex items-center gap-2">
								<span className="w-2 h-2 bg-green-700 rounded-full"></span>
								Các Hội nghị Trung ương và Sự hình thành Đường lối Mới
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-8">
							{/* 1939 Meeting */}
							<div className="space-y-4">
								<div className="flex items-center gap-3">
									<Badge className="bg-green-100 text-green-800 border-green-300">11/1939</Badge>
									<h3 className="text-lg font-semibold">
										Hội nghị Trung ương Đảng tại Bà Điểm, Hóc Môn
									</h3>
								</div>
								<div className="pl-6 space-y-3">
									<div className="space-y-2">
										<h4 className="font-medium text-gray-800">Nhận định:</h4>
										<p className="text-gray-700 italic bg-gray-50 p-3 rounded">
											&ldquo;Bước đường sinh tồn của các dân tộc Đông Dương không có con đường nào
											khác hơn là con đường đánh đổ đế quốc Pháp, chống tất cả ách ngoại xâm... để
											giành lấy giải phóng độc lập&rdquo;
										</p>
									</div>
									<div className="grid md:grid-cols-2 gap-4">
										<div>
											<h4 className="font-medium text-gray-800 mb-2">Chủ trương:</h4>
											<ul className="list-disc list-inside space-y-1 text-gray-700">
												<li>Đặt nhiệm vụ giải phóng dân tộc lên hàng đầu</li>
												<li>Quyền lợi của giai cấp phải đặt dưới sự sinh tử của dân tộc</li>
											</ul>
										</div>
										<div>
											<h4 className="font-medium text-gray-800 mb-2">Khẩu hiệu:</h4>
											<p className="text-gray-700">
												Tạm gác khẩu hiệu &ldquo;cách mạng ruộng đất&rdquo;, thay bằng các khẩu hiệu
												chống địa tô cao, chống cho vay lãi nặng.
											</p>
										</div>
									</div>
									<div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
										<h4 className="font-medium text-blue-800 mb-1">Tổ chức:</h4>
										<p className="text-blue-700">
											Chủ trương thành lập &ldquo;Mặt trận dân tộc thống nhất phản đế Đông
											Dương&rdquo;
										</p>
									</div>
								</div>
							</div>

							<Separator />

							{/* 1940 Meeting */}
							<div className="space-y-4">
								<div className="flex items-center gap-3">
									<Badge className="bg-orange-100 text-orange-800 border-orange-300">11/1940</Badge>
									<h3 className="text-lg font-semibold">
										Hội nghị Trung ương Đảng tại Đình Bảng, Bắc Ninh
									</h3>
								</div>
								<div className="pl-6 space-y-3">
									<p className="text-gray-700">
										Hội nghị này cho thấy Trung ương Đảng vẫn còn trăn trở và chưa thật dứt khoát
										với chủ trương đã đề ra tại Hội nghị tháng 11/1939.
									</p>
									<div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
										<h4 className="font-medium text-yellow-800 mb-1">Quan điểm:</h4>
										<p className="text-yellow-700">
											&ldquo;Cách mạng phản đế và cách mạng thổ địa phải đồng thời tiến, không thể
											cái làm trước, cái làm sau&rdquo;
										</p>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* 8th Central Committee Meeting */}
					<Card className="shadow-lg border-2 border-purple-200">
						<CardHeader>
							<CardTitle className="text-2xl text-purple-700 flex items-center gap-2">
								<span className="w-2 h-2 bg-purple-700 rounded-full"></span>
								Hội nghị Trung ương 8 (5/1941) - Hoàn chỉnh Chủ trương Chiến lược
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="bg-purple-50 p-4 rounded-lg">
								<p className="text-purple-800">
									Sau 30 năm hoạt động ở nước ngoài, lãnh tụ{" "}
									<span className="font-semibold">Nguyễn Ái Quốc</span> về nước (28/1/1941) và chủ
									trì Hội nghị lần thứ tám Ban Chấp hành Trung ương Đảng tại Cao Bằng. Hội nghị này
									đã hoàn chỉnh chủ trương chiến lược giải phóng dân tộc, khắc phục triệt để những
									hạn chế trước đó.
								</p>
							</div>

							<div className="grid gap-6">
								{[
									{
										number: "Một",
										content:
											"Nhấn mạnh mâu thuẫn chủ yếu cần giải quyết cấp bách là giữa dân tộc Việt Nam và đế quốc phát xít Pháp-Nhật, vì &ldquo;quyền lợi tất cả các giai cấp bị cướp giật, vận mạng dân tộc nguy vong không lúc nào bằng&rdquo;.",
									},
									{
										number: "Hai",
										content:
											"Khẳng định dứt khoát thay đổi chiến lược. Cuộc cách mạng hiện tại là &ldquo;một cuộc cách mạng chỉ phải giải quyết một vấn đề cần kíp 'dân tộc giải phóng'&rdquo;. Tiếp tục tạm gác khẩu hiệu ruộng đất, thay bằng các khẩu hiệu tịch thu ruộng đất của đế quốc và Việt gian, chia lại ruộng công, giảm tô, giảm tức.",
										quote:
											"Trong lúc này nếu không giải quyết được vấn đề dân tộc giải phóng... thì chẳng những toàn thể quốc gia dân tộc còn chịu mãi kiếp ngựa trâu, mà quyền lợi của bộ phận, giai cấp đến vạn năm cũng không đòi lại được",
									},
									{
										number: "Ba",
										content:
											"Giải quyết vấn đề dân tộc trong khuôn khổ từng nước ở Đông Dương theo chính sách &ldquo;dân tộc tự quyết&rdquo;. Quyết định thành lập ở mỗi nước một mặt trận riêng (ở Việt Nam là Việt Nam Độc lập Đồng minh - Việt Minh).",
									},
									{
										number: "Bốn",
										content:
											"Tập hợp rộng rãi mọi lực lượng dân tộc trong Mặt trận Việt Minh, &ldquo;không phân biệt thợ thuyền, dân cày, phú nông, địa chủ, tư bản bản xứ, ai có lòng yêu nước thương nòi&rdquo;. Các tổ chức quần chúng trong mặt trận đều mang tên &ldquo;cứu quốc&rdquo;.",
									},
									{
										number: "Năm",
										content:
											"Chủ trương sau khi cách mạng thành công sẽ thành lập nước Việt Nam Dân chủ Cộng hòa, một hình thức nhà nước &ldquo;của chung cả toàn thể dân tộc&rdquo;.",
									},
									{
										number: "Sáu",
										content:
											"Xác định chuẩn bị khởi nghĩa vũ trang là nhiệm vụ trung tâm của Đảng và nhân dân. Đề ra phương châm &ldquo;lãnh đạo một cuộc khởi nghĩa từng phần trong từng địa phương cũng có thể giành sự thắng lợi mà mở đường cho một cuộc tổng khởi nghĩa to lớn&rdquo;.",
									},
								].map((item, index) => (
									<div
										key={index}
										className="flex gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
									>
										<Badge variant="secondary" className="min-w-fit font-semibold">
											{item.number}
										</Badge>
										<div className="space-y-2">
											<p className="text-gray-700">{item.content}</p>
											{item.quote && (
												<blockquote className="italic text-gray-600 bg-gray-50 p-3 rounded border-l-4 border-purple-400">
													&ldquo;{item.quote}&rdquo;
												</blockquote>
											)}
										</div>
									</div>
								))}
							</div>
						</CardContent>
					</Card>

					{/* Building Forces and Preparing for Uprising */}
					<div className="text-center space-y-4 mt-16">
						<h1 className="text-4xl font-bold text-gray-800">
							Quá trình Xây dựng Lực lượng và Chuẩn bị Khởi nghĩa
						</h1>
						<p className="text-xl text-gray-600">(1941-1945)</p>
					</div>

					{/* Viet Minh Formation */}
					<Card className="shadow-lg">
						<CardHeader>
							<CardTitle className="text-2xl text-indigo-700 flex items-center gap-2">
								<span className="w-2 h-2 bg-indigo-700 rounded-full"></span>
								Thành lập và Phát triển Mặt trận Việt Minh
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="space-y-6">
								<div className="flex gap-4">
									<Badge variant="outline" className="min-w-fit">
										25/10/1941
									</Badge>
									<p className="text-gray-700">
										Việt Minh công bố Tuyên ngôn, chương trình hoạt động đáp ứng nguyện vọng cứu
										nước của mọi giới đồng bào, do đó phong trào phát triển mạnh mẽ.
									</p>
								</div>
								<div className="bg-indigo-50 p-4 rounded-lg">
									<p className="text-indigo-800">
										Việt Minh trở thành nơi tập hợp, giác ngộ và rèn luyện lực lượng chính trị rộng
										lớn, lực lượng cơ bản và quyết định trong tổng khởi nghĩa sau này.
									</p>
								</div>
								<div className="flex gap-4">
									<Badge variant="outline" className="min-w-fit">
										6/1944
									</Badge>
									<p className="text-gray-700">
										Đảng Dân chủ Việt Nam được thành lập và tham gia Việt Minh, góp phần mở rộng
										khối đại đoàn kết dân tộc.
									</p>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Armed Forces and Base Areas */}
					<Card className="shadow-lg">
						<CardHeader>
							<CardTitle className="text-2xl text-orange-700 flex items-center gap-2">
								<span className="w-2 h-2 bg-orange-700 rounded-full"></span>
								Xây dựng Lực lượng Vũ trang và Căn cứ địa
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-8">
							{/* Early Uprisings */}
							<div className="space-y-4">
								<h3 className="text-lg font-semibold text-orange-800">Các cuộc nổi dậy ban đầu</h3>
								<div className="grid gap-4">
									{[
										{
											date: "27/9/1940",
											name: "Khởi nghĩa Bắc Sơn",
											description: "Nhân dân nổi dậy, thành lập Đội du kích Bắc Sơn.",
										},
										{
											date: "23/11/1940",
											name: "Khởi nghĩa Nam Kỳ",
											description:
												"Nổ ra ở nhiều nơi, thành lập chính quyền cách mạng nhưng bị Pháp đàn áp khốc liệt.",
										},
										{
											date: "13/1/1941",
											name: "Binh biến Đô Lương",
											description: "Do Đội Cung chỉ huy, bị dập tắt nhanh chóng.",
										},
									].map((uprising, index) => (
										<div key={index} className="flex gap-4 p-3 bg-orange-50 rounded-lg">
											<Badge className="bg-orange-100 text-orange-800 border-orange-300 min-w-fit">
												{uprising.date}
											</Badge>
											<div>
												<h4 className="font-semibold text-orange-900">{uprising.name}</h4>
												<p className="text-orange-700 text-sm">{uprising.description}</p>
											</div>
										</div>
									))}
								</div>
								<div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
									<h4 className="font-semibold text-yellow-800 mb-2">Ý nghĩa:</h4>
									<p className="text-yellow-700">
										Các cuộc khởi nghĩa này được xem là &ldquo;những tiếng súng báo hiệu cho cuộc
										khởi nghĩa toàn quốc&rdquo;.
									</p>
								</div>
							</div>

							<Separator />

							{/* Armed Forces Development */}
							<div className="space-y-4">
								<h3 className="text-lg font-semibold text-orange-800">
									Phát triển lực lượng vũ trang
								</h3>
								<div className="space-y-4">
									<p className="text-gray-700">
										Đội du kích Bắc Sơn được duy trì và phát triển thành Cứu quốc quân.
									</p>
									<div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
										<div className="flex gap-4 items-start">
											<Badge className="bg-green-100 text-green-800 border-green-300 min-w-fit">
												22/12/1944
											</Badge>
											<div>
												<p className="text-green-800 font-medium mb-2">
													Thành lập Đội Việt Nam Tuyên truyền Giải phóng quân
												</p>
												<p className="text-green-700 text-sm">
													Theo chỉ thị của Hồ Chí Minh, đội do Võ Nguyên Giáp chỉ huy được thành lập
													tại Cao Bằng. Đội đã giành thắng lợi ngay trong các trận đầu tiên tại Phai
													Khắt (25/12) và Nà Ngần (26/12).
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>

							<Separator />

							{/* Base Areas */}
							<div className="space-y-4">
								<h3 className="text-lg font-semibold text-orange-800">Xây dựng căn cứ địa</h3>
								<div className="space-y-4">
									<p className="text-gray-700">
										Khu căn cứ Bắc Sơn-Võ Nhai và Cao Bằng được củng cố và mở rộng.
									</p>
									<div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
										<p className="text-blue-800">
											<span className="font-semibold">Cuối năm 1943:</span> Một hành lang chính trị
											đã nối liền hai khu căn cứ này.
										</p>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Other Fronts */}
					<Card className="shadow-lg">
						<CardHeader>
							<CardTitle className="text-2xl text-teal-700 flex items-center gap-2">
								<span className="w-2 h-2 bg-teal-700 rounded-full"></span>
								Đấu tranh trên các Mặt trận khác
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="grid md:grid-cols-2 gap-6">
								<div className="space-y-3">
									<h3 className="text-lg font-semibold text-teal-800">Tư tưởng - Báo chí</h3>
									<p className="text-gray-700">
										Đảng và Việt Minh cho xuất bản nhiều tờ báo như{" "}
										<span className="italic">Giải phóng</span>,
										<span className="italic"> Cờ giải phóng</span>,{" "}
										<span className="italic">Cứu quốc</span>,
										<span className="italic"> Việt Nam độc lập</span>... để tuyên truyền đường lối
										cách mạng.
									</p>
								</div>
								<div className="space-y-3">
									<h3 className="text-lg font-semibold text-teal-800">Văn hóa</h3>
									<div className="space-y-2">
										<div className="flex gap-3 items-start">
											<Badge variant="outline" className="min-w-fit">
												1943
											</Badge>
											<p className="text-gray-700 text-sm">
												Đảng công bố bản Đề cương về văn hóa Việt Nam, xác định văn hóa là một trận
												địa cách mạng với ba nguyên tắc:{" "}
												<span className="font-semibold">dân tộc, khoa học và đại chúng</span>.
											</p>
										</div>
										<div className="flex gap-3 items-start">
											<Badge variant="outline" className="min-w-fit">
												Cuối 1944
											</Badge>
											<p className="text-gray-700 text-sm">Hội Văn hóa cứu quốc Việt Nam ra đời.</p>
										</div>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Anti-Japanese Movement */}
					<div className="text-center space-y-4 mt-16">
						<h1 className="text-4xl font-bold text-gray-800">
							Cao trào Kháng Nhật Cứu nước và Tiến tới Tổng Khởi nghĩa
						</h1>
						<p className="text-xl text-gray-600">(3/1945 - 8/1945)</p>
					</div>

					<Card className="shadow-lg">
						<CardHeader>
							<CardTitle className="text-2xl text-red-700 flex items-center gap-2">
								<span className="w-2 h-2 bg-red-700 rounded-full"></span>
								Sự kiện Nhật đảo chính Pháp và Chủ trương của Đảng
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="space-y-4">
								<div className="flex gap-4">
									<Badge className="bg-red-100 text-red-800 border-red-300 min-w-fit">
										9/3/1945
									</Badge>
									<p className="text-gray-700">
										Nhật nổ súng đảo chính lật đổ Pháp, độc chiếm Đông Dương.
									</p>
								</div>
								<div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
									<div className="flex gap-4 items-start">
										<Badge className="bg-red-100 text-red-800 border-red-300 min-w-fit">
											12/3/1945
										</Badge>
										<div className="space-y-3">
											<h4 className="font-semibold text-red-800">
												Ban Thường vụ Trung ương Đảng ra chỉ thị &ldquo;Nhật, Pháp bắn nhau và hành
												động của chúng ta&rdquo;
											</h4>
											<div className="space-y-2">
												<div>
													<span className="font-medium text-red-800">Xác định kẻ thù:</span>
													<span className="text-red-700">
														{" "}
														Kẻ thù cụ thể, trước mắt và duy nhất là phát xít Nhật.
													</span>
												</div>
												<div>
													<span className="font-medium text-red-800">Thay đổi khẩu hiệu:</span>
													<span className="text-red-700">
														{" "}
														Thay &ldquo;đánh đuổi phát xít Nhật-Pháp&rdquo; bằng &ldquo;đánh đuổi
														phát xít Nhật&rdquo;.
													</span>
												</div>
												<div>
													<span className="font-medium text-red-800">Mục tiêu:</span>
													<span className="text-red-700">
														{" "}
														Phát động một cao trào kháng Nhật cứu nước mạnh mẽ làm tiền đề cho tổng
														khởi nghĩa.
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Anti-Japanese Movement Development */}
					<Card className="shadow-lg">
						<CardHeader>
							<CardTitle className="text-2xl text-emerald-700 flex items-center gap-2">
								<span className="w-2 h-2 bg-emerald-700 rounded-full"></span>
								Diễn biến Cao trào
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="space-y-6">
								<div className="bg-emerald-50 p-4 rounded-lg">
									<h4 className="font-semibold text-emerald-800 mb-2">Khởi nghĩa từng phần</h4>
									<p className="text-emerald-700">
										Chiến tranh du kích cục bộ và khởi nghĩa từng phần nổ ra ở vùng thượng du và
										trung du Bắc Kỳ. Các lực lượng vũ trang giải phóng hàng loạt xã, châu, huyện.
										Khởi nghĩa Ba Tơ (Quảng Ngãi) thắng lợi, thành lập đội du kích Ba Tơ.
									</p>
								</div>

								<div className="flex gap-4">
									<Badge className="bg-emerald-100 text-emerald-800 border-emerald-300 min-w-fit">
										15/5/1945
									</Badge>
									<div>
										<h4 className="font-semibold text-emerald-800">
											Hội nghị quân sự cách mạng Bắc Kỳ
										</h4>
										<p className="text-gray-700">
											Quyết định thống nhất các lực lượng vũ trang thành{" "}
											<span className="font-semibold">Việt Nam Giải phóng quân</span>.
										</p>
									</div>
								</div>

								<div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
									<div className="flex gap-4 items-start">
										<Badge className="bg-green-100 text-green-800 border-green-300 min-w-fit">
											4/6/1945
										</Badge>
										<div>
											<h4 className="font-semibold text-green-800">
												Thành lập Khu giải phóng Việt Bắc
											</h4>
											<p className="text-green-700">
												Khu giải phóng chính thức thành lập, bao gồm các tỉnh Cao Bằng, Bắc Cạn,
												Lạng Sơn, Tuyên Quang, Thái Nguyên, Hà Giang và các vùng lân cận, trở thành
												căn cứ địa chính của cách mạng cả nước.
											</p>
										</div>
									</div>
								</div>

								<div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
									<h4 className="font-semibold text-yellow-800 mb-2">
										Phong trào &ldquo;Phá kho thóc, giải quyết nạn đói&rdquo;
									</h4>
									<p className="text-yellow-700">
										Khẩu hiệu này đã &ldquo;thổi bùng ngọn lửa căm thù trong đông đảo nhân
										dân&rdquo;, thúc đẩy quần chúng nổi dậy giành quyền làm chủ ở nhiều nơi.
									</p>
								</div>

								<div className="bg-blue-50 p-4 rounded-lg">
									<h4 className="font-semibold text-blue-800 mb-2">Kết quả</h4>
									<p className="text-blue-700">
										Cao trào kháng Nhật cứu nước thực chất là một cuộc khởi nghĩa từng phần và chiến
										tranh du kích cục bộ, làm mở rộng trận địa cách mạng, tăng cường lực lượng, và
										đưa toàn dân vào thế sẵn sàng chớp thời cơ tổng khởi nghĩa.
									</p>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* August Revolution */}
					<div className="text-center space-y-4 mt-16">
						<h1 className="text-4xl font-bold text-gray-800">Tổng Khởi nghĩa Tháng Tám năm 1945</h1>
					</div>

					<Card className="shadow-lg border-2 border-amber-200">
						<CardHeader>
							<CardTitle className="text-2xl text-amber-700 flex items-center gap-2">
								<span className="w-2 h-2 bg-amber-700 rounded-full"></span>
								Thời cơ Cách mạng và Quyết định của Đảng
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="bg-amber-50 p-4 rounded-lg">
								<h4 className="font-semibold text-amber-800 mb-2">Bối cảnh</h4>
								<p className="text-amber-700">
									Giữa tháng 8/1945, phát xít Nhật tuyên bố đầu hàng Đồng minh không điều kiện
									(15/8/1945) sau khi Liên Xô tấn công đạo quân Quan Đông và Mỹ ném hai quả bom
									nguyên tử.
								</p>
							</div>

							<div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
								<h4 className="font-semibold text-red-800 mb-2">Thời cơ</h4>
								<p className="text-red-700">
									Tồn tại trong khoảng thời gian từ khi Nhật đầu hàng đến trước khi quân Đồng minh
									vào Đông Dương giải giáp quân Nhật. Đây là cuộc{" "}
									<span className="font-semibold">&ldquo;chạy đua nước rút&rdquo;</span> để giành
									chính quyền.
								</p>
							</div>

							<div className="space-y-4">
								<div className="flex gap-4 items-start">
									<Badge className="bg-amber-100 text-amber-800 border-amber-300 min-w-fit">
										14-15/8/1945
									</Badge>
									<div className="space-y-2">
										<h4 className="font-semibold text-amber-800">
											Hội nghị Toàn quốc của Đảng tại Tân Trào
										</h4>
										<ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
											<li>
												Quyết định phát động toàn dân tổng khởi nghĩa giành chính quyền từ tay phát
												xít Nhật trước khi quân Đồng minh vào
											</li>
											<li>
												Đề ra ba nguyên tắc chỉ đạo khởi nghĩa:{" "}
												<span className="font-semibold">tập trung, thống nhất và kịp thời</span>
											</li>
										</ul>
									</div>
								</div>

								<div className="flex gap-4 items-start">
									<Badge className="bg-amber-100 text-amber-800 border-amber-300 min-w-fit">
										16/8/1945
									</Badge>
									<div className="space-y-2">
										<h4 className="font-semibold text-amber-800">Đại hội Quốc dân tại Tân Trào</h4>
										<ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
											<li>Tán thành quyết định tổng khởi nghĩa</li>
											<li>Thông qua 10 chính sách lớn của Việt Minh</li>
											<li>
												Lập Ủy ban Dân tộc Giải phóng Việt Nam (Chính phủ lâm thời) do Hồ Chí Minh
												làm Chủ tịch
											</li>
										</ul>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* August Revolution Development */}
					<Card className="shadow-lg">
						<CardHeader>
							<CardTitle className="text-2xl text-rose-700 flex items-center gap-2">
								<span className="w-2 h-2 bg-rose-700 rounded-full"></span>
								Diễn biến Tổng Khởi nghĩa
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-400">
								<h4 className="font-semibold text-rose-800 mb-2">Lời kêu gọi</h4>
								<blockquote className="text-rose-700 italic">
									&ldquo;Giờ quyết định cho vận mệnh dân tộc ta đã đến. Toàn quốc đồng bào hãy đứng
									dậy đem sức ta mà tự giải phóng cho ta...&rdquo;
									<footer className="text-rose-600 not-italic mt-2 text-sm">— Hồ Chí Minh</footer>
								</blockquote>
							</div>

							<div className="space-y-6">
								<div>
									<h4 className="font-semibold text-rose-800 mb-3">Các địa phương</h4>
									<div className="space-y-3">
										<p className="text-gray-700">
											Từ 14-18/8, nhiều địa phương đã chủ động nổi dậy giành chính quyền. Bốn tỉnh
											giành chính quyền sớm nhất là{" "}
											<span className="font-semibold">
												Hải Dương, Bắc Giang, Hà Tĩnh, Quảng Nam
											</span>
											.
										</p>
									</div>
								</div>

								<div className="grid gap-4">
									{[
										{
											date: "19/8",
											location: "Hà Nội",
											description:
												"Quần chúng cách mạng dưới sự lãnh đạo của Đảng bộ Hà Nội đã biến cuộc mít tinh của chính quyền thân Nhật thành cuộc biểu tình ủng hộ Việt Minh, tiến tới chiếm các công sở quan trọng. Thắng lợi ở Hà Nội có ảnh hưởng quyết định, cổ vũ mạnh mẽ phong trào cả nước.",
										},
										{
											date: "23/8",
											location: "Huế",
											description:
												"Quần chúng biểu dương lực lượng, chiếm các công sở. Ngày 30/8, vua Bảo Đại tuyên bố thoái vị, trao ấn kiếm cho đại diện Chính phủ lâm thời.",
										},
										{
											date: "25/8",
											location: "Sài Gòn",
											description:
												"Hơn 1 triệu người biểu tình thị uy, giành chính quyền nhanh chóng.",
										},
									].map((event, index) => (
										<div
											key={index}
											className="flex gap-4 p-4 bg-white border border-rose-200 rounded-lg"
										>
											<div className="flex items-center gap-2">
												<Badge className="bg-rose-100 text-rose-800 border-rose-300">
													{event.date}
												</Badge>
												<h4 className="font-semibold text-rose-800">{event.location}</h4>
											</div>
											<p className="text-gray-700 text-sm flex-1">{event.description}</p>
										</div>
									))}
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Democratic Republic of Vietnam */}
					<Card className="shadow-lg border-2 border-yellow-200">
						<CardHeader>
							<CardTitle className="text-2xl text-yellow-700 flex items-center gap-2">
								<span className="w-2 h-2 bg-yellow-700 rounded-full"></span>
								Thành lập Nước Việt Nam Dân chủ Cộng hòa
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="space-y-4">
								<div className="flex gap-4 items-start">
									<Badge className="bg-yellow-100 text-yellow-800 border-yellow-300 min-w-fit">
										27/8
									</Badge>
									<div>
										<h4 className="font-semibold text-yellow-800">Chính phủ lâm thời</h4>
										<p className="text-gray-700 text-sm">
											Ủy ban Dân tộc Giải phóng được cải tổ thành Chính phủ lâm thời nước Việt Nam
											Dân chủ Cộng hòa do Hồ Chí Minh làm Chủ tịch. Một số thành viên Việt Minh tự
											nguyện rút lui để mời thêm nhân sĩ ngoài Việt Minh tham gia.
										</p>
									</div>
								</div>

								<div className="bg-yellow-50 p-4 rounded-lg">
									<h4 className="font-semibold text-yellow-800 mb-2">
										Soạn thảo Tuyên ngôn Độc lập
									</h4>
									<p className="text-yellow-700">
										Tại nhà số 48 Hàng Ngang, Hà Nội, Hồ Chí Minh đã soạn thảo bản Tuyên ngôn Độc
										lập.
									</p>
								</div>

								<div className="bg-gradient-to-r from-red-50 to-yellow-50 p-6 rounded-lg border border-yellow-300">
									<div className="flex gap-4 items-start mb-4">
										<Badge className="bg-red-500 text-white min-w-fit text-lg px-3 py-1">
											2/9/1945
										</Badge>
										<h4 className="text-xl font-bold text-red-700">Tuyên ngôn Độc lập</h4>
									</div>
									<p className="text-gray-700 mb-4">
										Tại Quảng trường Ba Đình, Hà Nội, Chủ tịch Hồ Chí Minh thay mặt Chính phủ lâm
										thời đọc Tuyên ngôn Độc lập, tuyên bố sự ra đời của nước{" "}
										<span className="font-bold text-red-700">Việt Nam Dân chủ Cộng hòa</span>.
									</p>
									<blockquote className="italic text-gray-600 bg-white p-4 rounded border-l-4 border-red-400">
										&ldquo;Nước Việt Nam có quyền hưởng tự do và độc lập và sự thực đã thành một
										nước tự do và độc lập. Toàn thể dân Việt Nam quyết đem tất cả tinh thần và lực
										lượng, tính mệnh và của cải để giữ vững quyền tự do và độc lập ấy&rdquo;
									</blockquote>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Analysis of August Revolution */}
					<Card className="shadow-lg border-2 border-purple-200">
						<CardHeader>
							<CardTitle className="text-2xl text-purple-700 flex items-center gap-2">
								<span className="w-2 h-2 bg-purple-700 rounded-full"></span>
								Phân tích Cách mạng Tháng Tám
							</CardTitle>
						</CardHeader>
						<CardContent className="space-y-8">
							<div className="space-y-6">
								<div className="bg-purple-50 p-4 rounded-lg">
									<h3 className="text-lg font-semibold text-purple-800 mb-3">Tính chất</h3>
									<p className="text-purple-700 mb-4">
										Cách mạng Tháng Tám là{" "}
										<span className="font-semibold">
											&ldquo;một cuộc cách mạng giải phóng dân tộc mang tính chất dân chủ mới&rdquo;
										</span>
										.
									</p>
								</div>

								<div>
									<h4 className="text-lg font-semibold text-purple-800 mb-4">
										Tính chất giải phóng dân tộc điển hình thể hiện ở:
									</h4>
									<div className="grid gap-3">
										{[
											"Tập trung hoàn thành nhiệm vụ hàng đầu là giải phóng dân tộc.",
											"Lực lượng cách mạng là toàn dân tộc, đoàn kết trong Mặt trận Việt Minh.",
											'Thành lập chính quyền nhà nước "của chung toàn dân tộc".',
											"Là một bộ phận của phe dân chủ chống phát xít trên thế giới.",
										].map((item, index) => (
											<div key={index} className="flex gap-3 items-start p-3 bg-purple-50 rounded">
												<Badge variant="secondary" className="min-w-fit">
													{index + 1}
												</Badge>
												<p className="text-purple-700 text-sm">{item}</p>
											</div>
										))}
									</div>
								</div>

								<Separator />

								<div>
									<h4 className="text-lg font-semibold text-purple-800 mb-4">
										Tính chất dân chủ (chưa đầy đủ và sâu sắc):
									</h4>
									<div className="space-y-4">
										<div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
											<h5 className="font-medium text-green-800 mb-2">Những gì đã thực hiện:</h5>
											<ul className="list-disc list-inside space-y-1 text-green-700 text-sm">
												<li>
													Giải quyết một số quyền lợi cho nông dân (tịch thu một phần ruộng đất,
													giảm tô 25%)
												</li>
												<li>Xóa bỏ chế độ quân chủ, thiết lập nhà nước dân chủ nhân dân</li>
											</ul>
										</div>
										<div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
											<h5 className="font-medium text-yellow-800 mb-2">Những hạn chế:</h5>
											<p className="text-yellow-700 text-sm">
												Cách mạng &ldquo;chưa làm cách mạng ruộng đất, chưa thực hiện khẩu hiệu
												người cày có ruộng&rdquo;, quan hệ địa chủ - nông dân nói chung vẫn như cũ.
											</p>
										</div>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Navigation hint for future content */}
					<div className="text-center py-8">
						<div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-600">
							<span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></span>
							<span>Nội dung tiếp theo sẽ được cập nhật...</span>
						</div>
					</div>
				</section>
			</div>

			<Footer />
			<ScrollToTop />
		</div>
	);
}
