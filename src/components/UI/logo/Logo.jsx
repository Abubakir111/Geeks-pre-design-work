import headerLogo from '../../../assets/images/logo_image.png';

const Logo = () => {
  return (
    <div
      // className={style.logoContainer}
      className="flex items-center"
    >
      <img src={headerLogo} alt="" />
      <div>
        <h2 className="text-black font-Montserrat text-2xl not-italic leading-normal font-semibold">
          MangoRead
        </h2>
        <p className="text-[#878787] font-Montserrat text-base not-italic font-normal leading-normal">
          Читай мангу с нами
        </p>
      </div>
    </div>
  );
};

export default Logo;
