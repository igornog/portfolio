import Image from "next/image";

const Icon: React.FunctionComponent<IProps> = (
  props: IProps,
) => {
  return (
    <a href={props.url} target="_blank" rel="noreferrer">
      <Image src={props.imageUrl} alt="link" width={`${props.small ? '20' : '40'}`} height={`${props.small ? '20' : '40'}`} />
    </a>
  )
}
interface IProps {
  url: string;
  imageUrl: string;
  small?: boolean;
}

export default Icon