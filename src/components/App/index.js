import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import App from './App';

const TRACK_BREADCRUMB = gql`
  mutation TrackBreadCrumb($element: String! $type: String!) {
    createBreadCrumb(element: $element, type: $type) {
      _id
    }
  }
`;

const WithBreadCrumbs = () => (
  <Mutation mutation={TRACK_BREADCRUMB}>
    {trackBreadCrumb => <App trackBreadCrumb={trackBreadCrumb} />}
  </Mutation>
);

export default WithBreadCrumbs;
