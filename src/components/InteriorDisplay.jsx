import { useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import { useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export const InteriorDisplay = () => {
  const {
    state: { position, visibility },
    dispatch
  } = useApp();
  const nodeRef = useRef();

  const { state } = useLocation();

  let classes = '';

  switch (position) {
    case 'Center':
      classes = 'inset-0 m-auto';
      break;
    case 'Lower Right':
      classes = 'bottom-0 right-0';
      break;
    default:
      classes = '';
      break;
  }

  useEffect(() => {
    if (state?.from) {
      dispatch({ type: 'POSITION', payload: 'Center' });
    }
  }, [state]);

  return (
    <section
      className={` ${
        classes ? 'static' : 'relative'
      } h-[400px] w-full bg-slate-200`}
    >
      {/* block */}
      <Draggable
        nodeRef={nodeRef}
        position={classes ? { x: 0, y: 0 } : null}
        onStart={() => dispatch({ type: 'POSITION', payload: 'Floating' })}
        bounds="parent"
      >
        <div
          ref={nodeRef}
          className={`${classes} ${visibility} ${
            state?.from === 'page2' ? 'border-blue-500' : 'border-black'
          } absolute cursor-move w-72 h-48 bg-slate-400 flex flex-col justify-between border-2`}
        >
          <h3>{position}...</h3>
          <h4 className="text-white text-end">Drag me around...</h4>
        </div>
      </Draggable>
    </section>
  );
};
