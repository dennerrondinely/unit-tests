import Button from 'components/Button';
import Icon from 'components/Icon';
import { useHistory } from 'react-router-dom';

const About = () => {
  const { push } = useHistory();
  return (
    <div>
      <div>Hello 👋, I am a About page.</div>
      <br />
      <Button
        color="salmon-medium"
        bg="gray-dark"
        onClick={() => push('/')}
        icon={
          <Icon icon="chevron-left-solid" color="salmon-medium" size={16} />
        }
      >
        Go to Home
      </Button>
    </div>
  );
};

export default About;
