import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
import './index.css';
import user from './user.json';

// const div = React.createElement('div')
const card = (<div className="profile mx-auto my-2">
  <div className="description">
    <img
      src={user.avatar}
      alt={user.username}
      className="avatar"
    />
    <p className="name">{user.username}</p>
    <p className="tag">@{user.tag}</p>
    <p className="location">{user.location}</p>
  </div>

  <ul className="stats ">
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{user.stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{user.stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{user.stats.views}</span>
    </li>
  </ul>
</div>)
  
ReactDOM.createRoot(document.getElementById('root')).render(card)

// const data = {
//   "username": "Jacques Gluke",
//   "tag": "jgluke",
//   "location": "Ocho Rios, Jamaica",
//   "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//   "stats": {
//     "followers": 5603,
//     "views": 4827,
//     "likes": 1308
//   }
// }

// const profile1 = {<div class="profile">
//   <div class="description">
//     <img
//       src= {data.avatar}
//       alt={data.username}
//       class="avatar"
//     />
//     <p class="name">Petra Marica</p>
//     <p class="tag">@pmarica</p>
//     <p class="location">Salvador, Brasil</p>
//   </div>

//   <ul class="stats">
//     <li>
//       <span class="label">Followers</span>
//       <span class="quantity">1000</span>
//     </li>
//     <li>
//       <span class="label">Views</span>
//       <span class="quantity">2000</span>
//     </li>
//     <li>
//       <span class="label">Likes</span>
//       <span class="quantity">3000</span>
//     </li>
//   </ul>
// </div>};

// const element = React.createElement('div');

// console.log(element);

// (
//   <React.StrictMode>
//     {/* <App /> */}
//   </React.StrictMode>
// )