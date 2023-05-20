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
          'Authorization' :   'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im5mUzdvMDRrTTdrbjBCbm9BZlJRRiJ9.eyJpc3MiOiJodHRwczovL2Rldi1ma3p5enpheTZmNmpyYXJzLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiI1WjV5NVdYVWJvMVo3ZWZPR0xZNWRRdkt6TGhJd3V4WEBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9kZXYtZmt6eXp6YXk2ZjZqcmFycy51cy5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTY4NDQ4OTUyMiwiZXhwIjoxNjg0NTc1OTIyLCJhenAiOiI1WjV5NVdYVWJvMVo3ZWZPR0xZNWRRdkt6TGhJd3V4WCIsInNjb3BlIjoicmVhZDpjbGllbnRfZ3JhbnRzIGNyZWF0ZTpjbGllbnRfZ3JhbnRzIGRlbGV0ZTpjbGllbnRfZ3JhbnRzIHVwZGF0ZTpjbGllbnRfZ3JhbnRzIHJlYWQ6dXNlcnMgdXBkYXRlOnVzZXJzIGRlbGV0ZTp1c2VycyBjcmVhdGU6dXNlcnMgcmVhZDp1c2Vyc19hcHBfbWV0YWRhdGEgdXBkYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBkZWxldGU6dXNlcnNfYXBwX21ldGFkYXRhIGNyZWF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgcmVhZDp1c2VyX2N1c3RvbV9ibG9ja3MgY3JlYXRlOnVzZXJfY3VzdG9tX2Jsb2NrcyBkZWxldGU6dXNlcl9jdXN0b21fYmxvY2tzIGNyZWF0ZTp1c2VyX3RpY2tldHMgcmVhZDpjbGllbnRzIHVwZGF0ZTpjbGllbnRzIGRlbGV0ZTpjbGllbnRzIGNyZWF0ZTpjbGllbnRzIHJlYWQ6Y2xpZW50X2tleXMgdXBkYXRlOmNsaWVudF9rZXlzIGRlbGV0ZTpjbGllbnRfa2V5cyBjcmVhdGU6Y2xpZW50X2tleXMgcmVhZDpjb25uZWN0aW9ucyB1cGRhdGU6Y29ubmVjdGlvbnMgZGVsZXRlOmNvbm5lY3Rpb25zIGNyZWF0ZTpjb25uZWN0aW9ucyByZWFkOnJlc291cmNlX3NlcnZlcnMgdXBkYXRlOnJlc291cmNlX3NlcnZlcnMgZGVsZXRlOnJlc291cmNlX3NlcnZlcnMgY3JlYXRlOnJlc291cmNlX3NlcnZlcnMgcmVhZDpkZXZpY2VfY3JlZGVudGlhbHMgdXBkYXRlOmRldmljZV9jcmVkZW50aWFscyBkZWxldGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGNyZWF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgcmVhZDpydWxlcyB1cGRhdGU6cnVsZXMgZGVsZXRlOnJ1bGVzIGNyZWF0ZTpydWxlcyByZWFkOnJ1bGVzX2NvbmZpZ3MgdXBkYXRlOnJ1bGVzX2NvbmZpZ3MgZGVsZXRlOnJ1bGVzX2NvbmZpZ3MgcmVhZDpob29rcyB1cGRhdGU6aG9va3MgZGVsZXRlOmhvb2tzIGNyZWF0ZTpob29rcyByZWFkOmFjdGlvbnMgdXBkYXRlOmFjdGlvbnMgZGVsZXRlOmFjdGlvbnMgY3JlYXRlOmFjdGlvbnMgcmVhZDplbWFpbF9wcm92aWRlciB1cGRhdGU6ZW1haWxfcHJvdmlkZXIgZGVsZXRlOmVtYWlsX3Byb3ZpZGVyIGNyZWF0ZTplbWFpbF9wcm92aWRlciBibGFja2xpc3Q6dG9rZW5zIHJlYWQ6c3RhdHMgcmVhZDppbnNpZ2h0cyByZWFkOnRlbmFudF9zZXR0aW5ncyB1cGRhdGU6dGVuYW50X3NldHRpbmdzIHJlYWQ6bG9ncyByZWFkOmxvZ3NfdXNlcnMgcmVhZDpzaGllbGRzIGNyZWF0ZTpzaGllbGRzIHVwZGF0ZTpzaGllbGRzIGRlbGV0ZTpzaGllbGRzIHJlYWQ6YW5vbWFseV9ibG9ja3MgZGVsZXRlOmFub21hbHlfYmxvY2tzIHVwZGF0ZTp0cmlnZ2VycyByZWFkOnRyaWdnZXJzIHJlYWQ6Z3JhbnRzIGRlbGV0ZTpncmFudHMgcmVhZDpndWFyZGlhbl9mYWN0b3JzIHVwZGF0ZTpndWFyZGlhbl9mYWN0b3JzIHJlYWQ6Z3VhcmRpYW5fZW5yb2xsbWVudHMgZGVsZXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRzIGNyZWF0ZTpndWFyZGlhbl9lbnJvbGxtZW50X3RpY2tldHMgcmVhZDp1c2VyX2lkcF90b2tlbnMgY3JlYXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgZGVsZXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgcmVhZDpjdXN0b21fZG9tYWlucyBkZWxldGU6Y3VzdG9tX2RvbWFpbnMgY3JlYXRlOmN1c3RvbV9kb21haW5zIHVwZGF0ZTpjdXN0b21fZG9tYWlucyByZWFkOmVtYWlsX3RlbXBsYXRlcyBjcmVhdGU6ZW1haWxfdGVtcGxhdGVzIHVwZGF0ZTplbWFpbF90ZW1wbGF0ZXMgcmVhZDptZmFfcG9saWNpZXMgdXBkYXRlOm1mYV9wb2xpY2llcyByZWFkOnJvbGVzIGNyZWF0ZTpyb2xlcyBkZWxldGU6cm9sZXMgdXBkYXRlOnJvbGVzIHJlYWQ6cHJvbXB0cyB1cGRhdGU6cHJvbXB0cyByZWFkOmJyYW5kaW5nIHVwZGF0ZTpicmFuZGluZyBkZWxldGU6YnJhbmRpbmcgcmVhZDpsb2dfc3RyZWFtcyBjcmVhdGU6bG9nX3N0cmVhbXMgZGVsZXRlOmxvZ19zdHJlYW1zIHVwZGF0ZTpsb2dfc3RyZWFtcyBjcmVhdGU6c2lnbmluZ19rZXlzIHJlYWQ6c2lnbmluZ19rZXlzIHVwZGF0ZTpzaWduaW5nX2tleXMgcmVhZDpsaW1pdHMgdXBkYXRlOmxpbWl0cyBjcmVhdGU6cm9sZV9tZW1iZXJzIHJlYWQ6cm9sZV9tZW1iZXJzIGRlbGV0ZTpyb2xlX21lbWJlcnMgcmVhZDplbnRpdGxlbWVudHMgcmVhZDphdHRhY2tfcHJvdGVjdGlvbiB1cGRhdGU6YXR0YWNrX3Byb3RlY3Rpb24gcmVhZDpvcmdhbml6YXRpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25zIGRlbGV0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25fbWVtYmVycyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJzIGRlbGV0ZTpvcmdhbml6YXRpb25fbWVtYmVycyBjcmVhdGU6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHJlYWQ6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgZGVsZXRlOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyBjcmVhdGU6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgZGVsZXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgY3JlYXRlOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyByZWFkOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyBkZWxldGU6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIHJlYWQ6b3JnYW5pemF0aW9uc19zdW1tYXJ5IGNyZWF0ZTphY3Rpb25zX2xvZ19zZXNzaW9ucyBjcmVhdGU6YXV0aGVudGljYXRpb25fbWV0aG9kcyByZWFkOmF1dGhlbnRpY2F0aW9uX21ldGhvZHMgdXBkYXRlOmF1dGhlbnRpY2F0aW9uX21ldGhvZHMgZGVsZXRlOmF1dGhlbnRpY2F0aW9uX21ldGhvZHMgcmVhZDpjbGllbnRfY3JlZGVudGlhbHMgY3JlYXRlOmNsaWVudF9jcmVkZW50aWFscyB1cGRhdGU6Y2xpZW50X2NyZWRlbnRpYWxzIGRlbGV0ZTpjbGllbnRfY3JlZGVudGlhbHMiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.qnlodNUF0h9Rst27nFSZ8pSbr0Hpr0-Kjpj3aOBHB4-GlbiunH-eR0M9r_T1BEeiGvDo6skL2keK05eyvqnvD-Ea-8kdIpZ6OrhvTYd8qj-IjIaIlJkNJQaKtlcY1xCwK0toc_lIWjRprKNexeajZyFTs_fWeDF24Cc-hooL53p7_tQQbFYpuZ8c1tDgVNmfM1k4lrcCIb1JESQ6eTqkNflxo5GwaTgwRjR70nHiAs3MpOR3uwaUR87_uAgaSC3iwsANahIzMitw2NRw0cxhfN72rjYZ8y-NcnwBMCyJodgb8-Zh3u9x8jwgLGr4JFcyArpQbcPjGh9zet77GjeYNQ' 
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