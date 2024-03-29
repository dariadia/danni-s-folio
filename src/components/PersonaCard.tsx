import React, { useContext, useState } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { useTranslation } from 'next-i18next'

import {
  baseTheme,
  Box,
  Colour,
  BgColour,
  Text,
  HoverableText,
  Popup,
  List,
  HeadingH3,
  ThemeType,
} from 'danni-s-design-system'

import { Avatar } from '.'
import {
  PARA_ABILITY_DESCRIPTION,
  PARA_ABILITY_NAME,
} from 'constants/locations'

import type { PersonaWithParaAbilityDescription } from 'types'

type PersonaCardProps = {
  persona: PersonaWithParaAbilityDescription
}

const StyledText = styled(Text)`
  a {
    color: black;
    text-decoration: 2px underline ${({ theme }) => theme.colours.accentDark};
    &:hover {
      color: ${({ theme }) => theme.colours.accentDark};
      transition: ${({ theme }) => theme.transitions.default};
    }
  }
`

// TODO add avatars from the avatar-builder project
const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max)
}

const colours = [
  'accentDark',
  'accentLight',
  'accentLightest',
  'complementaryDark',
  'complementaryLight',
] as Colour[]

export const PersonaCard: React.FC<PersonaCardProps> = ({ persona }) => {
  const randomColourKey = getRandomInt(colours.length - 1)
  const randomColour = colours[randomColourKey]

  const [descriptionShown, showDescription] = useState(false)
  const closePopup = (tagName: string) => {
    if (tagName !== 'A') {
      showDescription(!descriptionShown)
    }
  }

  const { t } = useTranslation('about')

  const theme = useContext(ThemeContext) as ThemeType

  const {
    persona_name,
    para_ability: paraAbility,
    description,
    behaviour_patterns,
    kind,
    advice,
    advice_web,
    emoji,
  } = persona

  const { do: webDo, do_not: webDoNot } = advice_web

  return (
    <>
      {descriptionShown && (
        <Popup
          ariaLabelledby={PARA_ABILITY_NAME}
          ariaDescribedby={PARA_ABILITY_DESCRIPTION}
          p="xxxl"
          onClose={event => closePopup(event.target.tagName)}
        >
          <Box mx="auto" maxWidth={`${baseTheme.space.dinosaur * 2}px`}>
            <HeadingH3
              id={PARA_ABILITY_NAME}
              mb="xl"
              kind="serif"
              color="accentDark"
            >
              {emoji} {paraAbility}
            </HeadingH3>
            <Text mb="xl">
              <Text bold mr="xs" inlineBlock>
                Kind:
              </Text>
              {kind}
            </Text>
            {behaviour_patterns && behaviour_patterns.length > 0 && (
              <List
                id={PARA_ABILITY_DESCRIPTION}
                liSx={{ marginBottom: `${baseTheme.space.s}px` }}
                sx={{ marginBottom: `${baseTheme.space.l}px` }}
              >
                {behaviour_patterns.map(pattern => (
                  <Text key={pattern}>💁 {pattern}</Text>
                ))}
              </List>
            )}
            {advice && advice.length > 0 && (
              <List
                liSx={{ marginBottom: `${baseTheme.space.s}px` }}
                sx={{ marginBottom: `${baseTheme.space.l}px` }}
              >
                {advice.map(item => (
                  <Text key={item}>{item} 🤲</Text>
                ))}
              </List>
            )}
            {webDo && webDo.length > 0 && (
              <List
                liSx={{ marginBottom: `${baseTheme.space.s}px` }}
                sx={{ marginBottom: `${baseTheme.space.l}px` }}
              >
                {webDo.map(item => (
                  <StyledText key={item} theme={theme}>
                    🛠 <span dangerouslySetInnerHTML={{ __html: item }} />
                  </StyledText>
                ))}
              </List>
            )}
            {webDoNot && webDoNot.length > 0 && (
              <List
                liSx={{ marginBottom: `${baseTheme.space.s}px` }}
                sx={{ marginBottom: `${baseTheme.space.l}px` }}
              >
                {webDoNot.map(item => (
                  <StyledText key={item} theme={theme}>
                    ❌ <span dangerouslySetInnerHTML={{ __html: item }} />
                  </StyledText>
                ))}
              </List>
            )}
          </Box>
        </Popup>
      )}
      <Box
        as="article"
        my="xxxl"
        mx="auto"
        textAlign="center"
        minWidth={`${baseTheme.space.elephant}px`}
        maxWidth={`${baseTheme.space.dinosaur * 2}px`}
        minHeight={`${baseTheme.space.elephant}px`}
        onClick={() => showDescription(!descriptionShown)}
      >
        <Avatar bg={randomColour as BgColour} size="elephant" mx="auto" />
        <Box sx={{ cursor: 'pointer' }}>
          <Text mt="m" as="h4">
            {persona_name}
          </Text>
          <HoverableText
            bold
            color="accentDark"
            activeColour="complementaryDark"
          >
            {paraAbility}
          </HoverableText>
          <Text
            my="s"
            variant="bodySm"
            bold
            sx={{ textTransform: 'none' }}
            color="complementaryLight"
          >
            ➠ {t('click_to_open')}
          </Text>
          <Text my="s">{description}</Text>
        </Box>
      </Box>
    </>
  )
}
