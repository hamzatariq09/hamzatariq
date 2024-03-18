type Props = {
  title: string;
  options: string[];
};

const SkillsItem = (props: Props) => {
  const { title, options } = props;
  return (
    <div className="my-2">
      <h3 className="text-sm font-semibold ">{title}</h3>
      <div className="flex flex-wrap gap-2 py-2">
        {options.map((option) => {
          return (
            <div
              key={option}
              className="rounded-lg bg-secondary px-4 py-1  text-xs font-semibold text-secondary-foreground"
            >
              {option}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsItem;
