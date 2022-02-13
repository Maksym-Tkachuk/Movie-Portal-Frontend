import { FC } from "react";
import { GoogleLogin } from "react-google-login";




type GoogleCreatorTypes = {
    onSuccess: (response: any) => any;
    buttonText: string;
  };
  
 export  const GoogleCreator: FC<GoogleCreatorTypes> = (props) => {
    return (
      <GoogleLogin
      className="google"
        clientId="309023081118-o2p4qmq33c94kov0e96npncnhtr2srr1.apps.googleusercontent.com"
        onSuccess={props.onSuccess}
        isSignedIn={false}
        buttonText={props.buttonText}
      />
    );
  };