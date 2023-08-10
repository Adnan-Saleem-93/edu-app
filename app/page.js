"use client";

import Button from "@/components/Button";
import Header from "@/components/Header";
import Text from "@/components/Text";
import ActivityLayout from "@/layouts/Activity-Example-Layout";
import { useRouter } from "next/navigation";

export default function Home() {
	const { push } = useRouter();
	return (
		<main className="absolute top-0 justify-between left-0 min-w-full min-h-screen">
			<ActivityLayout>
				<section className="absolute z-50 flex flex-col justify-between min-h-full h-auto items-center w-full p-8">
					<article
						className={`flex justify-center items-center bg-[url('/bg-cloud.svg')] bg-contain bg-no-repeat mix-blend-multiply bg-opacity-30 w-[280px] h-[78px] !fill-[#E2BEAE]`}
					>
						<Header text="Activity 3" />
					</article>
					<article className="w-full h-[25rem]"></article>
					<article className="w-[70%]">
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
					<article className="flex justify-between items-center w-[90%]">
						<Button text="Back" />
						<Button text="Next" clickAction={() => push("/activity")} />
					</article>
				</section>
			</ActivityLayout>
		</main>
	);
}
