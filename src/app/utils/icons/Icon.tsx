import Image from "next/image";

interface IProps {
  url: string;
  imageUrl: string;
  small?: boolean;
}

const Icon: React.FunctionComponent<IProps> = (
  props: IProps,
) => {
  return (
    <a href={props.url} target="_blank" rel="noreferrer">
      <Image src={props.imageUrl} alt="link" width={`${props.small ? '20' : '40'}`} height={`${props.small ? '20' : '40'}`} />
    </a>
  )
}

export default Icon