import React from 'react'

import { motion } from 'framer-motion'
import { useTranslation, Trans } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { MediaContextProvider, Media } from 'utils/media'

import Link from 'next/link'
import {
  baseTheme,
  Box,
  Flex,
  HeadingH3,
  HoverableText,
  List,
  Text,
} from 'danni-s-design-system'

import { MainLayout } from '@/components/layouts'
import { SelfAvatar } from '@/components'

import type { Locale, Page, SinglePage as SinglePageProps } from 'types'

const SelfAvatarWithMotion = () => {
  const SelfAvatarXDesktop = baseTheme.space.xxl
  const SelfAvatarYDesktop = baseTheme.space.xxxl
  const SelfAvatarXMobile = baseTheme.space.xxxl
  const SelfAvatarYMobile = baseTheme.space.m

  return (
    <MediaContextProvider>
      <Media greaterThanOrEqual="tablet">
        <Link href="/" passHref>
          <motion.a
            className="selfAvatar"
            layoutId="selfAvatar"
            style={{
              height: 'fit-content',
              position: 'absolute',
              left: `-${SelfAvatarXDesktop}px`,
              top: `-${SelfAvatarYDesktop}px`,
            }}
            initial={{
              scale: 0.5,
            }}
          >
            <SelfAvatar mx="auto" />
          </motion.a>
        </Link>
      </Media>
      <Media lessThan="tablet">
        <Link href="/" passHref>
          <motion.a
            className="selfAvatar"
            layoutId="selfAvatar"
            style={{
              height: 'fit-content',
              position: 'absolute',
              left: `${SelfAvatarXMobile}px`,
              top: `-${SelfAvatarYMobile}px`,
            }}
            initial={{
              scale: 0.5,
            }}
          >
            <SelfAvatar mx="auto" />
          </motion.a>
        </Link>
      </Media>
      <Media lessThan="mobile">
        <Link href="/" passHref>
          <motion.a
            className="selfAvatar"
            layoutId="selfAvatar"
            style={{
              height: 'fit-content',
              position: 'absolute',
              left: `${SelfAvatarXMobile}px`,
              top: `-${SelfAvatarYMobile}px`,
            }}
            initial={{
              scale: 0.4,
            }}
          >
            <SelfAvatar mx="auto" />
          </motion.a>
        </Link>
      </Media>
    </MediaContextProvider>
  )
}

const Greeting = () => {
  const { t } = useTranslation(['introduction'])

  const GreetingX = baseTheme.space.elephant * 2

  return (
    <MediaContextProvider>
      <Media greaterThanOrEqual="tablet">
        <Box ml={GreetingX} as="section">
          <HeadingH3 as="h1" kind="serif">
            {t('greeting')}
          </HeadingH3>
          <Text as="h3" variant="bodyMd" mt="s" sx={{ fontWeight: 400 }}>
            {t('welcome')}
          </Text>
          <Text variant="bodyMd" mt="xs">
            {t('look_around')}
          </Text>
        </Box>
      </Media>
      <Media lessThan="tablet">
        <Box mt="dinosaur" as="section" textAlign="center">
          <HeadingH3 as="h1" kind="serif">
            {t('greeting')}
          </HeadingH3>
          <Text as="h3" variant="bodyMd" mt="s" sx={{ fontWeight: 400 }}>
            {t('welcome')}
          </Text>
          <Text variant="bodyMd" mt="xs">
            {t('look_around')}
          </Text>
        </Box>
      </Media>
    </MediaContextProvider>
  )
}

const IntroSection = () => {
  const { t } = useTranslation(['introduction'])

  return (
    <MediaContextProvider>
      <Media greaterThanOrEqual="tablet">
        <Box px="s" mt="xxxl" as="section">
          <HeadingH3 sx={{ fontSize: baseTheme.space.xl }}>
            <Trans
              i18nKey="introduction:intro_heading"
              components={{ italic: <i /> }}
            />
          </HeadingH3>
          <Text my="m" as="p">
            {t('folio')}
          </Text>
          <List liSx={{ marginLeft: `${baseTheme.space.xl}px` }}>
            <Text mt="s" variant="bodySm">
              {t('folio_definition_one')}
            </Text>
            <Text mt="s" variant="bodySm">
              {t('folio_definition_two')}
            </Text>
          </List>
          <Link href={t('folio_link')} passHref>
            <HoverableText my="m" ml="xl" variant="bodySm">
              {t('definition_origin')}
            </HoverableText>
          </Link>
          <Text mt="l" mb="m" as="p" fontWeight="bold">
            {t('folio_includes')}
          </Text>
          <List liSx={{ marginLeft: `${baseTheme.space.xl}px` }}>
            <Text mt="s">{t('folio_item_books')}</Text>
            <Text mt="s">{t('folio_item_code')}</Text>
            <Text mt="s">
              <Trans
                i18nKey="introduction:folio_item_colour"
                components={{
                  green: (
                    <Text
                      color="complementaryDark"
                      fontWeight="bold"
                      as="span"
                      inlineBlock
                    />
                  ),
                }}
              />
            </Text>
          </List>
        </Box>
      </Media>
      <Media lessThan="tablet">
        <Box px="s" mt="xxxl" as="section">
          <HeadingH3 sx={{ fontSize: baseTheme.space.xl }}>
            <Trans
              i18nKey="introduction:intro_heading"
              components={{ italic: <i /> }}
            />
          </HeadingH3>
          <Text my="m" as="p">
            {t('folio')}
          </Text>
          <List liSx={{ marginLeft: `${baseTheme.space.l}px` }}>
            <Text mt="s" variant="bodySm">
              {t('folio_definition_one')}
            </Text>
            <Text mt="s" variant="bodySm">
              {t('folio_definition_two')}
            </Text>
          </List>
          <Link href={t('folio_link')} passHref>
            <HoverableText my="m" ml="l" variant="bodySm">
              {t('definition_origin')}
            </HoverableText>
          </Link>
          <Text mt="l" mb="m" as="p" fontWeight="bold">
            {t('folio_includes')}
          </Text>
          <List liSx={{ marginLeft: `${baseTheme.space.l}px` }}>
            <Text mt="s">{t('folio_item_books')}</Text>
            <Text mt="s">{t('folio_item_code')}</Text>
            <Text mt="s">
              <Trans
                i18nKey="introduction:folio_item_colour"
                components={{
                  green: (
                    <Text
                      color="complementaryDark"
                      fontWeight="bold"
                      as="span"
                      inlineBlock
                    />
                  ),
                }}
              />
            </Text>
          </List>
        </Box>
      </Media>
    </MediaContextProvider>
  )
}

const ContentsPage: Page<SinglePageProps> = () => (
  <>
    <Box px="s" py="m" sx={{ boxShadow: baseTheme.shadows.low }}>
      <SelfAvatarWithMotion />
      <Greeting />
      <IntroSection />
    </Box>
    <Flex
      as="section"
      pl="xl"
      pr="s"
      py="s"
      flexDirection="column"
      justifyContent="center"
      sx={{ boxShadow: baseTheme.shadows.low, textAlign: 'center' }}
    >
      <HeadingH3 as="h2" my="m" color="complementaryDark">
        Contents
      </HeadingH3>
      <List liSx={{ margin: `${baseTheme.space.m}px` }}>
        <Link href="#" passHref>
          <HoverableText variant="bodyMd">Some page........ 1</HoverableText>
        </Link>
        <Link href="#" passHref>
          <HoverableText variant="bodyMd">Some page......... 2</HoverableText>
        </Link>
      </List>
    </Flex>
  </>
)

ContentsPage.Layout = ({ children, ...props }) => (
  <MainLayout {...props}>{children}</MainLayout>
)

export async function getStaticProps({
  locale,
}: {
  locale: Locale
}): Promise<{ props: SinglePageProps }> {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ['common', 'introduction'])),
    },
  }
}

export default ContentsPage
