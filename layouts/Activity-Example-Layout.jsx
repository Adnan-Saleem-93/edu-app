import BgImage from "/assets/SVGs/background-1.svg";
import VectorBlue from "/assets/SVGs/vector-blue.svg";
import VectorGreen from "/assets/SVGs/vector-green.svg";
import Beach from "/assets/images/Group.png";
import VectorCloud from "/assets/SVGs/vector-cloud.svg";
import VectorCurl1 from "/assets/SVGs/vector-curl-1.svg";
import VectorCurl2 from "/assets/SVGs/vector-curl-2.svg";
import ImageComponent from "@/components/Image-Component";

const images = [
	{
		src: VectorBlue,
		alt: "vector-blue",
		width: 371.885,
		height: 443,
		top: 0,
		left: 0,
		position: "absolute",
	},
	{
		src: VectorCloud,
		alt: "vector-cloud",
		width: 95.4,
		height: 61.1,
		top: 118,
		left: 278,
		position: "absolute",
	},
	{
		src: VectorCloud,
		alt: "vector-cloud-2",
		width: 119,
		height: 76.3,
		top: 70,
		right: 213,
		position: "absolute",
	},
	{
		src: VectorCurl1,
		alt: "vector-curl-1",
		width: 62.4,
		height: 37.8,
		top: 283,
		left: 260,
		position: "absolute",
	},
	{
		src: VectorCurl2,
		alt: "vector-curl-2",
		width: 52.6,
		height: 28.1,
		top: 248,
		right: 186,
		position: "absolute",
	},
	{
		src: VectorCloud,
		alt: "vector-cloud-3",
		width: 95.4,
		height: 61.1,
		top: 340,
		right: 253,
		position: "absolute",
	},
	{
		src: VectorGreen,
		alt: "vector-green",
		width: 372,
		height: 313,
		bottom: 0,
		right: 0,
		position: "absolute",
	},
	{
		src: Beach,
		alt: "beach",
		width: 395,
		height: 247,
		top: 154,
		left: 400,
		position: "absolute",
	},
];

const ActivityExampleLayout = ({ children }) => {
	return (
		<div className={`bg-[url('${BgImage}')] w-[1194px] h-[834px] relative`}>
			{images.map((image, index) => {
				return <ImageComponent key={index} {...image} />;
			})}
			{children}
		</div>
	);
};

export default ActivityExampleLayout;
