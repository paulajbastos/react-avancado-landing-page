import React from 'react'

import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaTwitter } from 'react-icons/fa'

import { getImageUrl } from 'utils/getImageUrl'

import * as S from './styles'
import { Author, SocialLink } from 'types/api'

const icons = {
  twitter: <FaTwitter />,
  github: <GrGithub />,
  dribbble: <FaDribbble />
}
type Props = {
  name: string
  role: string
  photo: string
  socialLinks: SocialLink[]
  description: string
}

const ProfileCard: React.FC<Author> = ({
  name,
  role,
  photo,
  socialLinks,
  description
}) => (
  <S.Card key={name}>
    <S.Image src={getImageUrl(photo.url)} alt={name} />
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.SocialLinks>
      {socialLinks.map(({ title, url }) => (
        <S.Link key={url}>
          <a href={url} title={title}>
            {icons[title]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>
    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard
