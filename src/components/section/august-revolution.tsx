"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";

export default function AugustRevolution() {
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
							vào Đông Dương giải giáp quân Nhật. Đây là cuộc "đua nước rút với thời gian" để giành
							chính quyền.
						</p>
					</div>

					<div className="space-y-4">
						<div className="flex gap-4 items-start">
							<Badge className="bg-green-100 text-green-800 border-green-300 min-w-fit">
								13/8/1945
							</Badge>
							<div>
								<h4 className="font-semibold text-green-800">Hội nghị toàn quốc của Đảng tại Tân Trào</h4>
								<div className="space-y-2 mt-2">
									<p className="text-gray-700">Quyết định:</p>
									<ul className="text-gray-600 list-disc list-inside space-y-1">
										<li>Phát động tổng khởi nghĩa giành chính quyền toàn quốc</li>
										<li>Thành lập Ủy ban Dân tộc Giải phóng Việt Nam</li>
										<li>Cử Hồ Chí Minh làm Chủ tịch</li>
										<li>Ra "Lời kêu gọi tổng khởi nghĩa"</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="flex gap-4 items-start">
							<Badge className="bg-blue-100 text-blue-800 border-blue-300 min-w-fit">
								16/8/1945
							</Badge>
							<div>
								<h4 className="font-semibold text-blue-800">Đại hội Quốc dân tại Tân Trào</h4>
								<div className="space-y-2 mt-2">
									<p className="text-gray-700">Thông qua:</p>
									<ul className="text-gray-600 list-disc list-inside space-y-1">
										<li>Tán thành quyết định tổng khởi nghĩa</li>
										<li>Bầu Chính phủ lâm thời</li>
										<li>Cử Hồ Chí Minh làm Chủ tịch Chính phủ lâm thời</li>
										<li>Thông qua 10 chính sách đại cương</li>
									</ul>
								</div>
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
							"Giờ quyết định cho vận mệnh dân tộc ta đã đến. Toàn quốc đồng bào hãy đứng
							dậy đem sức ta mà tự giải phóng cho ta..."
							<div className="mt-2 text-right font-semibold">- Hồ Chí Minh</div>
						</blockquote>
					</div>

					<div className="space-y-6">
						<div>
							<h4 className="text-lg font-semibold text-rose-800 mb-3">Khởi nghĩa lan tỏa khắp cả nước:</h4>
							<p className="text-gray-700 mb-4">
								Từ các căn cứ địa ở miền Bắc, phong trào khởi nghĩa nhanh chóng lan tỏa
								khắp cả nước theo phương châm "tiến nhanh, đánh chắc".
							</p>
						</div>

						<div className="grid gap-4">
							{[
								{
									date: "19/8/1945",
									location: "Hà Nội",
									event: "Hàng chục vạn nhân dân biểu tình, chiếm các cơ quan quan trọng",
									color: "red"
								},
								{
									date: "23/8/1945",
									location: "Huế", 
									event: "Vua Bảo Đại thoái vị, giao ấn vàng và gươm báu cho chính quyền cách mạng",
									color: "purple"
								},
								{
									date: "25/8/1945",
									location: "Sài Gòn",
									event: "Quần chúng nổi dậy, giành chính quyền thành phố",
									color: "blue"
								},
								{
									date: "28/8/1945",
									location: "Toàn quốc",
									event: "Khởi nghĩa thành công trên phạm vi cả nước, chính quyền về tay nhân dân",
									color: "green"
								}
							].map((item, index) => (
								<div key={index} className="flex gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
									<Badge className={`bg-${item.color}-100 text-${item.color}-800 border-${item.color}-300 min-w-fit`}>
										{item.date}
									</Badge>
									<div>
										<h5 className={`font-semibold text-${item.color}-800`}>{item.location}</h5>
										<p className="text-gray-700 text-sm">{item.event}</p>
									</div>
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
								2/9/1945
							</Badge>
							<div>
								<h4 className="font-semibold text-yellow-800">Tuyên ngôn Độc lập tại Quảng trường Ba Đình</h4>
								<p className="text-gray-700">
									Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập, chính thức khai sinh
									nước Việt Nam Dân chủ Cộng hòa trước 500.000 đồng bào Hà Nội.
								</p>
							</div>
						</div>

						<div className="bg-yellow-50 p-4 rounded-lg">
							<h4 className="font-semibold text-yellow-800 mb-2">Ý nghĩa lịch sử:</h4>
							<ul className="text-yellow-700 space-y-1 list-disc list-inside">
								<li>Chấm dứt gần một thế kỷ đô hộ của thực dân Pháp</li>
								<li>Kết thúc chế độ phong kiến hàng nghìn năm</li>
								<li>Mở ra kỷ nguyên độc lập, tự do của dân tộc Việt Nam</li>
							</ul>
						</div>

						<div className="bg-gradient-to-r from-red-50 to-yellow-50 p-6 rounded-lg border border-yellow-300">
							<h4 className="font-bold text-yellow-800 mb-3">Tuyên ngôn Độc lập (trích đoạn):</h4>
							<blockquote className="text-yellow-700 italic leading-relaxed">
								"Tất cả mọi người đều sinh ra có quyền bình đẳng. Tạo hóa cho họ những quyền 
								không ai có thể xâm phạm được; trong những quyền ấy, có quyền được sống, 
								quyền tự do và quyền mưu cầu hạnh phúc..."
							</blockquote>
							<div className="mt-3 text-right">
								<span className="font-semibold text-yellow-800">- Hồ Chí Minh, 2/9/1945</span>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Analysis of August Revolution */}
			<Card className="shadow-lg border-2 border-purple-200">
				<CardHeader>
					<CardTitle className="text-2xl text-purple-700 flex items-center gap-2">
						<span className="w-2 h-2 bg-purple-700 rounded-full"></span>
						Đặc điểm và Ý nghĩa của Cách mạng Tháng Tám
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-8">
					<div className="space-y-6">
						<div className="bg-purple-50 p-4 rounded-lg">
							<h4 className="font-semibold text-purple-800 mb-2">Đặc điểm nổi bật:</h4>
							<ul className="text-purple-700 space-y-2 list-disc list-inside">
								<li><strong>Tính chất:</strong> Cách mạng giải phóng dân tộc, dân chủ nhân dân</li>
								<li><strong>Phương thức:</strong> Khởi nghĩa chính trị, ít đổ máu</li>
								<li><strong>Quy mô:</strong> Toàn quốc, đồng loạt</li>
								<li><strong>Thời gian:</strong> Nhanh chóng, chỉ trong vòng 2 tuần</li>
								<li><strong>Lực lượng:</strong> Toàn dân tộc đoàn kết</li>
							</ul>
						</div>

						<div>
							<h4 className="text-lg font-semibold text-purple-800 mb-3">Nguyên nhân thành công:</h4>
							<div className="grid md:grid-cols-2 gap-4">
								<div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
									<h5 className="font-medium text-blue-800 mb-2">Chủ quan:</h5>
									<ul className="text-blue-700 text-sm space-y-1 list-disc list-inside">
										<li>Đường lối đúng đắn của Đảng</li>
										<li>Sự lãnh đạo tài tình của Hồ Chí Minh</li>
										<li>Khối đại đoàn kết dân tộc</li>
										<li>Lực lượng vũ trang sẵn sàng</li>
										<li>Nhân dân giác ngộ cao</li>
									</ul>
								</div>
								<div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
									<h5 className="font-medium text-green-800 mb-2">Khách quan:</h5>
									<ul className="text-green-700 text-sm space-y-1 list-disc list-inside">
										<li>Thời cơ quốc tế thuận lợi</li>
										<li>Khoảng trống quyền lực</li>
										<li>Địch yếu, ta mạnh</li>
										<li>Nhân dân khát khao độc lập</li>
										<li>Chớp thời cơ kịp thời</li>
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