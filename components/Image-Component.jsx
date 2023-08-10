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
}) => {
	return (
		<Image
			src={src}
			alt={alt}
			className={`${position} z-0 w-[${width}px] h-[${height}px] flex-shrink-0`}
			style={{
				top,
				left,
				right,
				bottom,
			}}
		/>
	);
};

export default ImageComponent;
