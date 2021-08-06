# known build with: Fullstack with Next.js and Prisma

# https://www.prisma.io/blog/backend-prisma-typescript-orm-with-postgresql-data-modeling-tsjs1ps7kip1

# https://github.com/leerob/next-prisma

# https://www.youtube.com/watch?v=FMnlyi60avU

# https://www.youtube.com/watch?v=Bqacj0iOL68

# https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-nextjs-api-routes

# https://blog.logrocket.com/building-a-next-js-shopping-cart-app/

check when deadline due (use in the missionLaunchPage)

# https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Checking_when_a_deadline_is_due

examples
https://github.com/vercel/next.js/tree/canary/examples

1. Build
   [`steps`] (https://vercel.com/guides/nextjs-prisma-postgres)

- repo
  [`final`](https://github.com/prisma/blogr-nextjs-prisma/tree/final)

# Prisma

added prisma cli

added prisma client
with npm i @prisma/client

initialize prisma
with npx prisma init
results in the prisma file and contents

run migration to create the db and add the tables
with
npx prisma migrate dev --preview-feature

prisma studio
npx prisma studio

# State Management Details (from S Kinney)

- Hooks state

  - parent component state is the child component props
    - user list: parent - has state as users are added or deleted
      but and individual user: child - gets state from the higher component

- State and objects

  - from useReducer introduction video

  - React state needs immutable onjects
  - set state -> React asks - is this different from last time?
  - when an object or array is mutated, there is the same reference in memory

    - even where there are different keys:values

    React cannot tell if the obj or array is different

  - therefore a new obj or array needs to be returned

# illustration

const addMission = mission => {
mission.id = id();
mission.active = false;
// the method
// take all missions in current array ...missions
// add the new mission to the front of the array
setMissions([mission, ...missions]);
}

const toggleActiveMission = id => {
setMission(
mission.map(mission => {
if(mission.id !== id) return mission;
return {...mission}, active: !mission.active };
})
)
}

# Testing

- unit testing

- Jest

- guidelines
  approach the test from a user perspective
  do not test implementation details

  to determine what to test
  ask
  what are the important aspects of the app

## edited babel content

"@babel/preset-react": "7.12.13",
"@babel/plugin-transform-react-jsx": "7.14.5"
