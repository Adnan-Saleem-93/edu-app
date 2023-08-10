import { pxToRem } from "@/utils/functions";
import Image from "next/image";

const ImageComponent = ({
	src = null,
	alt = "",
	height = 0,
	width = 0,
	top = null,
	left = null,
	right = null,
	bottom = null,
	position = "absolute",
	customClasses = "",
	zIndex = 0,
}) => {
	return (
		<Image
			src={src}
			alt={alt}
			className={`${customClasses} w-[${pxToRem(width)}] h-[${pxToRem(
				height
			)}] flex-shrink-0`}
			style={{
				top,
				left,
				right,
				bottom,
				position,
				zIndex,
			}}
		/>
	);
};

export default ImageComponent;
