## known: built with Next.js and Prisma

1. Build
   [`steps`] (https://vercel.com/guides/nextjs-prisma-postgres)

- repo
  [`final`](https://github.com/prisma/blogr-nextjs-prisma/tree/final)

## run

npm run dev

### Prisma

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

1. relations
   is a connection between 2 models in a Prisma schema

   two models: Post and Person
   have two relation fields: Post/lead and Person/missions: Post[]
   the scalar leadId is the foreign key

   define a connection between the models
   scalar fields indicated by @relation attribute

2. types of relations
   three
   1 - 1 = Person <-> Profile
   1 - n = Person <-> Mission(s)
   m - n = Mission <-> Category

3. terminology
   relation fields
   model Person = relation field, note no scalar type
   missions Post [] = type is another model

4. relation queries from prisma client docs
   nested writes

### illustration

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

### edited babel content

"@babel/preset-react": "7.12.13",
"@babel/plugin-transform-react-jsx": "7.14.5"

### user stories

add mission with title, content and lead (from select)

error message:
Warning: Only strings and numbers are supported as <option> children.

### pick up point

# https://vercel.com/guides/nextjs-prisma-postgres

# https://www.prisma.io/blog/backend-prisma-typescript-orm-with-postgresql-data-modeling-tsjs1ps7kip1

# https://github.com/leerob/next-prisma

# https://www.youtube.com/watch?v=FMnlyi60avU

# https://www.youtube.com/watch?v=Bqacj0iOL68

# https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-nextjs-api-routes

# https://blog.logrocket.com/building-a-next-js-shopping-cart-app/

check when deadline due (use in the missionLaunchPage)

# https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Checking_when_a_deadline_is_due

examples

# https://github.com/vercel/next.js/tree/canary/examples
