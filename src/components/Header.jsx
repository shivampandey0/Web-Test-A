import { useApp } from '../context/AppContext';
import { Clock } from './Clock';

export const Header = () => {
  const { state, dispatch } = useApp();
  return (
    <header className="bg-black text-lg md:h-14 px-2 py-2 text-white flex flex-col items-center gap-2 md:flex-row justify-between">
      {/* Positions */}
      <div className=" flex gap-2 grow">
        <h1>Position:</h1>
        <div className="flex gap-2 items-center">
          <label>
            <input
              type="radio"
              name="position"
              checked={state.position === 'Center'}
              value="Center"
              onChange={(e) =>
                dispatch({ type: 'POSITION', payload: e.target.value })
              }
            />
            Center
          </label>
          <label>
            <input
              name="position"
              type="radio"
              value="Lower Right"
              checked={state.position === 'Lower Right'}
              onChange={(e) =>
                dispatch({ type: 'POSITION', payload: e.target.value })
              }
            />
            Lower Right
          </label>
        </div>
      </div>
      {/* Instruction */}
      <h2 className="text-orange-400">
        Press Esc key to hide the window. Enter to show it again
      </h2>
      {/* Clock */}
      <Clock />
    </header>
  );
};
