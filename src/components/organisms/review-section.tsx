import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/Avatar";
import { Badge } from "@/components/atoms/Badge/Badge";
import { ScrollArea } from "@/components/atoms/scroll-area";
import { Separator } from "@/components/atoms/separator";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/molecules/card";
import { actionGetAnimeReview } from "@/containers/detail/detail.action";
import { Star, ThumbsUp } from "lucide-react";
import Link from "next/link";

export default async function ReviewSection({ id }: { id: string }) {
	const { animeReview } = await actionGetAnimeReview(id);

	return (
		<section className="container px-4 py-8 mx-auto">
			<h2 className="text-2xl font-bold mb-6">User Reviews</h2>

			<ScrollArea className="space-y-4 pr-2">
				{animeReview.map((review) => (
					<Card
						key={review.mal_id}
						className="border rounded-xl shadow-sm my-3"
					>
						<CardHeader className="flex flex-row items-center space-x-4">
							<Avatar>
								<AvatarImage
									src={
										review.user.images.webp.image_url ||
										review.user.images.jpg.image_url ||
										"/default-avatar.png"
									}
									alt={review.user.username}
								/>
								<AvatarFallback>
									{review.user.username.slice(0, 2).toUpperCase()}
								</AvatarFallback>
							</Avatar>
							<div>
								<CardTitle className="text-base font-semibold">
									<Link href={review.user.url} target="_blank" rel="noreferrer">
										{review.user.username}
									</Link>
								</CardTitle>
								<div className="text-sm text-muted-foreground">
									Episodes watched: {review.episodes_watched}
								</div>
							</div>
						</CardHeader>

						<CardContent className="space-y-2">
							<div className="flex items-center gap-2">
								<Star className="w-4 h-4 text-yellow-500" />
								<span className="font-semibold">{review.score}</span>
								<Separator orientation="vertical" className="h-4" />
								{review.is_spoiler && (
									<Badge variant="destructive">Spoiler</Badge>
								)}
								{review.is_preliminary && (
									<Badge variant="secondary">Preliminary</Badge>
								)}
								{review.tags.map((tag) => (
									<Badge key={tag} variant="outline">
										{tag}
									</Badge>
								))}
							</div>

							<p className="text-sm text-muted-foreground whitespace-pre-line line-clamp-6">
								{review.review}
							</p>

							<div className="flex items-center gap-4 text-sm text-muted-foreground">
								<ThumbsUp className="w-4 h-4" />
								<span>{review.reactions.overall} total reactions</span>
							</div>
						</CardContent>
					</Card>
				))}
			</ScrollArea>
		</section>
	);
}
