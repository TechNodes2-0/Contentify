import React,{useEffect,useState} from "react";


import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useAuth0 } from '@auth0/auth0-react';
const Homepage = () => {
  const [avatarURL, setAvatarURL] = useState();
  const [githubUsername, setGitHubUsername] = useState();
  const [repoData, setRepoData] = useState([]);
  const [showRepos, setShowRepos] = useState(false);
  const { auth0, isLoading, isAuthenticated ,getAccessTokenSilently} = useAuth0();
  console.log(useAuth0);
  async function getUserData(githubAccessToken) {
    const apiUrl = 'https://api.github.com/user';
  
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          'Authorization': `Bearer ${githubAccessToken}`,
        
          'X-GitHub-Api-Version': '2022-11-28',
        },
      });
  
      // Extract and return the user data from the response
      const userData = response.data;
      console.log(userData);
      return userData;
    } catch (error) {
      console.error('Failed to retrieve user data from GitHub:', error);
      throw error;
    }
  }

  const fetchUserInfo = async (ACCESS_TOKEN) => {
    try {
      const response = await axios.get('https://dev-fkzyzzay6f6jrars.us.auth0.com/userinfo', {
        headers: {
          'Authorization': `Bearer ${ACCESS_TOKEN}`,
       
        },
      });
  return response.data;
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };
  async function auth()
{

      
      const accessToken= await getAccessToken();
      const token=`${accessToken}`;
      console.log(accessToken);
      // getUserData(token);
      const Myuser= await fetchUserInfo(token);
      const ACCESS_TOKEN = accessToken;
      console.log(Myuser.sub);
      const userId=Myuser.sub;

     
 var answer;

      let  config  =   { 
        method :   'get' , 
        url :   `https://dev-fkzyzzay6f6jrars.us.auth0.com/api/v2/users/${userId}` , 
        headers :   {  
          'Accept' :   'application/json' ,  
          'Authorization' :   `Bearer ${import.meta.env.VITE_AUTH0_MANAGEMENT_API_KEY}`
        } 
      } ; 
     
     
      axios ( config ) 
      . then ( ( response )   =>   { 
        console . log ( JSON . stringify ( response . data ) ) ; 
         answer =   response.data;
         console.log(answer);
         console.log(answer.identities[0].access_token);
         octo(answer.identities[0].access_token);
      } ) 
      . catch ( ( error )   =>   { 
        console . log ( error ) ; 
      } ) ; 
      
      async function octo(answer) {
        const headers = {
          'Authorization': `Bearer ${answer}`,
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'octokit.rest'
        };
      
        try {
          const response = await fetch('https://api.github.com/user', {
            headers: headers
          });
      
          if (response.ok) {
            const user = await response.json();
            console.log(user);
            fetchRepoData(user.login);
            const username=user.login;
          
    
              fetch(`https://api.github.com/users/${username}`)
                .then((res) => res.json())
                .then(
                  (result) => {
                    setAvatarURL(result.avatar_url);
                    setGitHubUsername(result.login);
                  },
                  (error) => {
                    console.log(error);
                  }
                );
           
          } else {

            console.error('Error retrieving user:', response.status, response.statusText);
          }
        } catch (error) {
          console.error('Error retrieving user:', error);
        }
      }
      
//      
    
 }
 const getAccessToken = async () => {
  if (!isLoading && isAuthenticated) {
    try {
      const accessToken = await getAccessTokenSilently();
      console.log(accessToken);
      // Use the accessToken for API calls or other purposes
   return accessToken;
    } catch (error) {
      console.error('Failed to obtain access token:', error);
    }
  }
};





async function fetchRepoData(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const data = await response.json();
    console.log(data);
    setRepoData(data);
  } catch (error) {
    console.log(error);
  }
}
























async function Idp()
{
  var options = {
    method: 'POST',
    url: 'https://dev-fkzyzzay6f6jrars.us.auth0.com/oauth/token',
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    data: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: 'd9LXHADHfiX1FSRNaJpkegmWAgz1jRtP',
      client_secret: 'h00CNOscN01joR_2EEUg6lkBoiMeRar-vtZQZWhdf90zBXRlonxx0NP--RrqIqyI',
      audience: 'https://dev-fkzyzzay6f6jrars.us.auth0.com'
    })
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
}




useEffect(() => {
  if (showRepos) {
    auth();
  }
}, [showRepos]);

return (
  <div className="w-100 min-vh-100 justify-content-center align-items-center flex flex-col space-y-4 p-8">
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={avatarURL} />
      <Card.Body>
        <Card.Title>Welcome, {githubUsername}!</Card.Title>
        <Card.Text>
          Thank you for exploring our website you can Get anything from everything here
        </Card.Text>
        <Button variant="primary" onClick={() => setShowRepos(!showRepos)}>
          {showRepos ? "Hide Repos" : "Show Repos"}
        </Button>
      </Card.Body>
    </Card>

    {showRepos && (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {repoData.map((repo) => (
          <Card key={repo.id}>
            <Card.Body>
              <Card.Title>{repo.name}</Card.Title>
              <Card.Text>{repo.description}</Card.Text>
              <Button variant="primary" href={repo.html_url} target="_blank">
                View Repository
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    )}
  </div>
);

        }

export default Homepage;