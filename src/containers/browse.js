import React, { useState, useEffect, useContext } from 'react';
import Fuse from 'fuse.js';
import Card, {
  CardGroup,
  CardTitle,
  CardEntities,
  CardItem,
  CardImage,
  CardMeta,
  CardSubTitle,
  CardText,
  CardFeature,
} from '../components/card';
import Header, {
  HeaderFrame,
  HeaderGroup,
  HeaderLogo,
  HeaderTextLink,
  HeaderSearch,
  HeaderProfile,
  HeaderPicture,
  HeaderDropdown,
  HeaderFeature,
  HeaderFeatureCallOut,
  HeaderText,
  HeaderPlayButton,
} from '../components/header';
import Player, { PlayerButton, PlayerVideo } from '../components/player';
import Loading, { LoadingReleaseBody } from '../components/loading';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { AuthContext } from '../context/auth';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';
import profiles from '../data/profiles.json';

export function BrowseContainer({ slides }) {
  const [category, setCategory] = useState('series');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [slideRows, setSlideRows] = useState([]);

  const { auth } = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [profile.name]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ['data.description', 'data.title', 'data.genre'],
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);

  const switchProfile = (p) => {
    if (p.name !== profile.name) {
      setLoading(true);
      setProfile(p);
    }
  };

  return profile.name ? (
    <>
      {loading ? <Loading src={profile.avatar} /> : <LoadingReleaseBody />}

      <Header src={profile.header.image} dontShowOnSmallViewPort>
        <HeaderFrame>
          <HeaderGroup>
            <HeaderLogo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <HeaderTextLink active={category === 'series' ? 'true' : 'false'} onClick={() => setCategory('series')}>
              Series
            </HeaderTextLink>
            <HeaderTextLink active={category === 'films' ? 'true' : 'false'} onClick={() => setCategory('films')}>
              Films
            </HeaderTextLink>
          </HeaderGroup>
          <HeaderGroup>
            <HeaderSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <HeaderProfile>
              <HeaderPicture src={profile.avatar} />
              <HeaderDropdown>
                {profiles.map((p) => (
                  <HeaderGroup key={p.name}>
                    <HeaderPicture src={p.avatar} />
                    <HeaderTextLink onClick={() => switchProfile(p)}>{p.name}</HeaderTextLink>
                  </HeaderGroup>
                ))}
                <HeaderGroup>
                  <HeaderTextLink onClick={() => auth.signOut()}>Sign out of Netflix</HeaderTextLink>
                </HeaderGroup>
              </HeaderDropdown>
            </HeaderProfile>
          </HeaderGroup>
        </HeaderFrame>

        <HeaderFeature>
          <HeaderFeatureCallOut>{profile.header.title}</HeaderFeatureCallOut>
          <HeaderText>{profile.header.description}</HeaderText>
          <HeaderPlayButton>Play</HeaderPlayButton>
        </HeaderFeature>
      </Header>

      <CardGroup>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <CardTitle>{slideItem.title}</CardTitle>
            <CardEntities>
              {slideItem.data.map((item) => (
                <CardItem key={item.docId} item={item}>
                  <CardImage src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                  <CardMeta>
                    <CardSubTitle>{item.title}</CardSubTitle>
                    <CardText>{item.description}</CardText>
                  </CardMeta>
                </CardItem>
              ))}
            </CardEntities>
            <CardFeature category={category}>
              <Player>
                <PlayerButton />
                <PlayerVideo src="/videos/bunny.mp4" />
              </Player>
            </CardFeature>
          </Card>
        ))}
      </CardGroup>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer setProfile={setProfile} />
  );
}
