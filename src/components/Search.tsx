import { memo } from "react";

interface SearchProps {
  onChange: (text: string) => void;
}

const Search = ({ onChange }: SearchProps) => {
  console.log("Search rendered");

  return (
    <div>
      <input
        type='text'
        placeholder='Search users...'
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

// memo is a hook that is also used for performance reasons. It wraps the component
// that you are trying to export (Search in this case) and it intercepts the render
// of this component and it checks if the props are different from one render to the
// next. If it is, it is going to re-render the component. If it is not, it is going
// to skip re-rendering the component. This is used for performance because at times
// you don't want to re-render some components unless their props are changed.
export default memo(Search);
