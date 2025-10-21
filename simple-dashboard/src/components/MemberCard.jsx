// components/UserDetails.jsx



export default function MemberCard({avatar, usersName= "guest",role = "unknown"}) {

  return(
    <div>
      <img src={avatar} alt="profile" style={{width: "100px"}} />
      <p>{ usersName }</p>
      <p>{ role }</p>
    </div>
  )
}