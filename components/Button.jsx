const Button = ({ text = "", clickAction = null, customClasses = "" }) => {
	return (
		<button
			onClick={clickAction}
			style={{ zIndex: 60 }}
			className={`${customClasses} p-[10px] rounded-[40px] text-[27px] min-w-[160px] min-h-[34px]`}
		>
			{text}
		</button>
	);
};

export default Button;
