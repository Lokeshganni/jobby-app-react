import {Component} from 'react'
import Cookies from 'js-cookie'
import {FiSearch} from 'react-icons/fi'
import NavBar from '../NavBar'
import './index.css'

class Jobs extends Component {
  state = {profileData: ''}

  componentDidMount() {
    this.getProfileData()
  }

  getProfileData = async () => {
    const token = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/profile'
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const formattedProfileData = {
      name: data.profile_details.name,
      profileImageUrl: data.profile_details.profile_image_url,
      shortBio: data.profile_details.short_bio,
    }
    this.setState({profileData: formattedProfileData})
  }

  render() {
    const {profileData} = this.state
    return (
      <>
        <NavBar />
        <div className="jobs-main-container">
          <div className="jobs-search-container">
            <input type="search" placeholder="Search" />
            <button
              type="button"
              data-testid="searchButton"
              aria-label="search-icon"
              className="search-icon-container"
            >
              <FiSearch className="search-icon" />
            </button>
          </div>
          <div>
            <div className="profile-container">
              <img src={profileData.profileImageUrl} alt="profile" />
              <h1>{profileData.name}</h1>
              <p>{profileData.shortBio}</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default Jobs
