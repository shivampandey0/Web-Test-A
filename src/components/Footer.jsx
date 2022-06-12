import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="h-14 bg-black  flex justify-center items-center w-screen">
      <Link to="page2" className="text-lg text-white text-center">
        {'Go to page 2 >'}
      </Link>
    </footer>
  );
};
