import Error from "./Error";

export default function withPropsValidator<T extends Record<string, any>>(
  Component: any,
  dataKey: string
) {
  return function (props: T) {
    const propIsThere = props[dataKey];

    const onClick = () => {
      console.log("clicked");
    };
    if (!propIsThere) {
      return <Error message={`Component needs ${dataKey} to work!!!!`} />;
    }
    return <Component {...props} onClick={onClick} />;
  };
}
