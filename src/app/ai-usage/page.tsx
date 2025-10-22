import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function AIUsagePage() {
	return (
		<main className="min-h-screen">
			<ScrollProgress className="top-[65px]" />
			<Header />

			<section className="py-20 px-4 font-serif">
				<div className="container mx-auto max-w-4xl">
					<div className="mb-12">
						<h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">
							AI Usage Report
						</h1>
						<p className="text-lg text-muted-foreground leading-relaxed">
							Documentation of artificial intelligence tools and methodologies used in creating this
							historical educational resource.
						</p>
					</div>

					<div className="space-y-6">
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Badge variant="outline">Research</Badge>
									Historical Data Collection
								</CardTitle>
								<CardDescription>AI-assisted research and fact verification</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div>
									<h4 className="font-semibold mb-2">Purpose</h4>
									<p className="text-muted-foreground leading-relaxed">
										AI tools were used to gather, verify, and cross-reference historical information
										about the Vietnamese Communist Party&apos;s activities between 1930-1945,
										ensuring accuracy and comprehensiveness of the timeline and key events.
									</p>
								</div>
								<div>
									<h4 className="font-semibold mb-2">Methodology</h4>
									<ul className="list-disc list-inside space-y-1 text-muted-foreground">
										<li>Cross-referencing multiple historical sources</li>
										<li>Fact-checking dates and events</li>
										<li>Identifying key figures and their roles</li>
										<li>Verifying historical context and significance</li>
									</ul>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Badge variant="outline">Content</Badge>
									Text Generation & Editing
								</CardTitle>
								<CardDescription>AI-assisted content creation and refinement</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div>
									<h4 className="font-semibold mb-2">Purpose</h4>
									<p className="text-muted-foreground leading-relaxed">
										AI was utilized to draft initial content, refine historical descriptions, and
										ensure clarity and accessibility of complex historical information for
										educational purposes.
									</p>
								</div>
								<div>
									<h4 className="font-semibold mb-2">Human Oversight</h4>
									<p className="text-muted-foreground leading-relaxed">
										All AI-generated content was reviewed, edited, and verified by human editors to
										ensure historical accuracy, appropriate tone, and educational value.
									</p>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Badge variant="outline">Design</Badge>
									Visual Design & Development
								</CardTitle>
								<CardDescription>AI-assisted web design and development</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div>
									<h4 className="font-semibold mb-2">Purpose</h4>
									<p className="text-muted-foreground leading-relaxed">
										AI tools assisted in creating the website structure, designing the user
										interface, implementing interactive timeline features, and generating data
										visualizations to enhance user engagement and learning.
									</p>
								</div>
								<div>
									<h4 className="font-semibold mb-2">Technologies Used</h4>
									<ul className="list-disc list-inside space-y-1 text-muted-foreground">
										<li>Next.js for web framework</li>
										<li>React for interactive components</li>
										<li>Recharts for data visualization</li>
										<li>Tailwind CSS for styling</li>
										<li>AI-assisted code generation and optimization</li>
									</ul>
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Badge variant="outline">Visualization</Badge>
									Data Analysis & Charts
								</CardTitle>
								<CardDescription>AI-assisted data interpretation and visualization</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div>
									<h4 className="font-semibold mb-2">Purpose</h4>
									<p className="text-muted-foreground leading-relaxed">
										AI helped analyze historical data patterns, identify trends in party membership
										growth, revolutionary activities, and create meaningful visualizations to
										illustrate the party&apos;s development during this critical period.
									</p>
								</div>
								<div>
									<h4 className="font-semibold mb-2">Data Sources</h4>
									<p className="text-muted-foreground leading-relaxed">
										Historical records, academic research, and documented statistics were processed
										and visualized to provide clear insights into the party&apos;s growth and
										activities.
									</p>
								</div>
							</CardContent>
						</Card>

						<Card className="border-accent">
							<CardHeader>
								<CardTitle>Ethical Considerations</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div>
									<h4 className="font-semibold mb-2">Accuracy & Verification</h4>
									<p className="text-muted-foreground leading-relaxed">
										All historical information has been cross-referenced with reputable sources. AI
										was used as a tool to assist research and presentation, not as the sole source
										of historical facts.
									</p>
								</div>
								<div>
									<h4 className="font-semibold mb-2">Educational Purpose</h4>
									<p className="text-muted-foreground leading-relaxed">
										This website is created for educational purposes to provide accessible
										historical information about a significant period in Vietnamese history.
									</p>
								</div>
								<div>
									<h4 className="font-semibold mb-2">Transparency</h4>
									<p className="text-muted-foreground leading-relaxed">
										We believe in transparency about AI usage in educational content creation. This
										report serves to inform users about the role of AI in developing this resource.
									</p>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
