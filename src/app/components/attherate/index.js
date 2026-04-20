import Image from "next/image";
import AtTheRateImage from "../../../../public/icons/atherate.svg";

const AtTheRate = ({ size = 16, Atrateimg, className }) => {
  const src = Atrateimg || AtTheRateImage;

  return (
    <Image
      src={src}
      alt="At symbol"
      width={size}
      height={size}
      className={`object-contain align-middle ${className}`}
    />
  );
};

export default AtTheRate;
