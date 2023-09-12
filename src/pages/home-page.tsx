import { withLogger } from '@/components/logger';
import { HELLO_MESSAGE } from '@/constants/constants';

function HomePage() {
  return <div>HOME PAGE</div>;
}

export default withLogger(HomePage, HELLO_MESSAGE);
