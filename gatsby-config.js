require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-sql`,
      options: {
        typeName: "Characters",
        fieldName: "character",
        dbEngine: {
          client: "sqlite3",
          connection: {
            filename: process.env.DATAFILE,
          },
          useNullAsDefault: true,
        },
        queryChain: x => {
          return x
            .select(
              "level as Level",
              "class as Class",
              "name as Name",
              "vita as Vita",
              "mana as Mana",
              "totalXP as TotalXP",
              "daily as DailyXP"
            )
            .from("players")
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`roboto mono`, `muli\:400,400i,700,700i`],
        display: "swap",
      },
    },
  ],
}
