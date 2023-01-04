import Button from 'components/Button';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const { push } = useHistory();
  return (
    <div>
      <div>Hello 👋, I am a Home component.</div> <br />
      <Button color="white" bg="gray-dark" onClick={() => push('/about')}>
        Go to About
      </Button>
    </div>
  );
};

export default Home;
