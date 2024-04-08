import Header from "./components/Header";

function Layout({ children }) {
  return (
    <main className="w-full">
      <Header />
      {children}
    </main>
  );
}

export default Layout;
