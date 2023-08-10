const Text = ({
	weight = "normal",
	color = "#000",
	fontSize = 16,
	content = "",
	customClasses = "",
}) => {
	return (
		<p
			className={`${customClasses} !text-${color} font-${weight}`}
			style={{ fontSize }}
		>
			{content}
		</p>
	);
};

export default Text;
