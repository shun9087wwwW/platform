import React, { useEffect, useState } from "react";
import Header from "./../../component/header/Header";
import Sns from "./../../component/sns/Sns";
import Footer from "./../../component/footer/Footer";
import ProfileCard from "./../../component/profile/ProfileCard";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "./../../firebase";

const Profile = () => {
  const [profile, setProfile] = useState([]);
  // プロフィール取得
  useEffect(() => {
    const profileData = collection(db, "profile");
    const q = query(profileData);
    // リアルタイム取得
    onSnapshot(q, (querySnapshot) => {
      setProfile(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <div className="profile container-fluid p-0">
      <Header />
      <div className="proflieBox container-fluid p-0 m-0 pt-5 mt-2">
        <div className="profileTitle">
          <h2 className="text-center">My Profile</h2>
        </div>
        {profile.map((profile) => (
          <ProfileCard
            key={profile.name}
            name={profile.name}
            desc={profile.desc}
            university={profile.university}
            schoolYear={profile.school_year}
            lang={profile.lang}
            image={profile.image}
            email={profile.email}
          />
        ))}
      </div>
      <Sns />
      <Footer />
    </div>
  );
};

export default Profile;
