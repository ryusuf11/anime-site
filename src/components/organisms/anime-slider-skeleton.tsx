export default function AnimeSliderSkeleton() {
	return (
		<div className="relative w-full h-[70vh] overflow-hidden">
			<div className="absolute inset-0">
				<div className="h-full w-full bg-muted animate-pulse" />

				<div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

				<div className="absolute inset-0 flex items-end">
					<div className="container px-4 py-12 mx-auto">
						<div className="grid gap-4 md:grid-cols-[350px_1fr] lg:gap-8">
							<div className="relative hidden md:block aspect-[2/3] w-full">
								<div className="h-full w-full bg-muted rounded-lg animate-pulse" />
							</div>

							<div className="flex flex-col justify-end space-y-3">
								<div className="h-6 w-32 bg-muted rounded animate-pulse" />
								<div className="h-10 w-2/3 bg-muted rounded animate-pulse" />

								<div className="flex items-center gap-4">
									<div className="h-5 w-20 bg-muted rounded animate-pulse" />
									<div className="h-5 w-12 bg-muted rounded animate-pulse" />
									<div className="h-5 w-24 bg-muted rounded animate-pulse" />
									<div className="h-5 w-24 bg-muted rounded animate-pulse" />
								</div>

								<div className="h-12 w-full max-w-3xl bg-muted rounded animate-pulse" />

								<div className="flex gap-3">
									<div className="h-10 w-32 bg-muted rounded animate-pulse" />
									<div className="h-10 w-32 bg-muted rounded animate-pulse" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Fake navigation buttons */}
			<div className="absolute inset-y-0 left-0 flex items-center">
				<div className="h-12 w-12 bg-muted/40 rounded-full ml-4" />
			</div>
			<div className="absolute inset-y-0 right-0 flex items-center">
				<div className="h-12 w-12 bg-muted/40 rounded-full mr-4" />
			</div>

			{/* Fake dots indicator */}
			<div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
				{Array.from({ length: 5 }).map((_, i) => (
					<div
						key={`dot-${i + 1}`}
						className="h-2 w-2 bg-muted/60 rounded-full"
					/>
				))}
			</div>
		</div>
	);
}
