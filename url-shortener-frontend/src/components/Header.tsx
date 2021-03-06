import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const HeaderBlock = styled.header`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
  height: 50px;
  box-shadow: 0px 0px 5px 0px #0b1d31;
  background-color: #112d4e;

  h1 {
    font-size: 1em;

    a {
      font-size: 16px;
      font-weight: 600;
      color: #fff;
    }
  }
`;

const NavButton = styled.button`
  position: absolute;
  z-index: 5;
  right: 10px;
  top: 50%;
  display: inline-block;
  width: 28px;
  height: 24px;
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);

  span {
    position: absolute;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 2px;
    background-color: #fff;
    border-radius: 2px;
    transition: all 0.3s;

    &:nth-of-type(1) {
      top: 0;
    }
    &:nth-of-type(2) {
      top: 11px;
    }
    &:nth-of-type(3) {
      bottom: 0;
    }
  }

  &.active {
    -webkit-transform: translateY(-50%) rotate(360deg);
    transform: translateY(-50%) rotate(360deg);

    span {
      background-color: #000;

      &:nth-of-type(1) {
        -webkit-transform: translateY(11px) rotate(-45deg);
        transform: translateY(11px) rotate(-45deg);
      }
      &:nth-of-type(2) {
        -webkit-transform: translateY(0) rotate(45deg);
        transform: translateY(0) rotate(45deg);
      }
      &:nth-of-type(3) {
        opacity: 0;
      }
    }
  }
`;

const NavList = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;

  &:before,
  &:after {
    content: '';
    position: fixed;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    background: rgba(234, 234, 234, 0.7);
    transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.4s;
    transform: translateX(0%) translateY(-100%);
  }
  &:before {
    transition-delay: 0.1s;
  }
  &:after {
    background: white;
    transition-delay: 0s;
  }

  &.start {
    visibility: hidden;
  }
  &.end {
    animation: 0s linear 0.5s forwards delayedHidden;
  }
  &.active {
    visibility: visible;

    &:before,
    &:after {
      transform: translateX(0%) translateY(0%);
    }
    &:before {
      transition-delay: 0s;
    }
    &:after {
      transition-delay: 0.1s;
    }
  }

  .nav-list-inner {
    position: fixed;
    top: 50%;
    width: 100%;
    text-align: center;
    transform: translate(0%, -50%);

    ul li {
      margin-top: 30px;
      opacity: 0;
      transition-delay: 0.4s;
      transform: translate(0%, 100%);
      transition: opacity 0.15s ease, transform 0.25s ease;

      &:first-child {
        margin-top: 0;
      }

      span {
        position: relative;
        display: inline-block;

        &:before {
          content: '';
          position: absolute;
          background: #000;
          width: 14px;
          height: 1px;
          top: 100%;
          transform: translate(0%, 0%);
          transition: all 0.3s ease;
          z-index: -1;
        }
      }

      a {
        font-size: 18px;
        line-height: 1.4;
        color: #000;
      }
    }
  }

  .nav-list-inner ul li.current span:before {
    background: #112d4e;
    width: 100%;
  }
  .nav-list-inner ul li:hover span:before {
    width: 100%;
  }

  &.active .nav-list-inner ul li {
    opacity: 1;
    transform: translateX(0%);
    transition: opacity 0.2s ease, transform 0.2s ease, color 0.2s ease;

    &:nth-child(1) {
      transition-delay: 0.3s;
    }
    &:nth-child(2) {
      transition-delay: 0.4s;
    }
    &:nth-child(3) {
      transition-delay: 0.5s;
    }
    &:nth-child(4) {
      transition-delay: 0.6s;
    }
  }

  @keyframes delayedHidden {
    to {
      visibility: hidden;
    }
  }
`;

const Header = () => {
  const [navListArr] = useState<Array<{ href: string; name: string }>>([
    { href: '/', name: 'Home' },
    { href: '/stat', name: 'Stat' },
    { href: '/docs', name: 'Docs' },
  ]);
  const navigate = useNavigate();

  const toggleMenu = () => {
    const menuDom = document.querySelector<HTMLElement>('header .nav-button');
    menuDom?.classList.toggle('active');

    const menuContentDom = document.querySelector<HTMLElement>('header .nav-list');
    menuContentDom?.classList.toggle('active');
    menuContentDom?.classList.remove('start');
    menuContentDom?.classList.toggle('end');
  };

  const navOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleMenu();
  };

  const navMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    toggleMenu();

    const url: string | null = e.currentTarget.getAttribute('href');
    setTimeout(() => {
      if (url) {
        navigate(url);
      }
    }, 400);
  };

  return (
    <HeaderBlock>
      <h1>
        <Link to="/">URL-SHORTENER</Link>
      </h1>
      <NavButton className="nav-button" onClick={navOnClick}>
        <span></span>
        <span></span>
        <span></span>
      </NavButton>
      <NavList className="nav-list start end">
        <div className="nav-list-inner">
          <ul>
            {navListArr.map((v) => {
              return (
                <li key={v.name}>
                  <span>
                    <a href={v.href} onClick={navMove}>
                      {v.name}
                    </a>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </NavList>
    </HeaderBlock>
  );
};

export default Header;
