import { gql, ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import axios from "axios";

const typeDefs = gql`
  type Video {
    id: ID
    title: String
    description: String
    thumbnail_small: String
    url: String
  }

  type Query {
    getVideos: [Video]
    getVideo(id: ID): Video
  }
`;

export const resolvers = {
  Query: {
    getVideos: async () => {
      try {
        const videos = await axios.get(
          "https://vimeo.com/api/v2/channel/staffpicks/videos.json"
        );
        return videos.data.map(
          ({ id, title, description, url, thumbnail_small }) => ({
            id,
            title,
            description,
            url,
            thumbnail_small,
          })
        );
      } catch (error) {
        throw error;
      }
    },
    getVideo: async (_, {id}) => {
      try {
        const response = await axios.get(
          `https://vimeo.com/api/v2/video/${id}.json`
        );
        const video = response.data[0]
        return {
          id: video.id,
          title: video.title,
          description: video.description,
          url: video.url,
          thumbnail_small: video.thumbnail_small
        }
      } catch (error) {
        throw error;
      }
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const startServer = apolloServer.start();

export default async function handler(req, res) {
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};