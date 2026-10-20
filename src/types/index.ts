export interface Character {
  id: string;
  name: string;
  title: string;
  color: string;
  badgeBg: string;
  description: string;
  avatarIcon: string;
}

export interface ShortItem {
  id: string;
  youtubeId: string;
  youtubeUrl: string;
  title: string;
  category: 'stories' | 'songs' | 'learning' | 'adventures';
  thumbnail: string;
  views: string;
}

export interface VideoItem {
  id: string;
  youtubeId: string;
  youtubeUrl: string;
  title: string;
  category: 'stories' | 'songs' | 'learning' | 'adventures';
  categoryLabel: string;
  duration: string;
  views: string;
  publishedDate?: string;
  thumbnail: string;
  ageGroup: string;
  badgeColor: string;
  description: string;
  isShort?: boolean;
}

export interface ChannelInfo {
  title: string;
  handle: string;
  channelUrl: string;
  avatarUrl: string;
  description: string;
  subscribersBadge: string;
}

export interface NavItem {
  label: string;
  path: string;
  iconName: string;
  color: string;
  pillColor: string;
  activeColor: string;
}
