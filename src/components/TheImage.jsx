import React from "react";
import { AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

// Import required actions and qualifiers.
import { fill } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { Gravity } from "@cloudinary/url-gen/qualifiers";
import { AutoFocus } from "@cloudinary/url-gen/qualifiers/autoFocus";

const REACT_APP_CLOUNDINARY_CLOUND_NAME =
  process.env.REACT_APP_CLOUNDINARY_CLOUND_NAME;

const App = () => {
  // Create and configure your Cloudinary instance.
  const cld = new Cloudinary({
    cloud: {
      cloudName: REACT_APP_CLOUNDINARY_CLOUND_NAME,
    },
  });

  // Use the video with public ID, 'docs/walking_talking'.
  const myVideo = cld.video("ueqa15cn64wpbwegzfhn");

  // Apply the transformation.
  myVideo
    .resize(
      fill()
        .width(500)
        .height(250)
        .gravity(
          Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.faces()))
        )
    ) // Crop the video, focusing on the faces.
    .roundCorners(byRadius(20)); // Round the corners.

  // Render the transformed video in a React component.
  return (
    <div>
      <AdvancedVideo cldVid={myVideo} controls />
    </div>
  );
};

export default App;
