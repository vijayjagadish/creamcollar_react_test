import React, { useState, useEffect } from 'react';
import Navbar1 from './Navbar1';
import Logout from './Logout';
import axios from 'axios';
import qs from 'qs';
import { useLocation } from 'react-router-dom';
import { Card, CardBody, CardImg, CardTitle, CardText, Button, CardHeader, Row, Col, FormGroup} from 'reactstrap';
 
 
import PanelHeader from "../components/PanelHeader";
 
function Profile() {
 
 
  const [profileData, setProfileData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    collegeEmail: '',
    personalEmail: '',
    mobileNumber: '',
    permanentAddress: '',
    college: '',
    degree: '',
    specialization: 'Select',
    currentSemester: '',
    Profile_img:'',
  });
  const [editMode, setEditMode] = useState(false); // Track edit mode
  const [dataLoaded, setDataLoaded] = useState(false);  
  const location = useLocation();
  const user = location.state;
  console.log(user.username)
  const [registrationStatus, setRegistrationStatus] = useState(null);
 
  // Define the getUserIdByEmail function within the Profile component
  const getUserIdByusername = async (adminAccessToken, username) => {
   
    try {
      const keycloakResponse = await axios.get(
        `https://test1.cream-collar.com:8443/admin/realms/creamcollar/users?username=${username}`,
        {
          headers: {
            Authorization: `Bearer ${adminAccessToken}`,
          },
        }
      );
 
      if (keycloakResponse.status === 200) {
        const users = keycloakResponse.data;
        if (users.length > 0) {
          return users[0].id;
         
        }
      }
    } catch (error) {
      console.error('Failed to get user ID by email in Keycloak:', error);
    }
    return null;
  };
 
  useEffect(() => {
    if (!dataLoaded){
    // Define your Keycloak client credentials and token URL
    const clientCredentials = {
      grant_type: 'client_credentials',
      client_id: 'creamcollar_client',
      client_secret: 'XSijvfCIKpFt7vvRiieVA2ey5DC60U0t',
    };
 
    // Make a POST request to obtain an access token
    axios
      .post('https://test1.cream-collar.com:8443/realms/creamcollar/protocol/openid-connect/token', qs.stringify(clientCredentials), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then(async (response) => {
        const accessToken = response.data.access_token;
        // Get the user's ID by email using the inner getUserIdByusername function
        const userId = await getUserIdByusername(accessToken, user.username);
        console.log('User ID by user:', userId);
     
        // Use the obtained access token to fetch user profile data
        axios
          .get(`https://test1.cream-collar.com:8443/admin/realms/creamcollar/users/${userId}`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then((profileResponse) => {
            const userProfile = profileResponse.data;
            // Check the structure of userProfile.attributes
            console.log('Keys in userProfile.attributes:', Object.keys(userProfile.attributes));
 
 
            console.log('Profile Data:', userProfile); // Log the profile data for debugging
            setProfileData({
              firstname: userProfile.firstName,
              lastname: userProfile.lastName,
              username: userProfile.username,
              email: userProfile.email,
              password: '', // Password should not be fetched or displayed
              collegeEmail: userProfile.attributes ? userProfile.attributes['College Email']?.[0] || '' : '',
              personalEmail: userProfile.attributes ? userProfile.attributes['Personal Email']?.[0] || '' : '',
              mobileNumber: userProfile.attributes ? userProfile.attributes['Mobile Number']?.[0] || '' : '',
              permanentAddress: userProfile.attributes ? userProfile.attributes['Permanent Address']?.[0] || '' : '',
              college: userProfile.attributes ? userProfile.attributes['College']?.[0] || '' : '',            
              degree: userProfile.attributes ? userProfile.attributes.Degree?.[0] || '' : '',
              specialization: userProfile.attributes ? userProfile.attributes.Specialization?.[0] || 'Select' : 'Select',
              currentSemester: userProfile.attributes ? userProfile.attributes['Current Semester']?.[0] || '' : '',
             
            });
            setDataLoaded(true);
          })
          .catch((error) => {
            console.error('Error fetching user profile:', error);
          });
      })
      .catch((error) => {
        console.error('Error obtaining access token:', error);
      });
  }
  }, [dataLoaded, user]);
 
  const handlePhotoChange = (e) => {
    // Handle the file input change and update the profile photo state
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64Data = event.target.result;
        setProfileData({ ...profileData, profilePhoto: base64Data });
      };
      reader.readAsDataURL(file);
    }
  };
  useEffect(() => {
    if (registrationStatus === 'success') {
        // Registration successful, you can redirect or perform other actions.
    }
}, [registrationStatus]);
 
  const handleSubmit = (e) => {
    console.log(user.username)
 
    const registrationData = {
        attributes: {
            "College Email": profileData.collegeEmail,
            "Personal Email": profileData.personalEmail,
            "Mobile Number": profileData.mobileNumber,
            "Permanent Address": profileData.permanentAddress,
            "College": profileData.college,
            "Degree": profileData.degree,
            "Specialization": profileData.specialization,
            "Current Semester": profileData.currentSemester,
           
        },
       
        username: profileData.username,
        firstName: profileData.firstname,
        lastName: profileData.lastname,
        email: profileData.email,
        emailVerified: true,
        enabled: true,
       
    };
    console.log(profileData)
 
    const requestData = {
        grant_type: 'client_credentials',
        client_id: 'creamcollar_client',
        client_secret: 'XSijvfCIKpFt7vvRiieVA2ey5DC60U0t',
    };
 
    axios
        .post(
            'https://test1.cream-collar.com:8443/realms/creamcollar/protocol/openid-connect/token',
            qs.stringify(requestData),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        )
        .then(async (response) => {
            const accessToken = response.data.access_token;
 
            const userId = await getUserIdByusername(accessToken, user.username);
            console.log(userId)
           
           
            axios
              .put('https://test1.cream-collar.com:8443/admin/realms/creamcollar/users/'+userId+'', registrationData, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
              },
            })
            .then(response => {
              window.alert("Profile updated successfully")
              console.log('Profile updated successfully');
              axios.put(
                `https://test1.cream-collar.com:8443/admin/realms/creamcollar/users/${userId}/execute-actions-email`,
                ['UPDATE_Profile'], // Use the appropriate action here
                {
                  headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                  },
                }
              );
            })
            .catch(error => {
              window.alert("Error updating profile:', error")
              console.error('Error updating profile:', error);
            });
        })
        .catch((error) => {
            console.error('Error getting access token:', error);
            setRegistrationStatus('error');
        });
};
 
 
  return (
   
    <>
    <PanelHeader />
    <Navbar1 />
    <div className='m-3'>
     
      <h1 className='p-3'>Welcome to your Profile Page</h1>
      <Card className='m-5'>
        <CardHeader>
                 <div className='d-flex flex-column align-items-center'>
                 
                    <CardImg
                    style={{ width: '120px', height: '120px', borderRadius: '50%', marginTop: '2px'}}
                            top
                      src={profileData.profilePhoto || 'default-profile-image.png'}
                      alt="Profile" />
                      <br/>
                    <strong className='pb-3'>{profileData.username}</strong>
                      <input style={{ width: '180px'}} type="file" accept="image/*" onChange={handlePhotoChange} />
                 
                  </div>
      </CardHeader>
      <CardBody>
      <CardTitle>
      <strong>Profile Details</strong>
      </CardTitle>
      <CardText>
      <form>
        <Row></Row>
        <label>First Name:</label>
        <input type="text" name="firstname" value={profileData.firstname} readOnly />
        <label>Last Name:</label>
        <input type="text" name="lastname" value={profileData.lastname} readOnly />
        <label>Username:</label>
        <input type="text" name="username" value={profileData.username} readOnly />
        <label>Email:</label>
        <input type="text" name="email" value={profileData.email} readOnly />
        <label>collegeEmail:</label>
        <input type="text" name="collegeEmail" value={profileData.collegeEmail} readOnly={editMode} onChange={(e) => setProfileData({ ...profileData, collegeEmail: e.target.value })}/>
        <label>personalEmail:</label>
        <input type="text" name="email" value={profileData.personalEmail} readOnly={editMode} onChange={(e) => setProfileData({ ...profileData, personalEmail: e.target.value })} />
        <label>mobileNumber:</label>
        <input type="text" name="text" value={profileData.mobileNumber} readOnly={editMode} onChange={(e) => setProfileData({ ...profileData, mobileNumber: e.target.value })} />
        <label>permanentAddress:</label>
        <input type="text" name="text" value={profileData.permanentAddress} readOnly={editMode} onChange={(e) => setProfileData({ ...profileData, permanentAddress: e.target.value })} />
        <label>college:</label>
        <input type="text" name="text" value={profileData.college} readOnly={editMode} onChange={(e) => setProfileData({ ...profileData, college: e.target.value })} />
        <label>degree:</label>
        <input type="text" name="text" value={profileData.degree} readOnly={editMode} onChange={(e) => setProfileData({ ...profileData, degree: e.target.value })} />
        <label> specialization:</label>
        <select id="specialization" name="specialization" value={profileData.specialization} onChange={(e) => setProfileData({ ...profileData, specialization: e.target.value })} required>
                    <option value="Select">Select</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Business">Business</option>
                    <option value="Other">Other</option>
                </select>
        <label>currentSemester:</label>
        <input type="text" name="text" value={profileData.currentSemester} readOnly={editMode} onChange={(e) => setProfileData({ ...profileData, currentSemester: e.target.value })} />
        {/* Add similar input fields for other profile information */}
      </form>
      </CardText>
      </CardBody>
      <div>
     
      <button className='mb-5 mt-2' onClick={handleSubmit}>Save</button>
    </div>
      </Card>
     
    </div>
    </>
  );
}
 
export default Profile;