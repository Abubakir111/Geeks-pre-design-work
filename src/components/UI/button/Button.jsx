const button = ({ bag, color, text }) => {
  const textss = 'red-500';
  return (
    <div>
      <button
        type="button"
        className="flex py-[15px] px-[40px] justify-center items-center gap-[10px] rounded-[8px] border-2 border-[#ad02e0] hover:border-red-300
        hover:bg-red-500
        font-Montserrat text-base no-italic
        font-normal leading-normal uppercase "
        style={{ background: bag, color: color }}
      >
        {text}
      </button>
    </div>
  );
};

export default button;
