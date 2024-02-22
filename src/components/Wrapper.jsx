export const Wrapper = ({ children, className }) => (
  <div
    className={`mx-auto max-w-screen-xl w-11/12 ${
      typeof className === "string" ? className : ""
    }`}
  >
    {children}
  </div>
);
