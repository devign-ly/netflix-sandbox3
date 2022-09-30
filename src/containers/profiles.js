import React from 'react';
import { Header, Profiles } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import profiles from '../data/profiles.json';

export function SelectProfileContainer({ setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          {profiles.map((profile) => (
            <Profiles.User
              key={profile.name}
              onClick={() => setProfile(profile)}
              data-testid="user-profile"
            >
              <Profiles.Picture src={profile.avatar} />
              <Profiles.Name>{profile.name}</Profiles.Name>
            </Profiles.User>
          ))}
        </Profiles.List>
      </Profiles>
    </>
  );
}
