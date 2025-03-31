import FriendListItem from "./FriendListItem";

const FriendList = ({ friendsData }) => {
  return (
    <ul>
      {friendsData.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
