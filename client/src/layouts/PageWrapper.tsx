import Navbar from '../components/Navbar/Navbar';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <>
      <nav className="absolute top-0 w-full">
        <Navbar />
      </nav>
      <main className="flex flex-col gap-4 w-full h-[100vh] justify-center items-center">
        {children}
      </main>
    </>
  );
};

export default PageWrapper;
