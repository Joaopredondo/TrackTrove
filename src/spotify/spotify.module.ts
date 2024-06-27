import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { SpotifyService } from './spotify.service';
import { SpotifyController } from './spotify.controller';
import { SpotifyTrack, SpotifyTrackSchema } from './spotify-track.schema';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: SpotifyTrack.name, schema: SpotifyTrackSchema }])
  ],
  providers: [SpotifyService],
  controllers: [SpotifyController],
})
export class SpotifyModule {}
