export const ToolTip = ({ text }) => {
  return (
    <span className="-top-10 text-nowrap invisible left-1/2 -translate-x-1/2 absolute z-50 text-sm bg-pink-100 rounded-lg py-1 px-4 before:absolute before:p-1 before:rotate-45 before:bg-pink-100 before:left-1/2 before:-translate-x-1/2 before:top-full before:-translate-y-1/2 before:-z-10 group-hover:visible">
      {text}
    </span>
  );
};
