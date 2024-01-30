const Heading = ({ title, subTitle, center = true }) => {
  return (
    <div className={center && "text-center"}>
      <h4 className="text-primary text-lg">{subTitle}</h4>
      <h2 className="text-[40px] leading-[50px] md:text-[46px] mt-4 md:leading-[55px]">
        {title}
      </h2>
    </div>
  );
};

export default Heading;
