import {useRef} from "react";
import {Box} from "@mantine/core";
import {Carousel as MantineCarousel} from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";

const images = [
	'https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	'https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

export const Carousel = () => {
	const autoplay = useRef(Autoplay({delay: 3000, stopOnInteraction: false}));
	
	return (
		<Box
			style={{
				position: "relative",
				maxWidth: 600,
				width: "100%",
			}}
		>
			{/* Background Shadow */}
			<Box
				style={{
					position: "absolute",
					top: 80,
					left: 80,
					width: "92%",
					height: "90%",
					borderRadius: "160px 16px 16px 16px",
					border: "2px solid #ddd",
					backgroundColor: "#f2f2f2",
					zIndex: 0,
				}}
			/>
			
			{/* Carousel */}
			<MantineCarousel
				controlSize={40}
				controlsOffset={16}
				loop
				withIndicators
				plugins={[autoplay.current]}
				onMouseEnter={autoplay.current.stop}
				onMouseLeave={autoplay.current.reset}
				style={{
					borderRadius: "160px 16px 16px 16px",
					overflow: "hidden",
					position: "relative",
					zIndex: 1,
					height: "100%",
				}}
			>
				{images.map((src, index) => (
					<MantineCarousel.Slide
						key={index}
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							height: "100%",
						}}
					>
						<img
							src={src}
							alt={`Slide ${index + 1}`}
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
							}}
						/>
					</MantineCarousel.Slide>
				))}
			</MantineCarousel>
		</Box>
	);
};
