import type {
  UID,
  UIDTree,
  EntityCreator,
  EntityCreatorBase,
  EntityCreatorParams,
  Meta,
  SURL,
  Route,
  Image,
  Contact,
  Name,
} from '@amnis/core';

/**
 * Types of social networks available.
 */
export type WebsiteSocialType =
'facebook' | 'twitter' | 'instagram' | 'youtube'
| 'reddit' | 'discord' | 'twitch' | 'steam' | 'itchio';

export interface Website extends EntityCreator {
  /**
   * Name of the website.
   */
  name: Name;

  /**
   * Sorter name of the website. Important for smaller displays.
   */
  nameShort?: Name;

  /**
   * Primary URL to the website.
   */
  url: string;

  /**
   * Primary navigational routes.
   */
  $navigation: UIDTree<Route>;

  /**
   * Default title for the website. This is for meta data and the text seen on the browser tab.
   */
  title?: Name;

  /**
   * UID to the image used for the logo.
   */
  $logo?: UID<Image>;

  /**
   * Link the website's favicon
   */
  $favicon?: UID<Image>;

  /**
   * Contacts that should be listed on the website.
   */
  $contacts: UID<Contact>[];

  /**
   * List of the social network links.
   */
  socials: SURL[];
}

/**
 * Website properties excluding the extended entity properties.
 */
export type WebsiteBase = EntityCreatorBase<Website>;

/**
 * Base properties in order to create a log.
 */
export type WebsiteCreator = EntityCreatorParams<Website, 'name' | 'url'>;

/**
 * Meta object for website entities.
 */
export type WebsiteMeta = Meta<Contact>;