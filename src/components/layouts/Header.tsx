import React, { useState, useEffect, useContext } from 'react'

import Router, { useRouter } from 'next/dist/client/router'
import { useTranslation } from 'next-i18next'

import styled, { ThemeContext } from 'styled-components'

import { motion } from 'framer-motion'
import { MediaContextProvider, Media } from 'utils/media'
import { CONTENTS } from 'constants/locations'

import Link from 'next/link'
import {
  baseTheme,
  Text,
  Button,
  ThemeType,
  List,
  Flex,
  Popup,
  Box,
} from 'danni-s-design-system'
import { GoToMainButton } from '..'

import { LanguageAvailable, LANGUAGES } from 'constants/languages'

import { Locale } from 'types'

const StyledHeader = styled('header')`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  min-height: ${baseTheme.space.xxxl}px;
  text-decoration: none;
`

type ButtonProps = {
  isContentsPage: boolean
}

type HeaderProps = {
  currentLocale: Locale
  locales: Locale[]
}

const ButtonWithMotion: React.FC<ButtonProps> = ({ isContentsPage }) => {
  const ButtonXDesktop = baseTheme.space.xl
  const ButtonXMobile = baseTheme.space.s
  const ButtonYDesktop = baseTheme.space.xxl
  const ButtonYMobile = 0

  return (
    <MediaContextProvider>
      <Media greaterThanOrEqual="desktop">
        <Link href={isContentsPage ? '/' : `/${CONTENTS}`} passHref>
          <motion.a
            style={{
              textDecoration: 'none',
              height: 'fit-content',
              position: 'absolute',
              zIndex: baseTheme.zIndices.above,
              right: `-${ButtonXDesktop}px`,
              top: `-${ButtonYDesktop}px`,
            }}
            layoutId="navButton"
            initial={{ scale: 0.47 }}
            whileHover={{ scale: 0.5 }}
            whileTap={{ scale: 0.4, filter: 'brightness(0.8)' }}
          >
            <GoToMainButton my="l" />
          </motion.a>
        </Link>
      </Media>
      <Media lessThan="desktop">
        <Link href={isContentsPage ? '/' : `/${CONTENTS}`} passHref>
          <motion.a
            style={{
              textDecoration: 'none',
              height: 'fit-content',
              position: 'absolute',
              marginTop: `${baseTheme.space.xxxl}px`,
              zIndex: baseTheme.zIndices.above,
              right: `${ButtonXMobile}px`,
              top: `-${ButtonYMobile}px`,
            }}
            layoutId="navButton"
            initial={{ scale: 0.47 }}
            whileHover={{ scale: 0.5 }}
            whileTap={{ scale: 0.5 }}
          >
            <GoToMainButton />
          </motion.a>
        </Link>
      </Media>
    </MediaContextProvider>
  )
}

const StyledLanguageButton = styled(Button).attrs({
  border: '1px solid accentLightest',
  borderOnHover: 'accentDark',
  bg: 'accentDark',
  color: 'accentLightest',
  activeColour: 'accentLightest',
  transition: 'slow',
  inlineBlock: true,
})`
  text-transform: uppercase;
  &:focus {
    color: ${({ theme }) => theme.colours.accentLightest};
    background: ${({ theme }) => theme.colours.complementaryLight};
  }
`

const LanguageButton = ({ locale }: { locale: Locale }) => {
  const theme = useContext(ThemeContext) as ThemeType
  return (
    <>
      <MediaContextProvider>
        <Media greaterThanOrEqual="desktop">
          <Link href="" locale={locale}>
            <Box>
              <StyledLanguageButton m="xs" theme={theme}>
                {locale}
              </StyledLanguageButton>
            </Box>
          </Link>
        </Media>
        <Media lessThan="desktop">
          <Link href="" locale={locale}>
            <Box>
              <StyledLanguageButton
                my="l"
                p="xl"
                fontSize={`${baseTheme.space.xxl}px`}
                theme={theme}
              >
                {locale}
              </StyledLanguageButton>
            </Box>
          </Link>
        </Media>
      </MediaContextProvider>
    </>
  )
}

const AvailableLocalesList = ({
  locales,
  currentLocale,
}: {
  locales: Locale[]
  currentLocale: Locale
}) => {
  const { t } = useTranslation('common')
  return (
    <MediaContextProvider>
      <Media greaterThanOrEqual="desktop">
        <List
          id={t('common:project_languages')}
          role={t('navigation')}
          aria-label={t('languages')}
          direction="row"
        >
          {locales.map(
            locale =>
              locale !== currentLocale && (
                <LanguageButton key={locale} locale={locale} />
              ),
          )}
        </List>
      </Media>
      <Media lessThan="desktop">
        <List
          id={t('common:project_languages')}
          role={t('navigation')}
          aria-label={t('languages')}
          liSx={{ margin: 'auto', width: 'fit-content' }}
        >
          {locales.map(
            locale =>
              locale !== currentLocale && (
                <LanguageButton key={locale} locale={locale} />
              ),
          )}
        </List>
      </Media>
    </MediaContextProvider>
  )
}

export const Header: React.FC<HeaderProps> = ({ currentLocale, locales }) => {
  const { t } = useTranslation(['languages', 'common'])

  const [languageControlsShown, toggleLanguageControls] = useState(true)

  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const startLoading = () => setLoading(true)
  const stopLoading = () => setLoading(false)

  useEffect(() => {
    Router.events.on('routeChangeStart', startLoading)
    Router.events.on('routeChangeComplete', stopLoading)
    return () => {
      Router.events.off('routeChangeStart', startLoading)
      Router.events.off('routeChangeComplete', stopLoading)
    }
  }, [])

  const isIndexPage = router.route === '/'
  const isContentsPage = router.route.includes(CONTENTS)

  const currentLanguage = t(
    `languages:${LANGUAGES[currentLocale as LanguageAvailable]}` as string,
  )

  return (
    <StyledHeader
      onClick={() => toggleLanguageControls(!languageControlsShown)}
    >
      <MediaContextProvider>
        <Media greaterThanOrEqual="desktop">
          {languageControlsShown ? (
            <Flex mx="m" alignItems="center">
              <Text mr="xs" color="accentLightest" inlineBlock>
                {t('common:language_detected')}{' '}
                <Text bold inlineBlock>
                  {currentLanguage}
                </Text>
                ?
              </Text>
              <Text mr="xs" color="accentLightest" inlineBlock>
                {t('common:languages_available')}
              </Text>
              <AvailableLocalesList {...{ locales, currentLocale }} />
            </Flex>
          ) : (
            !loading && <AvailableLocalesList {...{ locales, currentLocale }} />
          )}
        </Media>
        <Media lessThan="desktop">
          {languageControlsShown ? (
            <Text mx="m" my="xxl" color="accentLightest" inlineBlock>
              {t('common:language_detected')}{' '}
              <Text bold inlineBlock>
                {currentLanguage}
              </Text>
              ?
              <Text
                bold
                ml="xs"
                sx={{ textTransform: 'uppercase' }}
                inlineBlock
              >
                {t('common:change')}
              </Text>
            </Text>
          ) : (
            !loading && (
              <>
                <Box
                  mx="m"
                  height={`${baseTheme.space.elephant - baseTheme.space.s}px`}
                />
                <Popup
                  ariaLabelledby={t('common:languages_available')}
                  ariaDescribedby={t('common:project_languages')}
                  height="100vh"
                  p="xl"
                >
                  <Flex
                    id={t('common:languages_available')}
                    justifyContent="center"
                    alignItems="center"
                    height="100%"
                  >
                    <AvailableLocalesList {...{ locales, currentLocale }} />
                  </Flex>
                </Popup>
              </>
            )
          )}
        </Media>
      </MediaContextProvider>
      {!isIndexPage && <ButtonWithMotion isContentsPage={isContentsPage} />}
    </StyledHeader>
  )
}
