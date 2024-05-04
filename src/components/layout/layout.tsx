import MainNavigation from "./main-navigation";

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div>
      <MainNavigation />
      {props.children}
    </div>
  );
};

export default Layout;
