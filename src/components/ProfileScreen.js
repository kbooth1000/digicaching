import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../img/default_avatar.png';
import { getCurrentProfile, setCurrentUser } from '../actions/profileActions';
import CollectionList from './CollectionList';

let avatarUrl = '../img/default_avatar.png';

let profileData;
class ProfileScreen extends Component {
  async componentDidMount() {
    // let itemsList = await getInventory();
    let uid = '096780a6-3347-410c-98d4-48db176ce9b1';
    // let profileData = this.props.getCurrentProfileWrapped(uid);
    fetch(`/api/users/${uid}`)
      .then((res) => {
        // console.log('res ', res.json());
        return res.json();
      }
    )
    .then(data => this.props.getCurrentProfileWrapped(data) );
  }

  render() {
    console.log('this.props: ', this.props);

    let testDataItemsList = [{
      name: 'robot body',
      id: 3,
      description: 'An inanimate robot shell',
      image_url: 'https://i.pinimg.com/564x/13/80/93/138093cf8d0bf3594a1f8aab166036a1.jpg'
    }, { id: 2, name: 'battery', description: 'A lithium battery', image_url: 'http://cdn2.bigcommerce.com/server4400/ccf39/products/1423/images/5032/BR_C__18316.1368217244.1280.1280.jpg?c=2' }];
    // let { user } = this.props.auth; // CHECK IF USER IS LOGGED IN


    let profileContent;

    if (this.props.profile === null || this.props.loading) {
      profileContent = <div>
        <h3>...Loading...</h3>
        <img className="loading-photo" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="...loading..." /></div>
    } else {
      profileContent =
        <main className="user-profile">
          <header>
            <img src={avatarUrl} alt="" className="avatar" />
            <div className="user-name">
              <h2>{this.props.profile.name}</h2>
            </div>
          </header>
          <div className="collection-display">
            <h3>Collection:</h3>
            <ul>
              <CollectionList
                itemsList={testDataItemsList}
              />
            </ul>
          </div>
        </main>
    }
    return <section>
      <h2>User Profile: </h2>
      <div>
        {profileContent}
      </div>
    </section>;
  }
};

let mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

let mapDispatchToProps = (dispatch) => {

  let getCurrentProfileWrapped = (id) => {
    dispatch(getCurrentProfile(id));
  };
  return { getCurrentProfileWrapped };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);