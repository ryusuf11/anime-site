"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CalendarIcon, ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Badge } from "@/components/atoms/Badge/Badge";
import { Button } from "@/components/atoms/Button/Button";
import type { Anime } from "@/modules/anime/anime.types";

interface AnimeSliderProps {
	animeList: Anime[];
}

export default function AnimeSlider({ animeList }: AnimeSliderProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);

	const currentAnime = animeList[currentIndex];

	// Auto-advance the slider every 6 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			if (!isAnimating && currentIndex >= 0) {
				handleNext();
			}
		}, 6000);
		return () => clearInterval(interval);
	}, [currentIndex, isAnimating]);

	const handlePrevious = () => {
		if (isAnimating) return;
		setIsAnimating(true);
		setDirection(-1);
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? animeList.length - 1 : prevIndex - 1,
		);
	};

	const handleNext = () => {
		if (isAnimating) return;
		setIsAnimating(true);
		setDirection(1);
		setCurrentIndex((prevIndex) =>
			prevIndex === animeList.length - 1 ? 0 : prevIndex + 1,
		);
	};

	const variants = {
		enter: (direction: number) => ({
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		}),
		center: {
			x: 0,
			opacity: 1,
		},
		exit: (direction: number) => ({
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
		}),
	};

	return (
		<div className="relative w-full h-[70vh] overflow-hidden">
			<AnimatePresence
				initial={false}
				mode="wait"
				custom={direction}
				onExitComplete={() => setIsAnimating(false)}
			>
				<motion.div
					key={currentIndex}
					custom={direction}
					variants={variants}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{
						x: { type: "spring", stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 },
					}}
					className="absolute inset-0"
				>
					<Image
						src={
							currentAnime.trailer.images.large_image_url ||
							"/default-banner.png"
						}
						alt={currentAnime.title}
						fill
						sizes="(min-width: 1024px) 100vw, (min-width: 768px) 100vw, 100vw"
						className="object-cover brightness-50"
						priority
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

					<div className="absolute inset-0 flex items-end">
						<div className="container px-4 py-12 mx-auto">
							<div className="grid gap-4 md:grid-cols-[350px_1fr] lg:gap-8">
								<div className="relative hidden md:block aspect-[2/3] w-full">
									<Image
										src={
											currentAnime.images.webp.large_image_url ||
											"/default-banner.png"
										}
										alt={currentAnime.title}
										fill
										sizes="(min-width: 1024px) 100vw, (min-width: 768px) 100vw, 100vw"
										className="object-cover rounded-lg shadow-lg"
									/>
								</div>

								<div className="flex flex-col justify-end">
									<Badge className="w-fit mb-2">Featured Anime</Badge>
									<h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
										{currentAnime.title}
									</h1>

									<div className="flex items-center gap-4 mb-4">
										<div className="flex items-center gap-1">
											<Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
											<span className="text-white font-medium">
												{currentAnime.score}/10
											</span>
										</div>
										<span className="text-white">{currentAnime.year}</span>
										<div className="flex gap-1">
											{currentAnime.genres.map((genre) => (
												<Badge
													key={`genre-${genre.mal_id}-${genre.name}`}
													variant="outline"
													className="text-white border-white"
												>
													{genre.name}
												</Badge>
											))}
										</div>
										<span className="text-white">
											{currentAnime.episodes} Episodes
										</span>
									</div>

									<p className="text-white/90 mb-6 max-w-3xl overflow-ellipsis line-clamp-2">
										{currentAnime.synopsis}
									</p>

									<div className="flex flex-wrap gap-3">
										<Button asChild size="lg" className="gap-2">
											<Link href={`/detail/${currentAnime.mal_id}`}>
												<CalendarIcon className="h-4 w-4" />
												Watch Now
											</Link>
										</Button>
										<Button
											asChild
											size="lg"
											variant="outline"
											className="text-white border-white hover:text-white hover:bg-white/20"
										>
											<Link href={`/detail/${currentAnime.mal_id}`}>
												View Details
											</Link>
										</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</AnimatePresence>

			{/* Navigation buttons */}
			<div className="absolute inset-y-0 left-0 flex items-center">
				<Button
					variant="ghost"
					size="icon"
					className="h-12 w-12 rounded-full bg-background/20 text-white hover:bg-background/40 ml-4"
					onClick={handlePrevious}
				>
					<ChevronLeft className="h-8 w-8" />
					<span className="sr-only">Previous</span>
				</Button>
			</div>
			<div className="absolute inset-y-0 right-0 flex items-center">
				<Button
					variant="ghost"
					size="icon"
					className="h-12 w-12 rounded-full bg-background/20 text-white hover:bg-background/40 mr-4"
					onClick={handleNext}
				>
					<ChevronRight className="h-8 w-8" />
					<span className="sr-only">Next</span>
				</Button>
			</div>

			{/* Dots indicator */}
			<div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
				{animeList.map((anime, index) => (
					<button
						key={`button-${anime.mal_id}`}
						type="button"
						className={`h-2 w-2 rounded-full ${
							index === currentIndex ? "bg-white" : "bg-white/50"
						} transition-all duration-300`}
						onClick={() => {
							if (!isAnimating) {
								setDirection(index > currentIndex ? 1 : -1);
								setIsAnimating(true);
								setCurrentIndex(index);
							}
						}}
					/>
				))}
			</div>
		</div>
	);
}
