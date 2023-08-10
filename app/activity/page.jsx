"use client";

import Button from "@/components/Button";
import Text from "@/components/Text";
import ActivityLayout from "@/layouts/Activity-Layout";
import { useRouter } from "next/navigation";

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

					<article className="text-center pt-8 w-[65%]">
						<Text
							content="Well done! Don’t forget to share your work on the Seesaw app."
							fontSize={27}
							weight="bold"
							customClasses="px-20"
						/>
					</article>
					<article className="flex justify-between items-center w-[90%]">
						<Button text="Back" clickAction={() => push("/")} />
						<Button text="Next" />
					</article>
				</section>
			</ActivityLayout>
		</main>
	);
};

export default Activity;
