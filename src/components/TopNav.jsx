const TopNav = ({ dark, toggleTheme }) => {
  return (
    <div className="top-navigation">
      <div
        className={`theme-control ${dark && "theme-dark"}`}
        onClick={toggleTheme}
      >
        <div className="theme-control-left">Light</div>
        <div className="theme-control-right">Dark</div>

        <div className={`theme-switch `}>
          <div className={`switch-circle ${dark && "switch-on"}`}></div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
