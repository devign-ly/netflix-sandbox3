import React from 'react';
import Feature, { FeatureTitle, FeatureSubTitle } from '../components/feature';
import OptForm, { OptFormInput, OptFormButton, OptFormBreak, OptFormText } from '../components/opt-form';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <FeatureTitle>Unlimited films, TV programmes and more.</FeatureTitle>
          <FeatureSubTitle>Watch anywhere. Cancel at any time.</FeatureSubTitle>
          <OptForm>
            <OptFormInput placeholder="Email address" />
            <OptFormButton>Try it now</OptFormButton>
            <OptFormBreak />
            <OptFormText>Ready to watch? Enter your email to create or restart your membership.</OptFormText>
          </OptForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
