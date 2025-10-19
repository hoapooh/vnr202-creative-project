import Link from "next/link";

export function Footer() {
	return (
		<footer className="border-t border-border bg-card">
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h3 className="font-serif text-xl font-bold mb-4">VCP History 1930-1945</h3>
						<p className="text-sm text-muted-foreground leading-relaxed">
							An educational resource documenting the Vietnamese Communist Party&apos;s leadership
							during the struggle for independence.
						</p>
					</div>

					<div>
						<h4 className="font-semibold mb-4">Quick Links</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<a
									href="#timeline"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Timeline
								</a>
							</li>
							<li>
								<a
									href="#key-events"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Key Events
								</a>
							</li>
							<li>
								<Link
									href="/ai-usage"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									AI Usage Report
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-semibold mb-4">Educational Purpose</h4>
						<p className="text-sm text-muted-foreground leading-relaxed">
							This website is created for educational purposes to provide accessible historical
							information about a significant period in Vietnamese history.
						</p>
					</div>
				</div>

				<div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
					<p>
						© 2025 Vietnamese Communist Party History Project. Created for educational purposes.
					</p>
				</div>
			</div>
		</footer>
	);
}
