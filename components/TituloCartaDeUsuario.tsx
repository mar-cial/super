type Props = {
  text: string;
};

const TituloCartaDeUsuario = (props: Props) => {
  return <h3 className="text-2xl font-main">{props.text}</h3>;
};

export default TituloCartaDeUsuario;
