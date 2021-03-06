import React, { useState } from 'react'
import Head from 'next/head'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { usePersonasAPI } from '@/hooks/use-api'
import { PARA_ABILITIES, PERSONAS } from 'constants/apis'
import {
  ABOUT_PARA_ABILITY_PERSONAS,
  PARA_ABILITY_PERSONAS,
  PROJECT_NAME,
} from 'constants/locations'

import { matchByKey } from 'utils/foreign-key-match'
import { MediaContextProvider, Media } from 'utils/media'

import { MainLayout } from '@/components/layouts'
import { List, Box, Loader, HoverableText, Popup } from 'danni-s-design-system'
import { ParaAbilityProjectDescription, PersonaCard } from '@/components'

import type {
  Locale,
  Page,
  SinglePage as SinglePageProps,
  PersonaWithParaAbilityDescription,
  Personas,
  ParaAbilities,
  Event,
} from 'types'

const ParaAbilityPersonasPage: Page<SinglePageProps> = () => {
  const { data: personas, error: personasFetchError } = usePersonasAPI({
    url: PERSONAS,
  })
  const {
    data: paraAbilities,
    error: paraAbilitiesFetchError,
  } = usePersonasAPI({
    url: PARA_ABILITIES,
  })

  const { t } = useTranslation(['common'])

  const [personasDescShown, togglePersonasDesc] = useState(false)

  if (!personas || !paraAbilities) return <Loader />
  if (personasFetchError || paraAbilitiesFetchError) return <Box>⚠️</Box>

  const common = matchByKey({
    personas: personas as Personas,
    paraAbilities: paraAbilities as ParaAbilities,
  })

  const shouldTogglePopup = (event: Event) => {
    if (event?.target?.id === PARA_ABILITY_PERSONAS) {
      togglePersonasDesc(false)
    }
  }

  return (
    <>
      <Head>
        <title>{t('personas_project_meta')}</title>
      </Head>
      {personasDescShown && (
        <Popup
          ariaLabelledby={PROJECT_NAME}
          ariaDescribedby={ABOUT_PARA_ABILITY_PERSONAS}
          as="section"
          height="100%"
          onClose={event => shouldTogglePopup(event as Event)}
        >
          <ParaAbilityProjectDescription />
        </Popup>
      )}
      <MediaContextProvider>
        <Media lessThan="tablet">
          <Box mb="xxxl"></Box>
        </Media>
      </MediaContextProvider>
      <List as="section">
        <HoverableText
          onClick={() => togglePersonasDesc(!personasDescShown)}
          mt="s"
          bold
          color="complementaryDark"
          variant="bodyMd"
        >
          ➠ {t('about_project')}
        </HoverableText>
        {common.map((persona: PersonaWithParaAbilityDescription) => (
          <PersonaCard key={persona.id} persona={persona} />
        ))}
      </List>
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
      ...(await serverSideTranslations(locale, [
        'common',
        'languages',
        'about',
      ])),
    },
  }
}

ParaAbilityPersonasPage.Layout = ({ children, ...props }) => (
  <MainLayout {...props}>{children}</MainLayout>
)

export default ParaAbilityPersonasPage
