const HeaderItem = ({ Icon, title }) => {
  return (
    <div className=" flex flex-col group items-center cursor-pointer group w-10 sm:12 text-white">
      <Icon className="h-6 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100  tracking-widest text-sm">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
