import "./profilePage.css";
import Image from "../../components/image/image";
import { useState } from "react";
import Gallery from "../../components/gallery/gallery";
import Collections from "../../components/collections/collections";

const ProfilePage = () => {
  const [type, setType] = useState("saved");
  return (
    <div className="profilePage">
      <Image path="./general/noAvatar.png" alt="Avatar" className="avatar" />
      <h1 className="profileName">John Doe</h1>
      <span className="profileUsername">@johndoe</span>
      <div className="profileCounts">10K Followers . 20 Following</div>
      <div className="profileInteractions">
        <Image path="./general/share.svg" />
        <div className="profileButtons">
          <button>Message</button>
          <button>Follow</button>
        </div>
        <Image path="./general/more.svg" />
      </div>
      <div className="profileOptions">
        <span onClick={()=>setType("created")} className={type==="created"? "active" : ""}>Created</span>
        <span onClick={()=>setType("saved")} className={type==="saved"? "active" : ""}>Saved</span>
      </div>
      {type==="created"? <Gallery /> : <Collections />}
    </div>
  );
};

export default ProfilePage;
