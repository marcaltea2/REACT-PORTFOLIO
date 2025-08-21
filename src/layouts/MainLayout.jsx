import Header from "../components/header/Header";
const MainLayout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
};

export default MainLayout;
