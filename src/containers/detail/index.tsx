import { CalendarIcon, Clock, Star } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/atoms/Badge/Badge";
import { Button } from "@/components/atoms/Button/Button";
import { Separator } from "@/components/atoms/Separator/separator";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/molecules/tabs";
import RecommendationSectionSkeleton from "@/components/organisms/recommendation-section-skeleton";
import ReviewSectionSkeleton from "@/components/organisms/review-section-skeleton";
import dynamic from "next/dynamic";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { actionGetAnimeDetail } from "./detail.action";

const RecommendationSection = dynamic(
	() => import("../../components/organisms/recommendation-section"),
);

const ReviewSection = dynamic(
	() => import("../../components/organisms/review-section"),
);

export const AnimeDetailContainer = async ({ id }: { id: string }) => {
	const { animeDetail } = await actionGetAnimeDetail(id);
	if (!animeDetail) {
		return notFound();
	}
	return (
		<div className="flex flex-col min-h-screen">
			<div className="relative w-full h-[50vh] md:h-[70vh]">
				<Image
					src={
						animeDetail.trailer.images.large_image_url || "/default-banner.png"
					}
					alt={animeDetail.title}
					fill
					className="object-cover brightness-50"
					priority
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

				<div className="absolute bottom-0 left-0 right-0 container px-4 py-8 mx-auto">
					<div className="flex flex-col md:flex-row gap-8">
						<div className="relative hidden md:block w-64 h-96 shrink-0">
							<Image
								src={animeDetail.images.webp.image_url || "/default-banner.png"}
								alt={animeDetail.title}
								fill
								className="object-cover rounded-lg shadow-lg"
							/>
						</div>

						<div className="flex flex-col justify-end">
							<h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
								{animeDetail.title}
							</h1>

							<div className="flex flex-wrap items-center gap-2 mb-4">
								<Badge variant="secondary" className="text-xs">
									{animeDetail.year}
								</Badge>
								<div className="flex items-center gap-1">
									<Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
									<span className="text-white">{animeDetail.score}/10</span>
								</div>
								<div className="flex items-center gap-1">
									<Clock className="h-4 w-4 text-white" />
									<span className="text-white">{animeDetail.duration}</span>
								</div>
							</div>

							<div className="flex flex-wrap gap-2 mb-4">
								{animeDetail.genres.map((genre) => (
									<Badge
										key={`detail-anime-genre-${genre.mal_id}-${genre.name}`}
										variant="outline"
										className="text-white border-white"
									>
										{genre.name}
									</Badge>
								))}
							</div>

							<p className="text-white/90 mb-6 max-w-3xl">
								{animeDetail.background}
							</p>

							<div className="flex flex-wrap gap-3">
								<Link
									href={animeDetail.url}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Button size="lg" className="gap-2">
										<CalendarIcon className="h-4 w-4" />
										Watch Now
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Movie details */}
			<div className="container px-4 py-8 mx-auto">
				<Tabs defaultValue="about" className="w-full">
					<TabsList className="mb-6">
						<TabsTrigger value="about">About</TabsTrigger>
						<TabsTrigger value="reviews">Reviews</TabsTrigger>
					</TabsList>

					<TabsContent value="about" className="space-y-6">
						<div>
							<h2 className="text-2xl font-bold mb-4">Synopsis</h2>
							<p className="text-muted-foreground">{animeDetail.synopsis}</p>
						</div>

						<Separator />

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div>
								<h3 className="text-xl font-semibold mb-4">Details</h3>
								<dl className="grid grid-cols-[120px_1fr] gap-2">
									<dt className="font-medium">Studio:</dt>
									<dd>
										{animeDetail.studios.map((studio) => studio.name).join(",")}
									</dd>

									<dt className="font-medium">Release Year:</dt>
									<dd>{animeDetail.year}</dd>

									<dt className="font-medium">Duration:</dt>
									<dd>{animeDetail.duration}</dd>

									<dt className="font-medium">Genres:</dt>
									<dd>
										{animeDetail.genres.map((genre) => genre.name).join(", ")}
									</dd>
								</dl>
							</div>
						</div>

						<Suspense fallback={<RecommendationSectionSkeleton />}>
							<RecommendationSection id={id} />
						</Suspense>
					</TabsContent>

					<TabsContent value="reviews">
						<Suspense fallback={<ReviewSectionSkeleton />}>
							<ReviewSection id={id} />
						</Suspense>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
};
