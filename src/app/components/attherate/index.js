import Image from "next/image";
import AtTheRateImage from '../../../../public/icons/atherate.svg';

const AtTheRate = ({ size }) => (
    <Image
      src={AtTheRateImage}
      alt="At symbol"
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className="inline-block object-contain"
    />
  );  

export default AtTheRate;