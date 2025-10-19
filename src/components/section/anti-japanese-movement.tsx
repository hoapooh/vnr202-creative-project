"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";

export default function AntiJapaneseMovement() {
    const handleBackButtonClick = () => {
        window.history.back();
    };
	return (
		<div className="max-w-6xl mx-auto px-6 py-20 space-y-12">
            <Button variant="outline" className="mb-4" onClick={handleBackButtonClick}>
                Quay lại
            </Button>
			{/* Title */}
			<div className="text-center space-y-4">
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
							<div className="space-y-4">
								<div>
									<h4 className="font-semibold text-red-800 mb-2">Chỉ thị của Trung ương Đảng (12/3/1945):</h4>
									<blockquote className="text-red-700 italic">
										"Giờ đây là lúc quyết định, đảng ta phải lãnh đạo toàn dân kháng Nhật cứu nước"
									</blockquote>
								</div>
								
								<div className="grid md:grid-cols-2 gap-4 mt-4">
									<div className="bg-red-100 p-3 rounded">
										<h5 className="font-medium text-red-800 mb-2">Nhiệm vụ trước mắt:</h5>
										<ul className="text-red-700 text-sm space-y-1 list-disc list-inside">
											<li>Tuyên truyền mạnh mẽ chủ trương kháng Nhật</li>
											<li>Tập hợp mọi lực lượng yêu nước</li>
											<li>Chuẩn bị vũ khí, lương thực</li>
											<li>Mở rộng căn cứ địa</li>
										</ul>
									</div>
									
									<div className="bg-orange-100 p-3 rounded">
										<h5 className="font-medium text-orange-800 mb-2">Khẩu hiệu hành động:</h5>
										<ul className="text-orange-700 text-sm space-y-1 list-disc list-inside">
											<li>"Đánh đuổi phát xít Nhật"</li>
											<li>"Cứu nước cứu dân"</li>
											<li>"Độc lập hay là chết"</li>
											<li>"Tất cả cho tiền tuyến"</li>
										</ul>
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
							<h4 className="font-semibold text-emerald-800 mb-2">Bối cảnh thuận lợi:</h4>
							<ul className="text-emerald-700 space-y-1 list-disc list-inside">
								<li>Nhật bại trận liên tiếp trên các mặt trận Thái Bình Dương</li>
								<li>Bộ máy thống trị Pháp bị xóa bỏ, tạo ra khoảng trống quyền lực</li>
								<li>Chính quyền Nhật yếu ớt, không kiểm soát được tình hình</li>
								<li>Nhân dân căm thù sâu sắc chế độ Pháp-Nhật</li>
							</ul>
						</div>

						<div className="space-y-4">
							<div className="flex gap-4">
								<Badge className="bg-emerald-100 text-emerald-800 border-emerald-300 min-w-fit">
									Tháng 4/1945
								</Badge>
								<div>
									<h4 className="font-semibold text-emerald-800">Hội nghị Trung ương mở rộng tại Hiệp Hòa</h4>
									<p className="text-gray-700">
										Quyết định phát động cao trào "Kháng Nhật cứu nước" trên phạm vi toàn quốc,
										chuẩn bị điều kiện cho tổng khởi nghĩa.
									</p>
								</div>
							</div>
						</div>

						<div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
							<h4 className="font-semibold text-green-800 mb-2">Diễn biến cao trào:</h4>
							<div className="grid gap-4">
								<div className="space-y-2">
									<h5 className="font-medium text-green-700">Miền Bắc:</h5>
									<ul className="text-green-600 text-sm space-y-1 list-disc list-inside">
										<li>Vùng giải phóng mở rộng từ 6 tỉnh lên gần nửa miền Bắc</li>
										<li>Lực lượng vũ trang phát triển nhanh chóng</li>
										<li>Chính quyền cách mạng được thiết lập ở nhiều địa phương</li>
									</ul>
								</div>
								<div className="space-y-2">
									<h5 className="font-medium text-green-700">Miền Trung - Nam:</h5>
									<ul className="text-green-600 text-sm space-y-1 list-disc list-inside">
										<li>Phong trào đấu tranh chính trị sôi nổi</li>
										<li>Các tổ chức Việt Minh phát triển mạnh</li>
										<li>Nhân dân tích cực chuẩn bị khởi nghĩa</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
							<h4 className="font-semibold text-yellow-800 mb-2">Thành tựu quan trọng:</h4>
							<ul className="text-yellow-700 space-y-1 list-disc list-inside">
								<li>Quân đội nhân dân phát triển lên vài nghìn người</li>
								<li>Vùng giải phóng có dân số khoảng 1 triệu người</li>
								<li>Mặt trận Việt Minh có ảnh hưởng trên toàn quốc</li>
								<li>Uy tín của Đảng và Hồ Chí Minh ngày càng cao</li>
							</ul>
						</div>

						<div className="bg-blue-50 p-4 rounded-lg">
							<h4 className="font-semibold text-blue-800 mb-2">Ý nghĩa lịch sử:</h4>
							<p className="text-blue-700">
								Cao trào kháng Nhật cứu nước đã tạo ra thế và lực cách mạng, chuẩn bị đầy đủ 
								điều kiện chủ quan và khách quan cho cuộc Tổng khởi nghĩa Tháng Tám thành công.
							</p>
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Preparation for General Uprising */}
			<Card className="shadow-lg border-2 border-amber-200">
				<CardHeader>
					<CardTitle className="text-2xl text-amber-700 flex items-center gap-2">
						<span className="w-2 h-2 bg-amber-700 rounded-full"></span>
						Chuẩn bị Tổng Khởi nghĩa
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="space-y-4">
						<div className="flex gap-4">
							<Badge className="bg-amber-100 text-amber-800 border-amber-300 min-w-fit">
								Tháng 7/1945
							</Badge>
							<div>
								<h4 className="font-semibold text-amber-800">Chuẩn bị tổng khởi nghĩa</h4>
								<p className="text-gray-700">
									Đảng chỉ thị chuẩn bị mọi điều kiện cho cuộc tổng khởi nghĩa giành chính quyền 
									toàn quốc khi thời cơ chín muồi.
								</p>
							</div>
						</div>
						
						<div className="bg-amber-50 p-4 rounded-lg">
							<h4 className="font-semibold text-amber-800 mb-2">Các điều kiện đã sẵn sàng:</h4>
							<div className="grid md:grid-cols-2 gap-4">
								<div>
									<h5 className="font-medium text-amber-700">Lực lượng:</h5>
									<ul className="text-amber-600 text-sm space-y-1 list-disc list-inside">
										<li>Quân đội cách mạng có kinh nghiệm chiến đấu</li>
										<li>Mặt trận Việt Minh rộng khắp</li>
										<li>Nhân dân giác ngộ cao</li>
									</ul>
								</div>
								<div>
									<h5 className="font-medium text-amber-700">Điều kiện:</h5>
									<ul className="text-amber-600 text-sm space-y-1 list-disc list-inside">
										<li>Vùng giải phóng vững chắc</li>
										<li>Đường lối đúng đắn</li>
										<li>Lãnh đạo thống nhất</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}