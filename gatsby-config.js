require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-sql',
      options: {
        typeName: 'Characters',
        fieldName: 'character',
        dbEngine: {
          client: 'sqlite3',
          connection: {
            filename: process.env.DATAFILE,
          },
          useNullAsDefault: true,
        },
        queryChain: x =>
          x
            .select(
              'level as Level',
              'class as Class',
              'name as Name',
              'vita as Vita',
              'mana as Mana',
              'totalXP as TotalXP',
              'daily as DailyXP',
            )
            .from('players'),
      },
    },
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'caves',
        path: `${__dirname}/data/`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['roboto mono', 'muli:400,400i,700,700i'],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/Layout/'),
      },
    },
    {
      resolve: 'gatsby-transformer-json',
      options: {
        typeName: 'caves',
      },
    },
  ],
}
