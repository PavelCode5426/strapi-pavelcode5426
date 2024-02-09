import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionCallToAction extends Schema.Component {
  collectionName: 'components_ui_call_to_actions';
  info: {
    displayName: 'Call to Action';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
    buttons: Attribute.Component<'ui.button-link', true>;
    image: Attribute.Media;
  };
}

export interface SectionCardsSection extends Schema.Component {
  collectionName: 'components_section_cards_sections';
  info: {
    displayName: 'Cards Section';
  };
  attributes: {
    cards: Attribute.Component<'ui.card', true>;
    heading: Attribute.String;
  };
}

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.String;
    metaImage: Attribute.Media;
  };
}

export interface UiButtonLink extends Schema.Component {
  collectionName: 'components_ui_button_links';
  info: {
    displayName: 'Button Link';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<['primary', 'secondary', 'danger']>;
  };
}

export interface UiCard extends Schema.Component {
  collectionName: 'components_ui_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.RichText;
    icon: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'section.call-to-action': SectionCallToAction;
      'section.cards-section': SectionCardsSection;
      'seo.meta-data': SeoMetaData;
      'ui.button-link': UiButtonLink;
      'ui.card': UiCard;
    }
  }
}
