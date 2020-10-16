import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import ClanTable from "./ClanTable"

const ClanRankings = () => {
  const [open, setOpen] = useState(false)
  const [selectedRow, setSelectedRow] = useState(null)
  const { clans } = useStaticQuery(
    graphql`
      query ClanRankings {
        clans: allCharacters {
          edges {
            node {
              Clan
              Name
              Class
              Level
              Vita
              Mana
              TotalXP
              DailyXP
            }
          }
        }
      }
    `
  )
  console.log(clans)
  let test = clans.edges.map(edge =>
    ({...edge.node}))

  let test2 = _.chain(test)
  .groupBy('Clan')
  .map((value,key) => ({ Name: key, Players: value}))
  .value()
  
  let test3 = _.sortBy(test2, (clan) => clan.Players.length).reverse()

  return (
      <ClanTable clans={test3} />
  )
}

export default ClanRankings
