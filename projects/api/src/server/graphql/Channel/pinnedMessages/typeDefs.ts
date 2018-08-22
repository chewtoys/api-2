import { gql } from 'apollo-server-express';

const ChannelPinnedMessageConnection = gql`
  type ChannelPinnedMessageConnection {
    pageInfo: PageInfo!
    totalCount: Int!
    edges: [ChannelPinnedMessageEdge]
  }
`;

const ChannelPinnedMessageEdge = gql`
  type ChannelPinnedMessageEdge {
    cursor: Cursor!
    node: Message!
  }
`;

export default [ChannelPinnedMessageConnection, ChannelPinnedMessageEdge];
