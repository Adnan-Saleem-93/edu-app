"use client";

import Button from "@/components/Button";
import Text from "@/components/Text";
import ActivityLayout from "@/layouts/Activity-Layout";
import Paragraph from "/assets/SVGs/paragraph.svg";
import Girl from "/assets/SVGs/girl.svg";
import Boy from "/assets/SVGs/boy.svg";
import VectorBlue2 from "/assets/SVGs/vector-blue-2.svg";
import VectorGreen2 from "/assets/SVGs/vector-green-2.svg";
import ImageComponent from "@/components/Image-Component";
import Link from "next/link";

const images = [
	{
		src: Paragraph,
		alt: "paragraph-image",
		zIndex: -1,
		position: "relative",
	},
	{
		src: VectorBlue2,
		alt: "blue-vector",
		position: "absolute",
		zIndex: -1,
		bottom: 0,
		right: 0,
	},
	{
		src: Boy,
		alt: "boy-image",
		position: "absolute",
		bottom: 25,
		left: 70,
	},
	{
		src: VectorGreen2,
		alt: "green-vector",
		position: "absolute",
		bottom: 0,
		left: 0,
	},
	{
		src: Girl,
		alt: "girl-image",
		position: "absolute",
		bottom: 0,
		right: 0,
	},
];

const Activity = () => {
	return (
		<main className="absolute top-0 justify-between left-0 min-w-full min-h-screen">
			<ActivityLayout>
				<section className="absolute z-50 flex flex-col justify-between min-h-full h-auto items-center w-full p-8">
					<article className="text-center pt-8 w-[70%]">
						<Text
							content="You can begin your paragraph with the words:"
							fontSize={37}
							weight="bold"
							customClasses="mb-10 px-20"
						/>
						<Text content="“I am always excited to visit beach" fontSize={27} />
					</article>

					<article className="my-2 z-0">
						{images.map((image, index) => {
							return <ImageComponent key={index} zIndex={-1} {...image} />;
						})}
					</article>

					<article className="text-center pt-8 w-[65%]">
						<Text
							content="Well done! Don’t forget to share your work on the Seesaw app."
							fontSize={27}
							weight="bold"
							customClasses="px-20"
						/>
					</article>
					<article className="flex justify-between items-center w-[95%]">
						<Link href="/" style={{ zIndex: 10 }}>
							<Button text="Back" customClasses="button--default " />
						</Link>

						<Button text="Next" customClasses="button--default uppercase" />
					</article>
				</section>
			</ActivityLayout>
		</main>
	);
};

export default Activity;
