import React from 'react'
import { Client,Account } from 'appwrite';

export default function Appwrite() {
    


    const client = new Client();
    
    const account = new Account(client);
    
    client
        .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
        .setProject('646dc732dcec143c3c6f') // Your project ID
    ;
    
    // Go to OAuth provider login page
    const promise = account.createEmailSession('email@example.com', 'password');

    promise.then(function (response) {
        console.log(response); // Success
    }, function (error) {
        console.log(error); // Failure
    });

// Go to OAuth provider login page

  return (
    <div>Appwrite</div>
  )
}

