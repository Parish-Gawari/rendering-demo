import ServerRoutePage from '@/components/ImageSlider';
import { serverSideFunction } from '../../utils/server-utils';
// import { clientSideFunction } from '@/utils/client-utils';
export default function serverSide() {
   const res = serverSideFunction();
  //  const res1 = clientSideFunction()
  return (
    <>
      <h1>This is Server Side Component {res} </h1>
      <ServerRoutePage/>
    </>
  );
}
