import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/atoms/Badge/Badge";
import { Card, CardContent } from "@/components/molecules/card";
import type { Anime } from "@/modules/anime/anime.types";

interface AnimeCardProps {
	anime: Anime;
}

export default function AnimeCard({ anime }: AnimeCardProps) {
	return (
		<Link href={`/detail/${anime.mal_id}`}>
			<Card className="overflow-hidden transition-all hover:shadow-lg">
				<div className="relative aspect-[2/3] w-full">
					<Image
						src={anime.images.webp.image_url || "/default-banner.png"}
						alt={anime.title}
						fill
						sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 100vw"
						className="object-cover"
					/>
					<div className="absolute top-2 right-2">
						<Badge variant="secondary" className="flex items-center gap-1">
							<Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
							{anime.score}
						</Badge>
					</div>
				</div>
				<CardContent className="p-4 min-h-60">
					<h3 className="font-semibold line-clamp-1">{anime.title}</h3>
					<p className="my-2 line-clamp-2">{anime.synopsis}</p>
					<div className="flex items-center justify-between mt-1">
						<span className="text-sm text-muted-foreground">
							{anime.episodes || "-"} episodes
						</span>
						<span className="text-sm text-muted-foreground">{anime.year}</span>
					</div>
					<div className="flex gap-1 flex-wrap my-4">
						{anime.genres.map((genre) => (
							<Badge
								key={`anime-genre-${genre.mal_id}-${genre.name}`}
								variant="outline"
								className="text-xs"
							>
								{genre.name}
							</Badge>
						))}
					</div>
				</CardContent>
			</Card>
		</Link>
	);
}
