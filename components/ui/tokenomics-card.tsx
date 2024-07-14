const TokenomicsCard = ({
  color,
  textColor,
  title,
  content,
  value,
}: {
  color: string;
  textColor: string;
  title: string;
  content: string;
  value: number;
}) => {
  return (
    <div className="relative flex items-center justify-between rounded-[8.99px] border-[0.83px] border-white bg-[#0A456B] px-[28.35px] py-[14.92px] font-open-sans">
      <div className="">
        <p className="text-[14.92px] font-bold leading-[20.32px] text-white">
          {title}
        </p>
        <p className="mt-[2.32px] text-[13.26px] font-semibold leading-[13.26px] text-white">
          {content}
        </p>
      </div>

      <p className={`text-[23.21px] font-extrabold ${textColor}`}>{value}%</p>
      <svg
        width="25.3"
        height="27.83"
        viewBox="0 0 28 29"
        fill="curentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute -left-2 -top-2 ${color}`}
      >
        <path
          d="M23.1078 23.0375C33.8891 11.9989 21.9888 -1.7878 8.6404 0.84384L8.35852 6.80228L0.263648 7.88541C1.52271 21.5997 10.4102 36.0381 23.1078 23.0375Z"
          fill="curentColor"
        />
      </svg>
    </div>
  );
};

export default TokenomicsCard;
