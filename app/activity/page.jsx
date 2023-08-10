"use client";

import Button from "@/components/Button";
import Text from "@/components/Text";
import ActivityLayout from "@/layouts/Activity-Layout";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Group18 from "/assets/images/Group 18.png";
import Group19 from "/assets/images/Group 19.png";
import Group20 from "/assets/images/Group 20.png";
import { pxToRem } from "@/utils/functions";

const Activity = () => {
	const { push } = useRouter();

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
						<Image
							src={Group18}
							alt="group-18"
							className={`relative z-0 w-[${pxToRem(830)}] h-[${pxToRem(
								418
							)}] flex-shrink-0`}
							style={{ zIndex: -1 }}
						/>
						<Image
							src={Group19}
							alt="group-19"
							className={`absolute z-0 w-[${pxToRem(830)}] h-[${pxToRem(
								418
							)}] flex-shrink-0`}
							style={{ zIndex: -1, bottom: 0, right: 0 }}
						/>
						<Image
							src={Group20}
							alt="group-19"
							className={`absolute z-0 w-[${pxToRem(830)}] h-[${pxToRem(
								418
							)}] flex-shrink-0`}
							style={{ zIndex: -1, bottom: 25, left: 70 }}
						/>
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
						<Button
							text="Back"
							customClasses="button--default tracking-widest"
							clickAction={() => push("/")}
						/>
						<Button
							text="Next"
							customClasses="button--default tracking-widest uppercase"
						/>
					</article>
				</section>
			</ActivityLayout>
		</main>
	);
};

export default Activity;
