import PropTypes from 'prop-types'
import Heading from '../Heading'
import Text from '../Text'

import cn from 'classnames'

import { ReactComponent as Like } from '../CharacterCard/assets/heart.svg'

import s from './CharacterCard.module.scss'

const CharacterCard = ({
    id, name, description, humanName, src, onLikeClick, isLike, link
}) => {
    
    const handleClick = () => {
        onLikeClick && onLikeClick(id)
    }
    return (
        <div className={s.root}>
            <img src={src} alt={name} className={s.cardImage}/>
            <div className={s.cardDetails}>
                <Heading level={2} className={s.cardName}>{name}</Heading>
                <Heading level={3} className={s.cardHumanName}>{humanName}</Heading>
                <Text className={s.cardDescription}>{description}</Text>
                <div className={s.cardMeta}>
                    <div 
                    onClick={handleClick}
                    className={cn(s.like, {
                        [s.active]: isLike
                    })}>
                        <Like />
                    </div>
                    <div className={s.readBio}>
                        <a href={link}>Read bio</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

CharacterCard.propTypes = {
    id: PropTypes.number,
    src: PropTypes.string,
    name: PropTypes.string,
    humanName: PropTypes.string,
    description: PropTypes.string,
    onLikeClick: PropTypes.func,
    isLike: PropTypes.bool,
}

export default CharacterCard