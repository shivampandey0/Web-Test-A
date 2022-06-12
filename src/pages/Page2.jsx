import { useNavigate } from 'react-router-dom';

export const Page2 = () => {
  const navigate = useNavigate();

  const handleBack = () =>
    navigate('/', { state: { from: 'page2' }, replace: true });

  const infoSource =
    '<iframe background:url("loading.gif") height="100%" width="100%" src="https://peerlist.io/shivampandey"></iframe>';

  return (
    <main className="p-8 flex flex-col items-start justify-between h-screen">
      <h1 className="text-xl font-bold">Page 2</h1>
      <div
        className="grow w-full my-2"
        dangerouslySetInnerHTML={{ __html: infoSource }}
      ></div>
      <button
        onClick={handleBack}
        className="border-2 px-2 py-1 rounded border-slate-700"
      >
        {'< Back'}
      </button>
    </main>
  );
};
