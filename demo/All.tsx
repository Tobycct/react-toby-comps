import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const demos = [
  'DKTag',
  'SelectInput',
];

export default function All() {
  // useBeforeUnload('信息尚未保存');
  const history = useHistory();
  const gotoPage = useCallback((page) => {
    document.title = page;
    history.push(`/${page}`);
  }, []);

  useEffect(() => {
    document.title = 'react-toby-comps';
  }, []);

  return (
    <div>
      {demos.map((name) => (
        <div
          key={name}

          // content={<IconArrow direction="right" />}
          onClick={() => gotoPage(name)}
        >{name}</div>
      ))}
    </div>
  );
}
