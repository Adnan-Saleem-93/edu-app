import BgImage from "/assets/SVGs/background-1.svg";
import VectorBlue2 from "/assets/SVGs/vector-blue-2.svg";
import VectorGreen2 from "/assets/SVGs/vector-green-2.svg";
import VectorCloud from "/assets/SVGs/vector-cloud.svg";
import VectorCurl1 from "/assets/SVGs/vector-curl-1.svg";
import VectorCurl2 from "/assets/SVGs/vector-curl-2.svg";
import ImageComponent from "@/components/Image-Component";

const images = [
	{
		src: VectorCloud,
		alt: "vector-cloud",
		width: 127,
		height: 61.1,
		top: 25,
		left: 40,
		customClasses: "z-0",
	},
	{
		src: VectorCloud,
		alt: "vector-cloud-2",
		width: 119,
		height: 76.3,
		top: 49,
		right: 55.5,
		customClasses: "z-0",
	},
	{
		src: VectorCurl1,
		alt: "vector-curl-1",
		width: 62.4,
		height: 37.8,
		top: 237,
		left: 73,
		customClasses: "z-0",
	},
	{
		src: VectorCurl2,
		alt: "vector-curl-2",
		width: 52.6,
		height: 28.1,
		top: 179,
		right: 43.1,
		customClasses: "z-0",
	},
	{
		src: VectorCloud,
		alt: "vector-cloud-3",
		width: 95.4,
		height: 61.1,
		top: 238,
		right: 60.3,
		customClasses: "z-0",
	},
	{
		src: VectorCloud,
		alt: "vector-cloud-4",
		width: 95.4,
		height: 61.1,
		top: 401,
		left: -32.5,
		customClasses: "z-0",
	},
	// {
	// 	src: VectorGreen2,
	// 	alt: "vector-green-2",
	// 	width: 240,
	// 	height: 202,
	// 	bottom: 0,
	// 	left: 0,
	// 	position: "fixed",
	// 	customClasses: "z-0",
	// },
	// {
	// 	src: VectorBlue2,
	// 	alt: "vector-blue-2",
	// 	width: 240,
	// 	height: 202,
	// 	bottom: 0,
	// 	right: 0,
	// 	position: "fixed",
	// 	customClasses: "z-0",
	// },
];

const ActivityLayout = ({ children }) => {
	return (
		<div className={`bg-[url('${BgImage}')] w-[1194px] h-[834px] relative`}>
			{images.map((image, index) => {
				return <ImageComponent key={index} {...image} />;
			})}
			{children}
		</div>
	);
};

export default ActivityLayout;
