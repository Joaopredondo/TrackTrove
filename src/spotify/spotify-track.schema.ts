import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SpotifyTrackDocument = SpotifyTrack & Document;

@Schema()
export class SpotifyTrack {
  @Prop({ required: true })
  spotifyId: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  artist: string;

  @Prop({ required: true })
  album: string;

  @Prop({ required: true })
  duration_ms: number;
}

export const SpotifyTrackSchema = SchemaFactory.createForClass(SpotifyTrack);
