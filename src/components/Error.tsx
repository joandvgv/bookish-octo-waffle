type Props = {
  message: string;
};
export default function Error({ message }: Props) {
  return <div>{message}</div>;
}
