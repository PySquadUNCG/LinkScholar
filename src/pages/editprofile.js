import Head from "next/head";

function EditProfile() {
  return (
    <div>
      <Head>
        <title>Edit Profile</title>
      </Head>
    
      <div class = "profile-box">
      <h1>Edit Profile</h1>
      <form action="/update_profile" method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" defaultValue="John Doe" />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          defaultValue="john.doe@example.com"
        />

        <label htmlFor="bio">Bio:</label>
        <textarea id="bio" name="bio">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut odio
          mauris.
        </textarea>

        <label htmlFor="avatar">Avatar:</label>
        <input type="file" id="avatar" name="avatar" />

        <button type="submit">Update Profile</button>
      </form>
    </div>
    </div>
  );
}

export default EditProfile;
