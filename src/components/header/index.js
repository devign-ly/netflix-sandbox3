import React, { useState } from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import {
  Container,
  Group,
  Background,
  Dropdown,
  Picture,
  Link,
  Search,
  Profile,
  FeatureCallOut,
  SearchIcon,
  SearchInput,
  ButtonLink,
  PlayButton,
  Text,
  Feature,
  Logo,
} from './styles/header';

export default function Header({ src, dontShowOnSmallViewPort, bg = true, children }) {
  return bg ? (
    <Background data-testid="header-bg" src={src} dontShowOnSmallViewPort={dontShowOnSmallViewPort}>
      {children}
    </Background>
  ) : (
    children
  );
}

Header.Frame = function HeaderFrame({ children }) {
  return <Container>{children}</Container>;
};

Header.Group = function HeaderGroup({ children }) {
  return <Group>{children}</Group>;
};

Header.Logo = function HeaderLogo({ to, src, alt }) {
  return (
    <ReachRouterLink to={to}>
      <Logo src={src} alt={alt} />
    </ReachRouterLink>
  );
};

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm }) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search>
      <SearchIcon onClick={() => setSearchActive((active) => !active)} data-testid="search-click">
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
        data-testid="search-input"
      />
    </Search>
  );
};

Header.Profile = function HeaderProfile({ children }) {
  return <Profile>{children}</Profile>;
};

Header.Feature = function HeaderFeature({ children }) {
  return <Feature>{children}</Feature>;
};

Header.Picture = function HeaderPicture({ src }) {
  return <Picture src={`/images/users/${src}.png`} />;
};

Header.Dropdown = function HeaderDropdown({ children }) {
  return <Dropdown>{children}</Dropdown>;
};

Header.TextLink = function HeaderTextLink({ active, onClick, children }) {
  return (
    <Link active={active} onClick={onClick}>
      {children}
    </Link>
  );
};

Header.PlayButton = function HeaderPlayButton({ children }) {
  return <PlayButton>{children}</PlayButton>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({ children }) {
  return <FeatureCallOut>{children}</FeatureCallOut>;
};

Header.Text = function HeaderText({ children }) {
  return <Text>{children}</Text>;
};

Header.ButtonLink = function HeaderButtonLink({ to, children }) {
  return <ButtonLink to={to}>{children}</ButtonLink>;
};
