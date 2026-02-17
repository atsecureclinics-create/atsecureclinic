import Image from "next/image";
import AtTheRateImage from "../../../../public/icons/atherate.svg";

const AtTheRate = ({ size = 16, Atrateimg }) => {
  const src = Atrateimg || AtTheRateImage;

  return (
    <Image
      src={src}
      alt="At symbol"
      width={size}
      height={size}
      className="inline-block object-contain align-middle"
    />
  );
};

export default AtTheRate;
