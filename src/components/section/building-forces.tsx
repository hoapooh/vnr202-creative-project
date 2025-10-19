"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";

export default function BuildingForces() {
    const handleBackButtonClick = () => {
        window.history.back();
    }
	return (
		<div className="max-w-6xl mx-auto px-6 py-20 space-y-12">
            <Button variant="outline" className="mb-4" onClick={handleBackButtonClick}>
                Quay lại
            </Button>
			{/* Title */}
			<div className="text-center space-y-4">
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
								<div key={index} className="flex gap-4 p-4 bg-white rounded-lg border border-gray-200">
									<Badge className="bg-orange-100 text-orange-800 border-orange-300 min-w-fit">
										{uprising.date}
									</Badge>
									<div>
										<h4 className="font-semibold text-orange-800">{uprising.name}</h4>
										<p className="text-gray-700 text-sm">{uprising.description}</p>
									</div>
								</div>
							))}
						</div>
						<div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
							<h4 className="font-semibold text-yellow-800 mb-2">Ý nghĩa:</h4>
							<p className="text-yellow-700">
								Các cuộc khởi nghĩa này được xem là "những tiếng súng báo hiệu cho cuộc
								khởi nghĩa toàn quốc".
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
								<h4 className="font-semibold text-green-800 mb-2">22/12/1944 - Thành lập Đội Việt Nam Tuyên truyền Giải phóng quân:</h4>
								<ul className="text-green-700 space-y-1 list-disc list-inside">
									<li>34 thành viên do Võ Nguyên Giáp chỉ huy</li>
									<li>Đây là tiền thân của Quân đội nhân dân Việt Nam</li>
									<li>Đánh dấu sự ra đời chính thức của lực lượng vũ trang cách mạng</li>
								</ul>
								<div className="mt-3 p-3 bg-green-100 rounded">
									<p className="text-green-800 font-medium">
										"Một tay cầm súng, một tay cầm cuốc" - Phương châm hoạt động của đội quân cách mạng
									</p>
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
								<h4 className="font-semibold text-blue-800 mb-2">Vai trò căn cứ địa:</h4>
								<ul className="text-blue-700 space-y-1 list-disc list-inside">
									<li>Nơi rèn luyện lực lượng vũ trang và cán bộ</li>
									<li>Trung tâm chỉ đạo phong trào cách mạng cả nước</li>
									<li>Cơ sở hậu phương vững chắc cho cuộc kháng chiến</li>
								</ul>
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
								<span className="font-semibold">"Cờ giải phóng"</span>,{" "}
								<span className="font-semibold">"Việt Nam độc lập"</span>,{" "}
								<span className="font-semibold">"Cứu quốc"</span>,{" "}
								<span className="font-semibold">"Tin tức"</span>... để tuyên truyền đường lối
								cách mạng.
							</p>
						</div>
						<div className="space-y-3">
							<h3 className="text-lg font-semibold text-teal-800">Văn hóa</h3>
							<div className="space-y-2">
								<p className="text-gray-700">
									Phong trào văn hóa cứu nước phát triển mạnh mẽ với các tác phẩm nổi tiếng:
								</p>
								<ul className="text-gray-600 list-disc list-inside space-y-1 text-sm">
									<li>"Tiến quân ca" của Văn Cao</li>
									<li>Các vở kịch, thơ ca cách mạng</li>
									<li>Phong trào học tập chữ quốc ngữ</li>
								</ul>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}