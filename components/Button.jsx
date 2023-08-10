const Button = ({ text = "", clickAction = null }) => {
	return (
		<button
			onClick={clickAction}
			className="p-[10px] bg-[#F5DCD5] rounded-[40px] text-[27px] min-w-[152px] min-h-[34px]"
		>
			{text}
		</button>
	);
};

export default Button;
