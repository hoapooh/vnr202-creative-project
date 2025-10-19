"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";

export default function HistoricalContext() {
    const handleBackButtonClick = () => {
        window.history.back();
    }
	return (
		<div className="max-w-6xl mx-auto px-6 py-20 space-y-12">
			{/* Title */}
            <Button variant="outline" className="mb-4" onClick={handleBackButtonClick}>
                Quay lại
            </Button>
			<div className="text-center space-y-4">
				<h1 className="text-3xl text-gray-800 font-laco leading-12">
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
								đẩy nhân dân Đông Dương vào tình cảnh "nô lệ của nô lệ".
							</p>
						</div>
						<div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
							<h4 className="font-semibold text-red-800 mb-2">Chính sách của Pháp-Nhật:</h4>
							<p className="text-red-700">
								Thực dân Pháp thi hành chính sách thời chiến, phát xít hóa bộ máy thống trị, và
								thực hiện "kinh tế chỉ huy" để vơ vét sức người, sức của phục vụ chiến tranh.
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
								<h4 className="font-semibold text-green-800">Quyết định:</h4>
								<p className="text-gray-700">
									Chuyển hướng từ "cách mạng tư sản dân chủ" sang "cách mạng giải phóng dân tộc".
								</p>
							</div>
							<div className="grid md:grid-cols-2 gap-4">
								<div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
									<h5 className="font-medium text-green-800">Tạm gác:</h5>
									<p className="text-green-700 text-sm">Khẩu hiệu "ruộng đất cho ai cày"</p>
								</div>
								<div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
									<h5 className="font-medium text-blue-800">Ưu tiên:</h5>
									<p className="text-blue-700 text-sm">Giải phóng dân tộc khỏi ách đô hộ</p>
								</div>
							</div>
							<div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
								<h5 className="font-medium text-blue-800">Ý nghĩa:</h5>
								<p className="text-blue-700 text-sm">
									Đây là bước ngoặt quan trọng trong tư duy chiến lược của Đảng, từ đấu tranh
									giai cấp sang giải phóng dân tộc.
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
								<h5 className="font-medium text-yellow-800">Đặc điểm:</h5>
								<p className="text-yellow-700 text-sm">
									Vẫn còn dao động giữa cách mạng dân tộc và cách mạng dân chủ tư sản, chưa thật
									quyết đoán trong việc thay đổi chiến lược.
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
									'Nhấn mạnh mâu thuẫn chủ yếu cần giải quyết cấp bách là giữa dân tộc Việt Nam và đế quốc phát xít Pháp-Nhật, vì "quyền lợi tất cả các giai cấp bị cướp giật, vận mạng dân tộc nguy vong không lúc nào bằng".',
							},
							{
								number: "Hai",
								content:
									'Khẳng định dứt khoát thay đổi chiến lược. Cuộc cách mạng hiện tại là "một cuộc cách mạng chỉ phải giải quyết một vấn đề cần kíp \'dân tộc giải phóng\'". Tiếp tục tạm gác khẩu hiệu ruộng đất, thay bằng các khẩu hiệu tịch thu ruộng đất của đế quốc và Việt gian, chia lại ruộng công, giảm tô, giảm tức.',
								quote:
									"Trong lúc này nếu không giải quyết được vấn đề dân tộc giải phóng... thì chẳng những toàn thể quốc gia dân tộc còn chịu mãi kiếp ngựa trâu, mà quyền lợi của bộ phận, giai cấp đến vạn năm cũng không đòi lại được",
							},
							{
								number: "Ba",
								content:
									'Giải quyết vấn đề dân tộc trong khuôn khổ từng nước ở Đông Dương theo chính sách "dân tộc tự quyết". Quyết định thành lập ở mỗi nước một mặt trận riêng (ở Việt Nam là Việt Nam Độc lập Đồng minh - Việt Minh).',
							},
							{
								number: "Bốn",
								content:
									'Tập hợp rộng rãi mọi lực lượng dân tộc trong Mặt trận Việt Minh, "không phân biệt thợ thuyền, dân cày, phú nông, địa chủ, tư bản bản xứ, ai có lòng yêu nước thương nòi". Các tổ chức quần chúng trong mặt trận đều mang tên "cứu quốc".',
							},
							{
								number: "Năm",
								content:
									'Chủ trương sau khi cách mạng thành công sẽ thành lập nước Việt Nam Dân chủ Cộng hòa, một hình thức nhà nước "của chung cả toàn thể dân tộc".',
							},
							{
								number: "Sáu",
								content:
									'Xác định chuẩn bị khởi nghĩa vũ trang là nhiệm vụ trung tâm của Đảng và nhân dân. Đề ra phương châm "lãnh đạo một cuộc khởi nghĩa từng phần trong từng địa phương cũng có thể giành sự thắng lợi mà mở đường cho một cuộc tổng khởi nghĩa to lớn".',
							},
						].map((item, index) => (
							<div
								key={index}
								className="flex gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
							>
								<div className="flex-shrink-0">
									<div className="w-8 h-8 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center font-semibold text-sm">
										{item.number}
									</div>
								</div>
								<div className="space-y-2">
									<p className="text-gray-700">{item.content}</p>
									{item.quote && (
										<blockquote className="text-purple-600 italic border-l-2 border-purple-300 pl-3">
											"{item.quote}"
										</blockquote>
									)}
								</div>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}