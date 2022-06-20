import { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: '',
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [];

  return {
    paths,
    fallback: false,
  };
};

const CarneIndividual = () => {
  return <div>CarneIndividual</div>;
};

export default CarneIndividual;
