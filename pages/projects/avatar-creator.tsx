import React from 'react'
import Head from 'next/head'

import styled from 'styled-components'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { MainLayout } from '@/components/layouts'
import { HeadingH3, Box, HoverableText, Link } from 'danni-s-design-system'

import type { Locale, Page, SinglePage as SinglePageProps } from 'types'
import { AVATAR_CREATOR_IN_APP, AVATAR_CREATOR_APP } from 'constants/locations'

const StyledIframe = styled.iframe.attrs({
  loading: 'lazy',
  scrolling: 'no',
  src: AVATAR_CREATOR_IN_APP,
  frameBorder: 'no',
  allowFullScreen: true,
})`
  width: 100%;
  min-height: 600px;
  background: transparent;
  overflow: hidden;
`

const AvatarCreatorPage: Page<SinglePageProps> = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('avatar_builder_meta')}</title>
        <meta name="description" content={t('create_avatar')} />
        <meta
          name="og:image"
          property="og:image"
          content="/assets/share-avatar-v2.png"
        />
        <meta name="twitter:image" content="/assets/share-avatar-v2.png" />
      </Head>
      <Box my="xl" as="section" textAlign="center">
        <HeadingH3 as="h1" kind="serif">
          🧑‍🦳 {t('create_avatar')} 🧔‍♀️
        </HeadingH3>
        <Link mt="s" href={AVATAR_CREATOR_APP} target="_blank">
          <HoverableText bold>➠ {t('play_on_site')}</HoverableText>
        </Link>
      </Box>
      <StyledIframe />
    </>
  )
}

export async function getStaticProps({
  locale,
}: {
  locale: Locale
}): Promise<{ props: SinglePageProps }> {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ['common', 'languages'])),
    },
  }
}

AvatarCreatorPage.Layout = ({ children, ...props }) => (
  <MainLayout {...props}>{children}</MainLayout>
)

export default AvatarCreatorPage
