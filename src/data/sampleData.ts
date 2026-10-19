import { YOUTUBE_VIDEOS, YOUTUBE_SHORTS, CHANNEL_INFO } from './youtubeData';
import { VideoItem } from '../types';

/**
 * Re-exporting real YouTube channel videos as SAMPLE_VIDEOS for backwards compatibility.
 * To update video content, edit src/data/youtubeData.ts.
 */
export const SAMPLE_VIDEOS: VideoItem[] = YOUTUBE_VIDEOS;
export { YOUTUBE_VIDEOS, YOUTUBE_SHORTS, CHANNEL_INFO };
