import type { Schema, Attribute } from '@strapi/strapi';

export interface SocialNetworkSocialNetwork extends Schema.Component {
  collectionName: 'components_social_network_social_networks';
  info: {
    displayName: 'Social Network';
    icon: 'discuss';
  };
  attributes: {
    profile_link: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    icon: Attribute.Media;
    label: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'social-network.social-network': SocialNetworkSocialNetwork;
    }
  }
}
