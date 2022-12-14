interface EcommerceHeroCardProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  icon: JSX.Element;
  amount: string;
  percentage: string;
  title: string;
  iconColor: string;
  iconBg: string;
  pcColor: string;
}

export const EcommerceHeroCard = ({
  icon,
  amount,
  iconBg,
  iconColor,
  pcColor,
  percentage,
  title,
}: EcommerceHeroCardProps): JSX.Element => {
  return (
    <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>
      <button
        className='text-2xl p-4 rounded-full opacity-0.9 hover:drop-shadow-xl transition-all active:scale-90'
        style={{ color: iconColor, backgroundColor: iconBg }}
        type='button'
      >
        {icon}
      </button>
      <p className='mt-3'>
        <span className='text-lg font-semibold'>{amount}</span>
        <span className={`text-sm text-${pcColor} ml-2`}>{percentage}</span>
      </p>
      <p className='text-gray-400 text-sm mt-1'>{title}</p>
    </div>
  );
};
