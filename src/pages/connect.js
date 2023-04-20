import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import LinkScholarAPI from "../backend/api/API";

const topics = [
  "Algorithms and Theory of Computing",
  "Data Science and Machine Learning",
  "Database Systems",
  "Extended Reality",
  "Image Processing",
  "Networking",
  "Online Social Networks",
  "Security and Cryptography",
  "Artificial Intelligence",
];

const topicMap = {};
topics.forEach((topic, index) => {
  topicMap[topic] = index;
});

const ConnectPage = () => {
  const [fos_id, setfos_id] = useState([]);
  const router = useRouter();
  const { school_id, email } = router.query;

  const handleTopicChange = (event) => {
    const topic = event.target.value;
    const checked = event.target.checked;

    if (checked) {
      if (fos_id.length < 3) {
        setfos_id([...fos_id, topicMap[topic]]);
      }
    } else {
      setfos_id(fos_id.filter((t) => t !== topicMap[topic]));
    }
  };

  const backHome = async () => {
    router.push({
      pathname: "/homepage",
      query: { school_id: school_id, email: email },
    });
  };

  const handleConnectClick = async () => {
    if (fos_id.length > 0) {
      const field_id = fos_id.slice(0, 3); // Select the maximum of 3 chosen topics

      // Send each topic integer back in the API one by one
      for (let i = 0; i < field_id.length; i++) {
        const { response, loaded } = await LinkScholarAPI(
          "/api/post/user/",
          "userTags",
          { school_id: school_id, field_id: field_id[i] },
          "POST"
        );
        // handle the response here
      }
    }
  };

  return (
    <>
      <Head>
        <title>Connect</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="height=device-height, initial-scale=1.0"
        />
      </Head>

      <div className="connect-body">
        <header id="header">
          <a href="/profile" className="header_link">
            Profile
          </a>
          <a href="/connect" className="header_link">
            Connect
          </a>
          <img class="logo" src="/LinkScholar.png" alt="My Image" />
          <a href="/settings" className="header_link">
            Settings
          </a>
          <a href="/login" class_name="header_link" id="signout">
            Sign Out
          </a>
        </header>
        <div className="json" style={{ backgroundColor: "#f5f5f5" }}>
          <h1 id="heading">Select Field(s) of Study</h1>
          <br />
          <br />
          <div className="select-fields-box">
            {topics.map((topic) => (
              <div key={topic}>
                <input
                  type="checkbox"
                  id={topic}
                  name={topic}
                  value={topic}
                  onChange={handleTopicChange}
                  checked={fos_id.includes(topicMap[topic])}
                  disabled={
                    fos_id.length >= 3 && !fos_id.includes(topicMap[topic])
                  }
                />

                <label htmlFor={topic}>{topic}</label>
              </div>
            ))}
          </div>
          <div className="selected-topics-box">
            <p>Selected Topics:</p>
            <ul>
              {fos_id.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
            <button className="connect-button" onClick={handleConnectClick}>
              Connect
            </button>
          </div>

          <br />
          <br />
          <br />
          <br />

          <button id="to_home" onClick={backHome}>
            Back{" "}
          </button>
        </div>
        <footer id="footer">
          <a href="/about" className="footer_link">
            About |
          </a>
          <a href="/support" className="footer_link">
            Support |
          </a>
          <a href="/forgotusrname" className="footer_link">
            Forgot Username/Password
          </a>
        </footer>
      </div>
    </>
  );
};

export default ConnectPage;
