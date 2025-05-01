import "./profilePage.css";
import Image from "../../components/image/image";
import { useState } from "react";
import Gallery from "../../components/gallery/gallery";
import Boards from "../../components/boards/boards";
import { useQuery } from "@tanstack/react-query";
import apiRequest from "../../utils/apiRequest";
import { useParams } from "react-router";

const ProfilePage = () => {
  const [type, setType] = useState("saved");

  const { username } = useParams();
  const { isPending, error, data } = useQuery({
    queryKey: ["profile", username],
    queryFn: () => apiRequest.get(`/users/${username}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";
  if (error) return "Something went wrong" + error.message;
  if (!data) return "User not found";
  return (
    <div className="profilePage">
      <Image
        path={data.img || "./general/noAvatar.png"}
        w={100}
        h={100}
        alt=""
        className="profileImg"
      />
      <h1 className="profileName">{data.displayName}</h1>
      <span className="profileUsername">@{data.username}</span>
      <div className="profileCounts">10 Followers . 20 Following</div>
      <div className="profileInteractions">
        <Image path="./general/share.svg" />
        <div className="profileButtons">
          <button>Message</button>
          <button>Follow</button>
        </div>
        <Image path="./general/more.svg" />
      </div>
      <div className="profileOptions">
        <span
          onClick={() => setType("created")}
          className={type === "created" ? "active" : ""}
        >
          Created
        </span>
        <span
          onClick={() => setType("saved")}
          className={type === "saved" ? "active" : ""}
        >
          Saved
        </span>
      </div>
      {type === "created" ? <Gallery userId={data._id} /> : <Boards userId={data._id}/>}
    </div>
  );
};

export default ProfilePage;
