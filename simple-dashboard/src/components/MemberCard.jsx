// components/UserDetails.jsx



export default function MemberCard({avatar, name= "guest",role = "unknown"}) {

  return(
    <div>
      <img src="{avatar}" alt="profile" />
      <p>{ usersName }</p>
      <p>{ role }</p>
    </div>
  )
}