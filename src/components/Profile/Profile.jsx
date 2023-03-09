
import css from './Profile.module.css'
import PropTypes from 'prop-types'
// import styled from 'styled-components'


export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes } ,
}) => (
  <div className={css.profileCard}>
    <div className={css.description}>
      <img
        src={avatar}
        alt={username}
        className={css.avatar} />
      <p className={css.userName}>{username}</p>
      <p className={css.tagName}>{tag}</p>
      <p className={css.locationName}>{location}</p>
    </div>

    <ul className={css.statsList}>
      <li className={css.statsName}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{followers}</span>
      </li>
      <li className={css.statsName}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{views}</span>
      </li>
      <li className={css.statsName}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{likes}</span>
      </li>
    </ul>
  </div>)


  export default Profile;

  Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
}


