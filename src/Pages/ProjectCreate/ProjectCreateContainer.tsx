import { useState } from 'react';
import CreateBody from './Presentation/CreateBody';
import CreateFooter from './Presentation/CreateFooter';
import CreateHeader from './Presentation/CreateHeader';

export default function ProjectCreateContainer() {
  const [career, setCarrer] = useState('신입/경력(연차)');
  return (
    <>
      <CreateHeader />
      <CreateBody career={career} setCarrer={setCarrer} />
      <CreateFooter />
    </>

  );
}
