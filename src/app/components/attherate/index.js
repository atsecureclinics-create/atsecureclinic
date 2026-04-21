import Image from "next/image";
import AtTheRateImage from "../../../../public/icons/atherate.svg";

const AtTheRate = ({ Atrateimg, textClassName = "" }) => {
  const src = Atrateimg || AtTheRateImage;

  return (
    <span className="inline-flex items-baseline gap-1 whitespace-nowrap align-baseline">
      <Image
        src={src}
        alt="@"
        width={24}
        height={24}
        className="w-4 h-4 md:w-6 md:h-6 object-contain self-center"
      />
      <span className={`font-seasons font-normal ${textClassName}`}>
        <b className="font-bold">secure</b> clinics
      </span>
    </span>
  );
};

export default AtTheRate;