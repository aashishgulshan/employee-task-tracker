import {Header, Footer} from './index';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 py-8">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
