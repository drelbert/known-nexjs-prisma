## known: built with Next.js and Prisma

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

### State Management Details (from S Kinney)

- Hooks state

  - parent component state is the child component props
    - user list: parent - has state as users are added or deleted
      but an individual user: child - gets state from the higher component

- State and objects

  - from useReducer introduction video

  - React state needs immutable onjects
  - set state -> React asks - is this different from last time?
  - when an object or array is mutated, there is the same reference in memory

    - even where there are different keys:values

    React cannot tell if the obj or array is different

  - therefore a new obj or array needs to be returned

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

view launch date in dashboard view

### pick up point
