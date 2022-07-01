import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.header`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 0 50px;
  box-shadow: 0px 3px 15px 0px #0b1d31;
  background-color: #112d4e;
  h1 {
    font-size: 1em;
    a {
      font-size: 16px;
      font-weight: 400;
      color: #fff;
    }
  }

  // 메뉴리스트
  /* .nav-list {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;

    &:before,
    &:after {
      content: '';
      position: fixed;
      width: 100vw;
      height: 100vh;
      background: rgba(234, 234, 234, 0.7);
      z-index: -1;
      transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.8s;
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
      animation: 0s linear 1s forwards delayedHidden;
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
  }
  .nav-list .nav-list-inner {
    position: fixed;
    top: 50%;
    transform: translate(0%, -50%);
    width: 100%;
    text-align: center;
  }

  .nav-list .nav-list-inner ul {
  }
  .nav-list .nav-list-inner ul li {
    margin-top: 30px;
    transition-delay: 0.8s;
    opacity: 0;
    transform: translate(0%, 100%);
    transition: opacity 0.2s ease, transform 0.3s ease;
  }
  .nav-list .nav-list-inner ul li:first-child {
    margin-top: 0;
  }
  .nav-list .nav-list-inner ul li span {
    position: relative;
    display: inline-block;
  }
  .nav-list .nav-list-inner ul li a {
    font-size: 18px;
    line-height: 1.4;
    color: #000;
  }
  .nav-list .nav-list-inner ul li span:before {
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
  .nav-list .nav-list-inner ul li.active span:before {
    width: 100%;
  }
  .nav-list .nav-list-inner ul li:hover span:before {
    width: 100%;
  }
  .nav-list.active .nav-list-inner ul li {
    opacity: 1;
    transform: translateX(0%);
    transition: opacity 0.3s ease, transform 0.3s ease, color 0.3s ease;
  }
  .nav-list.active .nav-list-inner ul li:nth-child(1) {
    transition-delay: 0.6s;
  }
  .nav-list.active .nav-list-inner ul li:nth-child(2) {
    transition-delay: 0.7s;
  }
  .nav-list.active .nav-list-inner ul li:nth-child(3) {
    transition-delay: 0.8s;
  }
  .nav-list.active .nav-list-inner ul li:nth-child(4) {
    transition-delay: 0.9s;
  }
  @keyframes delayedHidden {
    to {
      visibility: hidden;
    }
  } */
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
  transition: all 0.4s;
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
    transition: all 0.4s;

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
    width: 100vw;
    height: 100vh;
    background: rgba(234, 234, 234, 0.7);
    z-index: -1;
    transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.8s;
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
    animation: 0s linear 1s forwards delayedHidden;
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
    transform: translate(0%, -50%);
    width: 100%;
    text-align: center;
  }
  .nav-list-inner ul li {
    margin-top: 30px;
    transition-delay: 0.8s;
    opacity: 0;
    transform: translate(0%, 100%);
    transition: opacity 0.2s ease, transform 0.3s ease;
  }
  .nav-list-inner ul li:first-child {
    margin-top: 0;
  }
  .nav-list-inner ul li span {
    position: relative;
    display: inline-block;
  }
  .nav-list-inner ul li a {
    font-size: 18px;
    line-height: 1.4;
    color: #000;
  }
  .nav-list-inner ul li span:before {
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
  .nav-list-inner ul li.active span:before {
    width: 100%;
  }
  .nav-list-inner ul li:hover span:before {
    width: 100%;
  }
  &.active .nav-list-inner ul li {
    opacity: 1;
    transform: translateX(0%);
    transition: opacity 0.3s ease, transform 0.3s ease, color 0.3s ease;
  }
  &.active .nav-list-inner ul li:nth-child(1) {
    transition-delay: 0.6s;
  }
  &.active .nav-list-inner ul li:nth-child(2) {
    transition-delay: 0.7s;
  }
  &.active .nav-list-inner ul li:nth-child(3) {
    transition-delay: 0.8s;
  }
  &.active .nav-list-inner ul li:nth-child(4) {
    transition-delay: 0.9s;
  }
  @keyframes delayedHidden {
    to {
      visibility: hidden;
    }
  }
`;

const Header = () => {
  const navOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const menuDom = document.querySelector<HTMLElement>('header .nav-button');
    menuDom?.classList.toggle('active');

    const menuContentDom = document.querySelector<HTMLElement>('header .nav-list');
    menuContentDom?.classList.toggle('active');
    menuContentDom?.classList.remove('start');
    menuContentDom?.classList.toggle('end');
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
            <li>
              <span>
                <Link to="/">Home</Link>
              </span>
            </li>
            <li>
              <span>
                <Link to="/stat">Stat</Link>
              </span>
            </li>
            <li>
              <span>
                <Link to="/docs">Docs</Link>
              </span>
            </li>
          </ul>
        </div>
      </NavList>
    </HeaderBlock>
  );
};

export default Header;
