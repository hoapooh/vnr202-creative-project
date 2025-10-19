"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";

export default function HistoricalSignificance() {
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
				<h1 className="text-4xl font-bold text-gray-800">
					Ý nghĩa Lịch sử và Bài học Kinh nghiệm
				</h1>
				<p className="text-xl text-gray-600">Của Cách mạng Tháng Tám 1945</p>
			</div>

			{/* Historical Significance */}
			<Card className="shadow-lg border-2 border-green-200">
				<CardHeader>
					<CardTitle className="text-2xl text-green-700 flex items-center gap-2">
						<span className="w-2 h-2 bg-green-700 rounded-full"></span>
						Ý nghĩa Lịch sử
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-8">
					{/* For Vietnam */}
					<div className="space-y-4">
						<h3 className="text-xl font-semibold text-green-800 flex items-center gap-2">
							<Badge className="bg-green-100 text-green-800 border-green-300">Đối với Việt Nam</Badge>
						</h3>
						<div className="grid gap-4 pl-6">
							{[
								{
									icon: "⛓️",
									title: "Phá tan xiềng xích",
									content: "Đập tan xiềng xích nô lệ gần một thế kỷ của đế quốc và chế độ quân chủ chuyên chế ngót nghìn năm."
								},
								{
									icon: "🏛️", 
									title: "Lập nền nhà nước mới",
									content: "Lập nên nước Việt Nam Dân chủ Cộng hòa, nhà nước của nhân dân đầu tiên ở Đông Nam Á."
								},
								{
									icon: "👥",
									title: "Thay đổi địa vị",
									content: "Đưa nhân dân Việt Nam từ thân phận nô lệ lên địa vị người chủ đất nước."
								},
								{
									icon: "🌅",
									title: "Mở kỷ nguyên mới",
									content: "Mở ra một kỷ nguyên mới trong lịch sử dân tộc: kỷ nguyên độc lập, tự do và hướng tới chủ nghĩa xã hội."
								}
							].map((item, index) => (
								<div key={index} className="flex gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
									<div className="text-2xl">{item.icon}</div>
									<div>
										<h4 className="font-semibold text-green-800 mb-1">{item.title}</h4>
										<p className="text-green-700 text-sm">{item.content}</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<Separator />

					{/* For the World */}
					<div className="space-y-4">
						<h3 className="text-xl font-semibold text-blue-800 flex items-center gap-2">
							<Badge className="bg-blue-100 text-blue-800 border-blue-300">Đối với Thế giới</Badge>
						</h3>
						<div className="grid gap-4 pl-6">
							{[
								{
									icon: "🥇",
									title: "Đầu tiên thành công",
									content: "Là cuộc cách mạng giải phóng dân tộc lần đầu tiên giành thắng lợi ở một nước thuộc địa."
								},
								{
									icon: "💥",
									title: "Phá vỡ hệ thống",
									content: "Đột phá một khâu quan trọng trong hệ thống thuộc địa của chủ nghĩa đế quốc, mở đầu thời kỳ suy sụp, tan rã của chủ nghĩa thực dân cũ."
								},
								{
									icon: "🔥",
									title: "Cổ vũ phong trào",
									content: "Cổ vũ mạnh mẽ phong trào giải phóng dân tộc trên thế giới."
								},
								{
									icon: "📚",
									title: "Phong phú lý luận",
									content: "Góp phần làm phong phú kho tàng lý luận của chủ nghĩa Mác-Lênin về cách mạng giải phóng dân tộc."
								}
							].map((item, index) => (
								<div key={index} className="flex gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
									<div className="text-2xl">{item.icon}</div>
									<div>
										<h4 className="font-semibold text-blue-800 mb-1">{item.title}</h4>
										<p className="text-blue-700 text-sm">{item.content}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Lessons Learned */}
			<Card className="shadow-lg border-2 border-purple-200">
				<CardHeader>
					<CardTitle className="text-2xl text-purple-700 flex items-center gap-2">
						<span className="w-2 h-2 bg-purple-700 rounded-full"></span>
						Các Bài học Kinh nghiệm
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-8">
					<div className="grid gap-6">
						{[
							{
								number: "1",
								title: "Về chỉ đạo chiến lược",
								content: "Phải giương cao ngọn cờ giải phóng dân tộc, đặt nhiệm vụ này lên hàng đầu và giải quyết đúng đắn mối quan hệ với nhiệm vụ cách mạng ruộng đất.",
								color: "red",
								icon: "🎯"
							},
							{
								number: "2", 
								title: "Về xây dựng lực lượng",
								content: "Trên cơ sở liên minh công nông, tập hợp mọi lực lượng yêu nước trong một mặt trận dân tộc thống nhất rộng rãi (như Mặt trận Việt Minh).",
								color: "green",
								icon: "🤝"
							},
							{
								number: "3",
								title: "Về phương pháp cách mạng", 
								content: "Kết hợp đấu tranh chính trị với đấu tranh vũ trang, tiến hành khởi nghĩa từng phần, tiến lên chớp đúng thời cơ phát động tổng khởi nghĩa ở cả nông thôn và thành thị.",
								color: "blue",
								icon: "⚔️"
							},
							{
								number: "4",
								title: "Về xây dựng Đảng",
								content: "Xây dựng một Đảng cách mạng tiên phong, vững mạnh về tư tưởng, chính trị và tổ chức; có đường lối đúng đắn, sáng tạo; liên hệ chặt chẽ với quần chúng; và phát huy được tính chủ động của các cấp bộ Đảng.",
								color: "orange",
								icon: "🏛️"
							}
						].map((lesson, index) => (
							<div key={index} className={`p-6 bg-${lesson.color}-50 rounded-lg border-l-4 border-${lesson.color}-400`}>
								<div className="flex items-start gap-4">
									<div className="flex items-center gap-3">
										<div className={`w-10 h-10 bg-${lesson.color}-100 text-${lesson.color}-700 rounded-full flex items-center justify-center font-bold`}>
											{lesson.number}
										</div>
										<div className="text-2xl">{lesson.icon}</div>
									</div>
									<div>
										<h4 className={`text-lg font-semibold text-${lesson.color}-800 mb-2`}>{lesson.title}</h4>
										<p className={`text-${lesson.color}-700`}>{lesson.content}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</CardContent>
			</Card>

			{/* Legacy and Impact */}
			<Card className="shadow-lg border-2 border-amber-200">
				<CardHeader>
					<CardTitle className="text-2xl text-amber-700 flex items-center gap-2">
						<span className="w-2 h-2 bg-amber-700 rounded-full"></span>
						Di sản và Tầm ảnh hưởng
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg">
						<h4 className="font-bold text-amber-800 mb-3">Tầm ảnh hưởng lâu dài:</h4>
						<ul className="text-amber-700 space-y-2 list-disc list-inside">
							<li>Tạo tiền đề cho các cuộc đấu tranh giải phóng dân tộc trên thế giới</li>
							<li>Khẳng định vai trò lãnh đạo của giai cấp công nhân và Đảng Cộng sản</li>
							<li>Chứng minh sức mạnh của khối đại đoàn kết dân tộc</li>
							<li>Để lại di sản tinh thần "Độc lập - Tự do - Hạnh phúc"</li>
							<li>Mở đường cho con đường đổi mới và phát triển đất nước</li>
						</ul>
					</div>

					<div className="text-center">
						<div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-100 to-yellow-100 rounded-full border border-amber-300">
							<span className="text-2xl">🎉</span>
							<span className="font-semibold text-amber-800">
								Cách mạng Tháng Tám - Niềm tự hào của dân tộc Việt Nam
							</span>
							<span className="text-2xl">🇻🇳</span>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}