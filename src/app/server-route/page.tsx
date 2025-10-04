import ServerRoutePage from '@/components/ImageSlider';
import { serverSideFunction } from '../../utils/server-utils';
export default function serverSide() {
   const res = serverSideFunction();
  return (
    <>
      <h1>This is Server Side Component {res}</h1>
      <ServerRoutePage/>
    </>
  );
}
