import React from "react";
import { useRouter } from "next/router";

const TopNav = () => {
  const router = useRouter();
  const { school_id, email } = router.query;

  const goConnect = async () => {
    router.push({
      pathname: "/connect",
      query: { school_id: school_id, email: email },
    });
  };

  const goHome = async () => {
    router.push({
      pathname: "/homepage",
      query: { school_id: school_id, email: email },
    });
  };

  const goLogin = async () => {
    router.push({
      pathname: "/login",
    });
  };

  const goAbout = async () => {
    router.push({
      pathname: "/about",
      query: { school_id: school_id, email: email },
    });
  };

  const goProfile = async () => {
    router.push({
      pathname: "/profile",
      query: { school_id: school_id, email: email },
    });
  };

  const goSetting = async () => {
    router.push({
      pathname: "/setting",
      query: { school_id: school_id, email: email },
    });
  };

  return (
    <div className="topnav">
      <div className="logo-container">
        <a className="logolink" href="#" onClick={goHome}>
          <img className="logo" src="/LinkScholar.png" alt="LinkScholar Logo" />
        </a>
      </div>
      <div className="links-container">
        <a className="link" href="#" onClick={goAbout}>
          About
        </a>
        <a className="link" href="#" onClick={goConnect}>
          Connect
        </a>
        <a className="link" href="#" onClick={goSetting}>
          Settings
        </a>

        <a className="link" href="#" onClick={goLogin}>
          Sign Out
        </a>
        <a className="link2" href="#" onClick={goProfile}>
          <img className="avatar" src="/avatar.png" alt="User Avatar" />
        </a>
      </div>
    </div>
  );
};

export default TopNav;
