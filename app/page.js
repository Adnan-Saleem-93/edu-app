"use client";

import Button from "@/components/Button";
import Header from "@/components/Header";
import Text from "@/components/Text";
import ExampleLayout from "@/layouts/Example-Layout";
import { useRouter } from "next/navigation";
import Beach from "/assets/SVGs/beach.svg";
import VectorGreen from "/assets/SVGs/vector-green.svg";
import Link from "next/link";
import ImageComponent from "@/components/Image-Component";

const images = [
	{
		src: Beach,
		alt: "beach",
		position: "relative",
		zIndex: -1,
	},
	{
		src: VectorGreen,
		alt: "green-vector",
		position: "absolute",
		zIndex: -1,
		bottom: 0,
		right: 0,
	},
];

export default function Home() {
	return (
		<main className="absolute top-0 justify-between left-0 min-w-full min-h-screen">
			<ExampleLayout>
				<section className="absolute z-50 flex flex-col justify-between min-h-full h-auto items-center w-full p-8">
					<article
						className={`flex justify-center items-center bg-[url('/bg-cloud.svg')] bg-contain bg-no-repeat mix-blend-multiply bg-opacity-30 w-[280px] h-[78px] !fill-[#E2BEAE]`}
					>
						<Header text="Activity 3" />
					</article>
					<article className="mt-8 mb-12">
						{images.map((image, index) => {
							return <ImageComponent key={index} {...image} />;
						})}
					</article>
					<article className="w-[90%]">
						<Text
							weight="bold"
							fontSize={27}
							content="Using your similes, write a paragraph (of 3-4 sentences) to describe a beach."
						/>
						<br />
						<Text weight="normal" fontSize={27} content="Example:" />
						<Text
							weight="normal"
							fontSize={27}
							content="I am always excited to visit Bondi beach. On my last visit, the water there shimmered like a thousand diamonds in the Queen’s necklace. I excitedly stepped onto the warm sand that stretched in front of me like an endless footy stadium. Above me, the azure blue sky had clouds speckled across it like fairy floss, shading us from the harsh sun."
						/>
					</article>
					<article className="flex justify-between items-center w-[97.5%]">
						<Button text="Back" customClasses="button--default" />

						<Link href="/activity">
							<Button text="Next" customClasses="button--default uppercase" />
						</Link>
					</article>
				</section>
			</ExampleLayout>
		</main>
	);
}
