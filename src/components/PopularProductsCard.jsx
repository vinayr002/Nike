import { star } from "../assets/icons";

const PopularProductsCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full ">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="flex mt-8 justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="text-xl font-montserrat text-slate-gray leading-normal">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 font-semibold text-2xl font-palanquin leading-normal">
        {name}
      </h3>
      <p className="text-coral-red font-semibold font-montserrat text-2xl leading-normal mt-2 ">
        {price}
      </p>
    </div>
  );
};

export default PopularProductsCard;
