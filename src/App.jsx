import React from 'react'
import Card from './Card'
function App() {

  let data = [
    {
      plan: "FREE",
      price: 0,
      user: "Single User",
      isuser: true,
      storage: "5GB Storage",
      isstorage: true,
      publicProjects: "Unlimited Public Projects",
      ispublicProjects: true,
      communityAccess: "Community Access",
      iscommunityAccess:true,
      privateProjects: "Unlimited Private Projects",
      isprivateProjects: false,
      support: "Dedicated Phone Support",
      issupport: false,
      subDomain: "Free Subdomain",
      issubDomain: false,
      reports: "Monthly Status Reports",
      isreports: false,
    },
    {
      plan: "PLUS",
      price: 9,
      user: "5 Users",
      isuser: true,
      storage: "50GB Storage",
      isstorage: true,
      publicProjects: "Unlimited Public Projects",
      ispublicProjects: true,
      communityAccess: "Community Access",
      iscommunityAccess:true,
      privateProjects: "Unlimited Private Projects",
      isprivateProjects: true,
      support: "Dedicated Phone Support",
      issupport: true,
      subDomain: "Free Subdomain",
      issubDomain: true,
      reports: "Monthly Status Reports",
      isreports: false,
    },
    {
      plan: "PRO",
      price: 49,
      user: "Ulimited users",
      isuser: true,
      storage: "150GB Storage",
      isstorage: true,
      publicProjects: "Unlimited Public Projects",
      ispublicProjects: true,
      communityAccess: "Community Access",
      iscommunityAccess:true,
      privateProjects: "Unlimited Private Projects",
      isprivateProjects: true,
      support: "Dedicated Phone Support",
      issupport: true,
      subDomain: "Free Subdomain",
      issubDomain: true,
      reports: "Monthly Status Reports",
      isreports: true,
    },
  ]
  return <>
<section className="pricing py-5">
  <div className="container">
    <div className="row">
    {
    data.map((e, i) => {
              return <Card data={e} key={i}/>
            })
}

    </div>
  </div>
</section>
  </>
}

export default App
