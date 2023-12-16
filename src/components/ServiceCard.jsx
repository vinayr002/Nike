export const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] px-10 py-16 shadow-3xl">
      <div className="w-11 h-11 justify-center items-center flex bg-coral-red rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-3 font-palanquin text-3xl font-bold leading-normal">
        {label}
      </h3>
      <p className="mt-3 leading-normal text-lg font-montserrat break-words text-slate-gray ">
        {subtext}
      </p>
    </div>
  );
};
