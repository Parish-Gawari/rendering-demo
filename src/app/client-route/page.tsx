"use client"

import { serverSideFunction } from '../../utils/server-utils';
export default function clientSide() {
   const res = serverSideFunction();
  return (
    <>
      <h1>This is Clien Side Component {res}</h1>
    </>
  );
}
