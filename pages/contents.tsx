import React, { useContext, useState } from 'react'
import { ThemeContext } from 'styled-components'

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
  Link as ExternalLink,
  ThemeType,
  Popup,
} from 'danni-s-design-system'

import { MainLayout } from '@/components/layouts'
import {
  SelfAvatar,
  ParaAbilityProjectDescription,
  ContentsItem,
} from '@/components'

import {
  ABOUT,
  ABOUT_PARA_ABILITY_PERSONAS,
  AVATAR_CREATOR,
  CONTACTS,
  FORTUNE_COOKIE_APP,
  LIL_BM_APP,
  PARA_ABILITY_PERSONAS,
  PERSONAS_APP_ISSUES,
  PROJECT_NAME,
  RANDOM_STORY_MAKER,
} from 'constants/locations'

import type { Locale, Page, SinglePage as SinglePageProps } from 'types'

const SelfAvatarWithMotion = () => (
  <MediaContextProvider>
    <Media greaterThanOrEqual="tablet">
      <Link href="/" passHref>
        <motion.a
          className="selfAvatar"
          layoutId="selfAvatar"
          style={{
            height: 'fit-content',
            position: 'absolute',
            left: `-${baseTheme.space.s}px`,
            top: `-${baseTheme.space.xxxl}px`,
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
            left: `${baseTheme.space.xxxl}px`,
            top: `-${baseTheme.space.m}px`,
          }}
          initial={{
            scale: 0.5,
          }}
        >
          <SelfAvatar mx="auto" />
        </motion.a>
      </Link>
    </Media>
    <Media lessThan="mobilePlus">
      <Link href="/" passHref>
        <motion.a
          className="selfAvatar"
          layoutId="selfAvatar"
          style={{
            height: 'fit-content',
            position: 'absolute',
            left: `${baseTheme.space.xl}px`,
            top: `-${baseTheme.space.m}px`,
          }}
          initial={{
            scale: 0.4,
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
            left: `-${baseTheme.space.s}px`,
            top: `-${baseTheme.space.m}px`,
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

const Greeting = () => {
  const { t } = useTranslation(['introduction'])

  const GreetingX = baseTheme.space.dinosaur * 1.1

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
        <Box px="xl" mt="xxxl" as="section">
          <HeadingH3 as="h2" sx={{ fontSize: baseTheme.space.xl }}>
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
          <Text mt="l" mb="m" as="p" bold>
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
                      bold
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
          <HeadingH3 as="h2" sx={{ fontSize: baseTheme.space.xl }}>
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
          <Text mt="l" mb="m" as="p" bold>
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
                      bold
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

const ContentsPage: Page<SinglePageProps> = ({ locale }) => {
  const { t } = useTranslation(['common'])

  const theme = useContext(ThemeContext) as ThemeType

  const [personasDescShown, togglePersonasDesc] = useState(false)

  return (
    <>
      {personasDescShown && (
        <Popup
          ariaLabelledby={PROJECT_NAME}
          ariaDescribedby={ABOUT_PARA_ABILITY_PERSONAS}
          as="section"
          height="100%"
          onClose={() => togglePersonasDesc(!personasDescShown)}
        >
          <ParaAbilityProjectDescription />
        </Popup>
      )}
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
        <HeadingH3 as="h2" mt="elephant" mb="m" color="complementaryDark">
          Contents
        </HeadingH3>
        <List liSx={{ margin: `${baseTheme.space.m}px` }}>
          <ContentsItem
            multilingual
            {...{
              locale: locale as Locale,
              link: ABOUT,
              text: `${t('about')} 👩🏽‍🦰`,
            }}
          />
          <ContentsItem
            multilingual
            {...{
              locale: locale as Locale,
              link: CONTACTS,
              text: `${t('contacts')} ☎️`,
            }}
          />
          <HeadingH3
            mt="xxxl"
            mb="xl"
            py="s"
            sx={{
              fontSize: `${baseTheme.space.xl}px`,
              borderTop: `2px dashed ${theme.colours.complementaryDark}`,
              borderBottom: `2px dashed ${theme.colours.complementaryDark}`,
            }}
            color="complementaryDark"
          >
            {t('projects')}
          </HeadingH3>

          <ContentsItem
            {...{
              multilingual: true,
              locale: locale as Locale,
              link: AVATAR_CREATOR,
              text: `🧕 ${t('avatar_builder')}`,
              extra: <Box mb="xxl" />,
            }}
          />
          <ContentsItem
            {...{
              external: true,
              locale: locale as Locale,
              link: LIL_BM_APP,
              text: `👾 Lil' Bm Adventures`,
              extra: (
                <>
                  {t('desktop_only')}
                  <Box mb="xxl" />
                </>
              ),
            }}
          />
          <ContentsItem
            {...{
              external: true,
              locale: locale as Locale,
              link: FORTUNE_COOKIE_APP,
              text: `🥠 ${t('fortune_cookie')}`,
              extra: <Box mb="xxl" />,
            }}
          />
          <ContentsItem
            {...{
              locale: locale as Locale,
              link: RANDOM_STORY_MAKER,
              text: `🎲 ${t('random_story')}`,
              extra: <Box mb="xxl" />,
            }}
          />
          <ContentsItem
            isWIP
            {...{
              locale: locale as Locale,
              link: PARA_ABILITY_PERSONAS,
              text: `🧏 ${t('personas_project')}`,
              extra: (
                <>
                  <ExternalLink
                    mt="s"
                    href={PERSONAS_APP_ISSUES}
                    target="_blank"
                  >
                    <HoverableText
                      bold
                      color="complementaryLight"
                      activeColour="complementaryDark"
                      variant="bodyMd"
                    >
                      ➠ {t('help_wanted')}
                    </HoverableText>
                  </ExternalLink>
                  <HoverableText
                    onClick={() => togglePersonasDesc(!personasDescShown)}
                    mt="s"
                    mb="xxl"
                    bold
                    color="complementaryDark"
                    variant="bodyMd"
                  >
                    ➠ {t('about_project')}
                  </HoverableText>
                </>
              ),
            }}
          />
        </List>
      </Flex>
    </>
  )
}

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
      ...(await serverSideTranslations(locale, [
        'common',
        'introduction',
        'languages',
      ])),
    },
  }
}

export default ContentsPage
