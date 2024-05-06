import { star } from "../assets/icons";
const PopularProductCard = ({ imageUrl, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imageUrl} alt={name} className="w-[280p] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrart text-xl leading-normal text-slate-gray">
          {" "}
          (4.5)
        </p>
      </div>
      <h3 className="font-palanquin mt-2 text-2xl leading-normal font-semibold">
        {name}
      </h3>
      <p className="mt-2 leading-normal font-montserrat text-2xl text-coral-red font-semibold">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
