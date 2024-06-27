import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { SpotifyService } from './spotify.service';
import { JwtAuthGuard } from '../auth/jwt.auth.guard';

@Controller('spotify')
export class SpotifyController {
  constructor(private spotifyService: SpotifyService) {}

  @UseGuards(JwtAuthGuard)
  @Get('tracks/:id')
  async getTrack(@Param('id') id: string) {
    const trackData = await this.spotifyService.getTrack(id).toPromise();
    return this.spotifyService.saveTrack(trackData);
  }
}
